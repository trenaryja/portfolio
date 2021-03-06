import { Container, createStyles, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			padding: theme.spacing(10),
		},
	}),
);

const About: FC = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<SectionHeader id="about" text="About" />
			<Typography variant="h4">
				I am a full stack software engineer with experience working in the government contracting industry. My
				interests in software are wide, ranging from backend technologies such as GraphQL, to front end
				technologies such as React and React Native. Having built multiple personal web applications and npm
				packages, I also have experience working with enterprise-scale web applications, and both RESTful and
				GraphQL APIs. Overall Im looking for opportunities to continue learning new technologies and make
				meaningful contributions to a team at the company I work for!
			</Typography>
		</Container>
	);
};

export default About;
