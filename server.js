const express = require('express');
const app = express();
const path = require('path');
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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/', user);
// app.use('/posts', post);
// app.use('/login', login);


app.use('/static', express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

//Syncs up our Sequelize models with MySQL.
// (async () => {
//     await db.sequelize.sync();
// })();



// app.use((req, res, next) => {
//     console.log(new Date().toLocaleDateString());
//     next();
// })

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

app.use(function(request, response, next) {
    console.log('Welcome!');
    next();
});

// db.sequelize.sync().then(() => {
//     app.listen(3000, () => {
//         console.log('app is running on 3000');
//     });
// })

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

