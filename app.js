const express = require('express');

const app = express();

const hbs = require('hbs');

const works = [
    {
        image: 'img/The_Strokes_-_Is_This_It_cover.png',
        name: 'Is this it?',
        year: '2001'
    },
    {
        image: 'img/Room_on_Fire_cover.jpeg',
        name: 'Room on Fire',
        year: '2003'
    },
    {
        image: 'img/FIOEstrokes.jpeg',
        name: 'First Impressions of Earth',
        year: '2005'
    }
]

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/works', (req, res) => {
    res.render('works', {works});
})

app.listen(3000, () => console.log("First App"));