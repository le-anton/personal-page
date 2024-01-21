import React, { useContext } from "react";
import s from "./MusicPage.styles"
import { ThemeContext } from "../context/ThemeContext";


const MusicPage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <s.MusicPageWrapper theme={theme}>
            <div>
                <h3>Most Recent Guitar Performance</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=_0hNDejrMSfKfTEh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </s.MusicPageWrapper>
    )
}

export default MusicPage;