import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

const MOTO_HORNET = 'Honda Cb 600f Hornet';

const motoInput: IMotorcycle = {
  model: MOTO_HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motoOutput: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: MOTO_HORNET,
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motoArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: MOTO_HORNET,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const motoUpdate: IMotorcycle = {
  model: MOTO_HORNET,
  year: 2006,
  color: 'Black',
  status: true,
  buyValue: 35.000,
  category: 'Street',
  engineCapacity: 600,
};

const motoUpdated: IMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: MOTO_HORNET,
  year: 2006,
  color: 'Black',
  status: true,
  buyValue: 35.000,
  category: 'Street',
  engineCapacity: 600,
};

const motoError = {
  teste: 'teste',
};

export { motoInput, motoOutput, motoArray, motoUpdate, motoUpdated, motoError };