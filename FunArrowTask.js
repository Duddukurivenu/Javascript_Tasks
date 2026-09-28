
//Arrow Function

//without input &without retun
//1.check numbe is prime or Not
// let pr=()=>{
//     let num=12
//     let i=1
//     let count=0
//     while(i<=num){
//         if(num%i==0){
//             count+=1
//         }
//         i+=1
//     }
//     if(count==2){
//             console.log(num+" Prime Number");
            
//         }
//         else{
//             console.log(num+" Not prime Number");
            
//         }
    
// } 
// pr()

//without input without return
//check num is Even or ODD

// let check =()=>{
//     let num=12
//     if(num%2==0){
//         console.log(num+" is Even Number");
        
//     }
//     else{
//         console.log(NUm+" is Not Even Number" );
        
//     }
// }
// check()

//printing name

// let name1 =()=>{
//     console.log("My Name is Venu");
    
// }
// name1()

//with input without Return
//factors of a Given Number
// let n =(a)=>{
//     let i=1
//     while(i<=a){
//         if(a%i==0){
//             console.log(i);
            
//         }
//         i+=1
//     }
// } 
// n(10)


// // With Input & With Return
// //1. Return the largest of three numbers.
// let large = (a, b, c) => {
//     if (a > b && a > c) {
//         return a;
//     }
//     else if (b > a && b > c) {
//         return b;
//     }
//     else {
//         return c;
//     }
// };

// console.log(large(10, 25, 15));


// //2. Return whether a number is Positive, Negative, or Zero.
// let check = (a) => {
//     if (a > 0) {
//         return "Positive";
//     }
//     else if (a < 0) {
//         return "Negative";
//     }
//     else {
//         return "Zero";
//     }
// };

// console.log(check(-10));


// //3. Return the sum of digits of a given number.
// let sumdigit = (a) => {
//     let sum = 0;

//     while (a != 0) {
//         let ld = a % 10;
//         sum = sum + ld;
//         a = parseInt(a / 10);
//     }

//     return sum;
// };

// console.log(sumdigit(456));


// //4. Return the count of digits in a given number.
// let countdigit = (a) => {
//     let count = 0;

//     while (a != 0) {
//         let ld = a % 10;
//         count = count + 1;
//         a = parseInt(a / 10);
//     }

//     return count;
// };

// console.log(countdigit(98765));


// //5. Return the sum of numbers between two given numbers.
// let sumrange = (a, b) => {
//     let sum = 0;

//     for (let i = a; i <= b; i++) {
//         sum = sum + i;
//     }

//     return sum;
// };

// console.log(sumrange(1, 10));



