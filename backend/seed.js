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
    // await database.query(" user");
    for (let i = 0; i < 5; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO user( username, lastName, firstName, email, password, score, city, postal_code ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
          [
            faker.internet.displayName(),
            faker.person.lastName(),
            faker.person.firstName(),
            faker.internet.email(),
            faker.internet.password(),
            faker.number.float(),
            faker.location.city(),
            faker.location.zipCode(),
          ]
        )
      );
    }

    await database.query(
      "INSERT INTO category ( cat_name ) VALUES ('Retro'),('Caligraphy'),('Abstract'),('Realistic')"
    );

    for (let i = 0; i < 5; i += 1) {
      queries.push(
        database.query("INSERT INTO artist ( artist_name ) VALUES (?)", [
          faker.internet.displayName(),
        ])
      );
    }

    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into artwork( path_pic, title, longitude, latitude, category_id, artist_id, user_id) values (?, ?, ?, ?, ?, ?, ?)",
          [
            faker.image.url(),
            faker.lorem.word(),
            faker.location.longitude(),
            faker.location.latitude(),
            faker.number.int({ min: 1, max: 3 }),
            faker.number.int({ min: 1, max: 5 }),
            faker.number.int({ min: 1, max: 5 }),
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
