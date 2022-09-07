const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const user = require('./route/user');
const post = require('./route/post');
const login = require('./route/login');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/users', user);
app.use('/posts', post);
app.use('/login', login);


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

app.get('/', [
    (req, res, next) => {
        res.send('This is the home page!')
    }
]);

app.use(function(request, response, next) {
    console.log('This is global middleware!');
    next();
});

app.listen(1234);
