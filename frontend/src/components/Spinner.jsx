import React from 'react';

const Spinner = ({ size = "10", color = "blue-500" }) => {
  return (
    <div className={`flex items-center justify-center h-[80vh] `}>
      <div
        className={`w-${size} h-${size} border-4 border-${color} border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Spinner;
