const jwt = require('jsonwebtoken');

module.exports.auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  try {
    payload = jwt.verify(token, 'super-strong-secret');
  } catch {
    res.status(401).send({ message: 'Необходима авторизация' });
  }

  req.user = payload;
  next();
};
