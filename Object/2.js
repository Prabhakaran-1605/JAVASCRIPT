var a = {
    ename : 'Prabhakaran',
    id:105887,                 // comma , is must 
    age : 27,
    father: 'Haribaskar',
    mother : 'Lakshmi',
    sister : 'Sandhya',
    brother : 'Sabarinathan'
    }
    for ( property in a )
    {
        console.log(property)     // Only Property name will print
        console.log(a[property]);   // Property value will print
    }