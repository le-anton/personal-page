import React, { useContext } from "react";
import s from "./Banner.styles"
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

interface BannerProps {
    name: string
}

const Banner = (props: BannerProps) => {

    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        window.localStorage.setItem('theme', newTheme);
        return newTheme;
    }

    return (
        <s.BannerDiv theme={theme}>
            <s.TitleDiv>
                <h1>
                    {props.name}
                </h1>
            </s.TitleDiv>

            <Link to="/">Home</Link>
            <Link to="/music">Music</Link>
            <s.ThemeButton role="button" className="switch-theme" onClick={() => setTheme(switchTheme())} theme={theme}>
                {theme === 'dark' ? 'light' : 'dark'}
            </s.ThemeButton>
        </s.BannerDiv>

    )
}

export default Banner;