# PokeAPI Endpoints

Este proyecto proporciona varios endpoints para interactuar con la PokeAPI y obtener información sobre Pokémon.

## 1. Endpoint: /api/pokemon/:name

Este endpoint devuelve los detalles de un Pokémon específico según su nombre.

### Parámetros

- `name`: El nombre del Pokémon que se desea obtener.

### Ejemplo de uso

GET /api/pokemon/pikachu


## 2. Endpoint: /api/pokemon-moves/:name

Este endpoint devuelve una lista de movimientos que puede aprender un Pokémon específico según su nombre.

### Parámetros

- `name`: El nombre del Pokémon del que se desea obtener los movimientos.

### Ejemplo de uso

GET /api/pokemon-moves/charmander



## 3. Endpoint: /api/pokemon-color/:color

Este endpoint devuelve un archivo CSV con una lista de nombres de Pokémon de un color específico.

### Parámetros

- `color`: El color de los Pokémon que se desea obtener en formato CSV.

### Ejemplo de uso

GET /api/pokemon-color/yellow


Este archivo CSV contendrá una lista de nombres de Pokémon de color amarillo.


