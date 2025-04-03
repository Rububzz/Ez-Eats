import Food from '../models/food.model.js';
import mongoose from 'mongoose';

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.log('error in fetching products' + error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const addFoods = async (req, res) => {
  const foods = req.body;
  if (!foods.name || !foods.location) {
    return res
      .status(400)
      .json({ success: false, message: 'Provide all fields' });
  }

  const newFood = new Food(foods);
  try {
    await newFood.save();
    res.status(200).json({ success: true, data: newFood });
  } catch (error) {
    console.log('error in adding new food');
    res.status(500).json({ success: false, message: 'error adding new food' });
  }
};

export const updateFood = async (req, res) => {
  const { id } = req.params;
  const food = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: 'error finding food' });
  }

  try {
    const updateFood = await Food.findByIdAndUpdate(id, food, { new: true });
    res.status(200).json({ success: true, data: updateFood });
  } catch (error) {
    console.log('error in updating food');
    req.status(500).json({ success: false, message: 'error in updating food' });
  }
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;

  try {
    await Food.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Product is deleted' });
  } catch (error) {
    console.log('erorr in deleting');
    res
      .status(500)
      .json({ success: false, message: 'unable to delete product' });
  }
};
