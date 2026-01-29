// @ts-ignore
import React from "react"

export const NavItem = (props: { label: string, anchor: string }) => {
    return (
        <li className="nav-item">
            <a href={`#${props.anchor}`} className="nav-link">{props.label}</a>
        </li>
    )
}

type NavItemData = {
    label: string;
    anchor: string;
}
export const Menu = (props: { element_nav: NavItemData[] }) => {
    return (
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto">
                {props.element_nav.map((item: NavItemData) => (
                    <NavItem
                        key={item.anchor}
                        label={item.label}
                        anchor={item.anchor}
                    />
                ))}
            </ul>
        </div>
    )
}