class IUserRepository {
  async findById(_id) {
    throw new Error('findById must be implemented');
  }

  async findByEmail(_email) {
    throw new Error('findByEmail must be implemented');
  }

  async create(_user) {
    throw new Error('create must be implemented');
  }

  async update(_user) {
    throw new Error('update must be implemented');
  }

  async findAll() {
    throw new Error('findAll must be implemented');
  }

  async delete(_id) {
    throw new Error('delete must be implemented');
  }
}

module.exports = IUserRepository;
