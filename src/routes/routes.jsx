import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginPage from '../custom_components/auth/Login';
import Dashboard from '../custom_components/dashboard/Dashboard';
import WelcomePage from '../custom_components/welcome/Welcome';
import ClassLists from '../custom_components/class/ClassList';
import { DiVim } from 'react-icons/di';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<WelcomePage />} />
        <Route path="class" element={<ClassLists />} />
        <Route path="section" element={<div>Section Page</div>} />
        <Route path="parent" element={<div>Parent Page</div>} />
        <Route path="teacher" element={<div>Teacher Page</div>} />
        <Route path="subject" element={<div>Subject Page</div>} />
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
