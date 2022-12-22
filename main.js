let x=parseInt(prompt("Enter the Number"));
let y;
for(i=1;x!=0;i++){
    y=x%10;
    x=Math.floor(x/10);
    console.log(y);
}