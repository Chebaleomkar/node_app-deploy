const express = require('express');
const userRouter = express.Router();
const userController = require('../controller/user');

userRouter
  .post('/', userController.createUser)
  .get('/', userController.getUsers)
  .get('/:id', userController.getUserId)
  .put('/:id', userController.replaceUser)
  .patch('/:id', userController.updateUserId)
  .delete('/:id', userController.deleteUser);

module.exports = userRouter;
