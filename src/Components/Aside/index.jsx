import { Container, ButtonMenu } from "./styles"

import { RiMenuFill, RiMenuFoldFill } from "react-icons/ri"
import { useState } from "react"

export function Aside(){
    const [valueCheckbox, setValueCheckbox] = useState(false)
    return(
        <Container style={ valueCheckbox ? {width: "15rem"} : {width: "2rem"}}>
            <ButtonMenu>
                <input type="checkbox" name="projectList" id="projectList" onClick={(e) => setValueCheckbox(e.target.checked)}/>
                <label htmlFor="projectList">
                    {
                        valueCheckbox ? <RiMenuFoldFill size={32}/> : <RiMenuFill size={32}/>
                    }
                </label>
            </ButtonMenu>
        </Container>
    )
}