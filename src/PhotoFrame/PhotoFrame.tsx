import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../context/ModalContext";
import { MediaImageMap } from "../utils/MediaData";
import s from "./PhotoFrame.styles";

interface photoProps {
    photo: MediaImageMap;
}

const PhotoFrame = (props: photoProps) => {
    const photo: MediaImageMap = props.photo;

    // const { isOpen, setIsOpen } = useContext(ModalContext);
    // const [isOpen, setIsOpen] = useState(false);

    function navigateToImage() {
        window.open(
            `https://drive.google.com/file/d/${photo.googleId}/view?usp=drive_link`,
            "_blank"
        );
    }

    return (
        <s.PhotoFrameWrapper>
            {/* <button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    Show modal using a portal
                </button> */}
            <img
                src={`https://drive.google.com/thumbnail?id=${photo.googleId}&sz=w1000`}
                alt={photo.alt}
                onClick={() => navigateToImage()}
            />
            {/* {isOpen &&
                    createPortal(<PhotoFrame photo={photo} />, document.body)}
                <span>{photo.caption}</span> */}
            {/* <img src="https://drive.google.com/thumbnail?id=0B6wwyazyzml-OGQ3VUo0Z2thdmc&sz=w1000" /> */}
        </s.PhotoFrameWrapper>
    );
};

export default PhotoFrame;
