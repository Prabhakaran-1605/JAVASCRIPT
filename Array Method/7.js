var strings = ["bongo drums", "guitar",
  "flute", "double bass", "xylophone", "piano"
];

strings = strings.map(string => string.replace(/[aeiou]/g, ''));
console.log(strings)

for ( x of strings )
{
    console.log(x.replace (/[aeiou]/g, ""));
}

