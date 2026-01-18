class ListEquipmentUseCase {
  constructor(equipmentRepository) {
    this.equipmentRepository = equipmentRepository;
  }

  async execute() {
    return this.equipmentRepository.findAll();
  }
}

module.exports = ListEquipmentUseCase;
