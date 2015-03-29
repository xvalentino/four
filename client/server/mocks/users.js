module.exports = function (app) {
  var express = require('express')
  var usersRouter = express.Router()

  var users = [
    {
      id: 0,
      full_name: 'Talon Poole',
      email: 'talon@theghostin.me',
      bio: '[@legittalon](http://twitter.com/legittalon)'
    },
    {
      id: 1,
      full_name: 'Tino Cochino',
      email: 'tino@four.io',
      bio: '[@tinocochinotho](http://twitter.com/tinocochinotho)'
    }
  ]

  usersRouter.get('/', function (req, res) {
    res.send({
      'users': users
    })
  })

  usersRouter.post('/', function (req, res) {
    res.status(201).end()
  })

  usersRouter.get('/:id', function (req, res) {
    res.send({
      'users': users.filter(function (u) {
        return Number(u.id) === Number(req.params.id)
      })[0]
    })
  })

  usersRouter.put('/:id', function (req, res) {
    users = users.map(function (u) {
      return u.id === req.params.id ?
        req.body
        : u
    })
    res.send({
      'ok': true,
      'user': req.params.id
    })
  })

  usersRouter.delete('/:id', function (req, res) {
    users = users.filter(function (u) {
      return u.id !== req.params.id
    })
    res.status(204).end()
  })

  app.use('/api/users', usersRouter)
}
