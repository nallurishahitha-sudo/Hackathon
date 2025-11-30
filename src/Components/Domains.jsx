import React from 'react';

const Domains = ({ dept, domains, onSelect }) => (
  <>
    <h2>{dept}</h2>
    <h3>Select Specialization</h3>
    <div className="grid">
      {domains.map(domain => (
        <div key={domain} className="box" onClick={()=>onSelect(domain)}>{domain}</div>
      ))}
    </div>
  </>
);

export default Domains;