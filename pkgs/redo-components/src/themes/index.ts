import createMuiTheme, {
    ThemeOptions
} from "@material-ui/core/styles/createMuiTheme"

export const defaultConfig: ThemeOptions = {
    palette: {
        type: "light",
        primary: {
            main: "#2979ff"
        },
        secondary: {
            main: "#ffc400"
        }
    },
    typography: {
        fontFamily: "Ubuntu",
        button: {
            textTransform: "none"
        }
    }
}

export const defaultTheme = createMuiTheme(defaultConfig)
