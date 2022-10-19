class Parent                                     // Parent class
{
constructor()                                     // Constructor is a special method
{
    console.log("Parent class constructor")        // Execute automatically during object creation 
}
}

class Child extends Parent                         // Child class
{
    constructor ()                                 // Constructor is a special method (Additional feature)
    {
        super();                                    // super () is a keyword - invoking parent class constructor
        console.log("Child class constructor")      // Execute automatically during object creation 
    }
} 
let a = new Child()                                 // Empty object child {} will print
console.log(a)