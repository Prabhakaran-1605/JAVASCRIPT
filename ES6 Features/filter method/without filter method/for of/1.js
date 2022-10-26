let cars = [{"Car_Model":"Type 2","Car_Make":"Volkswagen","Car_Model_Year":1988,"Color":"Puce"},
{"Car_Model":"Previa","Car-Make":"Toyota","Car_Model_Year":1994,"Color":"Pink"},
{"Car_Model":"Diamante","Car_Make":"Mitsubishi","Car_Model_Year":1994,"Color":"Maroon"},
{"Car_Model":"Century","Car_Make":"Buick","Car_Model_Year":2000,"Color":"Fuscia"},
{"Car_Model":"Cobalt SS","Car_Make":"Chevrolet","Car_Model_Year":2009,"Color":"Aquamarine"},
{"Car_Model":"Quest","Car_Make":"Nissan","Car_Model_Year":2002,"Color":"Purple"},
{"Car_Model":"Tracer","Car_Make":"Mercury","Car_Model_Year":1994,"Color":"Red"},
{"Car_Model":"Legacy","Car_Make":"Subaru","Car_Model_Year":1995,"Color":"Yellow"},
{"Car_Model":"Ram Van 1500","Car_Make":"Dodge","Car_Model_Year":2001,"Color":"Violet"},
{"Car_Model":"XC90","Car_Make":"Volvo","Car_Model_Year":2012,"Color":"Fuscia"},
{"Car_Model":"XC90","Car_Make":"Volvo","Car_Model_Year":2012,"Color":"Fuscia"},
{"Car_Model":"Esprit","Car_Make":"Lotus","Car_Model_Year":1999,"Color":"Crimson"},
{"Car_Model":"Galant","Car_Make":"Mitsubishi","Car_Model_Year":1986,"Color":"Turquoise"},
{"Car_Model":"Tracer","Car_Make":"Mercury","Car_Model_Year":1997,"Color":"Fuscia"},
{"Car_Model":"960","Car_Make":"Volvo","Car_Model_Year":1992,"Color":"Violet"},
{"Car_Model":"MKS","Car_Make":"Lincoln","Car_Model_Year":2010,"Color":"Crimson"},
{"Car_Model":"Montero Sport","Car_Make":"Mitsubishi","Car_Model_Year":2000,"Color":"Mauv"},
{"Car_Model":"Prelude","Car_Make":"Honda","Car_Model_Year":1994,"Color":"Teal"},
{"Car_Model":"Pajero","Car_Make":"Mitsubishi","Car_Model_Year":1986,"Color":"Mauv"},
{"Car_Model":"Continental Mark VII","Car_Make":"Lincoln","Car_Model_Year":1992,"Color":"Maroon"},
{"Car_Model":"Leaf","Car_Make":"Nissan","Car_Model_Year":2011,"Color":"Teal"}]

let new_car = [];
for ( car of cars)                       // car of cars  : car is an property name which is Car Model / Car Make / Car Model Year /Colour
{
    if (car.Color=="Red")
    {

        new_car.push(car)                // push method is used to append the element or object to the last of an array  ( new_car[] )
    }
    }

console.log(new_car)
