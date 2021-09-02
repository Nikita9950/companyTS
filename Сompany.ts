class Company {
  protected _name: string
  protected _openingHours: string
  protected _departments: Array<IDepartment>
  protected _employees: Array<IEmployee>

  public constructor(name: string, openingHours: string) {
    this._name = name
    this._openingHours = openingHours
    this._departments = []
    this._employees = []
  }

  public get name(): string {
    return this._name
  }

  public get openingHours(): string {
    return this._openingHours
  }

  public set openingHours(openingHours: string) {
    this._openingHours = openingHours
  }

  public get departments(): Array<IDepartment> {
    return this._departments
  }

  public get employees(): Array<IEmployee> {
    return this._employees
  }

  public addDepartment(department: IDepartment): void {
    this._departments.push(department)
  }

  public addEmployee(employee: IEmployee): void {
    this._employees.push(employee)
  }

  public removeDepartmentById(id: number): void {
    this._departments = this._departments.filter(elem => elem.id !== id)
  }

  public removeEmployeeByName(name: string): void {
    this._employees = this._employees.filter(elem => elem.name !== name)
  }

  public getEmployeesByDepartment(departmenId: number): Array<IEmployee> {
    return this._employees.filter(elem => elem.departmentId === departmenId)
  }
}