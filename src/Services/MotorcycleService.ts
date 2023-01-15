import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private createMotoDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async create(car: IMotorcycle) {
    const motoModel = new MotorcycleModel();
    const newMoto = await motoModel.create(car);
    return this.createMotoDomain(newMoto);
  }
}

export default MotorcycleService;