import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Task from '../types/TaskType';

type TodoFormProps = {
  task?: Task;
  onSubmit: (name: string, description: string) => void;
}

const TodoForm = ({ onSubmit, task }: TodoFormProps) => {
  const [name, setName] = useState(task?.name || '');
  const [description, setDescription] = useState(task?.description || '');

  const IsValidForm = () => {
    if (!name) {
      return false;
    }

    return true;
  }

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!IsValidForm) {
      // TODO: show message
      alert('se require el nombre');
    }

    onSubmit(name, description);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-4 mx-4">
      <Input
        placeholder="Nombre"
        className="bg-secondary-light text-primary placeholder:text-primary-light placeholder:font-bold block w-full rounded-lg p-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        placeholder="Descripción"
        className="bg-secondary-light text-primary placeholder:text-primary-light placeholder:font-bold block w-full rounded-lg p-4"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></Textarea>
      <Button 
        className="bg-primary text-white rounded-lg font-bold px-4 py-2 w-full"
        onClick={handleSubmit} 
      >
        Guardar
      </Button>
    </form>
  );
};

export default TodoForm;
