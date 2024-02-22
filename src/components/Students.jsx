import React from 'react';
import { Link } from 'react-router-dom';

const Students = ({ data }) => {
  return (
    <div>
      <h1>List of Students</h1>
      <ul>
        {data.map((student) => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
