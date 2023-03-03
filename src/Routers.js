import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './Component/AboutUs'
import Contact from './Component/Contact'
import Donate from './Component/Donate'
import Home from './Component/Home'
import PageNotFound from './Component/PageNotFound'
import Pledge from './Component/Pledge'
import Privacy from './Component/Privacy'
import Programmes from './Component/Programmes'
import TermsAndCondition from './Component/TermsAndCondition'
import Volunteer from './Component/Volunteer'


const Routers = () => {
    return (
        <Routes>
            <Route exact path="/" element={< Home />}></Route>
                <Route exact path="/volunteer" element={< Volunteer />}></Route>
                <Route exact path="/pledge" element={< Pledge />}></Route>
                <Route exact path="/about" element={< AboutUs />}></Route>
                <Route exact path="/terms" element={< TermsAndCondition />}></Route>
                <Route exact path="/donate" element={< Donate />}></Route>
                <Route exact path="/programmes" element={< Programmes />}></Route>
                <Route exact path="/contact" element={< Contact />}></Route>
                <Route exact path="/privacy" element={< Privacy />}></Route>
            <Route exact path="/*" element={< PageNotFound />}></Route>
        </Routes>
    )
}

export default Routers