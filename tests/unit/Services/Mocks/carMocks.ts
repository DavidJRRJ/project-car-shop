import ICar from '../../../../src/Interfaces/ICar';

const carArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const carUpdate: ICar = {
  model: 'Marea',
  year: 1999,
  color: 'Red',
  status: true,
  buyValue: 13.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carUpdated: ICar = {
  id: '634852326b35b59438fbea2f',
  model: 'Marea',
  year: 1999,
  color: 'Red',
  status: true,
  buyValue: 13.990,
  doorsQty: 4,
  seatsQty: 5,
};

export { carArray, carOutput, carInput, carUpdate, carUpdated };