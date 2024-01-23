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
    const [rows] = await this.database.query(`
      SELECT 
        artwork.*, 
        artist.artist_name,
        category.cat_name,
        user.username
      FROM 
        ${this.table}
      JOIN artist ON ${this.table}.artist_id = artist.id
      JOIN category ON ${this.table}.category_id = category.id
      JOIN user ON ${this.table}.user_id = user.id
    `);

    return rows;
  }

  async readAllValidated() {
    const [rows] = await this.database.query(`
      SELECT 
        artwork.*, 
        artist.artist_name,
        category.cat_name
      FROM 
        ${this.table}
      JOIN artist ON ${this.table}.artist_id = artist.id
      JOIN category ON ${this.table}.category_id = category.id
      JOIN user ON ${this.table}.user_id = user.id
      WHERE ${this.table}.validated=1
    `);

    return rows;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `SELECT 
        artwork.*, 
        artist.artist_name,
        category.cat_name,
        user.username
      FROM 
        ${this.table}
      JOIN artist ON ${this.table}.artist_id = artist.id
      JOIN category ON ${this.table}.category_id = category.id
      JOIN user ON ${this.table}.user_id = user.id
      WHERE 
        ${this.table}.id = ?`,
      [id]
    );

    return rows;
  }

  async create(
    title,
    longitude,
    latitude,
    validated,
    catID,
    artistID,
    userID,
    pathPic
  ) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, adress, longitude, latitude, validated, category_id, artist_id, user_id, path_pic) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [title, longitude, latitude, validated, catID, artistID, userID, pathPic]
    );

    return result.insertId;
  }

  async update(
    id,
    pathPic,
    title,
    longitude,
    latitude,
    validated,
    catID,
    artistID,
    userID
  ) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET path_pic = ?, title = ?, longitude = ?, latitude = ?, validated = ?, category_id = ?, artist_id = ?, user_id = ? WHERE id = ?`,
      [
        pathPic,
        title,
        longitude,
        latitude,
        validated,
        catID,
        artistID,
        userID,
        id,
      ]
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
