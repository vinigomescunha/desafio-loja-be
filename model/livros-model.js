module.exports.LivrosModel = class {
  constructor(connector) {
    this.connector = connector;
  }
  // simulando uma chamada assincrona por api
  getAll() {
    return new Promise(async r => r(await this.connector.get()));
  }
  // simulando uma chamada assincrona por api
  get(id) {
    return new Promise(async r => r((await this.connector.get()).filter(lv => lv.id === id)));
  }

};