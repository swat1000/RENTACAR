const express = require("express");
const router = express.Router();
const path = require("path")

const controller = require("../controllers/controller");

router.use(express.static(path.join(__dirname, "./src")));

router.get('/index', controller.getIndex);
router.get('/register', controller.getRegister);
router.post('/register', controller.postRegister);
router.post('/login', controller.postLogin);
router.get('/login', controller.getLoginPage);
router.get('/about', controller.getAboutPage);
router.get('/blog-single', controller.getSingleBlog);
router.get('/blog', controller.getBlog);
router.get('/car-single', controller.getSingleCar);
router.get('/car', controller.getCar);
router.get('/pricing', controller.getPricing);
router.get('/services', controller.getServices);
router.get('/contact', controller.getContacts);

module.exports = router;
