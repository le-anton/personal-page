import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MediaImageMap, videoList } from "../utils/MediaData";
import s from "./MusicPage.styles";

const MusicPage = () => {
    const { theme } = useContext(ThemeContext);
    const videos: MediaImageMap[] = videoList;

    return (
        <s.MusicPageWrapper theme={theme}>
            <s.IntroDiv theme={theme}>
                <h3>Most Recent Guitar Performances</h3>
                <p>
                    Here are a few old guitar recordings, stay tuned for more
                    tunes!
                </p>
            </s.IntroDiv>
            <s.VideosContainer>
                {videos.map((video, i) => {
                    return (
                        <>
                            <s.VideoDiv key={i}>
                                <iframe
                                    className="guitar-player"
                                    src={`https://drive.google.com/file/d/${video.googleId}/preview`}
                                    title="Google drive video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </s.VideoDiv>
                            <span className="caption">{video.caption}</span>
                        </>
                    );
                })}
            </s.VideosContainer>
        </s.MusicPageWrapper>
    );
};

export default MusicPage;
