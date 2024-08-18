import React, { useState } from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import { ThemeContext } from "./context/ThemeContext";
import { ModalContext } from "./context/ModalContext";

function App() {
    const defaultDark =
        window.navigator.vendor !== "Google Inc."
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : window.localStorage.getItem("theme") === "dark";
    const [theme, setTheme] = useState(defaultDark ? "dark" : "light");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ModalContext.Provider value={{ isOpen, setIsOpen }}>
                <div className={`App ${theme}`} data-theme={theme}>
                    <MainPage></MainPage>
                </div>
            </ModalContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
