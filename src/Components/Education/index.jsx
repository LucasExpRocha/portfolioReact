import { Container } from "./styles"

export function Education({ title, local, time, description}){
    return (
        <Container>
            <h3>{title}</h3>
            <h4>{local}</h4>
            <p>{time}</p>
            <p>{description}</p>
        </Container>
    )
}