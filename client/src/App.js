import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//import of all components
import UserName from './components/UserName';
import Recevory from './components/Recevory';
import Register from './components/Register';
import Profile from './components/Profile';
import Password from './components/Password';
import Reset from './components/Reset';
import Page404 from './components/Page404';

//


//root router///

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserName />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/password',
    element: <Password />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/reset',
    element: <Reset />
  },
  {
    path: '/recevory',
    element: <Recevory />
  },
  {
    path: '*',
    element: <Page404 />
  },
])

function App() {
  return (
    <main>
     <RouterProvider router={router}/>
    </main>
  );
}

export default App;
