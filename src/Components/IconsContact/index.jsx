import { Container } from "./styles"

import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { SiGmail } from "react-icons/si"

export function IconsContact(){
    return (
        <Container>
            <a href="https://github.com/LucasExpRocha"><BsGithub size={40}/></a>
            <a href="https://www.linkedin.com/in/lucas-exposito-rocha-777123187/"><BsLinkedin size={40}/></a>
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5524998641277"><BsWhatsapp size={40}/></a>
            <a href="mailto:lucasexposito@gmail.com"><SiGmail size={40}/></a>
        </Container>
    )
}