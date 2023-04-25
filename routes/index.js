const express = require('express')

const indexController = require('../controllers/index_controller')

const router = express.Router()

router.get('/', indexController.home)

router.post('/habits', indexController.addHabit)

router.get('/habits/:id', indexController.viewHabit)

router.post('/habits/:id', indexController.updateHabit)

router.get('/delete-habit', indexController.deleteHabit)


module.exports = router;




