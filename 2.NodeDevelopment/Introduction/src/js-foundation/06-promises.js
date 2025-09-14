const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const pokemon = await response.json();
    return pokemon.name;
    // fetch(url).then((response) =>
    //     response.json().then((pokemon) => callback(pokemon.name))
    // );
};

module.exports = { getPokemon };
