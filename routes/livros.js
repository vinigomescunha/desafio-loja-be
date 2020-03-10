const express = require('express');
const router = express.Router();

// eu injeto o modelo nas rotas 
module.exports = async (model) => {
  
  router.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

  router.get('/', async (req, res) => {
    res.send(await model.getAll());
  });

  router.get('/:id', async (req, res) => {
    const lv = await model.get(parseInt(req.params.id));
    if(!lv) res.status(404)
    res.send(lv[0]);
  });

  return router;
};
