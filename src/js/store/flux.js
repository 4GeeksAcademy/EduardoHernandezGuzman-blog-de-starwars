const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			personajes: [],
			naves: [],
			planetas: [],
			fav: [],
		},

		actions: {

			//Función para filtrar y mostrar los favoritos en el navbar
			favorito: (nombreFav) => {

				const store = getStore();

				if (store.fav.includes(nombreFav)) {
					setStore({ fav: store.fav.filter((repetido) => repetido != nombreFav) });
				}
				else {
					setStore({ fav: [...store.fav, nombreFav] });
				}
			},

			//Función que comprueba si el array contiene el nombre para luego cambiar el color del corazón
			corazonColor: name => {
				const store = getStore();
				return store.fav.includes(name);
			},


			loadSomeData: () => {

				//Traer a los personajes
				fetch("https://swapi.dev/api/people")
					.then((response) => response.json())
					.then((data) => setStore({ personajes: data.results }))

				//Traer a las naves
				fetch("https://swapi.dev/api/starships")
					.then((response) => response.json())
					.then((data) => setStore({ naves: data.results }))

				//Traer a los planetas
				fetch("https://swapi.dev/api/planets")
					.then((response) => response.json())
					.then((data) => setStore({ planetas: data.results }))
			},
		}
	};
};

export default getState;
