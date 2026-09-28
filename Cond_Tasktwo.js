//coupon eligibility

function eligible(){
    let cart =parseInt(document.getElementById("coupon").value)
    if(cart>=5000){
        document.getElementById("che").value="coupon unlocked"
    }
}
//second 
function second(){
    let cart=parseInt(document.getElementById("age").value)
    if(cart>=18){
        document.getElementById("vote").value="You can Vote"
    }
}
//third
function third(){
    let cart=parseInt(document.getElementById("battery").value)
    if(cart<=20){
        document.getElementById("bat").value="Low Battery Please charge"
    }
}
//if else

    //checking given character or not
function char(){
    let ch=document.getElementById("a").value
if(ch<="a" && ch>="Z"|| ch<="a" && ch>="Z" ){
    document.getElementById("b").value="It is Alphabet"
}else{
    document.getElementById("b").value="IT is Not A Alphabet"
}
}
function five(){
    let ch=document.getElementById("ma").value
if(ch>=35){
    document.getElementById("fb").value="You are pass"
}else{
    document.getElementById("fb").value="You are fail"
}
}

function six(){
let ch=document.getElementById("maa").value
if(ch>=20000){
    document.getElementById("fba").value="Eligible For Loan"
}else{
    document.getElementById("fba").value="Not Eligible due to Salary"
}
}

function seven(){
let ch=document.getElementById("maaa").value
if(ch>=90 && ch<=100){
    document.getElementById("fbaa").value="Excellent You Got A+ Grade"
}
else if (ch>=80 && ch<=90){
     document.getElementById("fbaa").value="VeryGood You Got A Grade"
}
else if (ch>=60 && ch<=75){
     document.getElementById("fbaa").value="Good You Got B+ Grade"
}
else if (ch>=45 && ch<=59){
     document.getElementById("fbaa").value="Average You Got B Grade"
}
else if (ch>=35 && ch<=45){
     document.getElementById("fbaa").value="pass You Got c Grade"
}
else{
     document.getElementById("fbaa").value="you Fail"
}
}
function eight(){
let speed =document.getElementById("speed").value
if(speed<=40){
    document.getElementById("sp").value="Slow"
}
else if(speed>40 && speed<=60){
    document.getElementById("sp").value="normal"
}
else if(speed>60 && speed<=80){
    document.getElementById("sp").value="Fast"
}
else{
    document.getElementById("sp").value="OverSpeed"
}
}
function nine(){
    let stock = document.getElementById("stock").value

if(stock==0){
    document.getElementById("status").value="Out of Stock"
}
else if(stock>0 && stock<=5){
    document.getElementById("status").value="Only Few Left"
}
else if(stock>5 && stock<=20){
    document.getElementById("status").value="Limited Stock"
}
else{
    document.getElementById("status").value="In Stock"
}
}
