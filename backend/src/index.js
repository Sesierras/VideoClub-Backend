const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');


// Connection
const PORT = 3030;
const APP = express();

const moviesRoutes = require('../routes/router2');

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

APP.use(express.json());

const corsOption={
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
}; 

APP.use(cors(corsOption));

const user = 'Administrador';
const password = 'Admin1342**';
const dbName = 'videoClubDataBase';
const URL = `mongodb+srv://${user}:${password}@videoclubdatabase.ry0toej.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.set("strictQuery", false);

mongoose.connect(`${URL}`)
.then(() => console.log('Successfully connected'))
.catch((err) => console.error(err));

APP.use("/", router2);

APP.listen(PORT, () => {
    console.log("The server is listening");
});