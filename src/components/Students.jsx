// import React from 'react';
// import { Link } from 'react-router-dom';

// const Students = ({ data }) => {
//   return (
//     <div>
//       <h1>List of Students</h1>
//       <ul>
//         {data.map((student) => (
//           <li key={student.id}>
//             <Link to={`/student/${student.id}`}>{student.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Students;

import React from "react";

const Students = ({ data }) => {
  return (
    <div>
      <h1>List of Students</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Registration Number</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.registration_number}</td>
              <td>
                <a href={`/student/${student.id}`}>View</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
