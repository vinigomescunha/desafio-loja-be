const express = require('express');
const router = express.Router();

// eu injeto o modelo nas rotas 
module.exports = async (model) => {
  router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  router.get('/', async (req, res) => {
    res.send(await model.getAll());
  });

  router.get('/:id', async (req, res) => {
    res.send(await model.get(parseInt(req.params.id)));
  });

  return router;
};