import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/personajes.css";


const Personajes = () => {

    const { store, actions } = useContext(Context);
    



    return (

        <>
            <div>
                <h2>Characters</h2>

                <div className=" contenedorPersonajes">

                    {store.personajes.map((item,index) => (
                        <div className="cardPersonajes card-container" >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAM1BMVEXMzMyWlpbPz8+Tk5PKysqYmJiioqKqqqqbm5vHx8e1tbW8vLzExMS2tratra2kpKS/v7/KOkRgAAAE+klEQVR4nO2Zi46jOhBE4wdgDNj8/9ferrYNTsjsZq9G2mFVRxpNYsCRK9UPO48HIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQggh5Juw1l4G7Ptbv57hd1P88Zw/Fr8/vd3SlJbuvV3jNMX188XqA09TPPYkU/hzCutxy3559IbYOEzr8W4dB+PMkI8Rm2RARuLH+sVgnqfwE+Y0YWlT2KXcMvnvWMBfxhk3tIXtwWFhxoVmjQnv8Jc+m83jAZ3CzXWozmnMVgc2U28J37eKv4Us1x3WGmVRYxplZVmH7DKIbSaxjxmWj/y3QJqcdCIdsBHOSxkTFUOu4r0hJzjwc0//TIo+zScLFj0/ZqxM7TdnWWmUgJS7pvkX8xzIoybOkgQgOAZUrF1ceTg4yadI3O6noLfFiz6mpXkL24nJrMjoJhgDXsoi2yxXwiepfm9PwnPJIndW2VaohWTnYWXIlv4opf5INlllbhl8xsLwwjdLQoTYRIj9g63zeO1A9qnEbPsGfHYwn9yYq6V3fCSeEfu5fOvqMY99UkMgT3gBT2LNiLiw1Etu6h5cogBb4v9Tk/IogqTqPkTxCK8hByLXtf/dpbuiaT0fRoqHxWpcIQmW9ITQG0+n2OyEBSYTxmsEemQ8iLSHEv6HH+3UJ9aPMsJPxaN7mOMwaDBphJbmYitBq/KpaP54pVhUVgiP1PlGPov2RYU/bbuWoNUgLlVIbhqW10dvhOQll8SCRQD1RVnOVkJvNq390IrayRezGhNlNeRr/o/aKdbiU+WboajIF3r5zH3lK03Likit8rkaVi3QYJhiLV10l+atxn2MaFOuu1dMXGqP3VzVEf25kf7cyjVX5pAPdveVD4XBRN0nnO77UL5SdXJ+27qhJpRyqz7+R+XD3kma5P8pn91gsXedm4d6Jta7/lX5UBfQtKAAvuY+bD9+I1/puPty3NBdb9si44sor30n39Hc3FY+fPfatPhDvnQpHcMXlVcngMbushPW4bMVf6688jm6tbl/5bXwTsg5j9hrjPvT1iJ2jYsudX4jn5bXS+wiJ5rjtKW04vrg3jUumi+Re+8rn54hNeA6ux27+uqLc6u7tw3JCZqWN5UDxbhrR462WbMgdh2o7xtEn++867Cu0eQru3pc8223gd0HlqobkpcTP/HqcBUVcpnuzmNrobLhU47ziHNDckNsLGzIgWFTF4QaV0hTqiNyoOpzVpUGzDely7YrlTOvbqCek/rWLmv7jHDenoW+GbbSldfUtqWt29jVhtbu4RKmMOYu4+7ZfuH1YBXJb6yZIevIWC093jj1nZzyPR5o5dIKwwzHKYIZl0UPQTtR/Kwnq7acEPabOQz7uaJD2BnmdQtHJ63npNuaWxDfm14+xJNmw6H+LjGP7beOPkuJTTG0WdSD/shAjxBMS6pFHGRUncKkorNPbWC4a+Ho6OXzcdBfeobjaHQdS2l5KpHaM5oBakCbTr7QV/Op/l4SyhSpfQHzVAbCZz+f/GxW8Uk41rFn8UXuUtIcg1xPTxUS7ivmkjTZn/fZ0XW00FzTIDd1h9VeFHXDdOezvpPn83b7evxuLyP9XfbN0wdfzvlmhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCHklvwHwDUk5vy+FogAAAAASUVORK5CYII=" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text textoPersonajes">Género: {item.gender}</p>
                                <p className="card-text">Color de pelo: {item.hair_color}</p>
                                <p className="card-text">Color de ojos: {item.eye_color}</p>
                                <Link to={"/PersonajeDetalle/" + index}>
                                <button className="btn btn-outline-primary">Learn more!</button>
                                </Link>
                            </div>
                        </div>))}

                </div>
            </div>
        </>
    );
};

export default Personajes;

