const jwt = require('jsonwebtoken');
const Auth = require('../errors/Auth');

const auth = (req, res, next) => {
  let payload;

  try {
    // const { authorization } = req.headers;
    const token = req.cookies.jwt;
    if (!token) {
      throw new Auth('Необходима авторизация');
    }
    // const token = authorization.replace('Bearer ', '');
    payload = jwt.verify(token, 'super-strong-secret');
  } catch (err) {
    next(new Auth('Необходима авторизация'));
  }

  req.user = payload;
  next();
};

module.exports = auth;
