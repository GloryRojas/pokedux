import {CLEAR_ERROR, SET_ERROR, SET_POKEMON} from "../types";
import {getPokemons} from "../../api/getPokemons";
import axiosInstance from "../../api/config";

export const setPokemons = (payload) => ({
    type: SET_POKEMON,
    payload,
})

export const setError = (payload) => ({
    type: SET_ERROR,
    payload
})

export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload
})

export const getPokemonsWithDetails = () => (dispatch) => {
    getPokemons(20)
        .then(res => {
            const listOfPokemons = res.data.results;
            return Promise.all(
            listOfPokemons.map(pokemon => axiosInstance.get(pokemon.url)))
        .then(result => {
            const data = result.map(poke => poke.data);
            console.log({data});
            dispatch(setPokemons(data));
        })
        })
        .catch((error) => {
            dispatch(setError({message: "Ocurrio un error", error}))
        })
}
