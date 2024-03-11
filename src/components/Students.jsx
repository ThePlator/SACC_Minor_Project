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
      <h1 className='text-center text-3xl font-semibold bg-blue-700 text-white shadow-md sticky top-0'>List of Students</h1>
      <table className='w-full border-collapse mt-9'>
        <thead>
          <tr>
            {/* <th>S.No</th> */}
            <th className='bg-gray-200 border border-gray-300 px-8 py-5 text-left'>Registration Number</th>
            <th className='bg-gray-200 border border-gray-300 px-8 py-5 text-left'>Name</th>
            <th className='bg-gray-200 border border-gray-300 px-8 py-5 text-left'>View Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              {/* <td>{index + 1}</td> */}
              <td className='border border-gray-300 px-8 py-5 text-left'>{student['Registration Number']}</td>
              <td className='border border-gray-300 px-8 py-5 text-left'>{student.Name}</td>
              <td className='border border-gray-300 px-8 py-5 text-left'>
                <a className='text-blue-500 hover:underline' href={`/students/${student._id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
