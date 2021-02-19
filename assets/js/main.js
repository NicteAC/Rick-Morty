import Serie from './serie.js';

let buscarPersonajes = (() => {

    const urlBase = 'https://rickandmortyapi.com/api/character/';
    const resultados = document.querySelector('#resultados');
    let datosPersonajes;  
    let obtenerPersonajes = async () => {
        try {
            let respuesta = await fetch(urlBase);
            let datos = await respuesta.json();
            datosPersonajes = datos;
            //console.log(datosPersonajes);
            return datos;

        } catch (error) {
            console.error(error);
        }
    }

    let detallecharacter = async (idP) => {
        try {
            let respuesta = await fetch(`${urlBase}/${idP}`);
            let data = await respuesta.json();
            let nombre = "Rick and Morty";
            const { id, name, species, image, status, gender, origin, location } = data;
            const infoPersonaje = new Serie(id, name, species, image, status, gender, origin, location, nombre);
            //console.log(infoPersonaje)
            let detallePersonaje = document.querySelector(`#personaje-${idP}`);
            let ventanaModal = document.querySelector(`#personajeModal-${idP}`);
            detallePersonaje.innerHTML = `${infoPersonaje.Personaje()}`;
            ventanaModal.innerHTML = `${infoPersonaje.modalPersonaje()}`;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        FuncionPublica: async () => {
            try {
                const personajes = await obtenerPersonajes();
                const respuestaPersonajes = await personajes.results;
                //console.log(respuestaPersonajes);
                let nombre = "Rick and Morty";
                const { id, name, species, image, status, gender, origin, location } = respuestaPersonajes;
                const personaje = new Serie(id, name, species, image, status, gender, origin, location, nombre);
                //console.log(personaje);
                let character = [];
                respuestaPersonajes.forEach(element => personaje.agregarPersonajes(element, character));
                //console.log(character)
                character.forEach(element => {
                    resultados.innerHTML += `
                    <div class="col-12 col-md-6 col-lg-3 d-inline-block detallePersona" id="personaje-${element.id}">
                        ${detallecharacter(element.id)}
                    </div>
                    <div class="modal fade" id="personajeModal-${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        ${detallecharacter(element.id)}
                    </div>

                    `;
                });
                //console.log(personaje);
            } catch (error) {
                console.error(error);
            }
        },

        FuncionPublicaDos: () => {
            let cantidadPersonajes = document.querySelector("#cantidadPersonajes");
            let spinnerBorder = document.querySelector(".spinner-border");
            spinnerBorder.remove();
            cantidadPersonajes.innerHTML = datosPersonajes.results.length;
        }
    }
})();

buscarPersonajes.FuncionPublica();

setTimeout(() => {
    buscarPersonajes.FuncionPublicaDos();
}, 600);

