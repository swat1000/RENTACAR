const UserModel = require("../models/user_register");
const bcrypt = require("bcrypt");

exports.getIndex = (req, res) => {
  res.render("index");
};

exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = async (req, res) => {
  try {
    const { name, email, password, user_type } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      res.render("register", { message: "User already registered. Please login." });
      return;
    }

    let user = {
      name: name,
      email: email,
      password: hashedPassword,
      user_type: user_type,
    };

    const token = await UserModel(user).generateAuthToken();

    const registered = await UserModel(user).save();
    if (!registered) {
      res.render("register", { message: "Registration failed. Please try again." });
      return;
    }

    res.render("login");
  } catch (error) {
    res.status(400).send(error);
    console.log(error)
  }
};


exports.getLoginPage = (req, res) => {
  res.render("login");
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) {
      res.render("login", { message: "Invalid credentials. Please try again." });
      return;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    const token = await UserModel(user).generateAuthToken();
    console.log(token)


    if (isPasswordMatch) {
      res.redirect("/");
    } else {
      res.sendFile(path.join(__dirname, '../views/register.html'));;
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getSingleBlog = (req, res) => {
  res.render("blog-single");
};

exports.getBlog = (req, res) => {
  res.render("blog");
};

exports.getSingleCar = (req, res) => {
  res.render("car-single");
};

exports.getCar = (req, res) => {
  res.render("car");
};

exports.getPricing = (req, res) => {
  res.render("pricing");
};

exports.getServices = (req, res) => {
  res.render("services");
};

exports.getContacts = (req, res) => {
  res.render("contact");
};

