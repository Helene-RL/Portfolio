import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {HomePage} from "./page/HomePage";
import ProjectPage from "./page/ProjectPage";
import React, {useState} from "react";
import {Language} from "./data/i18n";

function App() {
    const [lang, setLang] = useState<Language>("fr");
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
                <Route path="/project/:projectKey" element={<ProjectPage lang={lang} />} />
            </Routes>
        </Router>
    );
}

export default App;