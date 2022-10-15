import { Container } from './styles'

export function CardHeaderProjects({bgIMG, title, description, address}){
    return(
        <Container to={address}>
            <img src={bgIMG} alt="altImg" />
            <section>
                <h1>{title}</h1>
                <p>{description}</p>
                <br />
                <p>Clique para mais informações</p>
            </section>
        </Container>
    )
}