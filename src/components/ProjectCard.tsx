import {
	Button,
	Card,
	CardActions,
	CardHeader,
	CardContent,
	Typography,
	makeStyles,
	createStyles,
	ButtonGroup,
} from "@material-ui/core";
import React, { FC } from "react";
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
