export const fetchPokemon = (count) => {
    try {
        const pokemonImgs = [];
        for (let i = 0; i < count; i++) {
            const randomNumber = Math.ceil(Math.random() * 1010);
            pokemonImgs.push(
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`
            );
        }
        return pokemonImgs;
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
    }
};
