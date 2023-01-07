import React from "react";
import Task from '../../types/TaskType';
import TaskItem from './TaskItem';

type TaskListProps = {
  title: string | React.ReactNode;
  tasks: Task[];
  toolbar?: React.ReactNode;
  onUpdate: (taskId: string, data: any) => void;
  onRemove: (taskId: string) => void;
}

const TaskList = ({ title, tasks: data, toolbar, onUpdate, onRemove }: TaskListProps) => (
  <div className='bg-white rounded-md my-2'>
    <div className='flex justify-between items-center px-4 py-2'>
      <h2 className='text-lg font-bold'>{title}</h2>
      {toolbar}
    </div>
    <ul className='pb-4'>
      {data.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        ))}
    </ul>
  </div>
);

export default TaskList;
