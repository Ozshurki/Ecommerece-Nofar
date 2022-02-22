import express from 'express';
const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/', adminController.createProduct);

module.exports = router;