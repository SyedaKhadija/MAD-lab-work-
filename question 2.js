number = 654789;
 sum = 0;
 for(i=0; i<5; i++){
    sum = sum+parseInt(number%10);
     number = parseInt(number/10); 
 }
console.log("Sum: "+ sum);