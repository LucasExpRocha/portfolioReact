import { Container, Logo, Navigation, MenuLabel } from "./styles";
import { Link } from "react-router-dom";
import { List } from "../ListaLink"
import { RiArrowDownSLine } from "react-icons/ri"


export function Header(){
    return  (
        <Container>
            <Link>
                <Logo/>
            </Link>
            <Navigation>
                <input type="checkbox" name="" id="navMainMenuTrigger" />
                <label htmlFor="navMainMenuTrigger"><span>Menu</span></label>
                <ul className="navigationBar" role="navigation">
                    <List address='/' title='Inicio'/>
                    <List address='/' title='Sobre'htmlFor="navMenuLabel"/>
                    <MenuLabel>
                        <input type="checkbox" name="" id="navMenuLabel" />
                        <label htmlFor="navMenuLabel"><span>Projetos</span><RiArrowDownSLine size={20}/></label>
                        <ul className="menuMobile">
                            <List address='/' title='Curso Explorer'/>
                            <List address='/' title='Curso Origamid'/>
                            <List address='/' title='Projetos Pessoais'/>
                        </ul>
                        <ul className="menu">
                            <div>
                                <List address='/' title='Curso'/>
                                <List address='/' title='Curso'/>
                                <List address='/' title='Projetos Pessoais'/>
                            </div>
                        </ul>
                    </MenuLabel>
                    <List address='/' title='Contato'/>
                </ul>
            </Navigation>
        </Container>
    )
}