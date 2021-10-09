const express= require('express');
const app=express();

//settings
app.set('port', process.env.PORT||3000);
app.set('view engine', 'ejs')

//Middleware
app.use(express.json());

//Routes
app.use(require('./routes/empleado'));

//starting Server
app.listen(app.get('port'), ()=>{
    console.log('SERVER OK on:..  http://localhost:', app.get('port'));
})