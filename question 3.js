 number = 654321
 temp = Array.from(String(number), Number);
 function myfilter(value){
    return value%2==0;
}
temp = temp.filter(myfilter);
 sum = 0;
for(i=0; i<temp.length; i++){
    sum = sum + temp[i];
}
 console.log(sum);