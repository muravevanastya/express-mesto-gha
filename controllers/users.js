const User = require('../models/user');

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.getUserById = (req, res) => {
  const { userId } = req.params;
  User.findById(userId)
    .then((user) => res.send({ user }))
    .catch((err) => {
      if (err.statusCode === 404) {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ user }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.updateUserProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .then((user) => res.send({ user }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else if (err.statusCode === 404) {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .then((link) => res.send({ link }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else if (err.statusCode === 404) {
        res.status(404).send({ message: 'Пользователь с таким id не найден' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};
