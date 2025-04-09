import React from 'react'
import { useRoutes } from 'react-router-dom'

import Sidebar from './Component/Sidebar/Sidebar'
import Header from './Component/Header/Header'
import routes from './routes'

import './App.css'

export default function App() {

  const router = useRoutes(routes)

  return (
    <>
      <Sidebar />

      <div className="main">
        <Header />

        {router}
      </div>
    </>
  )
}
