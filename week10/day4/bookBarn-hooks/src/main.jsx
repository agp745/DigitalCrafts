import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import BaseLayout from './BaseLayout'
import AddBook from './components/AddBook'
import Login from './components/Login'
import Signup from './components/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/login" element={<Login props="hello"/>} />
          <Route path="/signup" element={<Signup props="hello"/>} />
          <Route path="/" element={<App />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
)

