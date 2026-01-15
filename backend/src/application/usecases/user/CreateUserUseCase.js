const bcrypt = require('bcryptjs');

class CreateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ name, email, password, type }) {
    // Validações
    if (!name || !email || !password || !type) {
      throw new Error('Name, email, password and type are required');
    }

    const validTypes = ['aluno', 'professor', 'servidor', 'admin'];
    if (!validTypes.includes(type)) {
      throw new Error('Invalid user type');
    }

    // Regra de negócio: email único
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar usuário
    const user = {
      name,
      email,
      password: hashedPassword,
      type
    };

    return await this.userRepository.create(user);
  }
}

module.exports = CreateUserUseCase;
