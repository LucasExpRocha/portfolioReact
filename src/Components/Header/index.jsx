import { Container, Logo, Navigation, MenuLabel } from "./styles";
import { Link } from "react-router-dom";

import { List } from "../ListaLink"
import { CardHeaderProjects } from "../CardHeaderProjects"

import { RiArrowDownSLine } from "react-icons/ri"

export function Header(){
    const html = window.document.activeElement
    const outside = 'data-outside'
    const clickEvents = ['touchstart', 'click']
    
    function clickOutSideSmallWindow (){
        let list = document.querySelector('.navigationBar')
        if(!document.querySelector('#navMainMenuTrigger').checked){
            setTimeout(() => {
                html.addEventListener("click", handlOutsideClick)
                list.setAttribute(outside, '')
            },0)
            
            function handlOutsideClick(e) {
                if(!list.contains(e.target) || e.target == list) {
                    setTimeout(() => {
                        document.querySelector('#navMainMenuTrigger').checked = false;
                        list.removeAttribute(outside)
                        html.removeEventListener("click", handlOutsideClick)
                    },0)
                }
            }
        }
    }

    function clickOutSideLargeWindow (){
        let menu = document.querySelector('.menu')
        if(!menu.hasAttribute(outside)){
            setTimeout(() => {
                clickEvents.forEach(e => html.addEventListener(e, handlOutsideClick))
                menu.setAttribute(outside, '')
            },100)
            
            function handlOutsideClick(e) {
                if(!menu.contains(e.target)) {
                    setTimeout(() => {
                        document.querySelector('#navMenuLabel').checked = false;
                        menu.removeAttribute(outside)
                        clickEvents.forEach(e => html.removeEventListener(e, handlOutsideClick))
                    },0)
                }
            }
        }
    }
        
    return  (
        <Container>
            <Link>
                <Logo/>
            </Link>
            <Navigation>
                <input type="checkbox" name="" id="navMainMenuTrigger" />
                <label onClick={clickOutSideSmallWindow} htmlFor="navMainMenuTrigger"><span>Menu</span></label>
                <ul className="navigationBar" role="navigation">
                    <List address='/' title='Inicio'/>
                    <List address='/' title='Sobre'/>
                    <MenuLabel>
                        <input type="checkbox" name="" id="navMenuLabel" />
                        <label onClick={clickOutSideLargeWindow} htmlFor="navMenuLabel"><span>Projetos</span><RiArrowDownSLine size={20}/></label>
                        <ul className="menuMobile">
                            <List address='/' title='Curso Explorer'/>
                            <List address='/' title='Curso Origamid'/>
                            <List address='/' title='Projetos Pessoais'/>
                        </ul>
                        <ul className="menu">
                            <div>
                                <CardHeaderProjects/>
                                <CardHeaderProjects/>
                                <CardHeaderProjects/>
                            </div>
                        </ul>
                    </MenuLabel>
                    <List address='/' title='Contato'/>
                </ul>
            </Navigation>
        </Container>
    )
}