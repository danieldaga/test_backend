# Backend Test PokeAPI Endpoints

## Arrancar la API Express con nodemon

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.

2. Clona este repositorio en tu máquina local:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

3. Navega hasta el directorio del proyecto:

    ```bash
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

4. Instala las dependencias del proyecto utilizando npm:

    ```bash
    npm install
    ```

5. Crea un archivo `.env` en el directorio raíz del proyecto y configura las variables de entorno necesarias, si las hay.

6. Para iniciar la API en modo de desarrollo con nodemon, ejecuta el siguiente comando:

    ```bash
    npm run dev
    ```

   Esto iniciará el servidor Express y lo reiniciará automáticamente cada vez que se realice un cambio en los archivos del proyecto, gracias a nodemon.

7. La API estará disponible en la dirección: `http://localhost:3000`. Puedes acceder a ella desde tu navegador o utilizando herramientas como Postman para realizar solicitudes HTTP.

8. ¡Listo! Ahora puedes comenzar a desarrollar tu API utilizando Express.


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

## 4. Endpoint: /api/pokemonDetailByName/:name

Este endpoint devuelve los detalles de un Pokémon en especifico

### Parámetros

- `name`: El nombre del Pokémon del que se desea obtener los detalles.

### Ejemplo de uso

GET /api/pokemonDetailByName/pikachu


