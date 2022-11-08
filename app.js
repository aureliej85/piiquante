const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const sauceRoutes= require('./routes/sauce');
const Sauce = require('./models/Sauce');

const app = express();


mongoose.connect('mongodb+srv://aureliej:piiquante246@cluster0.0ekcryy.mongodb.net/p6?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(express.json());



app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);
module.exports = app;