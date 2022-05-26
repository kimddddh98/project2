$(function(){
    $(window).scroll(function(){
    const slider=document.getElementById('slider').scrollHeight;
    const room=document.getElementById('room').scrollHeight-200;
    const bgone=document.getElementsByClassName('bgbox_one')[0].scrollHeight;
    const bgtwo=document.getElementsByClassName('bgbox_two')[0].scrollHeight;
    const bgtxt=document.getElementById('bgtxt').scrollHeight;
    const bgthree=document.getElementsByClassName('bgbox_three')[0].scrollHeight;
    const smform=document.getElementsByClassName('small_form')[0].scrollHeight
    const height=document.getElementById('wrap').scrollHeight
    const price=document.getElementById('price').scrollHeight
    var scroll=$(window).scrollTop();
        if(window.matchMedia("(max-width: 1199px)").matches){
        if(slider+price+room+bgone+bgtwo+bgtxt<scroll){
            $('#news').css('transform','translate(0, 0px)')
            $('#news').css('opacity','1')
            $('#bgtxt').css('transform','translate(0, 0px)')
            $('#bgtxt').css('opacity','1')
            $('#con').css('transform','translate(0, 0px)')
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');
            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room>div').css('opacity','1')
            $('#room').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
        else if(slider+price+room+bgone+bgtwo<scroll){
            $('#bgtxt').css('transform','translate(0, 0px)')
            $('#bgtxt').css('opacity','1')
            $('#con').css('transform','translate(0, 0px)')
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');
            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room>div').css('opacity','1')
            $('#room').css('transform','translate(0, 0px)')
             $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        
        }
        else if(slider+price+room+bgone<scroll){
            $('#con').css('transform','translate(0, 0px)')
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');

            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room>div').css('opacity','1')
            $('#room').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
        else if(slider+price+room<scroll){
            $('#space').css('transform','translate(0, 0px)')
            $('#space').css('opacity','1');

            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#room>div').css('opacity','1')
            
            $('#room').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
        else if(slider+price<scroll){
            $('#room>div').css('opacity','1')
            $('#room').css('transform','translate(0, 0px)')
            $('.room_right').css('transform','translate(0, 0px)')
            $('.room_left').css('transform','translate(0, 0px)')
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')

        }
        else if(scroll>1){
            $('#price').css('opacity','1');
            $('#price').css('transform','translate(0, -100px)')
        }
       
    }
    // 1199px이하ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ>

    // 1200px이상ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ>
    else if(window.matchMedia("(min-width: 1200px)").matches){
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
    }
   
        
});

$(document).ready(function(){
    $('#content_text').css('transform','translate(0, 0px)')
    });
});
