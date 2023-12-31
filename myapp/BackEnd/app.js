const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', cartRoutes);
app.use('/api', bookRoutes);

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
