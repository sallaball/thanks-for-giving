const { User } = require('../models');

const userData = [
    {
        username: "user_1",
        twitter: "user1",
        github: "User1",
        email: "user1@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "user_2",
        twitter: "user2",
        github: "User2",
        email: "user2@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "user_3",
        twitter: "user3",
        github: "User3",
        email: "user3@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "user_4",
        twitter: "user4",
        github: "User4",
        email: "user4@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "user_5",
        twitter: "user5",
        github: "User5",
        email: "user5@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "user_6",
        twitter: "user6",
        github: "user6",
        email: "user6@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;