/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('#nav li a').mouseover(function(){
    
    $(this).css('background-color','red').css('color','black')
            .animate({"margin-top": "-5px"}, 200);
}).mouseout(function(){
    
    $(this).css('background-color','white').css('color','black')
    .animate({"margin-top": "0px"}, 200);
    
});

$("#nav2,#nav3,#nav4").addclass('contentBox');

$("#nav1,#nav2,#nav3,#nav4").hide();

$('button-color-1 a').click(function(){

    $("#nav1").show('slow');
    $("#nav2,#nav3,#nav4").hide();
});
$('button-color-2 a').click(function(){

    $("#nav2").show('slow');
    $("#nav1,#nav3,#nav4").hide();
});
$('button-color-3 a').click(function(){

    $("#nav3").show('slow');
    $("#nav1,#nav2,#nav4").hide();
});
$('button-color-4 a').click(function(){

    $("#nav4").show('slow');
    $("#nav1,#nav2,#nav3").hide();
});