import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Text from '../components/Text';
import TasksService from '../services/TasksService';
import TaskContext from '../stores/TaskContext';
import Task from '../types/TaskType';
import TodoForm from './TodoForm';
import TodoHeader from "./TodoHeader";
import TodoLayout from "./TodoLayout";

const EditTaskPage = () => {
  const [task, setTask] = useState<Task>();
  const { id } = useParams<{ id: string }>();
  const { updateTask } = useContext(TaskContext);

  useEffect(() => { 
    const getTaskDetails = async () => {
      try {
        const task: Task = await TasksService.getTaskDetail(id);

        setTask(task);
      } catch (error) {
        toast.error("No se puede completar la acción en este momento debido a un problema técnico. Por favor, inténtelo de nuevo más tarde.");
      }
    };

    getTaskDetails();
  }, [id]);

  const handleSubmit = async (name: string, description: string) => {
    try {
      const task = await TasksService.updateTask({ id: +id, name, description });

      updateTask(task);
      
      toast.success('Registro actualizado exitosamente');
    } catch (error) {
      toast.error("No se puede completar la acción en este momento debido a un problema técnico. Por favor, inténtelo de nuevo más tarde.");
    }
  }

  if (!task) {
    // TODO: loading
    return (<Text>cargando...</Text>);
  }

  return (
    <TodoLayout>
      <TodoHeader title={"Tarea"} backTo={"/"} />
      <TodoForm onSubmit={handleSubmit} task={task} />
    </TodoLayout>
  );
};

export default EditTaskPage;
