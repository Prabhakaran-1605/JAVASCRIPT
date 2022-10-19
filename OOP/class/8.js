// Inheritence - Reusing existing functionality and extending or adding new features.
// If we want to inherit the properties from parent class to child class (or) Super class to derived class - "extends" keyword must be used in derived class or child class.
// To invoke parent class constructor - "super()" keyword must be used in derived class or child class.

class Parent
{

    Property_worth=1200000;
    cars = 10;
    gold = "50kg";

}
class Child extends Parent               // extends - keyword must be used to inhert the properties from parent class.
{

}
let a=new Child()
console.log (a)