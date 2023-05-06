const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = mongoose.model('user')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email, password })
    await user.save()
    const token = jwt.sign({ userId: user._id }, process.env.SECRET)
    res.send({ token })
  } catch (error) {
    console.log(error.message)
    if (error.message.includes('duplicate')) {
      console.log('duplicate')
    }
    res.status(422).send(error.message)
  }
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(422).send({ error: 'Email and password must be provided' })
    return
  }
  const user = await User.findOne({ email })
  if (!user) {
    res.status(404).send({ error: 'Email not found' })
    return
  }
  try {
    await user.comparePassword(password)
    const token = jwt.sign({ userId: user._id }, process.env.SECRET)
    res.send({ token })
  } catch (error) {
    res.status(401).send({ error: 'Invalid password or email' })
    return
  }
})

module.exports = router
