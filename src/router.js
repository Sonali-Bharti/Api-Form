import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import UserEdit from "./pages/user-edit";
import UserList from "./pages/user-list";

const routes = [
  {
    path: "/users/:userId/edit",
    element: <UserEdit />
  },
  {
    path: "/users",
    element: <UserList />
  },
  {
    path: "/",
    element: <Home />
  }
];

export default createBrowserRouter(routes);
