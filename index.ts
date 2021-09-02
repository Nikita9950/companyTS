const myCompany: Company = new Company('My Company', '9:00 - 18:00')
const officeNumberOne: IDepartment = new Department(1, 'Ukraine, Kharkiv, Tankopiya st.', true)
const officeNumberTwo: IDepartment = new Department(2, 'Ukraine, Kiyv, Hreshatik st.', false)
const alex: IEmployee = new Employee('Alex', '0661234567', 1)
const vasya: IEmployee = new Employee('Vasya', '0671234567', 1)
const petya: IEmployee = new Employee('Petya', '0681234567', 2)
const danil: IEmployee = new Employee('Danil', '0931234567', 2)
const david: HeadOfDepartment = new HeadOfDepartment('David', '0501234567', 1, 'manager')
const firstClient: IClient = new Client('Jack', alex)

myCompany.addDepartment(officeNumberOne)
myCompany.addDepartment(officeNumberTwo)
myCompany.addEmployee(alex)
myCompany.addEmployee(vasya)
myCompany.addEmployee(petya)
myCompany.addEmployee(danil)

console.log(myCompany.employees)
console.log(myCompany.departments)

alex.departmentId = 2
petya.departmentId = 1
david.departmentId = 2
console.log(david.departmentId)
myCompany.removeEmployeeByName('Danil')
firstClient.employee = vasya
console.log(firstClient.employee);
console.log(myCompany.getEmployeesByDepartment(1));
console.log(myCompany.getEmployeesByDepartment(2));

console.log(officeNumberOne.address);
officeNumberOne.setAddressAsync('Lviv, Freedom square')
  .then(response => console.log(`New address: ${response}`))
  .catch(error => console.log(error))
