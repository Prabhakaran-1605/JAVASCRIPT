let cars = [{"car_make":"Eagle","car_model":"Vision","car_model_year":1993,"color":"Fuscia"},
{"car_make":"Kia","car_model":"Sportage","car_model_year":2012,"color":"Red"},
{"car_make":"Dodge","car_model":"Ram 1500","car_model_year":2003,"color":"Pink"},
{"car_make":"Mercedes-Benz","car_model":"M-Class","car_model_year":2002,"color":"Blue"},
{"car_make":"Mazda","car_model":"MPV","car_model_year":2006,"color":"Aquamarine"},
{"car_make":"Chevrolet","car_model":"Venture","car_model_year":2004,"color":"Khaki"},
{"car_make":"Chevrolet","car_model":"Monte Carlo","car_model_year":1996,"color":"Yellow"},
{"car_make":"Mazda","car_model":"626","car_model_year":1983,"color":"Khaki"},
{"car_make":"Toyota","car_model":"Tercel","car_model_year":1993,"color":"Puce"},
{"car_make":"Chevrolet","car_model":"Bel Air","car_model_year":1967,"color":"Mauv"}]

let new_cars = []
for(i=0;i<cars.length;i++)                    // for condition is used to do the iteration   cars.length = 10 
{                                             // During iteration initialization of i will be 0 and it is because of indexing value always starts with 0. 
if                                            // If we want to know total no of elements or object in an array or array final indexing value then it should be (array.length-1)
(cars[i].car_model_year < 2000)
{
new_cars.push(cars[i])                        // push method is used to append the element or object to the last of an array  ( new_cars[] )
}
}
}
console.log(new_cars)
