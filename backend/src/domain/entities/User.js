class User {
  constructor(id, name, email, password, type, createdAt = new Date()) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type; // aluno, professor, servidor, admin
    this.createdAt = createdAt;
  }

  isAdmin() {
    return this.type === 'admin';
  }

  isValid() {
    return this.name && this.email && this.password && this.type;
  }

  getPublicInfo() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      type: this.type,
      createdAt: this.createdAt
    };
  }
}

module.exports = User;
