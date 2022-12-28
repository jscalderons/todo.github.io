import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import List from '../components/List';
import Button from '../components/Button';
import TodoHeader from './TodoHeader';
import TodoLayout from './TodoLayout';
import TodoSearch from './TodoSearch';
import TasksService from '../services/TasksService';
import TodoItem from './TodoItem';
import TaskContext from '../stores/TaskContext';
import Text from '../components/Text';
import Task from '../types/TaskType';

const ListTaskPage = () => {
    const { tasks, addTasks, deleteTask } = useContext(TaskContext);
    const [filter, setFilter] = useState('');
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

    useEffect(() => {
      const fetchTasks = async () => {
        const tasks = await TasksService.getTasks();

        addTasks(tasks);
      }
      
      fetchTasks();
    }, []);

    useEffect(() => {
      const filteredTasks = tasks.filter((task) =>
        task.name?.toLowerCase().includes(filter.toLowerCase())
      );

      setFilteredTasks(filteredTasks);
    }, [tasks, filter])

    const checkedHandle = async (taskId: number) => {
      try {
        await TasksService.updateTask({ id: taskId, status: 'completed' });

        deleteTask(taskId);
      } catch (error) {
        toast.error("No se puede completar la acción en este momento debido a un problema técnico. Por favor, inténtelo de nuevo más tarde.");
      }
    }

    const removeHandle = async (taskId: number) => {
      try {
        // TODO: solicitar la confirmación
        await TasksService.deleteTask(taskId);

        deleteTask(taskId);

        toast.success('La tarea ha sido eliminada permanentemente');
      } catch (error) {
        toast.error("No se puede completar la acción en este momento debido a un problema técnico. Por favor, inténtelo de nuevo más tarde.");
      }
    }
    
    return (
      <TodoLayout>
        <TodoHeader title={'Tareas'}></TodoHeader>
        
        <div className='mt-6 mx-4'>
          <TodoSearch onSearch={setFilter} />
        </div>

        <div className='flex justify-between items-center mx-4 mt-4'>
          <Text className='font-bold'>Tareas pendientes</Text>
          <Link to='/task/add'>
            <Button onClick={() => {}} className='bg-primary text-white rounded-lg px-3 py-1'>Agregar</Button>
          </Link>
        </div>

        <List className='my-2'>
          {filteredTasks.map((task) => (
            <TodoItem key={task.id} onChecked={checkedHandle} onRemove={removeHandle} task={task} />
          ))}
        </List>
      </TodoLayout>
    );
  }

export default ListTaskPage;
