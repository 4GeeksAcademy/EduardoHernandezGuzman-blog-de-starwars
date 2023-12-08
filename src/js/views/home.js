import React from "react";
import Personajes from "./personajes";
import Naves from "./naves";
import Planetas from "./planetas";

export const Home = () => {
	return (
		<>
			<div>
				<Personajes />
				<Naves />
				<Planetas />
			</div>
		</>
	);
};


