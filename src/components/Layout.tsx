import React, { FC } from "react";
import { makeStyles, Box, createStyles, Grid } from "@material-ui/core";

import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import theme from "../styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		layout: {
			display: "flex",
			flexDirection: "column",
			minHeight: "100vh",
		},
		main: {
			display: "grid",
			gap: theme.spacing(5),
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(5),
		},
	}),
);

const Layout: FC = ({ children }) => {
	const classes = useStyles();
	return (
		<Box className={classes.layout}>
			<Header />
			<main className={classes.main}>{children}</main>
			<BackToTop />
			<Footer />
		</Box>
	);
};

export default Layout;
