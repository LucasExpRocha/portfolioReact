import { Container } from "./styles"

import { Header } from "../../Components/Header";
import { Aside } from "../../Components/Aside";


export function Projects(){
    return (
        <Container>
            <Header/>
            <main>
                <Aside/>
            </main>
        </Container>
    )
}