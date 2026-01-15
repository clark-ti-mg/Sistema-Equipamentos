class IReservationRepository {
  async findById(_id) {
    throw new Error('findById must be implemented');
  }

  async create(_reservation) {
    throw new Error('create must be implemented');
  }

  async update(_reservation) {
    throw new Error('update must be implemented');
  }

  async findByUserId(_userId) {
    throw new Error('findByUserId must be implemented');
  }

  async findByEquipmentId(_equipmentId) {
    throw new Error('findByEquipmentId must be implemented');
  }

  async findConflictingReservations(_equipmentId, _startDate, _endDate) {
    throw new Error('findConflictingReservations must be implemented');
  }

  async delete(_id) {
    throw new Error('delete must be implemented');
  }
}

module.exports = IReservationRepository;
