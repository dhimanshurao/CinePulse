import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Change useHistory to useNavigate
import './SeatSelection.css';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatCount, setSeatCount] = useState(1);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    // Retrieve the seat count from session storage
    const storedSeatCount = sessionStorage.getItem('seatCount');
    setSeatCount(storedSeatCount ? parseInt(storedSeatCount) : 1);
  }, []);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const handleNextClick = () => {
    // Store the selected seats and seat count in session storage or context
    sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    navigate('/Payment'); // Use navigate instead of history.push
  };

  const renderSeats = (rows) => {
    return rows.map((row, rowIndex) => (
      <Grid container spacing={1} key={rowIndex} className="seat-row">
        {row.map((seat) => (
          <Grid item key={seat}>
            <Button
              variant={selectedSeats.includes(seat) ? 'contained' : 'outlined'}
              onClick={() => handleSeatClick(seat)}
              className="seat-button"
            >
              {seat}
            </Button>
          </Grid>
        ))}
      </Grid>
    ));
  };

  const platinumSeats = [
    ['A10', 'A9', 'A8', 'A7', 'A6', 'A5', 'A4', 'A3', 'A2', 'A1'],
    ['B10', 'B9', 'B8', 'B7', 'B6', 'B5', 'B4', 'B3', 'B2', 'B1'],
    ['C10', 'C9', 'C8', 'C7', 'C6', 'C5', 'C4', 'C3', 'C2', 'C1'],
  ];

  const goldSeats = [
    ['D10', 'D9', 'D8', 'D7', 'D6', 'D5', 'D4', 'D3', 'D2', 'D1'],
    ['E10', 'E9', 'E8', 'E7', 'E6', 'E5', 'E4', 'E3', 'E2', 'E1'],
    ['F10', 'F9', 'F8', 'F7', 'F6', 'F5', 'F4', 'F3', 'F2', 'F1'],
    ['G10', 'G9', 'G8', 'G7', 'G6', 'G5', 'G4', 'G3', 'G2', 'G1'],
  ];

  const silverSeats = [
    ['H10', 'H9', 'H8', 'H7', 'H6', 'H5', 'H4', 'H3', 'H2', 'H1'],
    ['I10', 'I9', 'I8', 'I7', 'I6', 'I5', 'I4', 'I3', 'I2', 'I1'],
  ];

  return (
    <div className="seat-selection-container">
      <Typography variant="h4" className="seat-selection-title">
        Select Your Seats
      </Typography>
      <Typography variant="h6" className="seat-category">Rs. 150 PLATINUM</Typography>
      {renderSeats(platinumSeats)}
      <Typography variant="h6" className="seat-category">Rs. 130 GOLD</Typography>
      {renderSeats(goldSeats)}
      <Typography variant="h6" className="seat-category">Rs. 130 SILVER</Typography>
      {renderSeats(silverSeats)}
      <div className="price-and-next">
        <Typography variant="h6">Total Price: Rs. {seatCount * 150}</Typography>
        <Button variant="contained" onClick={handleNextClick}>
          Next
        </Button>
      </div>
      <div className="screen-indicator">
        <Typography variant="h6">All eyes this way please!</Typography>
      </div>
    </div>
  );
};

export default SeatSelection;