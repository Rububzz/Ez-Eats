import mongoose from 'mongoose';

const FoodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model('Food', FoodSchema);
export default Food;
