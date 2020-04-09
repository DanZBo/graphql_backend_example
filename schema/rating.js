const {gql} = require('apollo-server-express');


module.exports = gql`
type Query{
  rating(page: Int): [User!]
}

type User{
   name: String,
   color: String,
   speed: Int,
   time: Int
}
`;