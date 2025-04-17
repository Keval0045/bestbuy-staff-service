const express = require('express');
const app = express();
require('dotenv').config();
const staffRoutes = require('./routes/staff');

app.use(express.json());
app.use('/api/staff', staffRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
