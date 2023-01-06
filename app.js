const sql = require('mysql');
const express = require('express');

const app = express();
const cookie=require('cookie-parser');
const pug=require('pug');
const path=require('path');
app.use(express.json());
app.use(cookie())
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));

const tableRouters=require('./routes/tablesRoute');
app.use('/',tableRouters);
const viewsRouters=require('./routes/viewsRoute');
app.use('/',viewsRouters);
const userRouters=require('./routes/userRoute');
app.use('/user',userRouters)


module.exports=app;
