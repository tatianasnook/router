const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('GET stories')
})

router.post('/', (req, res) => {
  res.send('POST stories')
})

router.put('/', (req, res) => {
  res.send('PUT stories')
})

router.delete('/', (req, res) => {
  res.send('DELETE stories')
})

module.exports = router;