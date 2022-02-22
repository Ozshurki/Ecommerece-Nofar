import express from 'express';
const productsController = require('../controllers/products');

const router = express.Router();

router.get('/paints', productsController.getPaints);
router.get('/:id', productsController.getProduct);

module.exports = router;