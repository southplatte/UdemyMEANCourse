const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api/posts/', (req, res, next) => {
    const posts = [
        { 
            id: '8736post', 
            title: 'First server Side post', 
            content: 'This is post content from the server and it\'s amazing.....'
        },
        {
            id: '3456hpost',
            title: 'Second server side post',
            content: 'this is post content for post 2 from server and it will be even better....and then some'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;