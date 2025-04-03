import express from 'express';
import {
  addFoods,
  deleteFood,
  getFoods,
  updateFood,
} from '../controller/food.controller.js';

const router = express.Router();

router.get('/', getFoods);
router.post('/', addFoods);
router.delete('/:id', deleteFood);
router.put('/:id', updateFood);

export default router;
