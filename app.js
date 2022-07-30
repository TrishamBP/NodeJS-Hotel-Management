const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const notes = require("./notes");

// Creating the add reservation command
yargs(hideBin(process.argv))
  .command({
    command: "reserve",
    describe: "Reserving a table",
    builder: {
      name: {
        describe: "Name for reservation",
        demandOption: true,
        type: "string",
      },

      time: {
        describe: "Time of reservation",
        demandOption: true,
        type: "string",
      },

      seats: {
        describe: "Number of seats for reservation",
        demandOption: true,
        type: "int",
      },
    },
    handler: (argv) => {
      notes.addReservation(argv.name, argv.time, argv.seats);
    },
  })
  .parse();

// Cancelling the reservation
yargs(hideBin(process.argv))
  .command({
    command: "cancel",
    describe: "Cancelling your reservation",
    builder: {
      name: {
        describe: "Name for reservation",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      notes.cancelReservation(argv.name);
    },
  })
  .parse();

// Listing all the reservations
yargs(hideBin(process.argv))
  .command({
    command: "list",
    describe: "Listing the reservations",
    handler: () => {
      console.log("This is the list command");
    },
  })
  .parse();

// Reading reservations based on title
yargs(hideBin(process.argv))
  .command({
    command: "read",
    describe: "Reading your reservation",
    builder: {
      name: {
        describe: "Name for reservation",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      notes.read(argv.name);
    },
  })
  .parse();
