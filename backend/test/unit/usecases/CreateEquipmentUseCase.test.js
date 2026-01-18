const CreateEquipmentUseCase = require('../../../src/application/usecases/equipment/CreateEquipmentUseCase');

describe('CreateEquipmentUseCase', () => {
  let mockRepository;
  let useCase;

  beforeEach(() => {
    mockRepository = {
      create: jest.fn()
    };
    useCase = new CreateEquipmentUseCase(mockRepository);
  });

  test('should create equipment when data is valid', async () => {
    mockRepository.create.mockResolvedValue({
      id: 1,
      name: 'Projetor A',
      description: 'Projetor multimídia',
      category: 'projetor',
      location: 'Laboratório 1',
      status: 'disponivel'
    });

    const result = await useCase.execute({
      name: 'Projetor A',
      description: 'Projetor multimídia',
      category: 'projetor',
      location: 'Laboratório 1',
      status: 'disponivel'
    });

    expect(result.name).toBe('Projetor A');
    expect(mockRepository.create).toHaveBeenCalledTimes(1);
  });

  test('should throw error when required fields are missing', async () => {
    await expect(
      useCase.execute({
        name: '',
        category: '',
        location: ''
      })
    ).rejects.toThrow('Name, category and location are required');
  });
});
