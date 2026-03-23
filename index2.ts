// 1.Interface
interface Person {
  name: string;
  age: number;
  email: string;
}
class Employee implements Person {
  public name: string;
  public age: number;
  public email: string;

  constructor(info: Person) {
    this.name = info.name;
    this.age = info.age;
    this.email = info.email;
  }
  // constructor(name:string,age:number,email:string){
  //     this.name=name
  //     this.age=age
  //     this.email=email
  // }
  displayInfo(): void {
    // console.log(`Name ${this.name}: Age ${this.age} Email ${this.email}`)
    const empObj = {
      name: this.name,
      age: this.age,
      email: this.email,
    };
    console.log(empObj);
  }
}
const data = { name: "John Doe", age: 30, email: "john.doe@example.com" };
const emp1: Employee = new Employee(data);
console.log(emp1.displayInfo());
// 2.Union
function handleInput(input: string | number): void {
  if (typeof input === "number") {
    console.log(input ** 2);
  } else {
    console.log(input.toLowerCase());
  }
}
handleInput("Hello World");
handleInput(42);
// 3.Abstract Classes
abstract class Shape {
  abstract calculateArea(): number;
}
class Circle extends Shape {
  private radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
class Rectangle extends Shape {
  private height: number;
  private width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  calculateArea(): number {
    return this.height * this.width;
  }
}
const rect = new Rectangle(10, 20);
console.log(`rectangle are: ${rect.calculateArea()}`);
