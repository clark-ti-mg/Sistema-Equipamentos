class CreateEquipmentUseCase {
  constructor(equipmentRepository) {
    this.equipmentRepository = equipmentRepository;
  }

  async execute({ name, description, category, location, status = 'disponivel' }) {
    if (!name || !category || !location) {
      throw new Error('Name, category and location are required');
    }

    const equipment = {
      name,
      description: description || '',
      category,
      location,
      status
    };

    return this.equipmentRepository.create(equipment);
  }
}

module.exports = CreateEquipmentUseCase;
