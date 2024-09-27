import express from 'express';
import { createTask, getTasks, updateTask, deleteTask, updateTaskDetails } from '../controllers/taskController';

const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.patch('/tasks/:id', updateTask);
router.put('/tasks/:id', updateTaskDetails);
router.delete('/tasks/:id', deleteTask);

export default router;
