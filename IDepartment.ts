interface IDepartment {
  id: number
  address: string
  officeRent: boolean
  setAddressAsync(string): Promise<string>
}