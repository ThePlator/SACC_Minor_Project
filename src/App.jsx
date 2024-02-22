import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from './components/Students';
import StudentDetails from './components/StudentDetails';
import studentData from './utils/studentData.json';

const sortedStudentData = studentData.sort((a, b) => a.name.localeCompare(b.name));


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Students data={sortedStudentData} />} />
        <Route path="/student/:studentId" element={<StudentDetails data={studentData} />} />
      </Routes>
    </Router>
  );
};

export default App;
