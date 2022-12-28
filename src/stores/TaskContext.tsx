import React from 'react';
import Task from '../types/TaskType';

type TaskContextValue = {
  tasks: Task[];
  addTask: (task: Task) => void;
  addTasks: (tasks: Task[]) => void;
  deleteTask: (taskId: number) => void;
  updateTask: (task: Task) => void;
};

const TaskContext = React.createContext<TaskContextValue>({
  tasks: [],
  addTask: () => {},
  addTasks: () => {},
  deleteTask: () => {},
  updateTask: () => {},
});

export default TaskContext;