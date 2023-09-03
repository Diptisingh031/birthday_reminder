import React, { useState, useEffect } from 'react';
import './App.css';
import {birthdays} from './data';

function App() {
  const [birthdayData, setBirthdayData] = useState(birthdays);

  const removeBirthday = (id) => {
    setBirthdayData(birthdayData.filter((birthday) => birthday.id !== id));
  };

  useEffect(() => {
    
  }, [birthdayData]);

  return (
    <div className="App">
      <h1>Birthday Reminder</h1>
      <div className= "birthday-list">
      {birthdayData.map((birthday) => (
          <div key={birthday.id} className="birthday-card">
            <img src={birthday.imageUrl} alt='NA' />
            <h2>{birthday.name}</h2>
            <p>{new Date(birthday.date).toDateString()}</p>
            <p>Age: {birthday.age}</p>
            <button onClick={() => removeBirthday(birthday.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
    
export default App;
