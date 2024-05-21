export default class UserAddModel{
    firstName: string;
    id: number;
    lastName: string;
    city: string;
    age: number
    type:"customer" | "employee"
    constructor(id: number, firstName: string, lastName: string, city: string,age:number,type:"customer" | "employee") {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.city = city;
      this.age = age
      this.type = type
    }
}