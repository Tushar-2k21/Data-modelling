import mongoose from 'mongoose';

const basket = new mongoose.Schema(
  {
    ProductId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    Quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    OrderPrice: {
      type: Number,
      required: true,
    },
    Customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    Address: {
      type: String,
    },
    OrderDetails: {
      type: [basket],
    },
    status: {
      type: String,
      enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
      default: 'PENDING',
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
