import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { RouterProvider , createBrowserRouter} from 'react-router-dom';
const router = createBrowserRouter([
  {path: '/',element:<App />}
]); 

//you can add a single folder for routes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
