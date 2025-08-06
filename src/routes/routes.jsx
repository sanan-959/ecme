import React from 'react';
import {Routes, Route } from 'react-router-dom';
import LoginPage from '../custom_components/auth/Login';
import Dashboard from '../custom_components/dashboard/Dashboard';
import WelcomePage from '../custom_components/welcome/Welcome';
import ClassLists from '../custom_components/class/ClassList';
import SectionList from '../custom_components/section/SectionList';
import SubjectList from '../custom_components/subject/SubjectList';
import ParentList from '../custom_components/parent/ParentList';
import ParentForm from '../custom_components/parent/ParentForm';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route index element={<WelcomePage />} />
        <Route path="class" element={<ClassLists />} />
        <Route path="section" element={<SectionList />} />
        <Route path="parent" element={<ParentList />}/>
        <Route path="parent/add" element={<ParentForm />} />

        <Route path="teacher" element={<div>Teacher Page</div>} />
        <Route path="subject" element={<SubjectList />} />
      </Route>
    </Routes>
  );
};

export default CustomRoutes;
