const Card = require('../models/card');

module.exports.getAllCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;

  Card.create({ name, link, owner })
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else if (err.statusCode === 404) {
        res.status(404).send({ message: err.message });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else if (err.statusCode === 404) {
        res.status(404).send({ message: 'Карточка с таким id не найдена' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else if (err.statusCode === 404) {
        res.status(404).send({ message: 'Карточка с таким id не найдена' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.statusCode === 400) {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      } else if (err.statusCode === 404) {
        res.status(404).send({ message: 'Карточка с таким id не найдена' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};
