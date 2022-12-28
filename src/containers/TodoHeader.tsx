import React from "react";
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Text from '../components/Text';

type TodoHeaderProps = {
  title?: string,
  backTo?: string,
}

const TodoHeader = ({ title, backTo }: TodoHeaderProps) => {
  return (
    <header className='bg-secondary flex flex-row justify-between items-center space-x-4 px-4 py-5'>
      <div>
        {backTo && <Link to={backTo}>
          <Icon icon='arrow-left'></Icon>
        </Link>}
        <Text className='font-bold ml-3'>{title}</Text>
      </div>
      <img src="/assets/logo.png" alt="Synlab Logo" className='h-8 float-right' />
    </header>
  );
}

export default TodoHeader;
