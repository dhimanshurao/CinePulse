import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change useHistory to useNavigate

const SeatCount = () => {
  const [seatCount, setSeatCount] = useState(1);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSeatCountChange = (e) => {
    setSeatCount(e.target.value);
  };

  const handleNextClick = () => {
    // Store the seat count in session storage
    sessionStorage.setItem('seatCount', seatCount);
    navigate('/Seats'); // Use navigate instead of history.push
  };

  return (
    <div>
      <h2>How many seats do you want to book?</h2>
      <input type="number" min="1" value={seatCount} onChange={handleSeatCountChange} />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default SeatCount;