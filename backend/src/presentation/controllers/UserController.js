class UserController {
  constructor(createUserUseCase, authenticateUserUseCase, findUserByIdUseCase) {
    this.createUserUseCase = createUserUseCase;
    this.authenticateUserUseCase = authenticateUserUseCase;
    this.findUserByIdUseCase = findUserByIdUseCase;
  }

  async create(req, res) {
    // já existente (RF01)
  }

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;
      const result = await this.authenticateUserUseCase.execute({ email, password });
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async findById(req, res) {
    // já existente
  }
}

module.exports = UserController;
