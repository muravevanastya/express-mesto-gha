const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getAllUsers } = require('../controllers/users');
const { getUserById } = require('../controllers/users');
const { updateUserProfile } = require('../controllers/users');
const { updateUserAvatar } = require('../controllers/users');
const { getCurrentUser } = require('../controllers/users');

const urlRegex = /https?:\/\/(www.)?[0-9a-z\-.]{1,}\.\w{1,}((\/[a-z0-9-._~:?#[\]@!$&'()*+,;=]{1,}){1,}\/?#?)?/;

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).required(),
  }),
}), getUserById);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
}), updateUserProfile);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().allow('').pattern(urlRegex).required(),
  }),
}), updateUserAvatar);

module.exports = router;
