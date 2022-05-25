$(function(){
    $(window).scroll(function(){
    const slider=document.getElementById('slider').scrollHeight;
    const room=document.getElementById('room').scrollHeight;
    const bgone=document.getElementsByClassName('bgbox_one')[0].scrollHeight;
    const bgtwo=document.getElementsByClassName('bgbox_two')[0].scrollHeight;
    const bgtxt=document.getElementById('bgtxt').scrollHeight;
    const bgthree=document.getElementsByClassName('bgbox_three')[0].scrollHeight;
    
    const height=document.getElementById('wrap').scrollHeight
    var scroll=$(window).scrollTop();
        if(slider+room+bgone+bgtwo+bgtxt<scroll){
            $('#news').css('transform','translate(0, 0px)')
            $('#news').css('opacity','1')

            $('#bgtxt').css('transform','translate(0, 0px)')
            $('#bgtxt').css('opacity','1')
            $('#con').css('transform','translate(0, 0px)')
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');

            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
        else if(slider+room+bgone+bgtwo<scroll){
            $('#bgtxt').css('transform','translate(0, 0px)')
            $('#bgtxt').css('opacity','1')

            $('#con').css('transform','translate(0, 0px)')
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');

            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room').css('transform','translate(0, 0px)')
         $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        
        }
        else if(slider+room+bgone<scroll){
            $('#con').css('transform','translate(0, 0px)')
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');

            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
        else if(slider+room<scroll){
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');

            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
        else if(slider<scroll){
            $('#room').css('transform','translate(0, 0px)')
            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        // $('#price').css('margin','-100px auto');
        }
        else if(scroll>1){
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
});
$(document).ready(function(){
    $('#content_text').css('transform','translate(0, 0px)')
    // $('#dot1').css('background','#666')
});
});