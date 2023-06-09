import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcicleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcicleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcicleService();
  }

  public async create() {
    const moto: IMotorcycle = this.req.body;

    try {
      const newMoto = await this.service.create(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const moto = await this.service.getById(id);
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const motos = await this.service.getAll();
      return this.res.status(200).json(motos);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const moto = this.req.body;

    try {
      await this.service.update(id, moto);
      const motoUpdated = await this.service.getById(id);
      return this.res.status(200).json(motoUpdated);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;