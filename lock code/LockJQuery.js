$(document).ready(function () {

    $('body').css({
        backgroundColor: '#f2f2f2',

    });

    $('h1').css({
        textAlign: 'center',
        fontSize: '90px',
        color: 'pink'

    });


    $('#start').css({
        marginLeft: '46%',
        backgroundColor: '#306754',
        width: '150px',
        color: 'snow',
        textAlign: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        fontSize: '40px',
        padding: '15px',
        border: 'solid black 1px',
    });


    $('.next').css({
        backgroundColor: '#A9A9A9',
        width: '500px',
        height: '500px',
        marginLeft: '37%'
    });


    $("#read").css({
        padding: '15px',
        marginBottom: '37%',
        fontSize: '1em',
        display: 'block',
    });


    $('.lock').css({
        paddingTop: '170px',
        paddingLeft: '90px'
    });


    $('input[type=number]').css({
        width: '100px',
        backgroundColor: 'pink',
        fontSize: '70px',
        color: 'snow',
        textAlign: 'center',

    });


    $('.button').css({
        backgroundColor: '#306754',
        width: '200px',
        marginTop: '40px',
        marginLeft: '150px',
        color: 'snow',
        textAlign: 'center',
        fontSize: '30px',
        border: 'solid black 1px',
        padding: '15px',


    });


    $('.won').css({
        textAlign: 'center',
        fontSize: '30px',
        border: 'solid black 1px',
        width: '500px',
        marginLeft: '37%',
        marginTop: '50px',
        backgroundColor:'#0099FF',
        color:'snow',
        padding: '10px',
        overflow:'auto',

    });


    $('.again').css({
        float:'right',
        backgroundColor: '#306754',
        padding: '15px',
        border: 'solid black 1px',

    });



   $('.won').hide();
    $('.next').hide();
    $('#start').click(startGame);
    $('.button').click(openLock);
    $('.again').click(restart);
    var randomNumber = '';


    function startGame() {
        $('.next').show('slow');
        $('#start').hide('medium');
        $('h1').text('It Started');

        $('input[type=number]').map(function () {
            $(this).val('5');
        });

        randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
        console.log(randomNumber);

        $('input[type=number]').css({
            backgroundColor: 'pink',
        });

    }


    function openLock() {
        var win=0;
        for (var x = 0; x < $('input[type="number"]').length; x++) {
           var boxNum=$('input[type="number"]').eq(x);
           var result= check(boxNum.val(), randomNumber[x]);

            boxNum.css({
               backgroundColor:result.backgroundColor,
           })
            if(result.checker)
            {
                win++;
            }
            console.log(win);
        }
        if(win==3)
        {
            $('.won').show('medium');
            $('.next').hide('slow');
            $('h1').text('');
        }

    }


    function restart() {
        $('.next').show('slow');
        $('.won').hide();
        $('input[type=number]').map(function () {
            $(this).val('5');
        });
        randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100).toString();
        console.log(randomNumber);
        $('h1').text('It Started');

    }

    function check(boxNumber,randNumber) {
        var response={};
     if(boxNumber>randNumber){
           response.checker=false;
           response.backgroundColor='red';
     }
     else if(boxNumber<randNumber){
         response.checker=false;
         response.backgroundColor='blue';
     }
     else {
         response.checker=true;
         response.backgroundColor='green';
     }
     return response;
    }

});