import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Text from '../components/Text';
import Task from '../types/TaskType';
import TodoCheck from './TodoCheck';

type TodoItemProps = {
  task: Task;
  onChecked: (taskId: number) => void;
  onRemove: (taskId: number) => void;
}

const TodoItem = ({ onChecked, onRemove, task }: TodoItemProps) => {
  return (
    <div className='flex items-center px-4 py-2 hover:bg-secondary-light cursor-pointer'>
      <TodoCheck onChange={() => onChecked(task.id!)} className='mr-2' />
      <Link to={`/task/${task.id}`} className='flex-auto'>
        <Text>{task.name}</Text>  
      </Link>
      <Button onClick={() => onRemove(task.id!)} className='rounded-full w-8 h-8 flex items-center justify-center text-red-400 hover:bg-red-400 hover:text-white focus:outline-none'>
        <Icon icon='x-circle' className='text-inherit'></Icon>
      </Button>
    </div>
  );
};

export default TodoItem;
