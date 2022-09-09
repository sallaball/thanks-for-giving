const express = require('express');
const app = express();
const path = require('path');
<<<<<<< HEAD
const db = require('./models');
const user = require('./controllers/user');
// const post = require('./controllers/post');
// const login = require('./controllers/login');
const session = require('express-session');

const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const helpers = require('./utils/helper');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({ helpers });
=======
const db = require('./config/connection');
const user = require('./controllers/home-routes');
// const post = require('./route/post');
// const login = require('./route/login');

// const sequelize = require('./config/connection');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//     secret: 'Secret',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: db
//     })
// };

// app.use(session(sess));

const exphbs = require('express-handlebars');

const hbs = exphbs.create({});
>>>>>>> 9a8f35e4996bb91feb2cad6129b0a349730ce441

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

<<<<<<< HEAD
// app.use('/users', user);
// app.use('/posts', post);
// app.use('/login', login);

app.use(require('./controllers'));
=======
app.use('/', user);
// app.use('/posts', post);
// app.use('/login', login);
>>>>>>> 9a8f35e4996bb91feb2cad6129b0a349730ce441


app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

//Syncs up our Sequelize models with MySQL.
// (async () => {
//     await db.sequelize.sync();
// })();
<<<<<<< HEAD
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

=======
>>>>>>> 9a8f35e4996bb91feb2cad6129b0a349730ce441

// app.use((req, res, next) => {
//     console.log(new Date().toLocaleDateString());
//     next();
// })

// app.get('/', [
//     (req, res, next) => {
//         res.send('This is the home page!')
<<<<<<< HEAD
//     },
//     res.send(test),
// )

  app.post('/create-user', (req, res) => {
    console.log(req.body)
    res.sendStatus(404)
  })
=======
//     }
// ]);

// app.use(function(request, response, next) {
//     console.log('Welcome!');
//     next();
// });

// app.listen(1234);
db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`🌎  ==> API Server now listening on 3000!`);
    });
});
>>>>>>> 9a8f35e4996bb91feb2cad6129b0a349730ce441
