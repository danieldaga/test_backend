const express = require('express');
const router = require('./routes/pokemon.js')
const port = 3000


const app = express();
// app.use(express.json())
app.use('/api', router)



app.listen(port, () => {
  console.log(`ADMIN-API: Listening on port ${port}`);
});

module.exports = app