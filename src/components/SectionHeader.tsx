import { Container, Theme, Typography } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { FC } from "react";

const useStyles = makeStyles((theme: Theme) =>
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
