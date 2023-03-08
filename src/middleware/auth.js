var jwt = require("jsonwebtoken");

function validateUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  jwt.verify(token, req.app.get("secretKey"), function (err, decoded) {
    if (err) {
      res.json({ status: "error", message: err.message });
    } else {
      req.user = decoded;
      next();
    }
  });
}
function validateAdmin(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  jwt.verify(token, req.app.get("secretKey"), function (err, decoded) {
    if (err) res.status(400).send({ status: "error", message: err.message });
    else if (decoded.role !== "admin")
      res.status(400).send({ status: "error", message: "Not Allowed" });
    else next();
  });
}
module.exports = { validateUser, validateAdmin };
