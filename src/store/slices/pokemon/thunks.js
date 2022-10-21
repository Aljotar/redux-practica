import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import axios from "axios";


export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar peticion http

        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        const data = resp.data
        console.log(data)
        //dispatch( setPokemons() );
    }
}