class Equipment {
  constructor(
    id,
    name,
    description,
    category,
    location,
    status = 'disponivel',
    createdAt = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.location = location;
    this.status = status;
    this.createdAt = createdAt;
  }

  isAvailable() {
    return this.status === 'disponivel';
  }

  setStatus(status) {
    const validStatus = ['disponivel', 'reservado', 'manutencao', 'indisponivel'];
    if (validStatus.includes(status)) {
      this.status = status;
    }
  }

  isValid() {
    return this.name && this.description && this.category && this.location;
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      category: this.category,
      location: this.location,
      status: this.status,
      available: this.isAvailable(),
      createdAt: this.createdAt
    };
  }
}

module.exports = Equipment;
