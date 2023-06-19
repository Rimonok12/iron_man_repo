import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../redux/actions';
import './Component.css';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setValue(event.target.value));
  };

  return (
    <div className="component">
      <input
        type="text"
        className="input-field"
        onChange={handleChange}
        placeholder="Enter a value"
      />
    </div>
  );
};

export default ComponentB;
