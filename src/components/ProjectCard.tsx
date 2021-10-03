import { Button, Card, CardActions, CardHeader, CardContent, Typography, CardMedia } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";
import React, { FC } from "react";
import Image from "next/image";
import { ProjectCardProps } from "../data/projects";

const useStyles = makeStyles(() =>
	createStyles({
		card: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
		actions: {
			marginTop: "auto",
			alignSelf: "center",
		},
	}),
);

const ProjectCard: FC<ProjectCardProps> = ({ title, links, description }) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardHeader title={title} />
			<CardMedia>
				<Image src={links?.img} alt="screenshot of site" width="1920" height="1080" />
			</CardMedia>
			<CardContent>
				<Typography>{description}</Typography>
			</CardContent>
			<CardActions className={classes.actions}>
				<Button variant="outlined" href={links?.visit}>
					Visit
				</Button>
				<Button variant="outlined" href={links?.source}>
					Source
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProjectCard;
