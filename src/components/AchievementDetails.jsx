import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {FaLinkedin } from "react-icons/fa";
import axios from 'axios';
import Shimmer from './Shimmer';

function AchievementDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_API}/achievement/${id}`)
      .then(response => {
        setStudent(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching student details:', error);
      });
  }, [id]);

  // Function to extract direct image link from Google Drive link
  const getDirectImageLink = (driveLink) => {
    // Replace the part of the Google Drive link to make it a direct link
    return driveLink.replace("open?id=", "uc?id=");
  };

  if (!student) {
    return <Shimmer/>;
  }

  return (
    <div className='border border-gray-200 rounded-lg p-6 bg-gray-50 shadow-md max-w-screen-md mx-auto mt-6 transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1'>
      <h1 className='text-center text-3xl font-semibold bg-blue-700 text-white shadow-md sticky top-0'>{student.Name}'s Achievements</h1>
      <h2 className='flex items-center justify-center font-bold leading-10'>{student.Name}</h2>
      {student.Photo && <img className='mx-auto my-auto h-60 w-60 rounded-md' src={getDirectImageLink(student.Photo)} alt={`${student.Name}  photo`} />}
      {student.Branch && <p className='mb-4 text-black-600 leading-relaxed flex items-center justify-center'>Branch: {student.Branch}</p>}
      {student.Batch && <p className='mb-4 text-black-600 leading-relaxed flex items-center justify-center'>Batch: {student.Batch}</p>}
      {student.Member_Name && Array.isArray(student.Member_Name) && student.Member_Name.length > 0 && (
        <div>
          <p className='mb-4 text-black leading-relaxed flex items-center justify-center'>Team Members:</p>
          {student.Member_Name.map((member, index) => (
            <p className='mb-4 text-neutral-800 leading-relaxed flex items-center justify-center font-semibold' key={index}>{member}</p>
          ))}
        </div>
      )}
      <div>
        <p className='mb-4 text-black-600 leading-relaxed flex items-center justify-center'>Achievements:</p>
        <p className='flex items-center justify-center mb-4 font-semibold'>{student.Achievements}</p>
      </div>
      <div>
        <p className='mb-4 text-black-600 leading-relaxed flex items-center justify-center'>Category:</p>
        <p className='flex items-center justify-center mb-4 font-semibold'> {student.Category}</p>
      </div>
      {student['Linkedin Profile Link'] && Array.isArray(student['Linkedin Profile Link']) && (
        <div>
          <p className='mb-4 text-black-600 leading-relaxed rounded flex items-center justify-center'>LinkedIn Profile(s):</p>
          <div className='flex flex-wrap gap-5 justify-center'>
            {student['Linkedin Profile Link'].map((link, index) => (
            <a
            key={index}
            className='text-blue-500  transition-colors duration-300 ease-in-out hover:text-blue-700'
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 ">
              <FaLinkedin className="mr-1" /> LinkedIn
            </button>
            </a>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AchievementDetails;
