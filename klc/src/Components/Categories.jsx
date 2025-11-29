import React from 'react';

const Categories = ({ categories, onSelect }) => (
  <>
    <h2>University Career Guidance System</h2>
    <div className="grid">
      {Object.keys(categories).map(cat => (
        <div key={cat} className="box" onClick={()=>onSelect(cat)}>{cat}</div>
      ))}
    </div>
  </>
);

export default Categories;