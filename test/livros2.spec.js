const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const url = 'http://localhost:3012';
chai.use(chaiHttp);

describe('Testing Todo Website', function () {
  before(async () => {
    this.server = await app.startServer(3012);
  });

  after(async () => {
    this.server.close();
  });

  this.request = chai.request.agent(url);

  it('Pagina inicial da 404', (done) => {
    this.request.get('/').end((err, res) => {
      if (err) {
        done(err);
        return;
      }
      const title = 'Error';
      expect(res).to.have.status(404);
      expect(res.text.match(/<title[^>]*>([^<]+)<\/title>/)[1]).to.contain(title);
      console.log(res.body);
      done(); // <= Call done to signal callback end
    })
  });
  const data = {
    item: 'Item from: ' + new Date()
  };
  it('Post data da 404', (done) => { // <= Pass in done callback
    this.request.post('/').send(data)
      .then((res) => {
        expect(res).to.have.status(404);
        done();
      })
      .catch(e => {
        done(e)
      });
  });
});