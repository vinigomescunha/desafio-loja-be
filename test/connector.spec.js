const request = require('supertest');
const connector = require('./../connector');
const {
  LivrosModel
} = require('../model');
const assert = require('assert');

describe('Loading connector', () => {

  it('Instancia de Livros', () => {
    assert.deepEqual(connector('livros') instanceof LivrosModel, true);
  });

  it('Conector chamado indevidamente', () => {
    assert.throws(
      function () {
        connector('KJALDASDASKDJ');
      },
      Error("Model not Found!")
    );
  });

});