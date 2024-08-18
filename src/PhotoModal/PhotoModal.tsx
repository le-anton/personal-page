import React from "react";
import ReactDOM from "react-dom";

const PhotoModal = ({ isOpen, onClose, photo }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <div className="modal">
                        <img
                            src={`https://drive.google.com/id=${photo.googleId}`}
                            alt={photo.alt}
                        />
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector("#modal-root")!
    );
};

export default PhotoModal;
