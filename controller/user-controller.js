// import { response } from 'express';
// import user from '../model/user-schema.js';
import User from '../model/user-schema.js';
export const getUsers = async (req, res) => {
  // const user = req.body;
  // const newUser = new User(user);
  try {
    let user = await User.find();
    res.json(user);
  } catch (error) {
    console.log('error');
  }
};

export const addUser = async (req, res) => {
  // console.log('hello');
  // res.send('Code for settling');
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
  } catch (error) {
    console.log('error');
  }
};

export const getUserById = async (req, res) => {
  // console.log('hello');
  // res.send('Code for settling');
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    console.log('error');
  }
};

export const editUser = async (req, res) => {
  // console.log('hello');
  // res.send('Code for settling');
  const user = req.body;
  // const editUser1 = new User(user);
  // const id = req.params.id;
  try {
    // console.log(req.params.id);
    // console.log(editUser1);
    await User.findByIdAndUpdate(req.params.id, req.body);
    // console.log('check1');
    await User.save();
    // console.log('check2');
    // res.json(editUser1);
  } catch (err) {
    res.json('error');
  }
};
export const deleteUser = async (req, res) => {
  // const user = req.body;

  try {
    await User.deleteOne({ _id: req.params.id });
    // console.log('check1');
    // await User.save();
    res.json('User deleted successfully');
    // console.log('check2');
    // res.json(editUser1);
  } catch (err) {
    res.json('error');
  }
};
