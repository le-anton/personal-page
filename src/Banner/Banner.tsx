import React, { useContext } from "react";
import s from "./Banner.styles";
import { ThemeContext } from "../context/ThemeContext";
import NavButton from "../NavButton/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/fontawesome-free-solid";
import fontawesome from "@fortawesome/fontawesome";
import { Link } from "react-router-dom";

interface BannerProps {
    firstName: string;
    lastName: string;
}

const Banner = (props: BannerProps) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        window.localStorage.setItem("theme", newTheme);
        return newTheme;
    };

    fontawesome.library.add(faSun, faMoon);

    return (
        <s.BannerDiv theme={theme}>
            <s.TitleDiv className="left">
                <Link to={"/"}>
                    <h1>
                        <span className="first">{props.firstName}</span>&nbsp;
                        <span className="last">{props.lastName}</span>
                    </h1>
                </Link>
            </s.TitleDiv>
            <s.ButtonsWrapper className="middle">
                <NavButton path="/" name="Home"></NavButton>
                <NavButton path="/photos" name="Photos"></NavButton>
                <NavButton path="/music" name="Music"></NavButton>
            </s.ButtonsWrapper>
            <s.ThemeButton
                role="button"
                className="switch-theme right"
                onClick={() => setTheme(switchTheme())}
                theme={theme}
            >
                {theme === "dark" ? (
                    <FontAwesomeIcon icon="sun" />
                ) : (
                    <FontAwesomeIcon icon="moon" />
                )}
            </s.ThemeButton>
        </s.BannerDiv>
    );
};

export default Banner;
