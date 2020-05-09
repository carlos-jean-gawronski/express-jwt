class Methods {
  async auth(email, password) {
    if (email && password) {
      if (email === mockedUsername && password === mockedPassword) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "6h",
        });
        return res.json({
          success: true,
          message: "Authentication successful!",
          token: token,
        });
      } else {
        return res.send(403).json({
          success: false,
          message: "Incorrect email or password",
        });
      }
    } else {
      return res.send(400).json({
        success: false,
        message: "Authentication failed! Please check the request",
      });
    }
  }
}

module.exports = Methods;
