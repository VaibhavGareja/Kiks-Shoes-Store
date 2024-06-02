const JWT = require('jsonwebtoken')

module.exports.generateToken = (payload)=> {
    return JWT.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
}


module.exports.verifyToken = (token) => {
    try {
      const decoded = JWT.verify(token, JWT_SECRET);
      return decoded;
    } catch (error) {
      return null;
    }
  };