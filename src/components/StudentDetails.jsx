// StudentDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaFilePdf, FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import Shimmer from './Shimmer';

function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API}/students/${id}`)
      .then(response => {
        setStudent(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching student details:', error);
      });
  }, [id]);

  if (!student) {
    return <Shimmer/>;
  }

  return (
     <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 shadow-md max-w-screen-md mx-auto mt-6 transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <h1 className='text-center text-3xl font-semibold bg-blue-700 text-white shadow-md sticky top-0'>Student Details</h1>
      <p className='mb-4 text-gray-600 leading-relaxed'>Name: {student.Name}</p>
      <p className='mb-4 text-gray-600 leading-relaxed'>Email: {student.Username || "N/A"}</p>
      <p className='mb-4 text-gray-600 leading-relaxed'>Department: {student.Department || "N/A"}</p>
      <p className='mb-4 text-gray-600 leading-relaxed'>Registration Number: {student['Registration Number']}</p>
      <p className='mb-4 text-gray-600 leading-relaxed'>Internship place: {student['Internship organization'] || "N/A"}</p>
      <p className='mb-4 text-gray-600 leading-relaxed'>
        Matriculation passing year:{" "}
        {student['Matriculation Passing Year'] || "N/A"}
      </p>
      <p className='mb-4 text-gray-600 leading-relaxed'>
        Matriculation percentage: {student['Percentage/CGPA in Matriculation'] || "N/A"}
      </p>
      <p className='mb-4 text-gray-600 leading-relaxed'>Matriculation board : {student['Name of Matriculation Board'] || "N/A"}</p>
      <p className='mb-4 text-gray-600 leading-relaxed'>
        Intermediate passing year: {student['Intermediate/Diploma Passing Year'] || "N/A"}
      </p>
      <p className='mb-4 text-gray-600 leading-relaxed'>Intermediate percentage/CGPA of Diploma: {student.Intermediate_Percentage || "N/A"}</p>
      <p className='mb-4 text-gray-600 leading-relaxed'>Intermediate board/Diploma College: {student['Name of Intermediate Board/Diploma College'] || "N/A"}</p>
      <div className="flex gap-1 justify-between">
        {student.Resume && (
          <a
            className='text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-700'
            href={student.Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
              <FaFilePdf className="mr-1" /> Resume
            </button>
          </a>
        )}
        {student['Linkedin Profile Link'] && (
          <a
            className='text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-700'
            href={student['Linkedin Profile Link']}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FaLinkedin className="mr-1" /> LinkedIn
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default StudentDetails;
