const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('user')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    res.status(401).send({ error: 'You must login first to view this page' })
    return
  }

  const token = authorization.replace('Bearer ', '')
  jwt.verify(token, process.env.SECRET, async (err, payload) => {
    if (err) {
      res.status(401).send({ error: 'You must login first' })
      return
    }
    const { userId } = payload
    const user = await User.findById(userId)
    req.user = user
    next()
  })
}
