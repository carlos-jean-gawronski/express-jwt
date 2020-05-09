const Methods = require("../database/Methods");

class LoginController {
  async login(request) {
    const { email, passowrd } = request.body;
    return await Methods.auth(email, passowrd);
  }
}

module.exports = LoginController;
