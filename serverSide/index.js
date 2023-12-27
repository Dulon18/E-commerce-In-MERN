const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const router = express.Router();

// Import controllers
const brandController = require('../controllers/brandController');
const cartController = require('../controllers/cartController');
const categoryController = require('../controllers/categoryController');
const featureController = require('../controllers/featureController');
const paymentController = require('../controllers/paymentController');
const profileController = require('../controllers/profileController');
const userController = require('../controllers/userController');
const wishController = require('../controllers/wishController');
const orderController = require('../controllers/orderController');
const invoiceController = require('../controllers/invoiceController');
const reviewController = require('../controllers/reviewController');


// Product Routes
router.get('/ProductListByBrand/:BrandID', brandController.getBrands);
router.get('/ProductListByCategory/:CategoryID', categoryController.getBrands);
router.get('/ProductListBySmilier/:CategoryID', brandController.getBrands);
router.get('/ProductListByKeyword/:Keyword', brandController.getBrands);
router.get('/ProductListByRemark/:Remark', brandController.getBrands);
router.get('/ProductDetails/:ProductID', productController.getBrands);
router.get('/ProductReviewList/:ProductID', productController.getBrands);
router.get('/ProductListBySmilier/:CategoryID', brandController.getBrands);

//cartlist
router.get('/CartList', cartController.getCarts);

module.exports = router;

app.listen(3030, () =>
     {
        console.log('Server is running');
     }
)