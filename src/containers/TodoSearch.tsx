import React from 'react';
import Icon from '../components/Icon';
import Input from '../components/Input';

type TodoSearchProps = {
  onSearch: (query: string) => void;
}

const TodoSearch = ({ onSearch }: TodoSearchProps) => {
  return (
  <label className="relative block">
    <span className="sr-only">Search</span>
    <span className="absolute inset-y-0 left-0 flex items-center pl-4">
      <Icon icon='search' className='text-primary-light focus:text-primary'></Icon>
    </span>
    <Input 
      placeholder='Buscar...' 
      className='bg-secondary-light text-primary placeholder:text-primary-light placeholder:font-bold border-solid border-2 border-primary block w-full rounded-lg py-4 pl-10 pr-4'
      onChange={(e) => onSearch(e.target.value)}
    />
  </label>  
)};

export default TodoSearch;
