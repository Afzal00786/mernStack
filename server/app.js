const express = require('express');
const mongoose = require('mongoose')
const app = express()
const DB = 'mongodb+srv://afzal:Jazzcash786@cluster0.osog5.mongodb.net/mernStackCourse?retryWrites=true&w=majority';

mongoose.connect(DB).then(() => {
    console.log('connection hass ben established')
}).catch((err) => {
    console.log(err, 'connection not established')
})

const middleware = (req, res, next) => {

    next();
}




app.get('/', (req, res) => {
    console.log(`afzal`)
    res.send('its my Home Page')
})
app.get('about', (req, res) => {
    res.send(`its my about Page`)
})
app.get('/contact', middleware, (req, res) => {
    console.log('its run after')
    res.send('its my contact Page')
})
app.get('/login', (req, res) => {
    res.send('its my login Page')
})
app.get('/register', (req, res) => {
    res.send('its my register Page')
})
app.listen(4500)