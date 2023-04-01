import React from 'react';

export const FindNumberByName = ({ value, onChange }) => {
  return (
    <label>
      Find number by name
          <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
