import { Container, createStyles, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";
import ProjectCard from "./ProjectCard";
import projects, { ProjectCardProps } from "../data/projects";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) =>
	createStyles({
		grid: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			gap: theme.spacing(5),
			paddingBottom: theme.spacing(5),
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
