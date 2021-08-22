import { Container, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { FC } from "react";
import SocialButtons from "./SocialButtons";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footer: {
			marginTop: "auto",
			padding: theme.spacing(5),
			backgroundColor: theme.palette.divider,
		},
		container: {
			display: "flex",
			justifyContent: "space-around",
			alignItems: "center",
		},
	}),
);

const Footer: FC = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container className={classes.container}>
				<Typography>Made with ❤️ by Justin Trenary</Typography>
				<SocialButtons />
			</Container>
		</footer>
	);
};

export default Footer;
