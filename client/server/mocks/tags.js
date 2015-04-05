module.exports = function (app) {
  var express = require('express')
  var tagsRouter = express.Router()

  var tags = [
    {
      id: 0,
      name: 'music'
    },
    {
      id: 1,
      name: 'code'
    }
  ]

  tagsRouter.get('/', function (req, res) {
    res.send({
      'tags': tags
    })
  })

  tagsRouter.post('/', function (req, res) {
    res.status(201).end()
  })

  tagsRouter.get('/:id', function (req, res) {
    res.send({
      'tags': tags.filter(function (u) {
        return Number(u.id) === Number(req.params.id)
      })[0]
    })
  })

  tagsRouter.put('/:id', function (req, res) {
    tags = tags.map(function (u) {
      return u.id === req.params.id ?
        req.body
        : u
    })
    res.send({
      'ok': true,
      'user': req.params.id
    })
  })

  tagsRouter.delete('/:id', function (req, res) {
    tags = tags.filter(function (u) {
      return u.id !== req.params.id
    })
    res.status(204).end()
  })

  app.use('/api/tags', tagsRouter)
}
