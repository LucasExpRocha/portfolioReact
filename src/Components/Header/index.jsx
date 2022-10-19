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
import { useEffect, useRef } from "react";

export function Header(){
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            console.log(!menuRef.current.contains(e.target))
            if(!menuRef.current.contains(e.target)){
                document.querySelector('#navMainMenuTrigger').checked = false;
                document.querySelector('#navMenuLabel').checked = false;
            }
        }
        
        document.addEventListener("click", handler);

        return() =>{
            document.removeEventListener("click", handler);
        }
    })

    return  (
        <Container>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <Navigation ref={menuRef}>
                <input type="checkbox" id="navMainMenuTrigger"/>
                <label htmlFor="navMainMenuTrigger"
                    ><span>Menu</span>
                </label>
                <ul className="navigationBar" role="navigation">
                    <List address='/' title='Inicio' icon={FiHome}/>
                    <List address='/about' title='Sobre' icon={FiUserCheck}/>
                    <List address='/contact' title='Contato' icon={FiPhone}/>
                    <MenuLabel>
                        <input
                            type="checkbox"
                            id="navMenuLabel" 
                        />
                        <label  htmlFor="navMenuLabel">
                            <span>Projetos</span>
                            <RiArrowDownSLine size={20}/>
                        </label>
                        <ul className="menuMobile">
                            <List address='/projects/rocketseat' title='Curso Rocketseat'/>
                            <List address='/projects/origamid/1' title='Curso Origamid'/>
                            <List address='/projects/private/1' title='Projetos Pessoais'/>
                        </ul>
                        <ul className="menu">
                            <div>
                                <CardHeaderProjects 
                                    bgIMG={origamidImg} 
                                    title="Origamid" 
                                    description="Todos os projetos feitos aqui foram com conhecimentos adiquiridos no curso da origamid."  
                                    address="/projects/origamid/1"                                
                                />
                                <CardHeaderProjects 
                                    bgIMG={LogoImage} 
                                    title="Projetos Pessoais" 
                                    description="Os projetos pertencetes nesta parte são de autenticidade minha."
                                    address="/projects/private/1"
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