import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AchievementList() {
  const [students, setStudents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get(`${import.meta.env.VITE_APP_API}/achievement`)
      .then(response => {
        setStudents(response.data.data);
        // Extract unique categories from the data
        const uniqueCategories = Array.from(new Set(response.data.data.map(student => student.Category)));
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  // Filter students based on the selected category
  const filteredStudents = selectedCategory
    ? students.filter(student => student.Category === selectedCategory)
    : students;

  return (
    <div>
      <h1 className='text-center text-3xl font-semibold bg-blue-700 text-white shadow-md sticky top-0'>List of Students</h1>
      {/* Dropdown menu for filtering */}
      <div className='mt-3 flex justify-center gap-10'>
        <select
         className='p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500'
         onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map(category => (
            <option value={category} key={category}>{category}</option>
          ))}
        </select>
      </div>
      {/* Display filtered student list */}
      <table className='w-full border-collapse mt-3'>
        <thead>
          <tr>
            <th className='bg-gray-200 border border-gray-300 px-8 py-5 text-left'>S.No</th>
            <th className='bg-gray-200 border border-gray-300 px-8 py-5 text-left'>Name</th>
            <th className='bg-gray-200 border border-gray-300 px-8 py-5 text-left'>View Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={student._id}>
              <td className='border border-gray-300 px-8 py-5 text-left'>{index + 1}</td>
              <td className='border border-gray-300 px-8 py-5 text-left'>{student.Name}</td>
              <td className='border border-gray-300 px-8 py-5 text-left'>
                <a className='text-blue-500 hover:underline' href={`/achievement/${student._id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AchievementList;
