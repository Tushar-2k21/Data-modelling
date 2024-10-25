import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    subtodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodo',
        required: true,
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', TodoSchema);
