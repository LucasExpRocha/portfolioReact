import { Container } from "./styles"

export function TimeExp({ number, title }){
    return(
        <Container>
            <span>{number}+</span>
            <span>{title}<br/>experience</span>
        </Container>
    )
}