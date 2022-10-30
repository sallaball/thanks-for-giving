const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

const routes = require("./controllers");
const path = require('path'); 
const app = express();
const PORT = process.env.PORT||3000;
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const db = require('./config/connection');
// const user = require('./controllers/home-routes');
// const post = require('./route/post');
// const login = require('./route/login');



const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
    cookie: {
      maxAge: 30000,
    },
};

app.use(session(sess));


//Middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static('./views/layouts'))
app.use(require('./controllers'))

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Orgin","*")
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers","Content-Types")
  next();
})

sequelize.sync({force: false}).then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`🌎  ==> API Server now listening on 3000!`);
    });
});

