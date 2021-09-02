class Department implements IDepartment {
  protected _id: number
  protected _address: string
  protected _officeRent: boolean

  public constructor(id: number, address: string, officeRent: boolean) {
    this._id = id
    this._address = address
    this._officeRent = officeRent
  }

  public get id(): number {
    return this._id
  }

  public set id(id: number) {
    this._id = id
  }

  public get address(): string {
    return this._address
  }

  public set address(address: string) {
    this._address = address
  }

  public get officeRent(): boolean {
    return this._officeRent
  }

  public set officeRent(officeRent: boolean) {
    this._officeRent = officeRent
  }

  public setAddressAsync(address: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (this.officeRent) {
          this.address = address
          resolve(this.address)
        } else {
          reject(new Error('You cannot change the address.'))
        }
      }, 2000)
    })
  }
}




  // setAddressAsync(address) {
  //   if (typeof address === 'string') {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         if (this._officeRent) {
  //           this._address = address
  //           resolve(this._address)
  //         } else {
  //           reject(new Error('You cannot change the address.'))
  //         }
  //       }, 2000)
  //     })
  //   } else {
  //     console.warn('invalid data type')
  //   }