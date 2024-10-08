import React, { useContext } from "react";
import s from "./HomePage.styles";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <s.HomePageWrapper theme={theme}>
            <s.IntroDiv theme={theme}>
                Hi, thanks for visiting my page!
                <br />I am a UK based web developer with a penchant for
                photography and guitar on the side.
            </s.IntroDiv>
            <s.PhotoWrapper>
                <img src={`/anton_prague.jpg`} alt={"holiday on p-town"} />
                <div className="caption">Anton in 35mm</div>
            </s.PhotoWrapper>
        </s.HomePageWrapper>
    );
};

export default HomePage;
