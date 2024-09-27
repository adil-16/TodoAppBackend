import { Request, Response } from 'express';
import TaskService from '../services/taskService';

//Create a task
export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { description, dueDate } = req.body;
    const task = await TaskService.createTask({ description, dueDate });
    res.status(201).json(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};


export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, sortBy } = req.query;
    const tasks = await TaskService.getTasks({ status: status as string, sortBy: sortBy as string });
    res.status(200).json(tasks);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

export const updateTaskDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { description, dueDate } = req.body; 
    const updatedTask = await TaskService.updateTaskDetails(id, { description, dueDate });
    res.status(200).json(updatedTask);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};


// Update task completion status
export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    console.log(id);
    const task = await TaskService.updateTask(id);
    res.status(200).json(task);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await TaskService.deleteTask(id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unknown error occurred' });
    }
  }
};
