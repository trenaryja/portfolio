import { Alert, Paper, Snackbar } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { FC, FormEvent, useState } from "react";

const useStyles = makeStyles((theme) =>
	createStyles({
		snackbar: {
			[theme.breakpoints.up("sm")]: {
				marginBottom: theme.spacing(8),
			},
			[theme.breakpoints.down("sm")]: {
				marginBottom: theme.spacing(10),
			},
		},
	}),
);

export type ToastProps = {
	loading: boolean;
	open: boolean;
	onClose: Function;
	loadingText: string;
	successText: string;
};

const Toast: FC<ToastProps> = ({ open, loading, onClose, loadingText, successText }) => {
	const classes = useStyles();

	return (
		<Snackbar
			className={classes.snackbar}
			anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			open={open}
			onClose={() => !loading && onClose()}
		>
			<Paper sx={{ width: "100%" }}>
				<Alert
					onClose={loading ? undefined : () => onClose()}
					sx={{ width: "100%" }}
					variant="outlined"
					severity={loading ? "info" : "success"}
				>
					{loading ? loadingText : successText}
				</Alert>
			</Paper>
		</Snackbar>
	);
};

export default Toast;
