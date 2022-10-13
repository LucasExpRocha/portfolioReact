import { Container } from "./styles"

export function GoalsObjectives({ img, alt, goals, objectives}){
    return(
        <Container>
            <img src={img} alt={alt} />
            <div>
                <div>
                    <h3>Metas</h3>
                    {goals.split("_").map((e, index) => (<p key={index}>{e}</p>))}
                </div>
                <div>
                    <h3>Objetivos</h3>
                    {objectives.split("_").map((e, index) => (<p key={index}>{e}</p>))}
                </div>
            </div>
        </Container>
    )
}