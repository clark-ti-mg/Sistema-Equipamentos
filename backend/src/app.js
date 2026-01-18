const equipmentRoutes = require('./presentation/routes/equipmentRoutes');

app.use('/api', userRoutes);
app.use('/api', equipmentRoutes);
