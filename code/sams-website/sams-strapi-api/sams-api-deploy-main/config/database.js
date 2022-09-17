// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "ec2-54-246-87-132.eu-west-1.compute.amazonaws.com",
        port: "5432",
        database: "denulupeg7lf46",
        username: "fedwnfrxuwaiiv",
        password:
          "fab29a00857e96e9dd74b96dc4cf5020b97ef06bb4344f4f67cc6bad7d4d4f68",
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
});
