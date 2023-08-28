import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Error from "./components/Error";
import AppLayout from "./components/AppLayout";
import Help from "./components/Help";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
