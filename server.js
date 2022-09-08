const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/connection');
// const user = require('./route/user');
// const post = require('./route/post');
// const login = require('./route/login');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/users', user);
// app.use('/posts', post);
// app.use('/login', login);


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
    console.log('Welcome!');
    next();
});

// db.sequelize.sync().then(() => {
//     app.listen(3000, () => {
//         console.log('app is running on 3000');
//     });
// })
app.listen(3000);
