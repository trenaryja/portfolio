import { Box, Button, Container, createStyles, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { FC, FormEvent } from "react";
import SectionHeader from "./SectionHeader";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) =>
	createStyles({
		headerFields: {
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
			gap: theme.spacing(2),
		},
		form: {
			display: "grid",
			gridAutoFlow: "row",
			gap: theme.spacing(2),
			padding: theme.spacing(2),
		},
		buttons: {
			display: "flex",
			justifyContent: "space-around",
		},
	}),
);

const Contact: FC = () => {
	const classes = useStyles();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				e.target as HTMLFormElement,
				process.env.NEXT_PUBLIC_USER_ID,
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
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
		</Container>
	);
};

export default Contact;
