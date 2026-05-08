//problem 1:
function filterEvenNumbers(numbers:number[]):number[]{
    return numbers.filter((value:number)=>value%2==0);

}
console.log(filterEvenNumbers([1,2,3,4,5,6]));
//problem 2:
const reverseString=((input:string):string=>{
    const separateInput=input.split("");
    const reversedInput=separateInput.reverse();
    const finalInput=reversedInput.join("");
    return finalInput;
})
console.log( reverseString("typeScript"));
//problem 3:
type unionInput=string|number;
function checkType(input:unionInput){
    if(typeof input ==="string"){
        return "String";
    }else if(typeof input==="number"){
        return "Number";
    }
}
console.log(checkType(12345));
//problem 4:
function getProperty<T,k extends keyof T>(user:T,Key:k):T[k]{
    return  user[Key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log( getProperty(user, "name"));
//problem 5:
interface Book{
    title:string;
    author:string;
    publishedYear:number;
}
const toggleReadStatus=(input:Book)=>{
    return{
        ...input,
        isRead:true
    }
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log( toggleReadStatus(myBook))
//problem 6:
class Person{
    name :string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
class Student extends Person{
    grade:string;
    constructor(name:string,age:number,grade:string){
         super(name,age);
        this.grade=grade;
    }
    getDetails(){
         console.log(
            `"Name:${this.name}, Age:${this.age}, Grade:${this.grade}"`
         )
}}
const student = new Student("Alice", 20, "A");
student.getDetails();
//problem 7:
function getIntersection(array1:number[],array2:number[]):number[]{
    return array1.filter(value=>array2.includes(value));
}
console.log( getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
/*Blog-1 End Here */
/*************************************************** */ 