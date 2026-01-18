class Reservation {
  constructor(
    id,
    userId,
    equipmentId,
    startDate,
    endDate,
    status = 'pendente',
    createdAt = new Date()
  ) {
    this.id = id;
    this.userId = userId;
    this.equipmentId = equipmentId;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.status = status;
    this.createdAt = createdAt;
  }

  isPending() {
    return this.status === 'pendente';
  }

  isApproved() {
    return this.status === 'aprovada';
  }

  isRejected() {
    return this.status === 'rejeitada';
  }

  approve() {
    this.status = 'aprovada';
  }

  reject() {
    this.status = 'rejeitada';
  }

  cancel() {
    this.status = 'cancelada';
  }

  complete() {
    this.status = 'concluida';
  }

  getDurationHours() {
    return (this.endDate - this.startDate) / (1000 * 60 * 60);
  }

  isValid() {
    return this.userId && this.equipmentId && this.startDate < this.endDate;
  }

  getInfo() {
    return {
      id: this.id,
      userId: this.userId,
      equipmentId: this.equipmentId,
      startDate: this.startDate.toISOString(),
      endDate: this.endDate.toISOString(),
      status: this.status,
      durationHours: this.getDurationHours(),
      createdAt: this.createdAt
    };
  }
}

module.exports = Reservation;
