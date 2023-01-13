// type CarParams = {
//   id?: string | undefined,
//   model: string,
//   year: number,
//   color: string,
//   status?: boolean,
//   buyValue: number,
//   doorsQty: number,
//   seatsQty: number,
// };

import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(params: ICar) {
    this.id = params.id;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.status = params.status || false;
    this.buyValue = params.buyValue;
    this.doorsQty = params.doorsQty;
    this.seatsQty = params.seatsQty;
  }
}

export default Car;