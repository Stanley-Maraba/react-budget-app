import React from "react";
import Header from './header/Header'
import ManageLoginData from './ManageLoginData';
import {Route, Router, Routes} from "react-router-dom";
import HomePage from './HomePage';
import ManageRegisterData from "./ManageRegisterData";
import PageNotFound from './PageNotFound'
function App() {
return (
        <div className="container-fluid">
            <Header/>
            <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<ManageLoginData/>}/>
            <Route path="/register" element={<ManageRegisterData/>}/>
            {/*<Route element={<PageNotFound/>}/>*/}
            </Routes>
        </div>
    )
};
export default App;