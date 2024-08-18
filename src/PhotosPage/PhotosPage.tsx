import React, { useContext } from "react";
import s from "./PhotosPage.styles";
import { ThemeContext } from "../context/ThemeContext";
import { MediaImageMap, photoList } from "../utils/MediaData";
import PhotoFrame from "../PhotoFrame/PhotoFrame";

const PhotosPage = () => {
    const { theme } = useContext(ThemeContext);
    const photos: MediaImageMap[] = photoList;

    const splitPhotos: MediaImageMap[][] = [];
    for (let i = 0; i < photos.length; i += 4) {
        const chunk = photos.slice(i, i + 4);
        splitPhotos.push(chunk);
    }

    return (
        <s.PhotosPageWrapper theme={theme}>
            <s.IntroDiv theme={theme}>
                <h3>Gallery</h3>
                <p>
                    Here are a few pieces of miscellaneous (mostly street)
                    photography from my portfolio
                </p>
            </s.IntroDiv>
            <s.PhotoRow>
                {splitPhotos.map((photorow, rowIndex) => {
                    return (
                        <s.PhotoColumn key={rowIndex}>
                            {photorow.map((photo, colIndex) => {
                                return (
                                    <PhotoFrame
                                        photo={photo}
                                        key={colIndex}
                                    ></PhotoFrame>
                                );
                            })}
                        </s.PhotoColumn>
                    );
                })}
            </s.PhotoRow>
        </s.PhotosPageWrapper>
    );
};

export default PhotosPage;
