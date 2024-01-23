const AbstractManager = require("./AbstractManager");

class MessagingManager extends AbstractManager {
  constructor() {
    super({ table: "messaging" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} ORDER BY created_at ASC`
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows[0];
  }

  async create(title, body) {
    const [result] = await this.database.query(
      ` INSERT INTO ${this.table} (title, body) VALUES (?,?)`,
      [title, body]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result;
  }
}

module.exports = MessagingManager;
