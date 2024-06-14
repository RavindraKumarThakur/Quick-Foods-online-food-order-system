import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from "./component/Home/Home.jsx";
import Contact_Us from "./component/Contact_Us/Contact_Us.jsx";
import About_Us from './component/About_Us/About_Us.jsx';
import Login from './component/Login/Login.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import Layout from './Layout.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />}/>
      <Route path='/Contact_Us' element={<Contact_Us/>} />
      <Route path='/About_Us' element={<About_Us />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
