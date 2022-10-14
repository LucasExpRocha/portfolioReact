import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import { Projects } from '../Pages/Projects'


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    )
}