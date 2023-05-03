import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayout from './BaseLayout'
import AddBook from './components/AddBook'
import Login from './components/Login'
import Signup from './components/Signup'
import { store } from './store/store'
import { Provider } from 'react-redux'
import Favorites from './components/Favorites'
import Update from './components/Update'
import Profile from './components/Profile'
import ProtectedRoute from './ProtectedRoute'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BaseLayout>
          <Routes>
            <Route path="/login" element={<Login props="hello"/>} />
            <Route path="/signup" element={<Signup props="hello"/>} />
            <Route path="/" element={<ProtectedRoute><App /></ProtectedRoute>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/add-book" element={<ProtectedRoute><AddBook /></ProtectedRoute>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BaseLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

