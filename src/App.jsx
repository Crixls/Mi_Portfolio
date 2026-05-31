import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import RootPortfolioLayout from './pages/RootPortfolioLayout';
import ErrorPortfolioPage from './pages/ErrorPortfolioPage';
import SobreMi from './pages/SobreMi';
import Home from './pages/Home';
import Proyectos from "./pages/Proyectos"
import Contacto from "./pages/Contacto"


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPortfolioLayout/>,
      errorElement: <ErrorPortfolioPage />,
      children: [
        { path: '', element: <Home/> },
        { path:"/sobremi", element:<SobreMi/> }, 
        { path:"/proyectos", element:<Proyectos/> }, 
        { path:"/contacto", element:<Contacto/> }, 
      ],
    },
       

  ]);

  return <RouterProvider router={router} />;
}

export default App;