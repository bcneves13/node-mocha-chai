var assert = require('assert');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

describe('Valor desconto', () => {
	it('Deve descontar o valor corretamente', (done) => {
		chai.request(app)
			.get('/aplicarDesconto/10/5')
			.end((err, res) => {
				if (err) 
					throw new Error(err);
				res.should.have.status(200);
				res.body.valorDescontado.should.be.eql(5);
				done();
			});
	})
})

describe('Valor desconto maior', () => {
	it('Deve descontar o valor corretamente caso o desconto seja maior que o valor', (done) => {
		chai.request(app)
			.get('/aplicarDesconto/5/10')
			.end((err, res) => {
				if (err) 
					throw new Error(err);
				res.should.have.status(200);
				res.body.valorDescontado.should.be.eql(0);
				done();
			});
	})
})