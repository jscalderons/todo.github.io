import axios from 'axios';
import Task from '../types/TaskType';

const API_URL = process.env.API_URL || 'http://146.190.198.27/api';

const TasksService = {
  async getTasks(): Promise<Task[]> {
    try {
      const response = await axios.get(`${API_URL}/tasks`);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async createTask(task: Task): Promise<Task> {
    try {
      const response = await axios.post(`${API_URL}/tasks`, task);

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getTaskDetail(taskId: number | string): Promise<Task> {
    try {
      const response = await axios.get(`${API_URL}/tasks/${taskId}`);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateTask(task: Task): Promise<Task> {
    try {
      const response = await axios.put(`${API_URL}/tasks/${task.id}`, task);

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteTask(taskId: number): Promise<void> {
    try {
      await axios.delete(`${API_URL}/tasks/${taskId}`);
    } catch (error) {
      throw error;
    }
  },
};

export default TasksService;
