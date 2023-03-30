const router = require('express').Router();
const { createUser } = require('../controllers/users');
const { getAllUsers } = require('../controllers/users');
const { getUserById } = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);

module.exports = router;
