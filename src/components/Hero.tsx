import { Box, Container, Theme, Typography } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { FC } from "react";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		hero: {
			display: "flex",
			justifyContent: "space-around",
			alignItems: "center",
			textAlign: "center",
			[theme.breakpoints.down("sm")]: {
				flexDirection: "column",
			},
		},
	}),
);

const Hero: FC = () => {
	const classes = useStyles();
	return (
		<Container className={classes.hero}>
			<Box>
				<Typography variant="h2">{"Hi! I'm Justin!"}</Typography>
				<Image priority src="/logo.svg" alt="JT PI Logo" height={100} width={100} />
				<Typography variant="h4">{"Welcome to my portfolio!"}</Typography>
			</Box>
			<Box>
				<Image priority src="/bitmoji-face.png" alt="bitmoji of Justin" width={300} height={300} />
			</Box>
		</Container>
	);
};

export default Hero;
