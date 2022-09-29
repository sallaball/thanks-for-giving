const { Post } = require('../models');

const postData = [
    {
        title: "Seedfile 1!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        user_id: 3
    },
    {
        title: "Zoo Keepers are on strike!",
        post_content: "The local zoo in crisis after zookeereps went on strike",
        user_id: 1
    },
    {
        title: "Seedfile 3!",
        post_content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        user_id: 2

    },
    {
        title: "Teachers to get a pay raise!",
        post_content: "Great news for teachers as they are expected to receive a bump in pay in the near future!",
        user_id: 5
    },
    {
        title: "Falltastic news!",
        post_content: "Fall is the time when everyone gets excited about cooler weather and warm drinks",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;