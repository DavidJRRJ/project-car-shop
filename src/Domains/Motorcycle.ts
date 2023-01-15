import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string | 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(obj: IMotorcycle) {
    super(obj);
    this.category = obj.category;
    this.engineCapacity = obj.engineCapacity;
  }
}

export default Motorcycle;