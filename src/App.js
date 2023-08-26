import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: 'Dipti', date: '01-01-2004' },
    { id: 2, name: 'John', date: '01-12-1989' },
    { id: 3, name: 'Harry', date:'01-12-1999' },
    { id: 3, name: 'Hari', date:'01-12-1929' },
    { id: 3, name: 'Jack', date:'12-12-1999' },
    
  ]);


  const removeBirthday = (id) => {
    setBirthdays(birthdays.filter((birthday) => birthday.id !== id));
  };

  useEffect(() => {
    
  }, [birthdays]);

  return (
    <div className="App">
      <h1>Birthday Reminder</h1>
      <div className= "birthday-list">
      {birthdays.map((birthday) => (
          <div key={birthday.id} className="birthday-card">
            <h2>{birthday.name}</h2>
            <p>{new Date(birthday.date).toDateString()}</p>
            <button onClick={() => removeBirthday(birthday.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
    
export default App;
