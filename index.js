class Company {
    constructor(name, openingHours) {
        this._name = name;
        this._openingHours = openingHours;
        this._departments = [];
        this._employees = [];
    }
    get name() {
        return this._name;
    }
    get openingHours() {
        return this._openingHours;
    }
    set openingHours(openingHours) {
        this._openingHours = openingHours;
    }
    get departments() {
        return this._departments;
    }
    get employees() {
        return this._employees;
    }
    addDepartment(department) {
        this._departments.push(department);
    }
    addEmployee(employee) {
        this._employees.push(employee);
    }
    removeDepartmentById(id) {
        this._departments = this._departments.filter(elem => elem.id !== id);
    }
    removeEmployeeByName(name) {
        this._employees = this._employees.filter(elem => elem.name !== name);
    }
    getEmployeesByDepartment(departmenId) {
        return this._employees.filter(elem => elem.departmentId === departmenId);
    }
}
class Department {
    constructor(id, address, officeRent) {
        this._id = id;
        this._address = address;
        this._officeRent = officeRent;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get officeRent() {
        return this._officeRent;
    }
    set officeRent(officeRent) {
        this._officeRent = officeRent;
    }
    setAddressAsync(address) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.officeRent) {
                    this.address = address;
                    resolve(this.address);
                }
                else {
                    reject(new Error('You cannot change the address.'));
                }
            }, 2000);
        });
    }
}
class Employee {
    constructor(name, phone, depatmentId) {
        this._name = name;
        this._phone = phone;
        this._departmentId = depatmentId;
    }
    get name() {
        return this._name;
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = phone;
    }
    get departmentId() {
        return this._departmentId;
    }
    set departmentId(departmentId) {
        this._departmentId = departmentId;
    }
}
class Client {
    constructor(name, employee) {
        this._name = name;
        this._employee = employee;
    }
    get name() {
        return this._name;
    }
    get employee() {
        return this._employee;
    }
    set employee(employee) {
        this._employee = employee;
    }
}
class HeadOfDepartment extends Employee {
    constructor(name, phone, department, position) {
        super(name, phone, department);
        this._position = position;
    }
    get position() {
        return this._position;
    }
    set position(position) {
        this._position = position;
    }
}
const myCompany = new Company('My Company', '9:00 - 18:00');
const officeNumberOne = new Department(1, 'Ukraine, Kharkiv, Tankopiya st.', true);
const officeNumberTwo = new Department(2, 'Ukraine, Kiyv, Hreshatik st.', false);
const alex = new Employee('Alex', '0661234567', 1);
const vasya = new Employee('Vasya', '0671234567', 1);
const petya = new Employee('Petya', '0681234567', 2);
const danil = new Employee('Danil', '0931234567', 2);
const david = new HeadOfDepartment('David', '0501234567', 1, 'manager');
const firstClient = new Client('Jack', alex);
myCompany.addDepartment(officeNumberOne);
myCompany.addDepartment(officeNumberTwo);
myCompany.addEmployee(alex);
myCompany.addEmployee(vasya);
myCompany.addEmployee(petya);
myCompany.addEmployee(danil);
console.log(myCompany.employees);
console.log(myCompany.departments);
alex.departmentId = 2;
petya.departmentId = 1;
david.departmentId = 2;
console.log(david.departmentId);
myCompany.removeEmployeeByName('Danil');
firstClient.employee = vasya;
console.log(firstClient.employee);
console.log(myCompany.getEmployeesByDepartment(1));
console.log(myCompany.getEmployeesByDepartment(2));
console.log(officeNumberOne.address);
officeNumberOne.setAddressAsync('Lviv, Freedom square')
    .then(response => console.log(`New address: ${response}`))
    .catch(error => console.log(error));
//# sourceMappingURL=index.js.map