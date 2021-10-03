import { Alert, Box, Button, Container, Paper, Snackbar, TextField } from "@mui/material";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import React, { FC, FormEvent, useState } from "react";
import SectionHeader from "./SectionHeader";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) =>
	createStyles({
		headerFields: {
			display: "grid",
			gap: theme.spacing(1),
			[theme.breakpoints.up("sm")]: {
				gridTemplateColumns: "1fr 1fr",
			},
			[theme.breakpoints.down("sm")]: {
				gridTemplateColumns: "1fr",
			},
		},
		form: {
			display: "grid",
			gridAutoFlow: "row",
			gap: theme.spacing(1),
			padding: theme.spacing(1),
		},
		buttons: {
			display: "flex",
			justifyContent: "space-around",
		},
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

const Contact: FC = () => {
	const [open, setOpen] = useState(false);
	const classes = useStyles();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const result = await emailjs.sendForm(
			process.env.NEXT_PUBLIC_SERVICE_ID,
			process.env.NEXT_PUBLIC_TEMPLATE_ID,
			e.target as HTMLFormElement,
			process.env.NEXT_PUBLIC_USER_ID,
		);
		console.log(result.text);
		setOpen(true);
	};

	return (
		<Container>
			<SectionHeader id="contact" text="Contact" />
			<Paper>
				<form id="contactForm" noValidate className={classes.form} onSubmit={handleSubmit}>
					<Box className={classes.headerFields}>
						<TextField fullWidth name="firstName" label="First Name" />
						<TextField fullWidth name="lastName" label="Last Name" />
						<TextField fullWidth name="email" label="Email Address" />
						<TextField fullWidth name="phoneNumber" label="Phone Number" />
					</Box>
					<Box>
						<TextField name="message" label="Message" multiline={true} minRows={5} fullWidth />
					</Box>
					<Box className={classes.buttons}>
						<Button type="submit" variant="outlined">
							Send
						</Button>
					</Box>
				</form>
			</Paper>
			<Snackbar
				className={classes.snackbar}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				open={open}
				autoHideDuration={1500}
				onClose={() => setOpen(false)}
				color="secondary"
			>
				<Paper sx={{ width: "100%" }}>
					<Alert sx={{ width: "100%" }} variant="outlined">
						Email Sent!
					</Alert>
				</Paper>
			</Snackbar>
		</Container>
	);
};

export default Contact;
