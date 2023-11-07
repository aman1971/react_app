import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import {About, Contact, Header, Footer, Currency, Github, User, Home} from './components'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/User/Login'
import Profile from './components/User/Profile'
import CardApp from './components/Card/CardApp'
import TodoApp from './components/Todo/TodoApp'
// import { githubInfoLoader } from './components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path:'/user/:userid',
        element: <User/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/profile',
        element: <Profile/>
      },
      {
        path:'/github',
        element: <Github/>
      },
      {
        path:'/product',
        element: <CardApp/>
      },
      {
        path:'/converter',
        element: <Currency/>,
        // loader:{githubInfoLoader}
      },
      {
        path:'/todo',
        element: <TodoApp/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
