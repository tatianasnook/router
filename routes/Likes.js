const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('GET likes')
})

router.post('/', (req, res) => {
  res.send('POST likes')
})

router.put('/', (req, res) => {
  res.send('PUT likes')
})

router.delete('/', (req, res) => {
  res.send('DELETE likes')
})

module.exports = router;