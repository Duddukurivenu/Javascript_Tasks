
//Example 1 without constructor in child and super()
console.log("-----------------------Example 1---------------------");
class Employee{
    constructor(Name,Age,company){
        this.Name=Name
        this.Age=Age
        this.company=company    
    }
    dis(){
        console.log("Name of the Employee =",this.Name);
        console.log("Age of The Employee =",this.Age);
        console.log("Employees Company =",this.company);
    }
}
class Developer extends Employee{}

let em=new Developer("Rahul",25,"Innomatics")
em.dis()


// 📌 Demonstrate that the Parent Constructor is automatically invoked when the Child class has no constructor.
// 🔹 Examples 2–4
// Write 3 different examples using:
// constructor
// super()
// super.method()

console.log("-----------------------Example 2---------------------");
class Food{
    constructor(Name,Price,Restarant,Rating){
        this.Name=Name
        this.Price=Price
        this.Restarant=Restarant
        this.Rating=Rating
    }
} 
class Biryani extends Food {
    constructor(Name,Price,Restarant,Rating,Address){
        super(Name,Price,Restarant,Rating)
        this.Address=Address

} 
displayItems(){
    console.log("Name of The Food =",this.Name);
    console.log("Price of The Food =",this.Price);
    console.log("Name of The Restarunt=",this.Restarant);
    console.log("Rating for  Food =",this.Rating);
    console.log("Address of The Restarunt =",this.Address);   
}
}
let fd= new Biryani("nithish",2367,"MehFil",4,"hydd")
fd.displayItems()

//example 3

console.log("-----------------------Example 3---------------------");

class Account{
    constructor(Name,Followers,created){
        this.Name=Name
        this.Followers=Followers
        this.created=created
    }
    DisplayAccount(){
        console.log("Name of The Accont = ",this.Name);
        console.log("Number of Followers = ",this.Followers);
        console.log("Date of The created = ",this.created);
    }    
    }
class InstagramAccount extends Account{
    constructor(Name,Followers,created,Posts){
        super(Name,Followers,created)
        this.Posts=Posts
    }
    InstaAccount(){
        super.DisplayAccount()
        console.log("Number of Posts = ",this.Posts);
        
    }
}    
let Accont =new InstagramAccount("UrsTrulymahesh","30M","14-09-2012",355)
Accont.InstaAccount()

//Example 4
console.log("-----------------------Example 4---------------------");

class Shape {
    constructor(Name,Width,Height,Area){
        this.Name=Name
        this.Width=Width
        this.Height=Height
        this.Area=Area    
    }
}
class  Rectangular extends Shape{
    constructor(Name,Width,Height,Area,perimeter){
        super(Name,Width,Height,Area)
        this.perimeter=perimeter
    }
    DisplayShape(){
        console.log("Name of The Shape ",this.Name)
        console.log("Width of The Shape ",this.Width)
        console.log("Height of The Shape ",this.Height)
        console.log("Area of The Shape ",this.Area)
        console.log("Perimeter of The Shape ",this.perimeter)    
    }    
}   
let Shape1 = new Rectangular("Rectangle","20CM","40CM",800,"1600")
Shape1.DisplayShape()


