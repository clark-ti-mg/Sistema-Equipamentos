const IUserRepository = require('../../domain/interfaces/IUserRepository');
const User = require('../../domain/entities/User');

class UserRepository extends IUserRepository {
  constructor(db) {
    super();
    this.db = db;
  }

  async findById(id) {
    const [rows] = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
    if (!rows.length) return null;
    const row = rows[0];
    return new User(row.id, row.name, row.email, row.password, row.type, row.created_at);
  }

  async findByEmail(email) {
    const [rows] = await this.db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (!rows.length) return null;
    const row = rows[0];
    return new User(row.id, row.name, row.email, row.password, row.type, row.created_at);
  }

  async create(user) {
    const [result] = await this.db.query(
      'INSERT INTO users (name, email, password, type) VALUES (?, ?, ?, ?)',
      [user.name, user.email, user.password, user.type]
    );
    return new User(result.insertId, user.name, user.email, user.password, user.type);
  }

  async update(user) {
    await this.db.query(
      'UPDATE users SET name = ?, email = ?, type = ? WHERE id = ?',
      [user.name, user.email, user.type, user.id]
    );
    return user;
  }

  async findAll() {
    const [rows] = await this.db.query('SELECT * FROM users');
    return rows.map(
      row => new User(row.id, row.name, row.email, row.password, row.type, row.created_at)
    );
  }

  async delete(id) {
    await this.db.query('DELETE FROM users WHERE id = ?', [id]);
  }
}

module.exports = UserRepository;
