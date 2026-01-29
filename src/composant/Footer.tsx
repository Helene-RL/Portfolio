import React from "react";

export const Footer = () => {
    return (
        <footer
            className="container-fluid d-flex justify-content-center align-items-center text-center bg-black text-light py-2">
            <div className="d-flex flex-column w-50 justify-content-center">
                <a target="_blank"
                   rel="noreferrer"
                   href="https://www.linkedin.com/in/hélène-ralu-leroy-b344872a1">
                    <img src="/src/logo/linkedin-ico.png" alt="" className="w-0"/>
                </a>
            </div>
            <div className="d-flex flex-column w-50 justify-content-center">
                <p className="mb-0">
                    Hélène Ralu--Leroy<br/>
                    helene.raluleroy@gmail.com<br/>
                    07 68 47 08 73<br/>
                </p>
            </div>
        </footer>
    )
}