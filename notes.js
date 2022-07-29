// Importing the fs module
const fs = require("fs");

// Adding reservations to the list
const addReservation = (name, time, seats) => {
  const reservations = loadReservation();
  const duplicateReservation = reservations.find(
    (reservation) => reservation.name === name || reservation.time === time
  );
  if (!duplicateReservation) {
    reservations.push({
      name: name,
      time: time,
      seats: seats,
    });
  } else {
    console.log("Reservation not available");
  }
  savedReservations(reservations);
};

//Listing the reservations
const list = () => {
  const reservations = loadReservation();
  reservations.forEach((reservation) => {
    console.log(reservation.name);
  });
};

//Reading from the reservation
const read = (name) => {
  const reservations = loadReservation();
  const reservation = reservations.forEach((reservation) => {
    reservation.name === name;
  });
  if (reservation) {
    console.log(reservation.name);
    console.log(reservation.time);
    console.log(reservation.seats);
  } else {
    console.log("Reservation not found");
  }
};
// Cancelling and removing the reservations
const cancelReservation = (name) => {
  const reservations = loadReservation();
  const reservationsToKeep = reservations.filter((reservation) => {
    return reservation.name !== name;
  });
  savedReservations(reservationsToKeep);
};

// Loading the list
const loadReservation = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json", {
      encoding: "utf8",
      flag: "r",
    });
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// Saving the reservations
const savedReservations = (reservations) => {
  const dataJSON = JSON.stringify(reservations);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addReservation: addReservation,
  cancelReservation: cancelReservation,
  list: list,
  read: read,
};
