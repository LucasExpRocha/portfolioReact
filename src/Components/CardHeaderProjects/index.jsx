import { Container } from './styles'

export function CardHeaderProjects({bgIMG, title, description, moreInfo}){
    return(
        <Container>
            <img src={bgIMG} alt="altImg" />
            <section>
                <h1>{title}</h1>
                <p>{description}</p>
                <br />
                <p>{moreInfo}</p>
            </section>
        </Container>
    )
}