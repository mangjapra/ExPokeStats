import axios from "axios";
import * as type from "./type";
import { BASE_PATH, BASE_URL } from "../../config/api";

export const getListPokemon = () => async (dispatch) => {
  const response = await axios.get(
    BASE_URL + BASE_PATH.pokemonlist + `/?limit=25`
  );
  const pokemonList = response.data.results;

  const pokemonDetailPromise = pokemonList.map(pokemon => axios.get(pokemon.url));

  const responses = await Promise.all(pokemonDetailPromise);

  const arrayPokemon = responses.map(res => res.data);

  dispatch({
    type: type.LIST_POKEMON,
    value: arrayPokemon,
  })
};
