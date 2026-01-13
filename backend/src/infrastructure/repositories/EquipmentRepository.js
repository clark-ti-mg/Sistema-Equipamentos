const IEquipmentRepository = require('../../domain/interfaces/IEquipmentRepository');
const Equipment = require('../../domain/entities/Equipment');

class EquipmentRepository extends IEquipmentRepository {
  constructor(db) {
    super();
    this.db = db;
  }

  async findById(id) {
    const [rows] = await this.db.query('SELECT * FROM equipment WHERE id = ?', [id]);
    if (!rows.length) return null;
    const row = rows[0];
    return new Equipment(
      row.id,
      row.name,
      row.description,
      row.category,
      row.location,
      row.status,
      row.created_at
    );
  }

  async create(equipment) {
    const [result] = await this.db.query(
      'INSERT INTO equipment (name, description, category, location, status) VALUES (?, ?, ?, ?, ?)',
      [equipment.name, equipment.description, equipment.category, equipment.location, equipment.status]
    );
    return new Equipment(
      result.insertId,
      equipment.name,
      equipment.description,
      equipment.category,
      equipment.location,
      equipment.status
    );
  }

  async update(equipment) {
    await this.db.query(
      'UPDATE equipment SET name = ?, description = ?, category = ?, location = ?, status = ? WHERE id = ?',
      [equipment.name, equipment.description, equipment.category, equipment.location, equipment.status, equipment.id]
    );
    return equipment;
  }

  async findAll() {
    const [rows] = await this.db.query('SELECT * FROM equipment');
    return rows.map(
      row => new Equipment(
        row.id,
        row.name,
        row.description,
        row.category,
        row.location,
        row.status,
        row.created_at
      )
    );
  }

  async findByCategory(category) {
    const [rows] = await this.db.query('SELECT * FROM equipment WHERE category = ?', [category]);
    return rows.map(
      row => new Equipment(
        row.id,
        row.name,
        row.description,
        row.category,
        row.location,
        row.status,
        row.created_at
      )
    );
  }

  async delete(id) {
    await this.db.query('DELETE FROM equipment WHERE id = ?', [id]);
  }
}

module.exports = EquipmentRepository;
