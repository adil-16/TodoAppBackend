import mongoose, { Schema, Document } from 'mongoose';
import { ITask } from '../interfaces/taskInterface';

interface TaskDocument extends ITask, Document {}

const taskSchema: Schema = new mongoose.Schema({
  description: { type: String, required: true, trim: true },
  isCompleted: { type: Boolean, default: false },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export const Task = mongoose.model<TaskDocument>('Task', taskSchema);
