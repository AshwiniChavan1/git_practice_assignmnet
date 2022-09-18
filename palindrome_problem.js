let num=1212;
let reverse=0;
let str=num;
while(num>0){
    let remainder=num%10;
    reverse=reverse*10+remainder;
    num=Math.floor(num/10);
}if(reverse==str){
    console.log("Yes");
}else{
    console.log("No");
}