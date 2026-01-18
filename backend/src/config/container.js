const EquipmentRepository = require('../infrastructure/repositories/EquipmentRepository');
const CreateEquipmentUseCase = require('../application/usecases/equipment/CreateEquipmentUseCase');
const ListEquipmentUseCase = require('../application/usecases/equipment/ListEquipmentUseCase');
const EquipmentController = require('../presentation/controllers/EquipmentController');

// ...

const equipmentRepository = new EquipmentRepository(db);
const createEquipmentUseCase = new CreateEquipmentUseCase(equipmentRepository);
const listEquipmentUseCase = new ListEquipmentUseCase(equipmentRepository);
const equipmentController = new EquipmentController(
  createEquipmentUseCase,
  listEquipmentUseCase
);

module.exports = {
  userController,
  userRepository,
  equipmentController,
  equipmentRepository
};
