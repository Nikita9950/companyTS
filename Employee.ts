class Employee implements IEmployee {
  protected readonly _name: string
  protected _phone: string
  protected _departmentId: number

  public constructor(name: string, phone: string, depatmentId: number) {
    this._name = name
    this._phone = phone
    this._departmentId = depatmentId
  }

  public get name(): string {
    return this._name
  }

  public get phone(): string {
    return this._phone
  }

  public set phone(phone: string) {
    this._phone = phone
  }

  public get departmentId(): number {
    return this._departmentId
  }

  public set departmentId(departmentId: number) {
    this._departmentId = departmentId
  }
}