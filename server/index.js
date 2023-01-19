const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const ingredientRoutes = require('./routes/ingredientRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/ingredients', ingredientRoutes);
app.use('/api/v1/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUniFiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB connected`);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
