import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  private isValidId(id: string): boolean {
    const idRegex = /^[a-fA-F0-9]{24}$/;
    return idRegex.test(id);
  }

  public async create(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this.createCarDomain(newCar);
  }

  public async getById(id: string) {
    if (!this.isValidId(id)) throw new Error('Invalid mongo id');
    const carModel = new CarModel();
    const car = await carModel.getById(id);
    if (!car) throw new Error('Car not found');
    return this.createCarDomain(car);
  }

  public async getAll() {
    const carModel = new CarModel();
    const cars = await carModel.getAll();
    const allCars = cars.map((car) => this.createCarDomain(car));
    return allCars;
  }
}

export default CarService;