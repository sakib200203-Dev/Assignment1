# How Do Generic Work?
## Introduction
Generic is a reuseable tool in a function,object and array.It is basically used instead of declaring data type (like string,number,boolean) while maintaining strict type safety.
## What Problem Will Face Without Using Generic?
 const friends:string[]=["A","B","C"];
 const friends:number[]=[1,2,3];
# without generic problem:
1 Every time we have to declar data type we use; (string,number)
# using generic
type GenericArray<T>=Array<T>;
const friends: GenericArray<string>=["A","B","C"];
If we use generic <T>tool, it stricly checks the type automatically;
Example:
const CreateArrayWithGeneric=<T>(value:T)=>{
    return [value];
}
const ArrayString=CreateArrayWithGeneric("apple");
const ArrayObject=CreateArrayWithGeneric({
    id:123,
    name:"sakib",
})
The same function work for multiple data type while keeping datab type stricly safe
# Conclusion:
Generic is very essential tool in typescript it helps to create a flexible function with maintaining strictly typed code.It makes code cleaner,safer and maintainable.