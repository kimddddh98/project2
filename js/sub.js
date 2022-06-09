$(function(){
    $('.form').click(function(){
        $('#reform').fadeIn();
        // $('html,body').addClass('hidden')
        });
    $(document).on('click',function(e){
        if($('.small_form,#reform').is(e.target)){
            $('#reform').fadeOut();
        // $('html,body').removeClass('hidden')

        }
    })
    $('.detail:eq(0)').mouseover(function(){
        $('.form:eq(0)').text('Click!')
    })
    $('.detail:eq(1)').mouseover(function(){
        $('.form:eq(1)').text('Click!')
    })
    $('.detail:eq(2)').mouseover(function(){
        $('.form:eq(2)').text('Click!')
    })
    $('.detail:eq(3)').mouseover(function(){
        $('.form:eq(3)').text('Click!')
    })
    $('.detail').mouseleave(function(){
        $('.form').text('Reservation Now')

    })
    $('#menu').click(function(){
        $('#clickmenu').css('width','100%')
    })
    $('#closemenu').click(function(){
        $('#clickmenu').css('width','0%')
    })
    
    $('#type h4').eq(1).click(function(){
        $('#room').fadeOut(500,function(){
            $('.bgbox').css('height','auto')
            $('#space').slideDown(1000)      
            $('#space').css('display','flex')      
            });
    });
    $('#type h4').eq(0).click(function(){
        $('#space').fadeOut(500,function(){
        $('#room').slideDown(1000)  
        });    
    

    });
    $('.space_img').hover(function(){
        $(this).children('p').fadeIn();
    },function(){
        $(this).children('p').fadeOut();
    })

    $('.space_img').click(function(){
        var popup=($(this).children('img').attr('src'))
        $('#popup_img img').attr('src',popup);
        $('#popup_img').fadeIn();
    })
    $('#popup_img span').click(function(){
        $('#popup_img').fadeOut();

    });
  
   
});

window.onload= function(){
const prev=document.querySelectorAll('.prev');
const next=document.querySelectorAll('.next');
const dota=document.querySelectorAll('.dot>p>span');
// const dota=$('.dot>p>span:lt(2)')
var index1=0;
var index2=0;
var index3=0;
var index4=0;
var lis=document.querySelectorAll('.li');
for(var i=1;i<=4;i++){
var li=document.getElementById('li'+i);
var width=li.children.length
li.style.width=100*width+'%' 

}
let img=document.querySelector('.sli')
let imgwidth=document.querySelectorAll('.li img')
// for(var k=0;k<imgwidth.length;k++){
//     imgwidth[k].style.maxWidth=100+'%'
// }
for(let x=0;x<2;x++){
    dota[x].addEventListener('click',function(){
        for(var j=0;j<2;j++){
            dota[j].style.opacity=0.5
        }
        this.style.opacity=1
        index1=x

    })
}
for(let x=2;x<4;x++){
    dota[x].addEventListener('click',function(){
        for(var j=2;j<4;j++){
            dota[j].style.opacity=0.5
        }
        this.style.opacity=1
        index2=x-2

    })
}
for(let x=4;x<7;x++){
    dota[x].addEventListener('click',function(){
        for(var j=4;j<7;j++){
            dota[j].style.opacity=0.5
        }
        this.style.opacity=1
        index3=x-4

    })
}
for(let x=7;x<9;x++){
    dota[x].addEventListener('click',function(){
        for(var j=7;j<9;j++){
            dota[j].style.opacity=0.5
        }
        this.style.opacity=1
        index4=x-7

    })
}
dota[0].addEventListener('click',function(){
    lis[0].style.left=0+'px';
})
dota[1].addEventListener('click',function(){
    lis[0].style.left=-img.clientWidth+'px';
})
dota[2].addEventListener('click',function(){
    lis[1].style.left=0+'px';
})
dota[3].addEventListener('click',function(){
    lis[1].style.left=-img.clientWidth+'px';
})
dota[4].addEventListener('click',function(){
    lis[2].style.left=0+'px';
})
dota[5].addEventListener('click',function(){
    lis[2].style.left=-img.clientWidth+'px';
})
dota[6].addEventListener('click',function(){
    lis[2].style.left=-img.clientWidth*2+'px';
})
dota[7].addEventListener('click',function(){
    lis[3].style.left=0+'px';
})
dota[8].addEventListener('click',function(){
    lis[3].style.left=-img.clientWidth+'px';
})

prev[0].addEventListener('click',function(){
    if (index1 > 0) {
        index1--
    }
    else if (index1 == 0) {
        index1 = lis[0].children.length - 1
    }
    lis[0].style.left = -img.clientWidth * index1 + 'px';
    for(let d=0;d<2;d++){
        dota[d].style.opacity=0.5
    }
    dota[index1].style.opacity=1;

}) 
prev[1].addEventListener('click',function(){
    if (index2 > 0) {
        index2--
    }
    else if (index2 == 0) {
        index2 = lis[1].children.length - 1
    }
    lis[1].style.left = -img.clientWidth * index2 + 'px'
    for(let d=2;d<4;d++){
        dota[d].style.opacity=0.5
    }
    dota[index2+2].style.opacity=1;

})
   


prev[2].addEventListener('click',function(){
    if (index3 > 0) {
        index3--
    }
    else if (index3 == 0) {
        index3 = lis[2].children.length - 1
    }
    lis[2].style.left = -img.clientWidth * index3 + 'px'
    for(let d=4;d<7;d++){
        dota[d].style.opacity=0.5
    }
    dota[index3+4].style.opacity=1;

})
   


prev[3].addEventListener('click',function(){
    if (index4 > 0) {
        index4--
    }
    else if (index4 == 0) {
        index4 = lis[3].children.length - 1
    }
    lis[3].style.left = -img.clientWidth * index4 + 'px'
    for(let d=7;d<9;d++){
        dota[d].style.opacity=0.5
    }
    dota[index4+7].style.opacity=1;

})
    


next[0].addEventListener('click',function(){
    if(index1==lis[0].children.length-1){
        index1=0;
    }else{
        index1++
    }
    lis[0].style.left=-img.clientWidth*index1+'px'
    for(let d=0;d<2;d++){
        dota[d].style.opacity=0.5
    }
    dota[index1].style.opacity=1;

})
        
    
next[1].addEventListener('click',function(){
    if(index2==lis[1].children.length-1){
        index2=0;
    }else{
        index2++
    }
    lis[1].style.left=-img.clientWidth*index2+'px'
    for(let d=2;d<4;d++){
        dota[d].style.opacity=0.5
    }
    dota[index2+2].style.opacity=1;

})
        

    
next[2].addEventListener('click',function(){
    if(index3==lis[2].children.length-1){
        index3=0;
    }else{
        index3++
    }
    lis[2].style.left=-img.clientWidth*index3+'px'
    for(let d=4;d<7;d++){
        dota[d].style.opacity=0.5
    }
    dota[index3+4].style.opacity=1;

})
       

    
next[3].addEventListener('click',function(){
    if(index4==lis[3].children.length-1){
        index4=0;
    }else{
        index4++
    }
    lis[3].style.left=-img.clientWidth*index4+'px'
    for(let d=7;d<9;d++){
        dota[d].style.opacity=0.5
    }
    dota[index4+7].style.opacity=1;

})
    

}
