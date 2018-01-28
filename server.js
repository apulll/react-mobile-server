/*
* @Author: perry
* @Date:   2018-01-26 10:43:44
* @Last Modified by:   perry
* @Last Modified time: 2018-01-26 11:07:31
*/
const express = require('express');
const session = require('express-session');
const path = require('path');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? (process.env.PORT || 3006) : 3006;
const publicPath = path.resolve(__dirname,'build');

const app = express();


app.use(express.static(publicPath))

app.set('views', path.join(__dirname,'build'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');



app.get('*', function (req, res,next){
    res.render('index');
});


app.listen(port, function (err, result) {
    if(err){
      console.log(err);
    }
    console.log('Server running on port ' + port);
});