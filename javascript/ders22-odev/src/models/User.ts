export default class User {
  firstName: string;
  id: number;
  lastName: string;
  city: string;
  age: number
  type:"customer" | "employee"
  [key: string]: string | number;
  constructor(id: number, firstName: string, lastName: string, city: string,age:number,type:"customer" | "employee") {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.age = age
    this.type = type
  }
}
