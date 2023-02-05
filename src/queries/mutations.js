const mutationQueries = {
  getToken: `
        mutation signIn($apiKey: String!, $password: String!) {
            signIn(apiKey: $apiKey, password: $password) {
                token
            }
        }
    `,

  postCita: `
      mutation createBooking(
        $bookingData: BookingDataInput
      ) {
        createBooking(
          bookingData: $bookingData
        ) {
        data {
            doctorName
          }
          error
        }
      }
  `,

  postCancelarCita: `
      mutation deleteBooking($id: ID!) {
        deleteBooking(id: $id) {
          data {
            doctorName
            cancellationReason
            appointment{
              title
              duration
              price
            }
          }
          error
        }
      }
  `,
};

module.exports = mutationQueries;
