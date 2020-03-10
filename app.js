const express = require('express');
const getConnector = require('./connector');
const livrosRouter = require('./routes/livros');

module.exports.startServer = async port => {
  const app = express();
  // adiciono a rota inserindo o conector no mesmo
  app.use('/api/livros', await livrosRouter(getConnector('livros')));
  return app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
};