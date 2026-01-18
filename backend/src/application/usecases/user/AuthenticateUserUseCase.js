const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthenticateUserUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({ email, password }) {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    const tokenPayload = {
      id: user.id,
      email: user.email,
      type: user.type
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
      expiresIn: '2h'
    });

    return {
      user: user.getPublicInfo ? user.getPublicInfo() : tokenPayload,
      token
    };
  }
}

module.exports = AuthenticateUserUseCase;
