const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    super({ table: "artwork" });
  }

  async validateArtwork(id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET validated = TRUE WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0] || null;
  }

  async create(title, adress, validated, categorieID) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, adress, validated, category_id) VALUES (?, ?, ?, ?)`,
      [title, adress, validated, categorieID]
    );

    return result.insertId;
  }

  async update(id, title, validated, categoryID) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, validated = ?, category_id = ?, WHERE id = ?`,
      [title, validated, categoryID, id]
    );

    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = ArtworkManager;
