class HeadOfDepartment extends Employee {
  protected _name: string
  protected _phone: string
  protected _departmentId: number
  protected _position: string

  public constructor(name: string, phone: string, department: number, position: string) {
    super(name, phone, department)
    this._position = position
  }

  public get position(): string {
    return this._position
  }

  public set position(position: string) {
    this._position = position
  }
}