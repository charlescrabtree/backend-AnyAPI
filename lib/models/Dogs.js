const pool = require('../utils/pool');

module.exports = class Dogs {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.breed = row.breed;
    this.owner = row.owner;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * from dogs');
    return rows.map((dogRow) => new Dogs(dogRow));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from dogs WHERE id = $1', [id]
    );
    return new Dogs(rows[0]);
  }
};
