import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import Routes from './Routes/Routes';
import AuthProvider from './Auth/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={Routes} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
