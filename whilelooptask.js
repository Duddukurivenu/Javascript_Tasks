// Find the sum of digits in a given number.
// n=123
// sum=0
// while(n>0){
//     sum+=(n%10)
//     n=parseInt(n/10)
// }
// console.log(sum)

// Find the average of digits in a given number.
// n=123
// sum=0
// count=0
// while(n>0){
//     sum+=(n%10)
    //    count+=1
//     n=parseInt(n/10)
// }
// console.log(sum/count)

// Find the sum of the first digit and the last digit of a given number.
// n=986
// sum=n%10
// count=0
// while(n>0){
//     n=parseInt(n/10)
//     if (n>0){
//         count=n%10
//     }
// }
// console.log(sum+count)

// Find the average of digits that are divisible by 5 in a given number.
// n=15535
// sum=0
// count=0
// while(n>0){
//     if (n%5==0){
//         sum+=n%10
//         count+=1
//     }
//     n=parseInt(n/10)
// }
// console.log(sum/count)

// Find the difference between the largest digit and the smallest digit in a given number.
// n=123
// sum=0
// count=9
// while(n>0){
//     if ((n%10)>sum){
//     sum=n%10}
//     else if((n%10)<count){
//         count=n%10
//     }
    
//     n=parseInt(n/10)
// }
// console.log(sum-count)