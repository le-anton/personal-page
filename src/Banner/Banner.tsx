import React, { useContext } from "react";
import s from "./Banner.styles"
import { ThemeContext } from "../context/ThemeContext";
import NavButton from "../NavButton/NavButton";

interface BannerProps {
    firstName: string,
    lastName: string
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
                    <span className="first">{props.firstName}</span>&nbsp;
                    <span className="last">{props.lastName}</span>
                </h1>
            </s.TitleDiv>
            <NavButton path="/" name="Home"></NavButton>
            <NavButton path="/photo" name="Photos"></NavButton>
            <NavButton path="/music" name="Music"></NavButton>
            <s.ThemeButton role="button" className="switch-theme" onClick={() => setTheme(switchTheme())} theme={theme}>
                {theme === 'dark' ? 'light' : 'dark'}
            </s.ThemeButton>
        </s.BannerDiv>
    )
}

export default Banner;