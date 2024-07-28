import React, { useContext } from "react";
import s from "./NavButton.styles";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";


const NavButton = (props: {
    path: string,
    name: string
}) => {
    const { theme } = useContext(ThemeContext);
    const isCurrentLocation: boolean = useLocation().pathname === props.path;
    return (
        <s.ButtonWrapper>
            <Link className={`nav-button ${theme} ${isCurrentLocation ? 'active' : ''}`} to={props.path}>{props.name}</Link>
        </s.ButtonWrapper>
    )
}

export default NavButton;