

//find all prime number between 1 - 1000
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
       console.log(i);
    }
    count=0;
}

//Add number 5 for each array element
var array=[1,2,3];
for(var i=0;i<array.length;i++)
{
    var m=array[i]+5;
   console.log(m);
}

