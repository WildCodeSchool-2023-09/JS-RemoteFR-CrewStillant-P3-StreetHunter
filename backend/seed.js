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

    // Insert fake data into the 'item' table
    await database.query(
      "INSERT INTO CATEGORY (cat_name) VALUES ('realistic'),('abstract'),('8bit')"
    );
    await database.query(
      "INSERT INTO ROLE (role_name) VALUES ('Administrator'),('user'),('visitor')"
    );
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("INSERT INTO ARTIST (artist_name) VALUES (?)", [
          faker.animal.bear(),
        ])
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into user( username, lastname, firstname, email, password, score, created_at, city, postal_code, role_id ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            faker.internet.displayName(),
            faker.person.lastName(),
            faker.person.firstName(),
            faker.internet.email(),
            faker.internet.password(),
            faker.number.int({ min: 1, max: 300 }),
            faker.date.past(),
            faker.location.city(),
            faker.location.zipCode(),
            faker.number.int({ min: 1, max: 3 }),
          ]
        )
      );
    }
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into artwork( path_pic, title, coordinates, validated, category_id, artist_id, user_id) values (?, ?, point( ?, ?), ?, ?, ?, ?)",
          [
            faker.image.url(),
            faker.lorem.word(),
            faker.location.latitude(),
            faker.location.longitude(),
            faker.number.binary(),
            faker.number.int({ min: 1, max: 3 }),
            faker.number.int({ min: 1, max: 10 }),
            faker.number.int({ min: 1, max: 10 }),
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
