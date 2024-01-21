import React, { useContext } from "react";
import s from "./HomePage.styles"
import { ThemeContext } from "../context/ThemeContext";


const HomePage = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <s.HomePageWrapper theme={theme}>
            <div className={theme}>
                Hello
            </div>
        </s.HomePageWrapper>
    )
}

export default HomePage;