import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { carArray, carInput, carOutput, carUpdate, carUpdated } from './Mocks/carMocks';

describe('Testes da camada service de /cars', function () {
  it('Verifica se é possível cadastrar um carro', async function () {
    const output: Car = new Car(carInput);
    sinon.stub(Model, 'create').resolves(output);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é retornado todos os carros cadastrados', async function () {
    const output = carArray.map((obj) => new Car(obj));

    sinon.stub(Model, 'find').resolves(output);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é retornado o carro correspondente ao id', async function () {
    const input = '634852326b35b59438fbea2f';
    const output: Car = new Car(carOutput);
    sinon.stub(Model, 'findOne').resolves(output);

    const service = new CarService();
    const result = await service.getById(input);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Verifica o erro quando o id é inválido', async function () {
    const input = 'caneta azul';
    sinon.stub(Model, 'findOne').resolves();

    try {
      const service = new CarService();
      await service.getById(input);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Verifica quando o id não existe', async function () {
    const input = '777752326b35b59438fbea2f';
    sinon.stub(Model, 'findOne').resolves();

    try {
      const service = new CarService();
      await service.getById(input);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Verifica se é possível fazer o update de um carro', async function () {
    const input = '634852326b35b59438fbea2f';
    const output: Car = new Car(carUpdated);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(output);

    const service = new CarService();
    const result = await service.update(input, carUpdate);

    expect(result).to.be.deep.equal(output);
  });

  afterEach(function () {
    sinon.restore();
  });
});