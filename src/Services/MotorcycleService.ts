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

  public async create(moto: IMotorcycle) {
    const motoModel = new MotorcycleModel();
    const newMoto = await motoModel.create(moto);
    return this.createMotoDomain(newMoto);
  }

  public async getById(id: string) {
    const motoModel = new MotorcycleModel();
    const moto = await motoModel.getById(id);
    if (!moto) throw new Error('Motorcycle not found');
    return this.createMotoDomain(moto);
  }

  public async getAll() {
    const motoModel = new MotorcycleModel();
    const moto = await motoModel.getAll();
    const allmoto = moto.map((obj) => this.createMotoDomain(obj));
    return allmoto;
  }
}

export default MotorcycleService;