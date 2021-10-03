import { ButtonGroup, Button } from "@mui/material";
import React, { FC } from "react";
import { IconBaseProps } from "react-icons";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";
import theme from "../styles/theme";

const iconProps: IconBaseProps = {
	size: theme.spacing(3),
};

const SocialButtons: FC = () => {
	return (
		<ButtonGroup>
			<Button href="https://github.com/trenaryja">
				<FaGithub {...iconProps} />
			</Button>
			<Button href="https://www.linkedin.com/in/justintrenary/">
				<FaLinkedin {...iconProps} />
			</Button>
			<Button href="https://codepen.io/trenaryja-the-looper">
				<FaCodepen {...iconProps} />
			</Button>
		</ButtonGroup>
	);
};

export default SocialButtons;
