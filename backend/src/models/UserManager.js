const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }
  // The Rs of CRUD - Read operations

  async readAll() {
    const [rows] = await this.database.query(`SELECT * from ${this.table}`);
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `SELECT * from ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  // The C of CRUD - Create operation

  async create(
    username,
    lastname,
    firsname,
    email,
    password,
    score,
    createdAt,
    city,
    postalCode,
    roleId
  ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, lastname, firstname, email, password, score, created_at, city, postal_code, role_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        username,
        lastname,
        firsname,
        email,
        password,
        score,
        createdAt,
        city,
        postalCode,
        roleId,
      ]
    );
    return result;
  }

  // The U of CRUD - Update operation

  async update(
    userName,
    lastName,
    firstName,
    email,
    password,
    score,
    city,
    postalCode,
    roleId,
    id
  ) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, lastname = ?, firstname = ?, email = ?, password = ?, score =?, city = ?, postal_code = ?, role_id = ?  WHERE id = ?`,
      [
        userName,
        lastName,
        firstName,
        email,
        password,
        score,
        city,
        postalCode,
        roleId,
        id,
      ]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }

  async addScore(id, score) {
    const [result] = await this.database.query(
      "UPDATE user SET score = ? WHERE id = ?",
      [score, id]
    );
    return result.affectedRows;
  }
}

module.exports = UserManager;
