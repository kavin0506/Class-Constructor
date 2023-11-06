// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


class Person{
	constructor(name,age,country){
		this.name=name;
		this.age=age;
		this.country=country;
	}
	display(){
		console.log(`Hi i am ${this.name} ${this.age} old form ${this.country}`);
	}
}
let ans=new Person("Bala",21,"India");
let ans2=new Person("arun",20,"China");


ans.display();
ans2.display(); 



// 2.Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
	constructor(height,width){
		this.height=height;
		this.width=width;
	}
	rec(){
		return (this.height*this.width);
	}
	peri(){
		return 2*(this.height+this.width);
	}
}
let result=new Rectangle(10,29);

let rect=result.rec();
console.log(`Area of rectangle: ${rect}`);

let perimeter=result.peri();
console.log(`perimeter of Rectangle: ${perimeter}`);




// 3.Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account.Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.



class BankAccount{
	constructor(accnumber,balance){
		this.acno=accnumber;
		this.balance=balance;
	}
	deposit(amt){
		console.log("Total amount is ",this.balance+amt);
	}
	withdraw(bal){
		console.log("Balance amount is",this.balance-bal);
	}
	
}
let acc=new BankAccount("220000032",15000);
let acc2=new BankAccount("220000012",2500);


acc.deposit(1200);
acc2.deposit(10000);

acc.withdraw(1000);
acc2.withdraw(2500);






// 4.Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.



class Shape{
	constructor(){
		// this.length=length;
	}
	claArea(){
		console.log("area not defined")
	}
}
	class Circle extends Shape{
		constructor(radius){
			super()
			this.radius=radius;
		}
		claArea(){
			
			let ra=3.14*this.radius**this.radius
			console.log(`Area of Circle ${ra}`)
		}
	}
	class Triangle extends Shape{
		constructor(b,h){
			super()
			this.b=b;
			this.h=h;
		}
		claArea(){
			let tri=0.5*this.b*this.h;
			console.log(`Area of Triangle ${tri}`)
		}
	}

let rad=new Circle(10);

rad.claArea();

let tri=new Triangle(10,20);
tri.claArea();



// 5.Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee{
	constructor(name,salary){
		this.name=name;
		this.salary=salary;
	}
	include(){
	return this.salary*12
	}
}
class Manager extends Employee{
	constructor(name,salary,department,bonus){
		super(name,salary)
		this.department=department;
		this.bonus=bonus;
	}
	include(){
		let income=this.salary*12;
	  return income+this.bonus;
	}
}
let manager=new Manager("kamesh",12000,"Developer",10000);
let manager2=new Manager("ajay",10000,"Testing",7500);

console.log(manager.include());

console.log(`${manager.name} annual salary ${manager.include()}`);



// 6.Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details



class Book{
	constructor(title,author,pubYear){
		this.title=title;
		this.author=author;
		this.pubYear=pubYear;
	}
	bookDetails(){
	let tit=(`
				{$this.name} 
				{$this.author} 
				${this.pubYear}`)
		return tit;
	}
}
class Ebook extends Book {
	constructor(title,author,pubYear,price){
		super(title,author,pubYear)
		this.price=price;
	}
	bookDetails(){
		let details=(`The title is ${this.title} Written by ${this.author} publish on ${this.pubYear} price ${this.price}`);
		return details;
	}
}
let books=new Ebook("staying on","paul",1960,600);

console.log(books.bookDetails());