import { Container, Navigation, MenuLabel } from "./styles";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri"
import { FiHome, FiPhone, FiUserCheck } from "react-icons/fi"

import { List } from "../ListaLink"
import { CardHeaderProjects } from "../CardHeaderProjects"


import origamidImg from "../../assets/origamidLogo.png"
import rocketseatImg from "../../assets/rocketseatLogo.png"
import LogoImage from "../../assets/lucasLogo.png";
import Logo from "../../assets/logo.svg";

export function Header(){
    const html = window.document.activeElement;
    const outside = 'data-outside';

    function clickOutSide(e){
        
        if(e.checked && e.id == 'navMainMenuTrigger'){
            let listMenuMobile = document.querySelector('.navigationBar')

            setTimeout(() => {
                html.addEventListener("click", handlOutsideClick)
                listMenuMobile.setAttribute(outside, '')
            },0 )

            function handlOutsideClick(e) {
                if(!listMenuMobile.contains(e.target)) {
                    setTimeout(() => {
                        document.querySelector('#navMainMenuTrigger').checked = false;
                        listMenuMobile.removeAttribute(outside)
                        html.removeEventListener("click", handlOutsideClick)
                    },0)
                }
            }
        }

        if(e.checked && e.id == 'navMenuLabel'  && window.screen.availWidth > 1040){
            let listMenuDesktop = document.querySelector('.menu')

            setTimeout(() => {
                html.addEventListener("click", handlOutsideClick)
                listMenuDesktop.setAttribute(outside, '')
            },0 )

            function handlOutsideClick(e) {
                if(!listMenuDesktop.contains(e.target)) {
                    setTimeout(() => {
                        document.querySelector('#navMenuLabel').checked = false;
                        listMenuDesktop.removeAttribute(outside)
                        html.removeEventListener("click", handlOutsideClick)
                    },0)
                }
            }
        }
    }

    return  (
        <Container>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <Navigation>
                <input 
                    onChange={e => clickOutSide(e.target)} 
                    type="checkbox" 
                    id="navMainMenuTrigger" 
                />
                <label  htmlFor="navMainMenuTrigger"><span>Menu</span></label>
                <ul className="navigationBar" role="navigation">
                    <List address='/' title='Inicio' icon={FiHome}/>
                    <List address='/about' title='Sobre' icon={FiUserCheck}/>
                    <List address='/contact' title='Contato' icon={FiPhone}/>
                    <MenuLabel>
                        <input 
                            onChange={e => clickOutSide(e.target)} 
                            type="checkbox"
                            id="navMenuLabel" 
                        />
                        <label  htmlFor="navMenuLabel"><span>Projetos</span><RiArrowDownSLine size={20}/></label>
                        <ul className="menuMobile">
                            <List address='/projects/rocketseat' title='Curso Rocketseat'/>
                            <List address='/projects/origamid' title='Curso Origamid'/>
                            <List address='/projects/private' title='Projetos Pessoais'/>
                        </ul>
                        <ul className="menu">
                            <div>
                                <CardHeaderProjects 
                                    bgIMG={origamidImg} 
                                    title="Origamid" 
                                    description="Todos os projetos feitos aqui foram com conhecimentos adiquiridos no curso da origamid."  
                                    address="/projects/origamid"                                
                                />
                                <CardHeaderProjects 
                                    bgIMG={LogoImage} 
                                    title="Projetos Pessoais" 
                                    description="Os projetos pertencetes nesta parte são de autenticidade minha."
                                    address="/projects/private"
                                />
                                <CardHeaderProjects 
                                    bgIMG={rocketseatImg} 
                                    title="Rocketseat" 
                                    description="Aqui existem projetos desenvolvidos durante o curso e projetos desenvolvido como desafios."
                                    address="/projects/rocketseat"
                                />
                            </div>
                        </ul>
                    </MenuLabel>
                </ul>
            </Navigation>
        </Container>
    )
}