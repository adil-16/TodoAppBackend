export interface ITask {
  description: string;
  isCompleted: boolean;
  dueDate?: Date;
  createdAt: Date;
}
