const queries = {
  getPaciente: `
      query patient($id: ID!,  $start: Date!, $end: Date!) {
        patient(id: $id) {
          id
          title
          status
          firstName
          lastName
          fullName
          dob
          gender
          sex
          email
          googleClientId
          comments,
          bookings(start: $start, end: $end) {
            id
            deleted
            cancellationReason
            doctorName
          }
        }
      }
  `,
  getPacientes: `
        query patients($search: String, $pagination: Pagination,  $start: Date!, $end: Date! ) {
          patients(search: $search, pagination: $pagination) {
            data {
              id
              title
              status
              firstName
              lastName
              fullName,
              dob,
              gender,
              sex,
              email,
              googleClientId,
              paymentReference,
              phones {
                phoneNumber
              }
              occupation,
              address {
                address,
                postcode
              }
              bookings(start: $start, end: $end) {
                id
                deleted
                cancellationReason
                doctorName
              }
            }
            pageInfo {
              page
              pageSize
            }
          }
        }
    `,
  getDoctores: `
      query users($pagination: Pagination, $start: Date!, $end: Date!) {
        users(pagination: $pagination) {
          data {
            id
            firstName
            lastName
            email
            fullName
            isDoctor
            qualifications
            registration
            accessGroups {
              id
              name
              label
            }
            bookings (start: $start, end: $end) {
              data {
                id
                deleted
                cancellationReason
                doctorName
                location{
                  address {
                    postcode
                    address
                  }
                }
              
                start
                end
                patient {
                  fullName
                }
                patientId
              
                updatedAt
                videoUrl
                comments
                reference
              }
            }
          }
          pageInfo {
            page
            pageSize
          }
        }
      }
    `,

  getDoctor: `
      query user($id: ID!, $start: Date!, $end: Date!) {
        user(id: $id) {
          id
          firstName
          lastName
          email
          fullName
          isDoctor
          qualifications
          registration
          accessGroups {
            id
            name
            label
          }
          bookings(start: $start, end: $end) {
            data{
              id
              doctorName
              location {
                header
                name 
                address {
                  city
                  postcode
                }
              }
              appointment {
                title
                duration
                price
              }
              start
              end
              
            }
          }
          letters {
            data {
              patient {
                fullName
                email
              }
              doctor {
                fullName
                email
              }
              date
              title
              body
            }
          }
          servicesProvided {
            status
            labels {
              color
              text
            }
            name
            price
            duration
            appointments {
              labels {
                color
                text
              }
              name
              price
            }
            
          }
        }
      }
      
    `,
};

module.exports = queries;
