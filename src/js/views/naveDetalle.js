import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
// import "../../styles/personajesDetalles.css";
import img800x600 from "../../img/800x600.jpg";


export const NaveDetalle = () => {
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
                        <h2>{store.naves[params.nave].name}</h2>
                        <p>
                            
En la vastedad del cosmos, una nave surca los límites del espacio, uniendo mundos y desafiando la gravedad con su presencia majestuosa. Su aerodinámico diseño despierta la admiración de quienes la contemplan, evocando historias de valentía y aventura en cada travesía. Un símbolo de innovación tecnológica que navega entre estrellas, llevando consigo los susurros de la galaxia y sembrando leyendas en su estela.</p>
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
                                <th scope="col">Modelo</th>
                                <th scope="col">Clase</th>
                                <th scope="col">Pasajeros</th>
                                <th scope="col">Tripulación</th>
                                <th scope="col">Máxima velocidad</th>
                            </tr>
                            <tr>
                                <td>{store.naves[params.nave].name}</td>
                                <td>{store.naves[params.nave].model}</td>
                                <td>{store.naves[params.nave].starship_class}</td>
                                <td>{store.naves[params.nave].passengers}</td>
                                <td>{store.naves[params.nave].crew}</td>
                                <td>{store.naves[params.nave].max_atmosphering_speed}</td>
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

NaveDetalle.propTypes = {
    match: PropTypes.object
};