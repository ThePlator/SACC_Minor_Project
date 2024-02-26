// StudentDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaFilePdf, FaLinkedin } from "react-icons/fa";
import axios from 'axios';

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
    return <div>Loading...</div>;
  }

  return (
     <div className="card">
      <h1>Student Details</h1>
      <p>Name: {student.Name}</p>
      <p>Email: {student.Username || "N/A"}</p>
      <p>Department: {student.Department || "N/A"}</p>
      <p>Registration Number: {student['Registration Number']}</p>
      <p>Internship place: {student['Internship organization'] || "N/A"}</p>
      <p>
        Matriculation passing year:{" "}
        {student['Matriculation Passing Year'] || "N/A"}
      </p>
      <p>
        Matriculation percentage: {student['Percentage/CGPA in Matriculation'] || "N/A"}
      </p>
      <p>Matriculation board : {student['Name of Matriculation Board'] || "N/A"}</p>
      <p>
        Intermediate passing year: {student['Intermediate/Diploma Passing Year'] || "N/A"}
      </p>
      <p>Intermediate percentage/CGPA of Diploma: {student.Intermediate_Percentage || "N/A"}</p>
      <p>Intermediate board/Diploma College: {student['Name of Intermediate Board/Diploma College'] || "N/A"}</p>
      <div className="flex gap-1">
        {student.Resume && (
          <a
            href={student.Resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FaFilePdf className="mr-1" /> Resume
            </button>
          </a>
        )}
        {student['Linkedin Profile Link'] && (
          <a
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
