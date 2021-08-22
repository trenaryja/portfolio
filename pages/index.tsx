import React, { FC } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Hero from "../src/components/Hero";
import Layout from "../src/components/Layout";
import ProjectList from "../src/components/ProjectList";

const Index: FC = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<ProjectList />
			<Contact />
		</Layout>
	);
};

export default Index;
