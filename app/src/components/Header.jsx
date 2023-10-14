import React from 'react';

const Header = () => {
  return (
    <div className="bg-blue-800 p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl text-white font-bold">MiPiso</div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Añadir piso</button>
      </div>
    </div>
  );
};

export default Header;