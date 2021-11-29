import {
	Box,
	Button,
	Card,
	CardActions,
	CardHeader,
	CardContent,
	Typography,
	CardMedia,
	Chip,
	Theme,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import createStyles from "@mui/styles/createStyles";
import React, { FC } from "react";
import Image from "next/image";
import { ProjectCardProps } from "../data/projects";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
		actions: {
			marginTop: "auto",
			alignSelf: "center",
			paddingBottom: theme.spacing(2),
		},
		chipbox: {
			textAlign: "center",
		},
		chip: {
			padding: theme.spacing(1),
			margin: theme.spacing(0.5),
			fontSize: theme.typography.fontSize * 1.1,
		},
	}),
);

const ProjectCard: FC<ProjectCardProps> = ({ title, links, description, technologies }) => {
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
			<CardContent>
				<Box className={classes.chipbox}>
					{technologies?.map((x, i) => (
						<Chip key={i} className={classes.chip} variant="outlined" icon={x.icon} label={x.name} />
					))}
				</Box>
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
