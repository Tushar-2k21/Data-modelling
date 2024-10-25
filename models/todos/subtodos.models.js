import mongoose from 'mongoose';

const SubtodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true, // Make required if content is essential
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Ensure your 'users' collection uses the model name 'User'
      required: true, // Optional but recommended if 'createdBy' is essential
    },
  },
  { timestamps: true }
);

export const Subtodo = mongoose.model('Subtodo', SubtodoSchema);
