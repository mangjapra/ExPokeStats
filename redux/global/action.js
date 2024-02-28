import axios from "axios"
import * as type from "./type"
import { BASE_PATH, BASE_URL } from "../../config/api"

export const getListPokemon = () => async (dispatch) => {
    await axios.get(BASE_URL + BASE_PATH.pokemonlist)
        .then((res) => {
            dispatch({
                type: type.LIST_POKEMON,
                value:  res.data.results,
            })
        })
        .catch((err) => console.error("error get list: ", err))
}