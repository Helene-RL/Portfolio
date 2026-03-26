import React from "react";
import Navbar from "../composant/Navbar";
import {Section} from "../composant/Section";
import {Footer} from "../composant/Footer";
import {sections} from "../data/homeData";
import {sectionContent} from "../data/SectionData";
import "../style.css"


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

const HomePage = () => {
    return (
        <>
            {/*header*/}
            <header>
                <Navbar/>
            </header>
            {/*body*/}
            <div className="container-fluid d-flex flex-column w-100 scrollspy-example"
                 data-bs-spy="scroll" data-bs-target="#navbar-header" data-bs-root-margin="0px 0px -40%"
                 data-bs-smooth-scroll="true" tabIndex={0}>

                {sections.map((section) => (
                    <Section
                        key={section.id}
                        id={section.id}
                        name={section.title}
                    >
                        {sectionContent[section.id]}
                    </Section>
                ))}

                <div className="scroll-to-top background-blue" onClick={scrollToTop}>
                    <span>&uarr;</span>
                </div>
            </div>
            {/*footer*/}
            <Footer/>
        </>
    )
}
export default HomePage