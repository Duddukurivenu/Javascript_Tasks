class calucalator{
    static add(){
        console.log("sum of 10 and 20 is",10+20);
        
    }
    static sub(a,b){
        console.log("difference b/w a,b is",a-b);
        
        
    }
    static mul(){
        return 10*10


    }
    static div(a,b){
        return a/b

    }

}
calucalator.add()
calucalator.sub(20,10)
console.log(calucalator.mul());
console.log(calucalator.div(30,2));

//task2 
//with input without return
class palindrome{
    static num(n){
        let t=n
        let  rev=0
        while(t>0){
            rev=rev*10+t%10
            t=parseInt(t/10)
        }
        if(rev==n){
            console.log(n,"is palindrome");
            
        }
        else{
            console.log(n,"is not palindrome");
            
        }
        
    }
}
palindrome.num(1221)

//check num is perfect or not
//with input and with return

 class perfect{
    static num(number){
        let l=number
        let i=1
       let sum=0
        while(i<l){
            if(number%i==0){
                sum+=i

            }
            i+=1
        }
        if(sum==number)
            {
                return number+" is perfect number"
            
        }
        else{
            return number+" is not a perfetct Number"
            
        }

    } 
 } 
 console.log(perfect.num(20));
 