
function findPrimeNumbers(){
    console.log("++++++++++++++++++++++++");
    console.log("printing the prime numbers between 1 to 1000");
    var Numberofdevidenumbers=0;
    for(var number=1;number<=1000;number++)
    {
        for(var NumberWillDevideOnIt=number;NumberWillDevideOnIt>=1;NumberWillDevideOnIt--)
        {
            if(number%NumberWillDevideOnIt==0)
            {
                Numberofdevidenumbers++;
            }
        }
        if(Numberofdevidenumbers<=2)
        {
            console.log(number);
        }
        Numberofdevidenumbers=0;
    }
    console.log("++++++++++++++++++++++++");
}
// findPrimeNumbers();


function findPrimeNumberBetweenOneAndThousand() {
    var isPrimeNumber = true;

    for (var number = 1; number <= 1000; number++) {

        for (var numberWillDavideOnIt = 1; numberWillDavideOnIt <= number; numberWillDavideOnIt++) {

            var canDividedBy = number % numberWillDavideOnIt === 0;
            var notMe = numberWillDavideOnIt !== number;
            var notOne = numberWillDavideOnIt !== 1;

            if (canDividedBy && notMe && notOne) {
                isPrimeNumber = false;
                break;
            }
            isPrimeNumber = true;
        }
        if (isPrimeNumber) {
            console.log(number);
        }
    }
}
//findPrimeNumberBetweenOneAndThousand();



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

// printThreeNumbers();

