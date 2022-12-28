import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskContext from './stores/TaskContext';
import MainRoutes from "./routes/MainRoutes";
import Task from './types/TaskType';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const addTasks = (tasks: Task[]) => {
    setTasks([...tasks]);
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (task: Task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? task : t)),
    );
  };
  
  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      addTasks,
      deleteTask,
      updateTask,
    }}>
      <Switch>
        {MainRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </TaskContext.Provider>
  );
};

export default App;
