var UserModel = require("../models/userModel.js");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports = {
  show: async function (req, res) {
    var id = req.params.id;

    const user = await UserModel.findOne({ _id: id });
    return user ? res.send(user) : res.status(400).send("No user found");
  },

  create: async function (req, res) {
    var user = new UserModel({
      name: req.body.name,
      mobileNo: req.body.mobileNo,
      password: req.body.password,
      role: "user",
    });
    const findUser = await UserModel.findOne({ mobileNo: req.body.mobileNo });
    if (findUser)
      return res.status(400).send("Already registered with this mobile Number");
    const result = await user.save();
    if (!result) return res.status(400).send("Error creating user");
    return res.status(201).json(result);
  },

  authenticate: async function (req, res, next) {
    const user = await UserModel.findOne({ mobileNo: req.body.mobileNo });
    if (!user) return res.status(400).send("Invalid Credentials");
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        { id: user._id, role: user.role },
        req.app.get("secretKey"),
        {
          expiresIn: "1h",
        }
      );
      return res.json({
        status: "success",
        message: "user found!!!",
        data: { user: user, token: token },
      });
    } else {
      return res.status(400).json({
        status: "error",
        message: "Invalid Credentials",
        data: null,
      });
    }
  },
};
