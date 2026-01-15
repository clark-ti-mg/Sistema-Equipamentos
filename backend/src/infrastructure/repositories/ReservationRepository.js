const IReservationRepository = require('../../domain/interfaces/IReservationRepository');
const Reservation = require('../../domain/entities/Reservation');

class ReservationRepository extends IReservationRepository {
  constructor(db) {
    super();
    this.db = db;
  }

  async findById(id) {
    const [rows] = await this.db.query('SELECT * FROM reservations WHERE id = ?', [id]);
    if (!rows.length) return null;
    const row = rows[0];
    return new Reservation(
      row.id,
      row.user_id,
      row.equipment_id,
      row.start_date,
      row.end_date,
      row.status,
      row.created_at
    );
  }

  async create(reservation) {
    const [result] = await this.db.query(
      'INSERT INTO reservations (user_id, equipment_id, start_date, end_date, status) VALUES (?, ?, ?, ?, ?)',
      [
        reservation.userId,
        reservation.equipmentId,
        reservation.startDate,
        reservation.endDate,
        reservation.status
      ]
    );
    return new Reservation(
      result.insertId,
      reservation.userId,
      reservation.equipmentId,
      reservation.startDate,
      reservation.endDate,
      reservation.status
    );
  }

  async update(reservation) {
    await this.db.query(
      'UPDATE reservations SET user_id = ?, equipment_id = ?, start_date = ?, end_date = ?, status = ? WHERE id = ?',
      [
        reservation.userId,
        reservation.equipmentId,
        reservation.startDate,
        reservation.endDate,
        reservation.status,
        reservation.id
      ]
    );
    return reservation;
  }

  async findByUserId(userId) {
    const [rows] = await this.db.query('SELECT * FROM reservations WHERE user_id = ?', [userId]);
    return rows.map(
      row => new Reservation(
        row.id,
        row.user_id,
        row.equipment_id,
        row.start_date,
        row.end_date,
        row.status,
        row.created_at
      )
    );
  }

  async findByEquipmentId(equipmentId) {
    const [rows] = await this.db.query(
      'SELECT * FROM reservations WHERE equipment_id = ?',
      [equipmentId]
    );
    return rows.map(
      row => new Reservation(
        row.id,
        row.user_id,
        row.equipment_id,
        row.start_date,
        row.end_date,
        row.status,
        row.created_at
      )
    );
  }

  async findConflictingReservations(equipmentId, startDate, endDate) {
    const [rows] = await this.db.query(
      `SELECT * FROM reservations 
       WHERE equipment_id = ? 
       AND status IN ('pendente', 'aprovada')
       AND (
         (start_date < ? AND end_date > ?)
         OR (start_date < ? AND end_date > ?)
         OR (start_date >= ? AND end_date <= ?)
       )`,
      [equipmentId, endDate, startDate, endDate, startDate, startDate, endDate]
    );
    return rows.map(
      row => new Reservation(
        row.id,
        row.user_id,
        row.equipment_id,
        row.start_date,
        row.end_date,
        row.status,
        row.created_at
      )
    );
  }

  async delete(id) {
    await this.db.query('DELETE FROM reservations WHERE id = ?', [id]);
  }
}

module.exports = ReservationRepository;
