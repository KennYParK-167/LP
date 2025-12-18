import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Widgets/Home';
import Navbar from './Widgets/Navbar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default Dashboard;
