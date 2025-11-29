import React from 'react';

const Roadmap = ({ domain, steps }) => (
  <>
    <h2>{domain} Roadmap</h2>
    <ul>{steps.map(step => <li key={step}>{step}</li>)}</ul>
  </>
);

export default Roadmap;