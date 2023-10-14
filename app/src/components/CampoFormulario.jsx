import React from 'react';

const CampoFormulario = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg p-2 text-gray-800"
        required
      />
    </div>
  );
};

export default CampoFormulario;