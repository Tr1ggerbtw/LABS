const findMax = (matrix) => 
    matrix
    .flat() 
    .reduce((maxValue, current) => 
    current > maxValue ? current : maxValue, 0); 
       
const matrix = ([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
const max = findMax(matrix);

console.log(max); 