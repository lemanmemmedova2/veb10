import React, { useState, useEffect } from 'react';
import './Task.css';

const Employee = () => {
  const [one, setOne] = useState([]);
  const [two, setTwo] = useState('');
  const [main, setmain] = useState('');
  
  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((res) => res.json())
      .then((data) => {
        setOne(data);
      });
  }, []);

  const search1 = (e) => {
    setTwo(e.target.value.toLowerCase());
  };

  const handle = (e) => {
    setmain(e.target.value);
  };
  return (
    <div>
      <input type='text' placeholder='Axtaris' onChange={search1} />
      <select onChange={handle}>
        <option value=''>sobeler</option>
        <option value='management'>Management</option>
        <option value='security'>Recruitment</option>
        <option value='recruitment'>Security</option>
      </select>
      {one
        .filter((a) =>
          a.name.toLowerCase().includes(two) &&
          (main === '' || a.main === main)
        )
        .map((e, c) => (
          <div key={c}>
            <p>
              {e.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Employee;