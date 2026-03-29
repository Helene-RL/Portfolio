import React from "react"
import {scrollToSection} from "./Scroll";

export const NavItem = (props: { label: string, anchor: string }) => {
    const handleClick = () => {
        scrollToSection(props.anchor)
    };
    return (
        <li className="nav-item">
            <button
                onClick={handleClick}
                className="nav-link btn btn-link text-white">{props.label}</button>
        </li>
    )
}

export const Menu = (props: { element_nav: any }) => {
    return (
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto">
                {Object.keys(props.element_nav).map((item) => {
                    const label = props.element_nav[item];
                    return (
                        <NavItem
                            key={item}
                            label={label.navLabel || label.title}
                            anchor={item}
                        />
                    )
                })}
            </ul>
        </div>
    )
}