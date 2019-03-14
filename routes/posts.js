module.exports = {
    getPosts(req, res) {
        console.log(req.store)
        res.status(200).send(req.store)
    },
    addPost(req, res) {
        let posts = req.store.posts
        let id = posts.length
        posts.push(req.body)
        res.status(201).send({ id: id })
    },
    updatePost(req, res) {
        let postId = req.params.postId
        let posts = req.store.posts
        posts[postId] = req.body
        res.status(200).send(posts[postId])
    },
    removePost(req, res) {
        let postId = req.params.postId
        let posts = req.store.posts
        posts.splice(postId, 1)
        res.status(204).send()
    }
}