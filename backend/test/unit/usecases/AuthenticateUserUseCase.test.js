const AuthenticateUserUseCase = require('../../../src/application/usecases/user/AuthenticateUserUseCase');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

describe('AuthenticateUserUseCase', () => {
  let mockUserRepository;
  let useCase;

  beforeEach(() => {
    mockUserRepository = {
      findByEmail: jest.fn()
    };
    useCase = new AuthenticateUserUseCase(mockUserRepository);
  });

  test('should authenticate and return token', async () => {
    const userMock = {
      id: 1,
      email: 'joao@example.com',
      password: await bcrypt.hash('123456', 10),
      type: 'aluno',
      getPublicInfo: () => ({ id: 1, email: 'joao@example.com', type: 'aluno' })
    };

    mockUserRepository.findByEmail.mockResolvedValue(userMock);

    const result = await useCase.execute({
      email: 'joao@example.com',
      password: '123456'
    });

    expect(result.user.email).toBe('joao@example.com');
    expect(result.token).toBeDefined();
    const decoded = jwt.decode(result.token);
    expect(decoded.email).toBe('joao@example.com');
  });

  test('should throw if user not found', async () => {
    mockUserRepository.findByEmail.mockResolvedValue(null);

    await expect(
      useCase.execute({ email: 'x@example.com', password: '123456' })
    ).rejects.toThrow('Invalid credentials');
  });
});
