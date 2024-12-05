const arr = [true, "hello", 5, 12, -200, false, "zelenskiy", 12, 580, 52,{} ];

let types =
{
   
}

for( let i = 0; i < arr.length; i++){
    const type_name = typeof arr[ i ];
    types[ type_name ] = ( types[ type_name ] ?? 0 ) + 1;
}
console.log(types);

