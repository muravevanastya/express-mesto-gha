const Card = require('../models/card');

module.exports.getAllCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.send({ cards }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then((card) => res.send({ card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send({ card }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
};
