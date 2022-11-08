const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const sauceCtrl = require('../controllers/sauce');

router.post('/', auth, multer, sauceCtrl.addSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getSauce);


module.exports = router;