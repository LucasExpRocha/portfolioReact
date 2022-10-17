import { Container } from "./styles"

import { Header } from "../../Components/Header";
import { Aside } from "../../Components/Aside";
import { Footer } from "../../Components/Footer"
import { SlideProjects } from "../../Components/SlideProjects";

import { AllProjects } from "../../Projects";


export function ProjectsOrigamid(){
    const rocketseat = ['origamid']
    let projectsFilter = []
    rocketseat.forEach(e => {
        AllProjects.filter(project => (e === project.courseName) ? projectsFilter=[...projectsFilter, project] : null)
    })
    return (
        <Container>
            <Header/>
            <main>
                <Aside/>
                <h1>Rocketseat</h1>
                <SlideProjects req={projectsFilter} />
                <Footer/>
            </main>
            
        </Container>
    )
}
