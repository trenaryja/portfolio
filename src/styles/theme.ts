import { colors, createTheme } from "@material-ui/core";

const theme = createTheme({
	palette: {
		type: "dark",
		primary: {
			main: colors.cyan[500],
		},
		secondary: {
			main: colors.indigo[500],
		},
	},
});

export default theme;
