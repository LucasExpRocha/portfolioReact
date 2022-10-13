import { FiDownload } from "react-icons/fi"
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { Container, Images, AboutMe, Objectives, Abilities, Qualification, Footer } from "./styles"

import { Header } from "../../Components/Header"
import { TimeExp } from "../../Components/TimeExperience"
import { Figure } from "../../Components/Figure"
import { GoalsObjectives } from "../../Components/GoalsObjectives"
import { Education } from "../../Components/Education"

import astronaut from "../../assets/PageAbout/fotodetest.png"
import pessoalPic from "../../assets/PageAbout/pessoalIcon.png"
import profissionalPic from "../../assets/PageAbout/profissionalFoto.png"

import { useState } from "react"

export function About(){
    const [objectives, setObjectives] = useState('Personal')

    return (
        <Container>
            <Header/>
            <main>
                <AboutMe>
                    <Images src={astronaut} alt="imagem astronauta em jupiter" />
                    <div>
                        <h1>Sobre mim</h1>
                        <p>Em uma busca constante por conhecimento, focado em sempre fazer o meu melhor a cada dia, venho fazendo projetos para aprimorar meus conhecimentos. <br /> Busco seguir uma rotina na qual não haja perda de tempo, auxiliando outras pessoas com correções de bugs em seus projetos aprimorando meus conhecimentos, desenvolvendo habilidades e competências diversas.</p>
                        <div>
                            <TimeExp number="05" title="Month"/>
                            <TimeExp number="10" title="Projects"/>
                        </div>
                        <a href="" ><FiDownload/>Download CV</a>
                    </div>
                </AboutMe>
                <Objectives>
                    <h1>Metas e Objetivos</h1>
                    <form action="">
                        <input type="radio" name="goalsAndObjectives" id="aboutMenuOptionPersonal" value="Personal" onClick={e => setObjectives(e.target.value)} defaultChecked/>
                        <label htmlFor="aboutMenuOptionPersonal">Pessoal</label>
                        <input type="radio" name="goalsAndObjectives" id="aboutMenuOptionProfessional" value="Professional"onClick={e => setObjectives(e.target.value)}/>
                        <label htmlFor="aboutMenuOptionProfessional">Profissional</label>
                    </form>
                    {
                        objectives === "Personal" ? 
                        (
                            <GoalsObjectives 
                                img={pessoalPic}
                                alt="Astronauta se pendurando em uma nave espacial"
                                goals="Concluir o curso Explorer da Rocketseat._
                                Começar o curso Ignite da Rocketseat._
                                Concluir os cursos da Origamid."
                                objectives="Após a conclusão da graduação em analise e desenvolvimento de sistemas, fazer uma pós em desenvolvimento mobile.                                "
                            />
                        )
                        :
                        (
                            <GoalsObjectives
                                img={profissionalPic}
                                alt="Astronauta voando com um foguete"
                                goals="Conseguir minha primeira oportunidade como desenvolvedor._
                                Participar de um trabalho em equipe."
                                objectives="Conseguir uma posição de desenvolverdor sênior em cinco anos."
                            />
                        )
                    }
                </Objectives>
                <Abilities>
                    <h1>Habilidades</h1>
                    <div>
                        <Figure img="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="Icone javascript" title="JavaScript"/>
                        <Figure img="https://img.icons8.com/color/48/000000/css3.png" alt="Icone css3" title="CSS3"/>
                        <Figure img="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="Icone html5" title="HTML5" />
                        <Figure img="https://img.icons8.com/color/48/000000/nodejs.png" alt="Icone nodejs" title="NodeJs" />
                        <Figure img="https://img.icons8.com/color/48/000000/git.png" alt="Icone git" title="Git" />
                        <Figure img="https://img.icons8.com/office/48/000000/react.png" alt="Icone react" title="React" />
                    </div>
                </Abilities>
                <Qualification>
                    <h1>Qualificação</h1>
                    <div>
                        <Education title="Análise e desenvolvimento de sistemas" local="Estácio" time="De 01/21 • Em Andamento" description="Análise de sistemas é a atividade que tem como finalidade a realização de estudos de processos a fim de encontrar o melhor caminho racional para que a informação possa ser processada. Os analistas de sistemas estudam os diversos sistemas existentes entre hardwares, softwares e o usuário final."/>
                        <Education title="Full Stack" local="Rocketseat" time="De 06/22 • Em Andamento" description="Baseado no sistema 7-2-1 (70% Coding, 20% Networking, 10% Branding), o explorer foi criado com um método inteligente e eficiente para te ajudar a evoluir habilidades técnicas e comportamentais específicas que farão de você um profissional pronto para lidar com desafios do mundo real."/>
                    </div>
                </Qualification>
                <Footer>
                    <div>
                        <a href="https://github.com/LucasExpRocha"><BsGithub size={40}/></a>
                        <a href="https://www.linkedin.com/in/lucas-exposito-rocha-777123187/"><BsLinkedin size={40}/></a>
                        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5524998641277"><BsWhatsapp size={40}/></a>
                    </div>
                    <p>Feito com ❤️ por Lucas Exposito Rocha!</p>
                </Footer>
            </main>
        </Container>
    )
}