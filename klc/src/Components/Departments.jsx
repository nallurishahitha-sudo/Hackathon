import React from 'react';

const Departments = ({ category, departments, onSelect }) => (
  <>
    <h2>{category}</h2>
    <h3>Select Your Department</h3>
    <div className="grid">
      {departments.map(dept => (
        <div key={dept} className="box" onClick={()=>onSelect(dept)}>{dept}</div>
      ))}
    </div>
  </>
);

export default Departments;