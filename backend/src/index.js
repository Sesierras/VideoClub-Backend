const mongoose = require('mongoose');
const express = require('express');



// Connection

const PORT = 3030;
const APP = express();

mongoose.set('strictQuery', false);

const routes = require('../routes/routes');

APP.use(express.json());

const user = 'Administrador';
const password = 'Admin1342**';
const dbName = 'videoClubDataBase';
const URL = `mongodb+srv://${user}:${password}@videoclubdatabase.ry0toej.mongodb.net/${dbName}?retryWrites=true&w=majority`

APP.use("/", routes);

APP.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

mongoose.connect(`${URL}`)
    .then(() => console.log('Succesfully connected'))
    .catch((err) => console.error(err));

APP.listen(PORT, () => {
    console.log("The server is listening")
})