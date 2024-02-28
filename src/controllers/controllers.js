const axios = require('axios');
const { parse } = require('json2csv');
const fs = require('fs');
const path = require('path');


const findByName = async (req, res) => {
    try {
        const name = req.params.name
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`
        const response = await axios.get(apiUrl)
        res.json(response.data)
    } catch (error) {
        console.error('Error al llamar a la API:', error);
        res.status(500).json({ error: 'Ocurrió un error al procesar tu solicitud.' });
    }
}

const getPokemonMovesByName = async (req, res) => {
    try {
        const pokemonName = req.params.name;
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await axios.get(apiUrl);
        const pokemonMoves = response.data.moves.map(pokemon => ({
            move: pokemon.move
        }));
        res.json(pokemonMoves);
    } catch (error) {
        console.error('Error al obtener la lista de movimientos del Pokémon:', error);
        res.status(500).json({ error: 'Ocurrió un error al procesar tu solicitud.' });
    }
}


const findByColorToCsv = async (req, res) => {
    try {
        const color = req.params.color;
        const apiUrl = `https://pokeapi.co/api/v2/pokemon-color/${color}/`;
        const response = await axios.get(apiUrl);

        const pokemonNames = response.data.pokemon_species.map(pokemon => ({
            name: pokemon.name
        }));

        const csv = parse(pokemonNames);
        const fileName = `pokemon_${color}_names.csv`
        const tempDirPath = path.resolve(__dirname, '..', '..', 'temp');

        if (!fs.existsSync(tempDirPath)) {
            fs.mkdirSync(tempDirPath);
        }

        const filePath = path.resolve(tempDirPath, fileName);

        fs.writeFileSync(filePath, csv);

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        res.sendFile(filePath, () => {
            fs.unlinkSync(filePath);
        });
    } catch (error) {
        console.error('Error al llamar a la API:', error);
        res.status(500).json({ error: 'Ocurrió un error al procesar tu solicitud.' });
    }
}

const getPokemonByType = async (type) => {
    try {
        const apiUrl = `https://pokeapi.co/api/v2/type/${type}`;
        const response = await axios.get(apiUrl);
        return response.data.pokemon;
    } catch (error) {
        console.error('Error al obtener la lista de Pokémon por tipo:', error);
        return [];
    }
}

const getPokemonDetailsByName = async (req, res) => {
    try {
        const name = req.params.name;
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
        const response = await axios.get(apiUrl);
        const pokemonDetails = response.data;

        const pokemonType = pokemonDetails.types[0].type.name;
        const pokemonListByType = await getPokemonByType(pokemonType);

        res.json({ details: pokemonDetails, similarPokemons: pokemonListByType });
    } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error);
        res.status(500).json({ error: 'Ocurrió un error al procesar tu solicitud.' });
    }
}

module.exports = {
    getPokemonMovesByName,
    findByName,
    findByColorToCsv,
    getPokemonDetailsByName
};