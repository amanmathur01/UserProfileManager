// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import EnrollmentForm from './components/EnrollmentForm';
// import NavBar from './components/Navbar';
// import Biometrics from './components/Biometrics';
// import Records from './components/Records';
// import HomePage from './components/HomePage';
// import Footer from './components/Footer';
// import EditUser from './components/EditUser';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><NavBar/><HomePage/><Footer/></>
//     },
//     {
//       path: "/enrollment",
//       element: <><NavBar/> <EnrollmentForm/><Footer/></>
//     },
//     {
//       path: "/biometrics",
//       element: <><NavBar/><Biometrics/><Footer/></>
//     },
//     {
//       path: "/records",
//       element: <><NavBar/><Records/><Footer/></>
//     },
//     {
//       path: "/edit/:personId",
//       element: <><NavBar/><EditUser/><Footer/></>
//     }
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import EnrollmentForm from './components/EnrollmentForm';
import NavBar from './components/Navbar';
import Biometrics from './components/Biometrics';
import Records from './components/Records';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import EditUser from './components/EditUser';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar/><HomePage/><Footer/></>
    },
    {
      path: "/enrollment",
      element: <><NavBar/> <EnrollmentForm/><Footer/></>
    },
    {
      path: "/biometrics",
      element: <><NavBar/><Biometrics/><Footer/></>
    },
    {
      path: "/records",
      element: <><NavBar/><Records/><Footer/></>
    },
    {
      path: "/edit/:personId",
      element: <><NavBar/><EditUser/><Footer/></>
    }
    // {
    //   path: "/signup",
    //   element: <><NavBar/><SignupForm/><Footer/></>
    // },
    // {
    //   path: "/login",
    //   element: <><NavBar/><LoginForm/><Footer/></>
    // }
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
