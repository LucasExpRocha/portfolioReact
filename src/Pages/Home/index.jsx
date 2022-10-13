import { Header } from "../../Components/Header";

import { Container, Title } from "./styles";

import { Link } from "react-router-dom"

export function Home(){
    return (
        <Container>
            <Header/>
            <main>
                <Title>Olá, meu nome é Lucas Rocha</Title>
                <Link to="/about">
                    <p>Sou desenvolvedor front-end, gostaria de me conhecer melhor? <br /> Clique aqui!</p>
                </Link>

            </main>
        </Container>
    )
}