import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(obj: ICar) {
    super(obj);
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }
}

export default Car;