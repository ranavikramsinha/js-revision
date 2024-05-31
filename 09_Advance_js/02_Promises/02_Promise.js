function bookVenue() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Venue booked');
        resolve('venue');
      }, 1000);
    });
  }
  
  function orderCake(venue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Cake ordered for', venue);
        resolve('cake');
      }, 1000);
    });
  }
  
  function sendInvitations(cake) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Invitations sent with', cake);
        resolve('invitations');
      }, 1000);
    });
  }
  
  function decorateVenue(invitations) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Venue decorated with', invitations);
        resolve();
      }, 1000);
    });
  }

//* promise used
  
//   bookVenue()
//     .then(orderCake) //* bookVenue resolve connect to orderCake
//     .then(sendInvitations) //* orderCake resolve connect sendInvitations
//     .then(decorateVenue) //* sendInvitation resolve connect decorateVenue
//     .then(() => {
//       console.log('Party is ready!');
//     })
//     .catch(error => {
//       console.error('An error occurred:', error);
//     });

//* async and wait used

    async function prepareParty() {
        try {
          const venue = await bookVenue();
          const cake = await orderCake(venue);
          const invitations = await sendInvitations(cake);
          await decorateVenue(invitations);
          console.log('Party is ready!');
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }
      
      prepareParty();
      