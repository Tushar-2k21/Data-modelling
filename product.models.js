import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    productImage: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
