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
            <div>
                {videos.map((video, i) => {
                    return (
                        <s.VideoDiv key={i}>
                            <iframe
                                src={`https://drive.google.com/file/d/${video.googleId}/preview`}
                                width="640"
                                height="400"
                                title="Google drive video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                            <span className="caption">{video.caption}</span>
                        </s.VideoDiv>
                    );
                })}
            </div>
            <s.EmbedWrapper>
                <div className="iframe-container">
                    <iframe
                        className="youtube-player"
                        width="640"
                        height="400"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=_0hNDejrMSfKfTEh?autoplay=1&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </s.EmbedWrapper>
        </s.MusicPageWrapper>
    );
};

export default MusicPage;
