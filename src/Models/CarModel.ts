import {
  Model,
  Schema,
  UpdateQuery,
  model,
  models,
} from 'mongoose';
// import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';

class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<ICar>,
      { new: true },
    );
  }

  public async getById(id: string): Promise<ICar | null> {
    return this.model.findById(id);
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }
}

export default CarModel;