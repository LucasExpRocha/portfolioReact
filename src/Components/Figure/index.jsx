import { Container } from "./styles"

export function Figure({ img, alt ,title}){
    return (
        <Container>
            <img src={img} alt={alt} />
            <figcaption>{title}</figcaption>
        </Container>
    )
}