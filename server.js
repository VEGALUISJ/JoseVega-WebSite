const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

//Midleware
app.use(express.static('docs'));

app.get('/', (req, res)=>{
    res.send('hello!!')
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})