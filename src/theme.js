import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
    typography:{
        fontFamily:[
            'Comic Sans MS',
            'cursive',
            'sans-serif'
        ].join(','),
        htmlFontSize: 12,
    },
})

export default theme;