import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import LibraryPage from './pages/LibraryPage.jsx';
import CardPage from './pages/CardPage.jsx';
import Login from './pages/Login.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Library",
    element: <LibraryPage />,
  },
  {
    path: "/Card",
    element: <CardPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
