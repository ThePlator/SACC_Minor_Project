import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/Students'; // Import StudentList component
import StudentDetails from './components/StudentDetails'; // Import StudentDetails component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
