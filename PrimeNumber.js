

//find all prime number between 1 - 1000
var prime=[1];
for(var i=2;i<=10;i++)
{
    for(var j=i;j>=2;j--)
    {
        if(i==j)
        {
            prime.push(i);
        }
        else
        {
            if(i%j==0)
            {
                prime.pop();
            }
        }
    }
}
for(var i=0;i<=prime.length;i++)
{
    console.log(prime[i]);
}


//Add number 5 for each array element
var array=[1,2,3];
var n=array[0]+5;
var outarray=[n]
for(var i=1;i<=array.length;i++)
{
    var m=array[i]+5;
    outarray.push(m);
}
for(var j=0;j<=outarray.length;i++)
{
    console.log(outarray[i]);
}
