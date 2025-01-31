import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CourseCatalog from './components/CourseCatalog';
import CourseDetails from './components/CourseDetails';
import UserDashboard from './components/UserDashboard';
import LessonViewer from './components/LessonViewer';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CourseCatalog />} />
      <Route path="/courses/:id" element={<CourseDetails />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/lessons/:lessonId" element={<LessonViewer />} />
    </Routes>
  </Router>
);

export default App;