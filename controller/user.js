const mongoose = require('mongoose');
const model = require('../models/user');
const User = model.user;

// CREATE

exports.createUser = async (req, res) => {
  try{
    const user = new User(req.body);
    const doc = await user.save();
    res.status(201).json(doc);
  }catch(err){
    console.log(err)
  }
}

//  READ

exports.getUsers = async (req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  }catch(err){
    console.log(err);
  }
}

exports.getUserId = (req, res) => {
  try{
  const id = req.params.id;
  const user = users.find(id);
  res.json(user);
  }catch(err){
    console.log(err);
  }
}

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex(p => p.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.json(users);
}

exports.updateUserId = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex(p => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.json(users);
}

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex(p => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.json(user);
}
