const {
  LivrosModel
} = require('../model');
// Simulando uma resposta assincrona de um banco por exemplo 
class Connector {
  static get() {
    return new Promise(_ => _([{
      id: 1,
      name: 'Livro 1'
    }, {
      id: 2,
      name: 'Livro 2'
    }]));
  }
}
module.exports = (type) => {
  switch (type) {
    case 'livros':
      return new LivrosModel(Connector);
    default:
      throw new Error('Model not Found!');
  }
};