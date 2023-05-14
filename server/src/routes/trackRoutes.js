const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const track = mongoose.model('track')
const router = express.Router()
router.use(requireAuth)

router.get('/tracks', async (req, res) => {
  console.log(req.user._id);
  const tracks = await track.find({ userId: req.user._id })
  res.send(tracks)
})

router.post('/tracks', async (req, res) => {
  const { name, locations } = req.body
  if (!name || !locations) {
    res.status(422).send({ error: 'name and locations must be provided' })
    return
  }
  try {
    const newTrack = new track({
      name: name,
      locations: locations,
      userId: req.user._id,
    })
    await newTrack.save()
    res.send(newTrack)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

module.exports = router
