

//find all prime number between 1 - 1000
var array=[];
var count=0;
for(var i=1;i<=1000;i++)
{
    for(var j=i;j>=1;j--)
    {
        if(i%j==0)
            count++;
    }
    if(count<=2)
    {
       array.push(i);
    }
    count=0;
}
for(var i=0;i<=array.length;i++)
{
    console.log(array[i]);
}


// //Add number 5 for each array element
// var array=[1,2,3];
// var n=array[0]+5;
// var outarray=[n]
// for(var i=1;i<=array.length;i++)
// {
//     var m=array[i]+5;
//     outarray.push(m);
// }
// for(var j=0;j<=outarray.length;i++)
// {
//     console.log(outarray[i]);
// }
