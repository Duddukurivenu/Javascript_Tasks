function first(){
let num=parseInt(document.getElementById("ve").value)
if(num>0){
    result=num+ " is Positive" 
}else{
result=num+ " is negative"

}
document.getElementById("fone").value=result
}
// 2nd one...first.
function second(){
let digit=parseInt(document.getElementById("even").value)
if(digit%2==0){
    sol=digit+ " is Even" 
}else{
  sol=digit+ " is odd"

}
document.getElementById("odd").value=sol
}

function third(){
let d=parseInt(document.getElementById("yes").value)
if(d%5==0){
    s=d+ " is divisible by 5" 
}else{
    s=d+ " is not divisible by 5"
}
document.getElementById("not").value=s
}

function four(){
let e=parseInt(document.getElementById("one").value)
let f=parseInt(document.getElementById("two").value)
if(e>f){
    s=e+ " is Greater than "+f 
}else{
    s=f+ " is Greater than"+e
}
document.getElementById("t").value=s
}
function hero(){
let bill=parseInt(document.getElementById("bil").value)
 let discout=0
if(bill>=5000){
   discout=(bill*20/100)
 let totalbill=bill-discout
   document.getElementById("offer").value=discout
   document.getElementById("v").value=totalbill

}
else{
    (document.getElementById("v").value=bill)
    (document.getElementById("offer").value=discout)
}
}