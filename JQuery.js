
$(document).ready(function () {

        // $('img').attr({src:function (e) {
        //         console.log(e);
        //     }});

    $('#img1').click(function () {
        $('#img1').attr('src','images/sky.jpg');

    });

    $('#link').hover(function () {
        $('#link').attr('href','http://wwww.facebook.com');
        $('#link').text('facebook');
    });


    var m=$('input[type=checkbox]').val();
    console.log(m);


    $('button').click(function () {
        for(x=0;x<$('li').length;x++)
        {
            $('li:eq('+x+')').html(x+1);
        }
        $('li:gt(2)').css('color','red');
        $('li:eq(2)').css('color','green');
        $('li:lt(2)').css('color','blue');
    });

    var s=$('li:nth-child(4)').html();
    console.log(s);

var h=$('li').map(function () {
        return $(this).html();
    });
    console.log(h[2]);


    $('li').slice(2,3).css('color','green')
    $('li').slice(0,1).css('color','pink')

    // alert( $('li').map(function (index,element) {
    //     return $(element).html();
    // }).get().join('|'));

    var a=$('p').children();
   console.log(a);

   // $('p').css({
   //     "border-style":"solid",
   //     "border-color":"red"
   // });

    $('p.start').click(function () {
        $(this).siblings().text('hi');
    });

});

