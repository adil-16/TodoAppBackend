// services/taskService.ts
import { Task } from '../models/taskModel';
import { ITask } from '../interfaces/taskInterface';

class TaskService {
  // Create a task
  async createTask({ description, dueDate }: Partial<ITask>): Promise<ITask> {
    const task = new Task({ description, dueDate });
    return await task.save();
  }

  // Get tasks with filters
  async getTasks({ status, sortBy }: { status?: string; sortBy?: string }): Promise<ITask[]> {
    const filter: any = {};
    if (status === 'completed') filter.isCompleted = true;
    if (status === 'pending') filter.isCompleted = false;

    const sort: any = {};
    if (sortBy === 'creationDate') sort.createdAt = 1;
    if (sortBy === 'dueDate') sort.dueDate = 1;

    return await Task.find(filter).sort(sort);
  }

  // Toggle task completion
  async updateTask(id: string): Promise<ITask | null> {
    const task = await Task.findById(id);
    if (!task) throw new Error('Task not found');
    task.isCompleted = !task.isCompleted;
    return await task.save();
  }

    // Update task details (description and due date)
  async updateTaskDetails(id: string, updateData: Partial<ITask>): Promise<ITask | null> {
    const task = await Task.findByIdAndUpdate(id, updateData, { new: true });
    if (!task) throw new Error('Task not found');
    return task;
  }

  // Delete a task
  async deleteTask(id: string): Promise<void> {
    await Task.findByIdAndDelete(id);
  }
}

export default new TaskService();
