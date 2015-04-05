module.exports = function (app) {
  var express = require('express')
  var postsRouter = express.Router()

  var posts = [
    {
      id: 0,
      title: 'hello darkness',
      body: '# my old friend\nI\'ve come to talk to you.',
      user_id: 0,
      created_at: (Date.now() - 15 * 60 * 1000),
      updated_at: (Date.now() - 15 * 60 * 1000)
    },
    {
      id: 1,
      title: 'hello my old heart',
      body: '[@legittalon](http://twitter.com/legittalon)',
      user_id: 0,
      created_at: (Date.now() - 15 * 60 * 1000),
      updated_at: (Date.now() - 15 * 60 * 1000)
    }
  ]

  postsRouter.get('/', function (req, res) {
    res.send({
      'posts': posts
    })
  })

  postsRouter.post('/', function (req, res) {
    res.status(201).end()
  })

  postsRouter.get('/:id', function (req, res) {
    res.send({
      'posts': posts.filter(function (u) {
        return Number(u.id) === Number(req.params.id)
      })[0]
    })
  })

  postsRouter.put('/:id', function (req, res) {
    posts = posts.map(function (u) {
      return u.id === req.params.id ?
        req.body
        : u
    })
    res.send({
      'ok': true,
      'user': req.params.id
    })
  })

  postsRouter.delete('/:id', function (req, res) {
    posts = posts.filter(function (u) {
      return u.id !== req.params.id
    })
    res.status(204).end()
  })

  app.use('/api/posts', postsRouter)
}
