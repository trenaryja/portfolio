import {
	Button,
	Card,
	CardActions,
	CardHeader,
	CardContent,
	Typography,
	makeStyles,
	createStyles,
	CardMedia,
} from "@material-ui/core";
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
