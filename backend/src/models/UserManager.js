const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, lastname, firstname, email, password, score, created_at, city, postal_code, role_id) values (?)`,
      [
        user.username,
        user.lastname,
        user.firstname,
        user.email,
        user.password,
        user.score,
        user.created_at,
        user.city,
        user.postal_code,
        user.role_id,
      ]
    );
    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * from ${this.table} WHERE ID = ?`,
      [id]
    );
    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`SELECT * from ${this.table}`);
    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, user) {
    const {
      username,
      lastname,
      firstname,
      email,
      password,
      score,
      created_at: createdAt,
      city,
      postal_code: postalCode,
      role_id: roleId,
    } = user;
    const updateFields = [];
    const updateParams = [];

    if (username !== undefined) {
      updateFields.push("username = ?");
      updateParams.push(username);
    }
    if (lastname !== undefined) {
      updateFields.push("lastname = ?");
      updateParams.push(lastname);
    }
    if (firstname !== undefined) {
      updateFields.push("firstname = ?");
      updateParams.push(firstname);
    }
    if (email !== undefined) {
      updateFields.push("email = ?");
      updateParams.push(email);
    }
    if (password !== undefined) {
      updateFields.push("password = ?");
      updateParams.push(password);
    }
    if (score !== undefined) {
      updateFields.push("score = ?");
      updateParams.push(score);
    }
    if (createdAt !== undefined) {
      updateFields.push("created_at = ?");
      updateParams.push(createdAt);
    }
    if (city !== undefined) {
      updateFields.push("city = ?");
      updateParams.push(city);
    }
    if (postalCode !== undefined) {
      updateFields.push("postal_code = ?");
      updateParams.push(postalCode);
    }
    if (roleId !== undefined) {
      updateFields.push("role_id = ?");
      updateParams.push(roleId);
    }

    const updateQuery = `UPDATE ${this.table} SET ${updateFields.join(
      ", "
    )} WHERE id = ?`;
    const queryParams = [...updateParams, id];
    const [result] = await this.database.query(updateQuery, queryParams);
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }
}

module.exports = UserManager;
