let cars = [{"Car Model":"Type 2","Car Make":"Volkswagen","Car Model Year":1988,"Color":"Puce"},
{"Car Model":"Previa","Car Make":"Toyota","Car Model Year":1994,"Color":"Pink"},
{"Car Model":"Diamante","Car Make":"Mitsubishi","Car Model Year":1994,"Color":"Maroon"},
{"Car Model":"Century","Car Make":"Buick","Car Model Year":2000,"Color":"Fuscia"},
{"Car Model":"Cobalt SS","Car Make":"Chevrolet","Car Model Year":2009,"Color":"Aquamarine"},
{"Car Model":"Quest","Car Make":"Nissan","Car Model Year":2002,"Color":"Purple"},
{"Car Model":"Tracer","Car Make":"Mercury","Car Model Year":1994,"Color":"Red"},
{"Car Model":"Legacy","Car Make":"Subaru","Car Model Year":1995,"Color":"Yellow"},
{"Car Model":"Ram Van 1500","Car Make":"Dodge","Car Model Year":2001,"Color":"Violet"},
{"Car Model":"XC90","Car Make":"Volvo","Car Model Year":2012,"Color":"Fuscia"},
{"Car Model":"Esprit","Car Make":"Lotus","Car Model Year":1999,"Color":"Crimson"},
{"Car Model":"Galant","Car Make":"Mitsubishi","Car Model Year":1986,"Color":"Turquoise"},
{"Car Model":"Tracer","Car Make":"Mercury","Car Model Year":1997,"Color":"Fuscia"},
{"Car Model":"960","Car Make":"Volvo","Car Model Year":1992,"Color":"Violet"},
{"Car Model":"MKS","Car Make":"Lincoln","Car Model Year":2010,"Color":"Crimson"},
{"Car Model":"Montero Sport","Car Make":"Mitsubishi","Car Model Year":2000,"Color":"Mauv"},
{"Car Model":"Prelude","Car Make":"Honda","Car Model Year":1994,"Color":"Teal"},
{"Car Model":"Pajero","Car Make":"Mitsubishi","Car Model Year":1986,"Color":"Mauv"},
{"Car Model":"Continental Mark VII","Car Make":"Lincoln","Car Model Year":1992,"Color":"Maroon"},
{"Car Model":"Leaf","Car Make":"Nissan","Car Model Year":2011,"Color":"Teal"}]

let new_car = [];
for ( car of cars)
{
    if (car.Color=="Red")
    {

        new_car.push(car)
    }
}
console.log(new_car)
