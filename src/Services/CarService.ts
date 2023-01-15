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

  public async create(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this.createCarDomain(newCar);
  }

  public async update(id: string, car: ICar) {
    const carModel = new CarModel();
    return carModel.update(id, car);
  }

  public async getById(id: string) {
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