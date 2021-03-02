import rtl from 'jss-rtl';
import {StylesProvider, createMuiTheme, ThemeProvider, jssPreset} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import React from "react";
import {create} from "jss";

const theme = createMuiTheme({
    direction: 'rtl', // Both here and <body dir="rtl">
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#f44336',
        },
    }
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export function RTL(props) {
    return (
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
            {props.children}
            </StylesProvider>
        </ThemeProvider>
    );
}