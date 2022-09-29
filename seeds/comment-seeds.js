const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Hello fall!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Great news everyone!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Thank goodness, teachers have a hard and important job!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Fall is called fall because that's when leaves fall from trees"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Bad news!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice tool!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;