import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./HomePage";
import ProjectPage from "./ProjectPage";
import React from "react";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/index.html" element={<HomePage />} />
                <Route path="/project/:projectKey" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;