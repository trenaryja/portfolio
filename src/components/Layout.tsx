import React, { FC } from "react";
import { Box } from "@mui/material";

import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";

import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import theme from "../styles/theme";
import Particles from "react-tsparticles";

import { options } from "../utils/particles.config";

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
		particles: { opacity: 0.2, zIndex: -1 },
	}),
);

const Layout: FC = ({ children }) => {
	const classes = useStyles();
	return (
		<Box className={classes.layout}>
			<Header />
			<main className={classes.main}>{children}</main>
			<BackToTop />
			<Particles options={options} className={classes.particles} />
			<Footer />
		</Box>
	);
};

export default Layout;
