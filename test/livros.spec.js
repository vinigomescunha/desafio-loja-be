const request = require('supertest');
const app = require('./../app');

describe('Loading livros', () => {

  beforeEach(async () => {
    this.server = await app.startServer(3011);
  });

  afterEach(async () => {
    this.server.close();
  });

  it('Response para /api/livros', (done) => {
    request(this.server).get('/api/livros').expect(200, done);
  });

  it('Response para 404', (done) => {
    request(this.server).get('/foo/bar').expect(404, done);
  });

  it('Response para 200', (done) => {
    request(this.server).get('/api/livros/1').expect(200, done);
  });

  it('Response para 200', (done) => {
    request(this.server).get('/api/livros/30').expect(200, done);
  });

});