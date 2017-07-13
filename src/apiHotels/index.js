const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const hotelsApi = require('./resultHotels/resultHotels-route');

app.use(bodyParser.json());
app.use(bodyParser.urlensrcd({extended:true}));
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/../client/index.html')));

app.use('/api/hotels', hotelsApi);
app.use('/src', express.static(path.join(__dirname, './../../src')));
app.use('/build', express.static(path.join(__dirname, './../../build')));

app.listen(8300);
console.log('Serving hotel-list app on port 8300');
