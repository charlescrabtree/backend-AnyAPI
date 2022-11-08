const pool = require('../utils/pool');

module.exports = class Games {
  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.studio = row.studio;
    this.release_date = row.release_date;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from videogames');
    return rows.map((gameRow) => new Games(gameRow));
  }
};
