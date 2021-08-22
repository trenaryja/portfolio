import { Container, createStyles, makeStyles, Typography } from "@material-ui/core";
import React, { FC } from "react";

const useStyles = makeStyles((theme) =>
	createStyles({
		container: {
			padding: theme.spacing(5),
		},
	}),
);

export type SectionHeaderProps = {
	id: string;
	text: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ id, text }) => {
	const classes = useStyles();

	return (
		<Container id={id} className={classes.container}>
			<Typography variant="h2" align="center" gutterBottom>
				{text}
			</Typography>
		</Container>
	);
};

export default SectionHeader;
