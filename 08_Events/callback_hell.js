function bookVenue(callback) {
  //* Simulate an asynchronous operation
  setTimeout(() => {
    console.log('Venue booked');
    callback('venue');
  }, 1000);
}

function orderCake(venue, callback) {
  //* Simulate an asynchronous operation
  setTimeout(() => {
    console.log('Cake ordered for', venue);
    callback('cake');
  }, 1000);
}

// function sendInvitations(cake, callback) {
//   //* Simulate an asynchronous operation
//   setTimeout(() => {
//     console.log('Invitations sent with', cake);
//     callback('invitations');
//   }, 1000);
// }

function decorateVenue(invitations, callback) {
  //* Simulate an asynchronous operation
  setTimeout(() => {
    console.log('Venue decorated with', invitations);
    callback();
  }, 1000);
}

//* Execute the functions with nested callbacks
bookVenue(function(venue) {
  orderCake(venue, function(cake) {
    sendInvitations(cake, function(invitations) {
      decorateVenue(invitations, function() {
        console.log('Party is ready!');
      });
    });
  });
});