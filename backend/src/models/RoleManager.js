const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  constructor() {
    super({ table: "role" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select * from ${this.table} ORDER BY role_name ASC`
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `
    SELECT role_name FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows[0];
  }

  async create(roleName) {
    const [result] = await this.database.query(
      `
    INSERT INTO ${this.table} (role_name) VALUES (?)`,
      [roleName]
    );
    return result;
  }

  async update(roleName, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET role_name=? WHERE ID=? `,
      [roleName, id]
    );
    return result.affectedRows;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result;
  }
}

module.exports = RoleManager;
