import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from './Layout/Main';
import Products from './components/Products/Products';
import Order from './components/Order/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('Tshirt.json'),
          element: <Products></Products>,
        },
        {
          path: 'order',
          element: <Order></Order>
        }
       ],
      }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
