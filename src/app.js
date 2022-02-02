const express = require('express');
const path = require('path')
const hbs = require('hbs')

const app = express();

const port = process.env.PORT || 3000; 

const partialsPath = path.join(__dirname,'../partials');



app.set('view engine','hbs');
//app.set('views','viewspath')
app.use(express.static('public'))
app.set('x-powered-by', true)
hbs.registerPartials(partialsPath);


app.get('/', (req, res)=>{
    // res.send('hello k')
     //res.json({error :'msg'})
     //qew
     //res.download('app.js')
     res.render('index',{textasda:'world',
    'title':"index"})
})

app.get('/about', (req, res)=>{
    res.render('about',{title:'about'})
})

app.get('/help', (req, res)=>{
    res.render('help',{msg:'help msg here...'})
})

app.get('/welcome', (req, res)=>{
    res.send('welcome page')
})


const userRouter = require("../routes/users");

app.use('/users',userRouter);


app.listen(port, ()=>{
    console.log(`server is up on port ${port}`);
});