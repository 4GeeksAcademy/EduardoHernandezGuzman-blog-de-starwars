import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/tarjetas.css";


const Naves = () => {

    const { store, actions } = useContext(Context);


    return (

        <>
            <div>
                <h2 className="tituloPersonajes display-6">Naves</h2>

                <div className=" contenedorPersonajes">

                    {store.naves.map((item, index) => (
                        <div className="cardPersonajes card-container" >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAM1BMVEXMzMyWlpbPz8+Tk5PKysqYmJiioqKqqqqbm5vHx8e1tbW8vLzExMS2tratra2kpKS/v7/KOkRgAAAE+klEQVR4nO2Zi46jOhBE4wdgDNj8/9ferrYNTsjsZq9G2mFVRxpNYsCRK9UPO48HIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQggh5Juw1l4G7Ptbv57hd1P88Zw/Fr8/vd3SlJbuvV3jNMX188XqA09TPPYkU/hzCutxy3559IbYOEzr8W4dB+PMkI8Rm2RARuLH+sVgnqfwE+Y0YWlT2KXcMvnvWMBfxhk3tIXtwWFhxoVmjQnv8Jc+m83jAZ3CzXWozmnMVgc2U28J37eKv4Us1x3WGmVRYxplZVmH7DKIbSaxjxmWj/y3QJqcdCIdsBHOSxkTFUOu4r0hJzjwc0//TIo+zScLFj0/ZqxM7TdnWWmUgJS7pvkX8xzIoybOkgQgOAZUrF1ceTg4yadI3O6noLfFiz6mpXkL24nJrMjoJhgDXsoi2yxXwiepfm9PwnPJIndW2VaohWTnYWXIlv4opf5INlllbhl8xsLwwjdLQoTYRIj9g63zeO1A9qnEbPsGfHYwn9yYq6V3fCSeEfu5fOvqMY99UkMgT3gBT2LNiLiw1Etu6h5cogBb4v9Tk/IogqTqPkTxCK8hByLXtf/dpbuiaT0fRoqHxWpcIQmW9ITQG0+n2OyEBSYTxmsEemQ8iLSHEv6HH+3UJ9aPMsJPxaN7mOMwaDBphJbmYitBq/KpaP54pVhUVgiP1PlGPov2RYU/bbuWoNUgLlVIbhqW10dvhOQll8SCRQD1RVnOVkJvNq390IrayRezGhNlNeRr/o/aKdbiU+WboajIF3r5zH3lK03Likit8rkaVi3QYJhiLV10l+atxn2MaFOuu1dMXGqP3VzVEf25kf7cyjVX5pAPdveVD4XBRN0nnO77UL5SdXJ+27qhJpRyqz7+R+XD3kma5P8pn91gsXedm4d6Jta7/lX5UBfQtKAAvuY+bD9+I1/puPty3NBdb9si44sor30n39Hc3FY+fPfatPhDvnQpHcMXlVcngMbushPW4bMVf6688jm6tbl/5bXwTsg5j9hrjPvT1iJ2jYsudX4jn5bXS+wiJ5rjtKW04vrg3jUumi+Re+8rn54hNeA6ux27+uqLc6u7tw3JCZqWN5UDxbhrR462WbMgdh2o7xtEn++867Cu0eQru3pc8223gd0HlqobkpcTP/HqcBUVcpnuzmNrobLhU47ziHNDckNsLGzIgWFTF4QaV0hTqiNyoOpzVpUGzDely7YrlTOvbqCek/rWLmv7jHDenoW+GbbSldfUtqWt29jVhtbu4RKmMOYu4+7ZfuH1YBXJb6yZIevIWC093jj1nZzyPR5o5dIKwwzHKYIZl0UPQTtR/Kwnq7acEPabOQz7uaJD2BnmdQtHJ63npNuaWxDfm14+xJNmw6H+LjGP7beOPkuJTTG0WdSD/shAjxBMS6pFHGRUncKkorNPbWC4a+Ho6OXzcdBfeobjaHQdS2l5KpHaM5oBakCbTr7QV/Op/l4SyhSpfQHzVAbCZz+f/GxW8Uk41rFn8UXuUtIcg1xPTxUS7ivmkjTZn/fZ0XW00FzTIDd1h9VeFHXDdOezvpPn83b7evxuLyP9XfbN0wdfzvlmhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHklvwHwDUk5vy+FogAAAAASUVORK5CYII=" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text textoPersonajes">Modelo: {item.model}</p>
                                <p className="card-text">Clase: {item.starship_class}</p>
                                <p className="card-text">Pasajeros: {item.passengers}</p>

                                <Link to={"/NaveDetalle/" + index}>
                                    <button className="btn btn-outline-primary">Más Info</button>
                                </Link>

                                <button onClick={() => actions.favorito(item.name)} className="btn btn-outline-primary botonFav">
                                    {actions.corazonColor(item.name) ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                    </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                        </svg>}
                                </button>
                                
                            </div>
                        </div>))}
                </div>
            </div>
        </>
    );
};

export default Naves;

