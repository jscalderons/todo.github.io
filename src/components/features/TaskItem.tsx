import React, { useState } from "react";
import { Button, Check, Icon } from "../common";
import Task from "../../types/TaskType";
import InlineEdit from './InlineEdit';

type TodoItemProps = {
  task: Task;
  onUpdate: (taskId: string, data: any) => void;
  onRemove: (taskId: string) => void;
};

const TaskItem = ({ task, onUpdate, onRemove }: TodoItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex items-center px-4 py-2"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <Check
        isChecked={task.status}
        onChange={(status) => onUpdate(task.id, { status })}
      />

      <div className="flex-auto">
        <InlineEdit
          value={task.name}
          onChange={(name) => onUpdate(task.id, { name })}
          className={task.status ? "line-through text-secondary-400" : ""}
        />
      </div>

      {isHovering && (
        <Button
          onClick={() => onRemove(task.id!)}
          className="btn-icon bg-transparent text-danger-400"
        >
          <Icon icon="x-circle-fill"></Icon>
        </Button>
      )}
    </div>
  );
};

export default TaskItem;
