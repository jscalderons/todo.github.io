import ListTaskPage from '../containers/ListTaskPage';
import AddTaskPage from '../containers/AddTaskPage';
import EditTaskPage from '../containers/EditTaskPage';

const MainRoutes = ([
  {
    path: "/",
    exact: true,
    main: () => <ListTaskPage />
  },
  {
    path: "/task/add",
    main: () => <AddTaskPage />
  },
  {
    path: "/task/:id",
    main: () => <EditTaskPage />
  },
]);

export default MainRoutes;
