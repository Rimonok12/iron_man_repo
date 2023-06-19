import React from 'react';
import { useSelector } from 'react-redux';
import './Component.css';

const ComponentC = () => {
  const value = useSelector((state) => state.value);

  return (
    <div className="component">
      <p>Value from Redux Store: {value}</p>
    </div>
  );
};

export default ComponentC;
