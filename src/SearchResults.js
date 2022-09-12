import React, { useState } from "react";
const moment = require("moment");

function SearchResults(props) {
  let [selectedRows, setSelectedRows] = useState([]);

  const highlightBookingRow = id => {
    setSelectedRows(prev => ({ ...prev, [id]: !selectedRows[id] }));
  };

  const calculateNumberOfNights = (inDate, outDate) => {
    const dateA = moment(outDate);
    const dateB = moment(inDate);
    return dateA.diff(dateB, "days");
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(booking => (
            <tr
              onClick={() => highlightBookingRow(booking.id)}
              className={selectedRows[booking.id] ? "highlighted-row" : ""}
            >
              <th scope="row">{booking.id}</th>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                {calculateNumberOfNights(
                  booking.checkInDate,
                  booking.checkOutDate
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
