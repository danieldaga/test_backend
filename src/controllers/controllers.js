const axios = require("axios");


const test = (req, res) => {
    res.send("testAPI")
}

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
const findByColor = async (req, res) => {
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

module.exports = {
    test,
    findByName,
    findByColor
};