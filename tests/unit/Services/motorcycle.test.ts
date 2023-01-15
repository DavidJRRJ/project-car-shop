import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { motoArray, motoInput, motoOutput, motoUpdate, motoUpdated } from './Mocks/motoMocks';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes da camada service de /motorcycles', function () {
  it('Verifica se é possível cadastrar uma moto', async function () {
    const output: Motorcycle = new Motorcycle(motoInput);
    sinon.stub(Model, 'create').resolves(output);

    const service = new MotorcycleService();
    const result = await service.create(motoInput);

    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é retornado todas as motos cadastradas', async function () {
    const output = motoArray.map((obj) => new Motorcycle(obj));
    sinon.stub(Model, 'find').resolves(output);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(output);
  });

  it('Verifica se é retornado a moto correspondente ao id', async function () {
    const input = '6348513f34c397abcad040b2';
    const output: Motorcycle = new Motorcycle(motoOutput);
    sinon.stub(Model, 'findOne').resolves(output);

    const service = new MotorcycleService();
    const result = await service.getById(input);

    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Verifica o erro quando o id é inválido', async function () {
    const input = 'caneta azul';
    sinon.stub(Model, 'findOne').resolves();

    try {
      const service = new MotorcycleService();
      await service.getById(input);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  it('Verifica quando o id não existe', async function () {
    const input = '777752326b35b59438fbea2f';
    sinon.stub(Model, 'findOne').resolves();

    try {
      const service = new MotorcycleService();
      await service.getById(input);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  it('Verifica se é possível fazer o update de uma moto', async function () {
    const input = '6348513f34c397abcad040b2';
    const output: Motorcycle = new Motorcycle(motoUpdated);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(output);

    const service = new MotorcycleService();
    const result = await service.update(input, motoUpdate);

    expect(result).to.be.deep.equal(output);
  });

  it('Verifica o erro ao fazer o update de um id inexistente', async function () {
    const input = 'caneta azul';
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      const service = new MotorcycleService();
      await service.update(input, motoUpdate);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});