const express = require('express');
const app     = express(); // Declara variable que es el producto de express

const hbs     = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;


// middelware instrucccion o callback que se va a ejecutar siempre son importar el url que la persona pida
app.use(express.static(`${__dirname}/public`));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function (err) {});
app.set('view engine', 'hbs');
// app.engine('htmlssssss', require('hbs').__express);





app.get('/',  (req, res) => {
    res.render('home', {
        nombre : 'Orlando'
    });
});
 
app.get('/about',  (req, res) => {
    res.render('about', {
        img : 'assets/img/teeworlds.png'
    });
});


// app.get('/',  (req, res) => {
//     let salida = {
//         nombre:'Orlando',
//         edad: 20,
//         url: req.url
//     }


//     res.send(salida);
// });
 



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`)
});


/**
 * ! tirecac330@mailnd7.com
 */