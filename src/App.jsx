import React from 'react'

import {  
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom'
 import MainLayout from './Layout/MainLayout'
 import HomePage from './pages/HomePage' 
 import ServicePage from './pages/ServicePage'
 import NotFoundPage from './pages/NotFoundPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path='services' element={<ServicePage />} />
    <Route path='*' element={<NotFoundPage />} />
    </Route>
    )
) 

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;





