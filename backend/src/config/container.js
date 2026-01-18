const db = require('../infrastructure/database/connection');
const UserRepository = require('../infrastructure/repositories/UserRepository');
const CreateUserUseCase = require('../application/usecases/user/CreateUserUseCase');
const AuthenticateUserUseCase = require('../application/usecases/user/AuthenticateUserUseCase');
const UserController = require('../presentation/controllers/UserController');

const userRepository = new UserRepository(db);
const createUserUseCase = new CreateUserUseCase(userRepository);
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const userController = new UserController(
  createUserUseCase,
  authenticateUserUseCase,
  null // findUserByIdUseCase depois
);

module.exports = {
  userController,
  userRepository
};
