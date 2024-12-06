const arr = [true, "hello", 5, 12, -200, false, "zelenskiy", 12, 580, 52, ];

let types =
{
    number : 0, 
    string : 0,
    boolean : 0  
}

for( let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number') {
        types.number += 1;
    }
    else if( typeof arr[i] === 'string') {
        types.string += 1;
    }
    else if( typeof arr[i] === 'boolean'){
        types.boolean += 1;
    }
   
}
console.log(types);
    
