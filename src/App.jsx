// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing'; 
import Login from './components/pages/Login';
import RoleSelection from './components/pages/RoleSelection';
import PartyProcess from './components/pages/PartyProcess';
import RoadmapGeneration from './components/pages/RoadmapGeneration';
import Dashboard from './components/pages/Dashboard';
import RoadmapManagement from './components/pages/RoadmapPage';
import AvatarCustomization from './components/pages/AvatarCustomization';
import InterviewPage from './components/pages/InterviewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/party-process" element={<PartyProcess />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/roadmap" element={<RoadmapManagement />} />
        <Route path="/roadmap/:role" element={<RoadmapManagement />} />
        <Route path="/roadmap-generation" element={<RoadmapGeneration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roadmap-management" element={<RoadmapManagement />} />
        <Route path="/avatar-customization" element={<AvatarCustomization />} />
      </Routes>
    </Router>
  );
};

export default App;