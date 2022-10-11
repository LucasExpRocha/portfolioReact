import { Header } from "../../Components/Header";

import { Container } from "./styles";

export function Home(){
    return (
        <Container>
            <Header/>
            <main>
                <h1>Olá, meu nome é Lucas Rocha!</h1>
            </main>
        </Container>
    )
}