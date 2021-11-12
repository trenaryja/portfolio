import { AppBar, Button, Container, Toolbar } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { FC } from "react";
import { scrollTo } from "../utils/utils";

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
					<Button onClick={() => scrollTo("about")}>About</Button>
					<Button onClick={() => scrollTo("projects")}>Projects</Button>
					<Button onClick={() => scrollTo("contact")}>Contact</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
