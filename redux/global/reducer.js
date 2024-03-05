import * as type from "./type";

const initialState = {
    listpokemon: null,
    pokemonbyid: null,
}

export const reducerGlobal = (state = initialState, action) => {
    switch (action.type) {
        case type.LIST_POKEMON:
            return {
                ...state,
                listpokemon: action.value,
            }
        case type.POKEMON_BY_ID:
            return {
                ...state,
                pokemonbyid: action.value,
            }
        default:
            return state;
    }
}