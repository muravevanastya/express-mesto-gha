const router = require('express').Router();
const { getAllCards } = require('../controllers/cards');
const { createCard } = require('../controllers/cards');
const { deleteCard } = require('../controllers/cards');

router.get('/', getAllCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);

module.exports = router;
