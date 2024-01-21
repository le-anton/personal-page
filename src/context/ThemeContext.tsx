import React from "react";

interface ThemeContextType {
    theme: string,
    setTheme: any
}

export const ThemeContext = React.createContext<ThemeContextType>({theme: "light", setTheme: () => {}});