import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";

import Task from "../../../types/TaskType";
import Main from "../../layouts/Main";
import TaskList from "../../../components/features/TaskList";
import TasksService from "../../../services/TasksService";
import { Input } from "../../../components/common";

export function HomePage() {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task.length === 0) return;

    TasksService.add(task);

    setTask("");
  };

  const removeTask = (id: string) => {
    if (window.confirm("¿Estas seguro que deseas eliminar?")) {
      TasksService.remove(id);
    }
  };

  const updateTask = (id: string, data: any) => {
    TasksService.update(id, data);
  };

  useEffect(
    () =>
      TasksService.subscription((snapshot) => {
        setTasks(TasksService.map(snapshot));
      }),
    []
  );

  useEffect(() => {
    const filteredTasks = tasks.filter((task) =>
      task.name?.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredTasks(filteredTasks);
  }, [tasks, filter])

  return (
    <Main>
      <Form onSubmit={addTask} className="pt-10">
        <Input
          placeholder="Nueva tarea"
          icon='plus-lg'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Form>
      <TaskList
        title="Tareas"
        tasks={filteredTasks}
        toolbar={
          <Input
            placeholder="Buscar..."
            icon='search'
            onChange={(e) => setFilter(e.target.value)}
          />
        }
        onUpdate={updateTask}
        onRemove={removeTask}
      />
    </Main>
  );
}
