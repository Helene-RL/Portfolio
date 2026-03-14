import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./page/HomePage";
import ProjectPage from "./page/ProjectPage";
import React from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:projectKey" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;