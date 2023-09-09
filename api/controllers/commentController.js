const createCommentAction = require('../actions/comment/createCommentAction');
const deleteCommentAction = require('../actions/comment/deleteCommentAction');

const createComment = (req, res) => {
    return createCommentAction(req, res);
}

const deleteComment = (req, res) => {
    return deleteCommentAction(req, res);
}

module.exports = {
    createComment,
    deleteComment
}