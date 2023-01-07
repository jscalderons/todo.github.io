import React from 'react';
import Icon from '../common/Icon';
import Input from '../common/Input';

type SearchProps = {
  onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  return (
    <label className="relative block text-gray-500 focus:text-gray-500">
      <span className="sr-only">Buscar tarea...</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-4">
        <Icon icon='search' className='text-gray-500'></Icon>
      </span>
      <Input 
        placeholder='Buscar...' 
        className='pl-10 pr-4'
        onChange={(e) => onSearch(e.target.value)}
      />
    </label> 
  );
};

export default Search;