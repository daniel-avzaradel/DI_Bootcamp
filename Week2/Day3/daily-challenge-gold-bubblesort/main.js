const numbers = [5,0,9,1,7,4,2,6,3,8];

let swap;

for(i=0; i < numbers.length; i++) {
    for(j=0; j < numbers.length; j++) {
        if(numbers[j] < numbers[j+1]) {
            swap = numbers[j];
            numbers[j] = numbers[j+1];
            numbers[j+1] = swap;
        }
    }
}

console.log(numbers);