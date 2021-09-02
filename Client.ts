class Client implements IClient {
  protected readonly _name: string
  protected _employee: IEmployee

  public constructor(name: string, employee: IEmployee) {
    this._name = name
    this._employee = employee
  }

  public get name(): string {
    return this._name
  }

  public get employee(): IEmployee {
    return this._employee
  }

  public set employee(employee) {
    this._employee = employee
  }
}

