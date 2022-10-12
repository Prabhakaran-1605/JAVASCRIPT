var strings = ["bongo dr  ms", "guitar",
  "flute", "double bass", "xylophone", "piano"
];

// strings = strings.map(string => string.replace(/[aeiou]/g, ''));
//  console.log(strings)



for ( x of strings )
{
    console.log(x.replace (/[aeiou]/gi, 5));
}


