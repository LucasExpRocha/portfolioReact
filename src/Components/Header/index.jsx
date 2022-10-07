import { Container, Logo, Navigation, MenuLabel } from "./styles";
import { Link } from "react-router-dom";

import { List } from "../ListaLink"
import { CardHeaderProjects } from "../CardHeaderProjects"

import { RiArrowDownSLine } from "react-icons/ri"

import origamidImg from "../../assets/origamidLogo.png"
import rocketseatImg from "../../assets/rocketseatLogo.png"
import LogoImage from "../../assets/lucasLogo.png";


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
                if(!list.contains(e.target)) {
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
                                <CardHeaderProjects 
                                    bgIMG={origamidImg} 
                                    title="Origamid" 
                                    description="Todos os projetos feitos aqui foram com conhecimentos adiquiridos no curso da origamid."
                                    moreInfo="O curso da origamid é com foco em front-end e web design"    
                                />
                                <CardHeaderProjects 
                                    bgIMG={LogoImage} 
                                    title="Projetos Pessoais" 
                                    description="Os projetos pertencetes nesta parte são de autenticidade minha."
                                    moreInfo=""    
                                />
                                <CardHeaderProjects 
                                    bgIMG={rocketseatImg} 
                                    title="Rocketseat" 
                                    description="Aqui existem projetos desenvolvidos durante o curso e projetos desenvolvido como desafios."
                                    moreInfo="Curso com foco em faça você mesmo, com bastante prática "    
                                />
                            </div>
                        </ul>
                    </MenuLabel>
                    <List address='/' title='Contato'/>
                </ul>
            </Navigation>
        </Container>
    )
}