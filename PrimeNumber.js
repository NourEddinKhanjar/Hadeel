


function findPrimeNumbers(){
    console.log("++++++++++++++++++++++++");
    console.log("printing the prime numbers between 1 to 1000");
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
    console.log("++++++++++++++++++++++++");
}


findPrimeNumbers();



function printThreeNumbers() {
    var numbers = [1, 2, 3];

    console.log("========================");
    console.log("Print 1,2,3 with adding five");
    for (var i = 0; i < numbers.length; i++) {
        var numberPlusFive = numbers[i] + 5;
        console.log(numberPlusFive);
    }
    console.log("========================");
}

printThreeNumbers();

