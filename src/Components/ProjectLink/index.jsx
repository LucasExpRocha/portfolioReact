import { Container } from "./styles"

export function ProjectLink({title, href,...rest}){
    return(
        <Container href={href} {...rest}>
            {title}
        </Container>
    )
}