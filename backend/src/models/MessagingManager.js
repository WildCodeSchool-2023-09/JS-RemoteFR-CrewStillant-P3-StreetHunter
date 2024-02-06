const AbstractManager = require("./AbstractManager");

class MessagingManager extends AbstractManager {
  constructor() {
    super({ table: "messaging" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT m.*, u.username 
      FROM ${this.table} as m 
      JOIN user AS u ON m.user_id = u.id
      ORDER BY m.created_at DESC`
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

  async create(title, body, sub) {
    const [result] = await this.database.query(
      ` INSERT INTO ${this.table} (title, body, user_id) VALUES (?,?,?)`,
      [title, body, sub]
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
