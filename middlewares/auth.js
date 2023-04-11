const jwt = require('jsonwebtoken');
const Auth = require('../errors/Auth');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    if (!token) {
      throw new Auth('Необходима авторизация');
    }
    payload = jwt.verify(token, 'super-strong-secret');
  } catch (err) {
    next(new Auth('Необходима авторизация'));
  }

  req.user = payload;
  next();
};

module.exports = auth;
