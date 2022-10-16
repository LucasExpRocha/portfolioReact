import { Container, ButtonMenu } from "./styles"

import { RiMenuFill, RiMenuFoldFill } from "react-icons/ri"
import { useState } from "react"

import { AllProjects } from "../../Projects";

export function Aside(){
    const [valueCheckbox, setValueCheckbox] = useState(false)


    return(
        <Container style={ valueCheckbox ? {width: "18rem"} : {width: "2rem"}}>
            <ButtonMenu>
                <input type="checkbox" name="projectList" id="projectList" onClick={(e) => setValueCheckbox(e.target.checked)}/>
                <label htmlFor="projectList">
                    {
                        valueCheckbox ? <RiMenuFoldFill size={32}/> : <RiMenuFill size={32}/>
                    }
                </label>
            </ButtonMenu>
            <section style={ !valueCheckbox ? {transition: "all .3 normal", transform: "translateX(-100px)", opacity: "0"} : {transition: "all .5s linear"}}>
                {
                    AllProjects.map(e => {
                        return (
                            <div key={e.courseId}>
                                <h4>{e.courseName}</h4>
                                <ul>
                                    {
                                        e.projects.map(project => {
                                            return (
                                                <li key={project.name}>
                                                    <a href={`/projects/${e.courseName}/${project.id}`}>{project.name}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
        </Container>
    )
}