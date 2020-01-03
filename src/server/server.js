const express = require('express');
const scraperController = require('./scraper');
const cors = require('cors');

const app = express();

app.use(cors());
app.get('/', (req, res) => res.send('hello world'));
app.get('/festivals/*', scraperController.getData);
app.get('/festivals', scraperController.getAllData);
app.listen(3000);

module.exports = app;


// var express      = require('express');
// var path         = require('path');
// var favicon      = require('serve-favicon');
// var logger       = require('morgan');
// var bodyParser   = require('body-parser');
// var debug        = require('debug')('app:http');
// var cookieParser = require('cookie-parser');
// var passport = require('passport');
// var User = require('./models/user');
// var session = require('express-session');
// var SpotifyStrategy = require('passport-spotify').Strategy;
// var locus = require('locus');
// // Load local libraries.
// var env      = require('./config/environment'),
//     mongoose = require('./config/database'),
//     routes   = require('./config/routes');
// // Instantiate a server application.
// var app = express();
// app.use(cookieParser('notsosecretnowareyou'));
// app.use(session({
//   secret: 'programming is tough',
//   resave: false,
//   saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // this comes from .env implementation
// require('dotenv').config();

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

// //passport stuff
// passport.use(new SpotifyStrategy({
//     clientID: process.env.CID,
//     clientSecret: process.env.CIS,
//     // callbackURL: "https://aqueous-spire-17304.herokuapp.com/callback"
//     callbackURL: "http://localhost:3000/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOne( { spotifyId: profile.id }, function (err, user) {
//       if (err) return done(err);
//       if (user) {
//         return done(null, user);
//       } else {
//         var newUser = new User({
//           spotifyId: profile.id
//         })
//         newUser.save(function(err) {
//           if (err) return done(err);
//           return done(null, newUser);
//         });
//       }
//     });
//   }
// ));


// // Configure the application (and set it's title!).
// app.set('title', env.TITLE);
// app.set('safe-title', env.SAFE_TITLE);
// // EJS view engine config
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // Create local variables for use thoughout the application.
// app.locals.title = app.get('title');

// // Logging layer.
// app.use(logger('dev'));

// // Helper layer (parses the requests, and adds further data).
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// // Routing layers: favicon, static assets, dynamic routes, or 404…

// // Routes to static assets. Uncomment below if you have a favicon.
// // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));

// // Useful for debugging the state of requests.
// app.use(debugReq);

// // Defines all of our "dynamic" routes.
// app.use('/', routes);

// // Catches all 404 routes.
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // Error-handling layer.
// app.use(function(err, req, res, next) {
//   // In development, the error handler will print stacktrace.
//   err = (app.get('env') === 'development') ? err : {};
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: err
//   });
// });

// function debugReq(req, res, next) {
//   debug('params:', req.params);
//   debug('query:',  req.query);
//   debug('body:',   req.body);
//   next();
// }

// module.exports = app;
// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const indexRouter = require('./routes/index');
// const indexRouter = require('./routes/index');
// const app = express();
// import url from 'url';
// import cache from  'memory-cache';
// import cacheController from 'express-cache-controller';
// import cors from'cors';

// import { fetchFestivals } from './fetch'
// const PORT = process.env.PORT || 3005; //till 3005 hold on

// app.use(cors());
// app.use(
//   cacheControl({
//     maxAge:60*10,
//   })
// );



// const festivalController = require('./controllers/festivalController');
// require('events').EventEmitter.prototype._maxListeners = 100;

// const io = require('socket.io').listen(server);

// app.use(express.json());
// // app.use(express.static('assets'))


// app.get('/',(req,res) => {
//   res.status(200).sendFile(path.join(__dirname,'../index.html'));
// });

// app.get('/main',(req,res) => {
//   res.redirect('/')
// });

// const festivals = {}
// const users = {}
// let numUsers = 0;

// io.on('connection',socket => {
//   console.log('socket connected'+socket.id)

// socket.on('chat', (data) => {
//   console.log('msg data recieved by server', data)
//   io.sockets.emit('chat', data)
// })
// socket.on('typing',data =>{
//   console.log('typing in server')
//   socket.broadcast.emit('typing',data)
// })


// app.get('/festivals',festivalController.getFestivals, (req, res) => {
//   res.status(200).json(res.locals.festivals);
// });


// //do we need a build
// app.use('/build', express.static(path.join(__dirname, '../build')));
// //use this create for messages instead if we decide to add socket io
// // app.post('/festivals/create',festivalController.postFestivals,(req , res) => {
// //   res.json(res.locals.festival);
// // })

// app.use('*', (req,res) => {
//   res.sendStatus(404);
// });

// app.use((err, req, res, next) => {
//   console.log(err);
//   res.sendStatus(500);
// });

// app.listen(PORT, () => {
//   console.log(`Server is sicc on port: ${PORT}`);
// });
