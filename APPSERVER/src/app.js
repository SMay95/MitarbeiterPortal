import logger from 'morgan';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import adminRouter from './routes/admin';
import mitarbeiterRouter from './routes/mitarbeiter';
var app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
app.use('/admin', adminRouter);
app.use('/mitarbeiter',mitarbeiterRouter)

export default app;