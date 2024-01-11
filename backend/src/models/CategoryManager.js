const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} ORDER BY cat_name ASC`
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `SELECT cat_name FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows[0];
  }

  async create(catName) {
    const [result] = await this.database.query(
      ` INSERT INTO ${this.table} (cat_name) VALUES (?)`,
      [catName]
    );
    return result;
  }

  async update(catName, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET cat_name=? where ID=?`,
      [catName, id]
    );
    console.info(result);
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result;
  }
}

module.exports = CategoryManager;
