const express = require('express');
const app = express();
const path = require('path');
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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// app.use('/users', user);
// app.use('/posts', post);
// app.use('/login', login);

app.use(require('./controllers'));


app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Syncs up our Sequelize models with MySQL.
(async () => {
    await db.sequelize.sync();
})();

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString());
    next();
})

// app.get('/', [
//     (req, res, next) => {
//         res.send('This is the home page!')
//     },
//     res.send(test),
// )

  app.post('/create-user', (req, res) => {
    console.log(req.body)
    res.sendStatus(404)
  })