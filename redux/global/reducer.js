import * as type from "./type";

const initialState = {
    listpokemon: null,
}

export const reducerGlobal = (state = initialState, action) => {
    switch (action.type) {
        case type.LIST_POKEMON:
            return {
                ...state,
                listpokemon: action.value,
            }
        default:
            return state;
    }
}