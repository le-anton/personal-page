import React from "react";

interface ModalContextProps {
    isOpen: boolean;
    setIsOpen: any;
}

export const ModalContext = React.createContext<ModalContextProps>({
    isOpen: false,
    setIsOpen: () => {},
});
