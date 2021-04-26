var i = 1;
function Printodds(){
    for(i=1; i<=20; i+=2){
    console.log(i);}
}

var a = 4;
function Sequence(){
    for(a=4; a>=-3.5; a-=1.5){
        console.log(a);
    }
}

var sum = 0;
var b = 1;
function Sigma(){
    while(b<=100){
        sum += b;
        b++;
    }
    console.log(sum);
}

var product = 1;
var n = 0;
function Factorial(){
    while(product<1e8){
        n++;
        product = product*n;
    }
    console.log(product);
}
