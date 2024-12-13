import React from 'react';

const SignLanguageCard = ({ title, description }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SignLanguageCard;