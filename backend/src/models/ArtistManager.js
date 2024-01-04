const AbstractManager = require("./AbstractManager");

class ArtistManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table task "item" as configuration
    super({ table: "artist" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select * from ${this.table} ORDER BY artist_name ASC`
    );
    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `
    SELECT artist_name FROM ${this.table} WHERE id=?`,
      [id]
    );
    return rows[0];
  }

  async create(artistName) {
    const [result] = await this.database.query(
      `
    INSERT INTO ${this.table} (artist_name) VALUES (?)`,
      [artistName]
    );
    return result;
  }
}

module.exports = ArtistManager;
