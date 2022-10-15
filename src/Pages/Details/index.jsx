import { Header } from "../../Components/Header";
import { Aside } from "../../Components/Aside";
import { Section } from "../../Components/Section";
import { AllProjects } from "../../Projects";

import { useParams } from "react-router-dom";

import { Container, Contant } from "./styles";
import { Marker } from "../../Components/Marker";
import { ProjectLink } from "../../Components/ProjectLink";

export function Details(){
    const { courseName, id } =  useParams()
    const courseProjects = AllProjects.filter(project => ((courseName === project.courseName ? project : null)))
    const { name, description, image, tools, links } = courseProjects[0].projects[Number(id)-1]

    return (
        <Container>
            <Header/>
            <main>
                <Aside/>
                <Contant>

                    <img src={image} alt="" />

                    <h3>{name}</h3>
                    <p>{description}</p>
                
                    <Section title="Links úteis">
                        <div>
                            {
                                links.map((link, index) => {
                                    return (
                                        <ProjectLink key={index} href={link.href} title={link.nameLink} />
                                    )
                                })
                            }
                        </div>
                    </Section>

                    <Section title="Técnologias utilizadas">
                        <div>
                            {
                                tools.map((tool, index) => {
                                    return (
                                        <Marker key={index} title={tool.nameTool}/>
                                    )
                                })
                            }
                        </div>
                    </Section>
                </Contant>
            </main>
        </Container>
    )
}