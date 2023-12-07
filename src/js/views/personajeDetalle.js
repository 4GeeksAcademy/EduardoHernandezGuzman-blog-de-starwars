import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/personajesDetalles.css";
import img800x600 from "../../img/800x600.jpg";


export const PersonajeDetalle = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (

        <>

            <div className="container-flex text-center">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img className="imagenDetalle" src={img800x600}></img>
                    </div>
                    
                    <div className="col-4 informacionPersonaje">
                        <h2>{store.personajes[params.personaje].name}</h2>
                        <p>
                            El enigmático ser que surca las galaxias, forjado por la dualidad del bien y el mal, despierta la admiración de muchos. Sus decisiones moldean destinos y desatan épicas batallas, sumergiéndonos en un torbellino de emociones. Su legado trasciende límites, siendo tanto héroe como villano, cautivando con una historia que despierta la fuerza en cada uno de nosotros.</p>
                    </div>

                    <div className="container-flex text-center">
                    <div className="row align-items-center col-10">
                    <table class="table tablaPersonaje">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Año de nacimiento</th>
                                <th scope="col">Género</th>
                                <th scope="col">Altura</th>
                                <th scope="col">Color de piel</th>
                                <th scope="col">Color de ojos</th>
                            </tr>
                            <tr>
                                <td>{store.personajes[params.personaje].name}</td>
                                <td>{store.personajes[params.personaje].birth_year}</td>
                                <td>{store.personajes[params.personaje].gender}</td>
                                <td>{store.personajes[params.personaje].height}</td>
                                <td>{store.personajes[params.personaje].skin_color}</td>
                                <td>{store.personajes[params.personaje].eye_color}</td>
                            </tr>


                        </tbody>
                    </table>
                    </div>
                    </div>

                </div>
            </div>

        </>

    );
};

PersonajeDetalle.propTypes = {
    match: PropTypes.object
};