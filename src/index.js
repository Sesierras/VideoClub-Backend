const mongoose = require('mongoose');
const express = require('express');

/* const user = 'Administrador';
const password = 'Admin1342**';
const dbName = 'videoClubDataBase';
const URL = `mongodb+srv://${user}:${password}@videoclubdatabase.ry0toej.mongodb.net/${dbName}?retryWrites=true&w=majority` */

// Connection

const URL = 'mongodb://127.0.0.1:27017/videoClub';

mongoose.connect(`${URL}`)
    .then(() => console.log('conexión exitos'))
    .catch((err) => console.error(err));