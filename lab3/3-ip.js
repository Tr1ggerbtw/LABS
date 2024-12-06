const ip_str = '192.168.88.100';
const ip_arr = ip_str.split( '.' );
const shift = [ 3*8, 2*8, 8 ];

res = ip_arr.reduce( ( summ, val, index ) =>
    {
        val = parseInt( val );

        if( shift[ index ] )
        {
            val = val << shift[ index ];
        }
        
        return  summ + val;
    },
    0
);

console.log( ip_arr );
console.log( res );