# How do the four pillars of OOP work?
## Introduction:
Object-Oriented Programming is a programming paradigm used for creating objects that contain both data and methods.It has four pillar such as Inheritance, Polymorphism, Abstraction, and Encapsulation.Each pillar has different use for various purpouses.
# Inheritance:
It has one parent class that allows a subclass(child class) to inherit its  property and method.
It is useful for code reuseability
Example:
class Parent{
     name:string;
        age:number;
        country:string;
        constructor(name:string,age:number,country:string){
            this.name=name;
            this.age=age;
            this.country=country;
        }
        getSleep(numberOfHours:number){
            console.log(`${this.name} sleeps for ${numberOfHours} hours`);
        }
}

class Student extends Parent{
     constructor(name:string,age:number,country:string){
          super(name,age,country)
     }
}
const std1=new Student("Alice",20,"USA");
std1.getSleep(8);
** Student class inherit Parent properties by using extends keyword.
# polymorphism:
Polymorphism means many form,it occurs when we have many class that are related to each other by inheritance.In polymorphism same method that can perfom different task.
Example:
   class Person{
    getSleep(){
        console.log( "I am a  normal person.i sleep 8 hours a day")
    }
}
class Students extends Person{
    getSleep(){
         console.log( "I am a  Student.i sleep 4 hours a day");
    }
}
const person1=new Person();
const person2=new Students();
** Here the getSleep() method perform differently in different classes.
## Abstraction:
 Abstraction is a process that gives only essential information to the users while hiding implementation details.
 Example:
 interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
}
class MusicPlayer implements MediaPlayer{
    play(): void {
        console.log("Music is running....");
    }
    pause(): void {
        console.log("pause time");
    }
    stop(): void {
        console.log("music is stop")
    }
}
Here Mediaplayer is an abstraction that defines the core idea of a media player without showing implementation detils.
# Encapsulation:
 Encapsulation mainly use to hide some property(accountId,Balance,) like  sensitive data from other users.
 class BankAccount{
    public readonly userId:number;
    public userName:string;
 /*protected*/    private userbalance:number;
    constructor(userId:number,userName:string,balance:number){
        this.userId=userId;
        this.userName=userName;
        this.userbalance=balance;
    }
  private  addAccount(balance:number){
         this.userbalance+=balance;
    }
}

when another class inherit BankAccount.They can access only the public
property and method,while private method or property remain hide
# Conclusion:
In conclusion,the four pillars of OOP helps to  make code clean, secure,reuseable and maintainable