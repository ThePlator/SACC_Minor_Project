import React from "react";
import { useParams } from "react-router-dom";
import { FaFilePdf, FaLinkedin } from "react-icons/fa";

const StudentDetails = ({ data }) => {
  const { studentId } = useParams();
  const student = data.find((student) => student.id === parseInt(studentId));

  if (!student) return <div>Student not found</div>;

  return (
    <div className="card">
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Email: {student.email || "N/A"}</p>
      <p>Department: {student.department || "N/A"}</p>
      <p>Registration Number: {student.registration_number || "N/A"}</p>
      <p>Internship place: {student.internship_place || "N/A"}</p>
      <p>
        Matriculation passing year:{" "}
        {student.matriculation_passing_year || "N/A"}
      </p>
      <p>
        Matriculation percentage: {student.matriculation_percentage || "N/A"}
      </p>
      <p>Matriculation board : {student.matriculation_board || "N/A"}</p>
      <p>
        Intermediate passing year: {student.intermediate_passing_year || "N/A"}
      </p>
      <p>Intermediate percentage: {student.intermediate_percentage || "N/A"}</p>
      <p>Intermediate board: {student.intermediate_board || "N/A"}</p>
      <div className="flex gap-1">
        {student.resume_link && (
          <a
            href={student.resume_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <FaFilePdf className="mr-1" /> Resume
            </button>
          </a>
        )}
        {student.linkedin_profile && (
          <a
            href={student.linkedin_profile}
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
};

export default StudentDetails;
