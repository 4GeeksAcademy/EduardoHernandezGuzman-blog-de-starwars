import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/tarjetasDetalles.css";
import img800x600 from "../../img/800x600.jpg";


export const PlanetaDetalle = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (

        <>

            <div className="container-flex text-center general">
                <div className="row align-items-center">
                    <div className="col-6">
                        <img className="imagenDetalle" src={img800x600}></img>
                    </div>
                    
                    <div className="col-4 informacionPersonaje">
                        <h2>{store.planetas[params.planeta].name}</h2>
                        <p>
                            
                        En los confines del universo, un mundo se alza como testigo de innumerables historias. Sus paisajes evocan maravillas desconocidas y sus cielos, constelaciones de misterios por descubrir. Un planeta en el que los secretos ancestrales se entrelazan con el palpitar de la vida, despertando la curiosidad de viajeros y la envidia de soñadores. En su esencia, es un lugar que atesora leyendas y susurra promesas de aventuras sin fin.</p>
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
                                <th scope="col">Diametro</th>
                                <th scope="col">Clima</th>
                                <th scope="col">Topografía</th>
                                <th scope="col">Población</th>
                                <th scope="col">Agua superficial</th>
                            </tr>
                            <tr>
                                <td>{store.planetas[params.planeta].name}</td>
                                <td>{store.planetas[params.planeta].diameter}</td>
                                <td>{store.planetas[params.planeta].climate}</td>
                                <td>{store.planetas[params.planeta].terrain}</td>
                                <td>{store.planetas[params.planeta].population}</td>
                                <td>{store.planetas[params.planeta].surface_water}</td>
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

PlanetaDetalle.propTypes = {
    match: PropTypes.object
};