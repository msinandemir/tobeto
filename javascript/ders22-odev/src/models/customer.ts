import User from "./User.js";

export default class Customer extends User {
  creditCardNumber: string;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    city: string,
    age: number,
    type: "customer" | "employee",
    creditCardNumber: string
  ) {
    super(id, firstName, lastName, city, age, type);
    this.creditCardNumber = creditCardNumber;
  }
}
