const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const checkToken = (request, response, next) => {
  const token =
    request.headers["x-access-token"] || request.headers["authorization"];
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return response.json({
          success: false,
          message: "Token is not valid",
        });
      } else {
        request.decoded = decoded;
        next();
      }
    });
  } else {
    return response.json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
};

module.exports = checkToken;
