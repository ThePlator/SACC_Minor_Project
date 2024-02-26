import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    axios.get(`${import.meta.env.VITE_APP_API}/students`)
      .then(response => {
        // Sort the students array by registration number before updating state
        const sortedStudents = response.data.data.sort((a, b) => a['Registration Number'] - b['Registration Number']);
        setStudents(sortedStudents);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts

  return (
    <div>
      <h1>List of Students</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Name</th>
            <th>Registration Number</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <td>{index + 1}</td>
              <td>{student.Name}</td>
              <td>{student['Registration Number']}</td>
              <td>
                <a href={`/students/${student._id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
