import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import logo2 from "../../img/SWlogo2.png";
export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 ">

			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="imagenDetalle" src={logo2}></img></span>
			</Link>


			<div>
				<div className="btn-group botonFav">

					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos {store.fav.length}
					</button>

					<ul className="dropdown-menu">
						{store.fav.map((item, index) => (
							<li key={index}>
								<a className="dropdown-item">{item}</a>
							</li>
						))}
					</ul>
					
				</div>
			</div>
			
		</nav>
	);
};
