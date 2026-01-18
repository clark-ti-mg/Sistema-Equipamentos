class EquipmentController {
  constructor(createEquipmentUseCase, listEquipmentUseCase) {
    this.createEquipmentUseCase = createEquipmentUseCase;
    this.listEquipmentUseCase = listEquipmentUseCase;
  }

  async create(req, res) {
    try {
      const { name, description, category, location, status } = req.body;
      const equipment = await this.createEquipmentUseCase.execute({
        name,
        description,
        category,
        location,
        status
      });
      return res.status(201).json(equipment);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {
      const equipments = await this.listEquipmentUseCase.execute();
      return res.json(equipments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EquipmentController;
