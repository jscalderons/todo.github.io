import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import TasksService from '../services/TasksService';
import TaskContext from '../stores/TaskContext';
import TodoForm from './TodoForm';
import TodoHeader from "./TodoHeader";
import TodoLayout from "./TodoLayout";

const AddTaskPage = () => {
  const { addTask } = useContext(TaskContext);
  const history = useHistory();

  const handleSubmit = async (name: string, description: string) => {
    try {
      const task = await TasksService.createTask({ name, description });

      addTask(task);
  
      history.goBack();
    } catch (error) {
      toast.error("No se puede completar la acción en este momento debido a un problema técnico. Por favor, inténtelo de nuevo más tarde.");
    }
  }

  return (
    <TodoLayout>
      <TodoHeader title={"Nueva Tarea"} backTo={"/"} />
      <TodoForm onSubmit={handleSubmit} />
    </TodoLayout>
  );
};

export default AddTaskPage;
