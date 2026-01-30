import React from "react"

export const NavItem = (props: { label: string, anchor: string }) => {
    const handleClick = () => {
        const element = document.getElementById(props.anchor);
        element?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <li className="nav-item">
            <button
                onClick={handleClick}
                className="nav-link btn btn-link">{props.label}</button>
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