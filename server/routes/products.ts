import express from 'express';
const productsController = require('../controllers/products');

const router = express.Router();


router.get('/', productsController.getProducts);
router.get('/paints', productsController.getPaints);
router.get('/bags', productsController.getBags);
router.get('/:id', productsController.getProduct);

module.exports = router;