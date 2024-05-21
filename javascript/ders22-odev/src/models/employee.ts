import User from "./User";

export default class Employee extends User {
  salary: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    age: number,
    salary: number,
    type: "customer" | "employee"
  ) {
    super(id, firstName, lastName, city, age,type);
    this.salary = salary;
  }
}
