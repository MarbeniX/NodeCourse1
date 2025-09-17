import { httpClientPlugin } from "../plugins";

export const getPokemon = async (id: String) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClientPlugin.get(url);
    return pokemon.name;
};
