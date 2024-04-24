let restaurant = {
  name: "Vodenica",
  guestCapacity: 100,
  guestCount: 0,

  /*
This Keyword:
 - When used in an object method, this refers to the object
 - When alone, this refers to the global object
*/
  // console.log("this", this);

  // Method to check availavility of seats
  checkAvailability: function (guests) {
    // Calculate the number of available seats
    let seatsAvailable = this.guestCapacity - this.guestCount;
    // Check if there are enought available seats
    return guests <= seatsAvailable;
  },
  // Method to seat a party
  setParty: function (guests) {
    // Check if there's enought capacity to seat the guests
    if (this.checkAvailability(guests)) {
      // If there's enough capacity, increase the guest count
      this.guestCount += guests; // this.guestCount = this.guestCount + guests
      console.log(`Successfully seated ${guests} guests.`);
    } else {
      console.log("Not enough seats available to seat the guests.");
    }
  },
  // Method to remove a party
  removeParty: function (guests) {
    // Ensure the party size to be removed is not more than the current guest count
    if (guests <= this.guestCount) {
      // If the party size to be removed is valid, decrease the guest count
      this.guestCount -= guests;
      console.log(`Successfully removed ${guests} guests`);
    } else {
      console.log(
        "Invalid party size, Cannot remove more guests than the current count"
      );
    }
  },
};

// Check availability for a party of 10
let areThereAvailableSeats = restaurant.checkAvailability(10);
console.log("Are thre available seats: ", areThereAvailableSeats);
console.log("Current guest count:", restaurant.guestCount);

let seatPartyGuests = restaurant.setParty(10);
console.log(
  "Current guest count after seatPartyGuests:",
  restaurant.guestCount
);

let removeGuests = restaurant.removeParty(10);
console.log("New guest count after removing the party", restaurant.guestCount);
