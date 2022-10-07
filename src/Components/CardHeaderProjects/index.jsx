import { Container } from './styles'
import backgroundIMG from "../../assets/construction.jpeg"

export function CardHeaderProjects(){
    return(
        <Container>
            <img src={backgroundIMG} alt="" />
            <section>
                <h1>Em construção</h1>
                <p>Componente em construção...</p>
            </section>
        </Container>
    )
}