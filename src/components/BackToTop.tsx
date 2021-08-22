import { createStyles, Fab, makeStyles, Theme } from "@material-ui/core";
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
