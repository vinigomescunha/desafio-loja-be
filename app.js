const express = require('express');
const cors = require('cors');
const getConnector = require('./connector');
const livrosRouter = require('./routes/livros');
const {
getWhiteList
} = require('./utils');
const whitelist = getWhiteList();
module.exports.startServer = async port => {
  const app = express();
  // TODO: separar regra do Cors
  const corsOptions = {
    origin: (origin, callback) => {
      // Se nao tem whitelist esta liberado
      if (whitelist.length === 0 || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };
  app.use(express.static(__dirname + '/assets'));
  app.use(cors(corsOptions));
  // faco dar erro 403 em toda chamada cors bloqueada
  app.use((err, req, res, next) => {
    if (err.message !== 'Not allowed by CORS') return next()
    res.status(403).json({
      code: 403,
      message: 'Forbidden'
    });
  })
  // adiciono a rota inserindo o conector no mesmo
  app.use('/api/livros', await livrosRouter(getConnector('livros')));
  return app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
};
