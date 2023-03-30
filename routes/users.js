const router = require('express').Router();
const { createUser } = require('../controllers/users');
const { getAllUsers } = require('../controllers/users');
const { getUserById } = require('../controllers/users');
const { updateUserProfile } = require('../controllers/users');
const { updateUserAvatar } = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/:userId', getUserById);
router.post('/', createUser);
router.patch('/me', updateUserProfile);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
