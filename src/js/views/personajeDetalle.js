import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.css";


export const PersonajeDetalle = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();

	return (
		<h1>Información del personaje</h1>
	);
};

PersonajeDetalle.propTypes = {
	match: PropTypes.object
};