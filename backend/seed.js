/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("truncate user");

    // Insert fake data into the 'item' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into user( username, lastName, firstName, email, password, score, city, postalCode, roleId ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            faker.internet.displayName(),
            faker.person.lastName(),
            faker.person.firstName(),
            faker.internet.email(),
            faker.internet.password(),
            faker.number.float(),
            faker.location.city(),
            faker.location.zipCode(),
            faker.number.integer(),
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
