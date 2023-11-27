import React, { useState, useEffect } from 'react';
import './Task.css';

const Employee = () => {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState('');
  const [main, setmain] = useState('');
  
  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, []);

  const search1 = (e) => {
    setSearch(e.target.value.toLowerCase());
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
      {result
        .filter((a) =>
          a.name.toLowerCase().includes(search) &&
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