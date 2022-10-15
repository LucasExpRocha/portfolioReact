import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { ProjectsRocketseat } from '../Pages/ProjectsRocketseat'
import { ProjectsOrigamid } from '../Pages/ProjectsOrigamid'
import { ProjectsPrivate } from '../Pages/ProjectsPrivate'
import { Details } from '../Pages/Details';


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects/rocketseat" element={<ProjectsRocketseat/>}/>
            <Route path="/projects/origamid" element={<ProjectsOrigamid/>}/>
            <Route path="/projects/private" element={<ProjectsPrivate/>}/>
            <Route path="/projects/:courseName/:id" element={<Details/>}/>
        </Routes>
    )
}