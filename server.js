const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/angular-app-heroku'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-app-heroku/'}),
);

app.listen(process.env.PORT || 8080);