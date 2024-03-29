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

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `SELECT * from ${this.table} WHERE email=?`,
      [email]
    );
    return rows[0];
  }
  // The C of CRUD - Create operation

  async create(username, email, password) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, password) values (?, ?, ?)`,
      [username, email, password]
    );
    return result;
  }

  // The U of CRUD - Update operation

  async update(username, lastname, firstname, email, city, postalCode, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, lastname = ?, firstname = ?, email = ?,  city = ?, postal_code = ?  WHERE id = ?`,
      [username, lastname, firstname, email, city, postalCode, id],
      (err) => console.error(err)
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

  async addScore(score, id) {
    const [result] = await this.database.query(
      "UPDATE user SET score = ? WHERE id = ?",
      [score, id]
    );
    return result.affectedRows;
  }
}

module.exports = UserManager;
