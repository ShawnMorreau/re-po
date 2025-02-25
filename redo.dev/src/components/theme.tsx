import { createTheme } from "@mui/material"

export type ThemeConfigOptions = {
    isDark: boolean
}

// Palette can be viewed at https://coolors.co/ffc40c-2243b6-c80815-1b1b1b-00ad43-9932cc-ff7518

export const getTheme = ({ isDark }: ThemeConfigOptions) =>
    createTheme({
        palette: {
            primary: {
                main: isDark ? "#264bcf" : "#162b79"
            },
            secondary: {
                main: "#ffc40c"
            },
            error: {
                main: "#c80815"
            },
            success: {
                main: "#00AD43"
            },
            warning: {
                main: "#FF7518"
            },
            info: {
                main: "#9932CC"
            }
        },
        typography: {
            fontFamily: "'Ubuntu', sans-serif"
        }
    })
