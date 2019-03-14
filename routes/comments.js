module.exports = {
    getComments(req, res) {
        let postId = req.params.postId
        let post = req.store.posts[postId]
        if (!post) {
            return res.status(404).send({ message: `post with id ${postId} doesn't exist` })
        }
        res.status(200).send(post.comments)
    },
    addComment(req, res) {
        let postId = req.params.postId
        let post = req.store.posts[postId]
        if (!post) {
            return res.status(404).send({ message: `post with id ${postId} doesn't exist` })
        }
        if (!post.comments) {
            post.comments = []
        }
        let id = post.comments.length
        post.comments.push(req.body)
        res.status(201).send({ id: id })
    },
    updateComment(req, res) {
        let postId = req.params.postId
        let commentId = req.params.commentId
        let post = req.store.posts[postId]
        if (!post) {
            return res.status(404).send({ message: `post with id ${postId} doesn't exist` })
        }
        if (!post.comments || !post.comments[commentId]) {
            return res.status(404).send({ message: `comment with id ${commentId} doesn't exist` })
        }
        post.comments[commentId] = req.body
        res.status(200).send(comments[commentId])
    },
    removeComment(req, res) {
        let postId = req.params.postId
        let commentId = req.params.commentId
        let post = req.store.posts[postId]
        if (!post) {
            return res.status(404).send({ message: `post with id ${postId} doesn't exist` })
        }
        if (!post.comments || !post.comments[commentId]) {
            return res.status(404).send({ message: `comment with id ${commentId} doesn't exist` })
        }
        post.comments.splice(commentId, 1)
        res.send(204).send()
    }
}