const express = require('express')
const app = express();
const PORT = 3000;

console.log('server avviato Express')

const provascritta = (max) =>{ 
    return (Math.floor(Math.random() * max));
};

app.listen(PORT, () =>{
    console.log(`¡¡server avviato sulla port ${PORT}`);
});

app.get('/test', (req,res) =>{
    res.status(200)
      .send(provascritta(6));

});

app.get('/', (req,res) => {
    res.status(201)
      .send('we')
});


