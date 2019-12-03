export class Expenditure {
  constructor(
    public _id: string,
    public concept: string,
    public amount: number,
    public date: string,
    public category: string,
    public description: string
  ) {

  }
}
