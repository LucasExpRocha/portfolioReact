import { Container } from "./stylex";
import { Link } from "react-router-dom"


export function List({title, address, icon: Icon, ...rest}){
    return (
        <Container {...rest}>
            <Link to={address}>
                {title}
                {Icon && <Icon size={20}/>}
            </Link>
        </Container>
    )
}