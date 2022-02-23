import express from 'express';
const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/', adminController.createProduct);
router.put('/', adminController.updateProduct);
router.delete('/:id', adminController.deleteProduct);

module.exports = router;