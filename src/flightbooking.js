import React, { useState } from "react";
import "./flight.css";

function App() {
  const [tripType, setTripType] = useState("one-way");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Details:\nTrip Type: ${tripType}\nFrom: ${from}\nTo: ${to}\nDeparture Date: ${departureDate}\nReturn Date: ${returnDate}`
    );
  };

  return (
    <div className="container">
      <h1>Flight Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Trip Type</label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <option value="one-way">One Way</option>
            <option value="round-trip">Round Trip</option>
          </select>
        </div>

        <div className="form-group">
          <label>From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Departure City"
            required
          />
        </div>

        <div className="form-group">
          <label>To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Destination City"
            required
          />
        </div>

        <div className="form-group">
          <label>Departure Date</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>

        {tripType === "round-trip" && (
          <div className="form-group">
            <label>Return Date</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </div>
        )}

        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
}

export default App;