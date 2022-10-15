import { Container } from "./styles"

export function Marker({title, ...rest}){
    return(
        <Container {...rest}>
            {title}
        </Container>
    )
}