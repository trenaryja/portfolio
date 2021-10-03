import { Container } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { FC } from "react";
import ProjectCard from "./ProjectCard";
import projects, { ProjectCardProps } from "../data/projects";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) =>
	createStyles({
		grid: {
			display: "grid",
			gap: theme.spacing(5),
			paddingBottom: theme.spacing(5),
			[theme.breakpoints.up("sm")]: {
				gridTemplateColumns: "1fr 1fr",
			},
			[theme.breakpoints.down("sm")]: {
				gridTemplateColumns: "1fr",
			},
		},
	}),
);

const ProjectList: FC = () => {
	const classes = useStyles();

	return (
		<Container>
			<SectionHeader id="projects" text="Projects" />
			<div className={classes.grid}>
				{projects.map((x: ProjectCardProps) => (
					<ProjectCard key={x.title} {...x} />
				))}
			</div>
		</Container>
	);
};

export default ProjectList;
