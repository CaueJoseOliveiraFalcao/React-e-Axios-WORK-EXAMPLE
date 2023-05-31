import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//styledcomponents
import styled from 'styled-components'
const Global = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #0e1217;
    color: white;
    width: 100%;
    height: 100%;
`

//paginas
import Home from './routes/home.jsx'
import Newpost from './routes/newpost.jsx'
import Post from './routes/Post.jsx'

//condiguração de rotas
import { createBrowserRouter , RouterProvider , Route } from 'react-router-dom'

const router  = createBrowserRouter([
  {
    element : <App/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : '/new',
        element : <Newpost/>
      },
      {
        path : '/post/:id',
        element : <Post/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global>
      <RouterProvider router={router}/>
    </Global>
  </React.StrictMode>,
)
//css
