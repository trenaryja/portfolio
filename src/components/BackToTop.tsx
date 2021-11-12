import { Fab, Theme } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { FC, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { scrollToTop } from "../utils/utils";
import theme from "../styles/theme";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backToTop: {
			position: "fixed",
			bottom: theme.spacing(2),
			right: theme.spacing(2),
		},
	}),
);

const BackToTop: FC = () => {
	const classes = useStyles();
	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(window.pageYOffset > 500);

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	if (isVisible)
		return (
			<Fab color="primary" onClick={scrollToTop} className={classes.backToTop}>
				<FaArrowUp color={theme.palette.text.primary} />
			</Fab>
		);
	else return null;
};

export default BackToTop;
