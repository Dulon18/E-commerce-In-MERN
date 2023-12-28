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
const productSliderController = require('../controllers/productSliderController');


// Product Routes
router.get('/ProductBrandList',brandController.productBrandList)
router.get('/ProductCategoryList',categoryController.categoryList)
router.get('/ProductSliderList',productSliderController.productSliderList)
router.get('/ProductListByBrand/:BrandID', brandController.productListByBrand);
router.get('/ProductListByCategory/:CategoryID', productController.productListByCategory);
router.get('/ProductListByKeyword/:Keyword', brandController.productListByKeyword);
router.get('/ProductListByRemark/:Remark', brandController.productListByRemark);
router.get('/ProductDetails/:ProductID', productController.productDetails);
router.get('/ProductReviewList/:ProductID', productController.productReview);
router.get('/ProductListBySmilier/:CategoryID', brandController.similarProduct);

//user
router.get('/UserOTP/:email', userController.userOtp);
router.get('/VerifyLogin/:email/:otp', userController.verifyLogin);
router.get('/UserLogout', userController.logout);

//profile
router.post('/CreateProfile', profileController.profileCreate);
router.post('/UpdateProfile', profileController.updateProfile);
router.get('/ReadProfile', profileController.readProfile);

//wish List

router.post('/SaveWishList',wishController.saveWishList)
router.post('/RemoveWishList',wishController.removeWishList)
router.get('/WishList',wishController.wishList)

//cartlist
router.get('/CartList', cartController.cartsList);
router.post('/SaveCartList', cartController.saveCart);
router.post('/RemoveCartList', cartController.removeCart);


module.exports = router;

app.listen(3030, () =>
     {
        console.log('Server is running');
     }
)