const express = require('express');

const app = express();


app.use('/api/posts/', (req, res, next) => {
    const posts = [
        { 
            id: '8736post', 
            title: 'First server Side post', 
            content: 'This is post content from the server'
        },
        {
            id: '3456hpost',
            title: 'Second server side post',
            content: 'this is post content for post 2 from server'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;