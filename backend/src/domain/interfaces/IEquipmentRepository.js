class IEquipmentRepository {
  async findById(_id) {
    throw new Error('findById must be implemented');
  }

  async create(_equipment) {
    throw new Error('create must be implemented');
  }

  async update(_equipment) {
    throw new Error('update must be implemented');
  }

  async findAll() {
    throw new Error('findAll must be implemented');
  }

  async findByCategory(_category) {
    throw new Error('findByCategory must be implemented');
  }

  async delete(_id) {
    throw new Error('delete must be implemented');
  }
}

module.exports = IEquipmentRepository;
