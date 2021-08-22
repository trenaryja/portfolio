import { AppBar, Button, Container, createStyles, makeStyles, Toolbar } from "@material-ui/core";
import React, { FC } from "react";
import SocialButtons from "./SocialButtons";
import { scrollTo, scrollToTop } from "../utils/utils";

const useStyles = makeStyles(() =>
	createStyles({
		toolbar: {
			display: "flex",
			justifyContent: "space-between",
		},
	}),
);

const Header: FC = () => {
	const classes = useStyles();
	return (
		<AppBar position="relative">
			<Container>
				<Toolbar className={classes.toolbar}>
					<Button onClick={() => scrollToTop()}>Justin Trenary</Button>
					<Button onClick={() => scrollTo("about")}>About</Button>
					<Button onClick={() => scrollTo("projects")}>Projects</Button>
					<Button onClick={() => scrollTo("contact")}>Contact</Button>
					<SocialButtons />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
