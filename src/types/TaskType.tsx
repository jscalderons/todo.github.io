import TaskStatus from './TaskStatusType';

type Task = {
  id?: number;
  name?: string;
  description?: string;
  status?: TaskStatus;
};

export default Task;
