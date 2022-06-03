
window.onload= function(){
const prev=document.querySelectorAll('.prev');
const next=document.querySelectorAll('.next');
const dota=document.querySelectorAll('.dot>p>span');
var index1=0;
var index2=0;
var index3=0;
var index4=0;
var lis=document.querySelectorAll('.li');
console.log(dota)
for(var i=1;i<=4;i++){
var li=document.getElementById('li'+i);
var width=li.children.length
li.style.width=715*width+'px'


}

prev[0].onclick = function () {
    if (index1 > 0) {
        index1--
    }
    else if (index1 == 0) {
        index1 = lis[0].children.length - 1
    }
    lis[0].style.left = -715 * index1 + 'px';
    if(index1==0){
        dota[index1].style.opacity=1
        dota[index1+1].style.opacity=0.5
    }
    else if(index1==1){
        dota[index1].style.opacity=1
        dota[index1-1].style.opacity=0.5
    }
    
    
}
prev[1].onclick = function () {
    if (index2 > 0) {
        index2--
    }
    else if (index2 == 0) {
        index2 = lis[1].children.length - 1
    }
    lis[1].style.left = -715 * index2 + 'px'
}

prev[2].onclick = function () {
    if (index3 > 0) {
        index3--
    }
    else if (index3 == 0) {
        index3 = lis[2].children.length - 1
    }
    lis[2].style.left = -715 * index3 + 'px'
}

prev[3].onclick = function () {
    if (index4 > 0) {
        index4--
    }
    else if (index4 == 0) {
        index4 = lis[3].children.length - 1
    }
    lis[3].style.left = -715 * index4 + 'px'
}



next[0].onclick=function(){
        if(index1==lis[0].children.length-1){
            index1=0;
        }else{
            index1++
        }
        lis[0].style.left=-715*index1+'px'
        lis[0].style.transition='all 1s ease-out'

        if(index1==0){
            dota[index1].style.opacity=1
            dota[index1+1].style.opacity=0.5
        }
        else if(index1==1){
            dota[index1].style.opacity=1
            dota[index1-1].style.opacity=0.5
        }
    


    }
next[1].onclick=function(){
        if(index2==lis[1].children.length-1){
            index2=0;
        }else{
            index2++
        }
        lis[1].style.left=-715*index2+'px'

    }
next[2].onclick=function(){
        if(index3==lis[2].children.length-1){
            index3=0;
        }else{
            index3++
        }
        lis[2].style.left=-715*index3+'px'

    }
next[3].onclick=function(){
        if(index4==lis[3].children.length-1){
            index4=0;
        }else{
            index4++
        }
        lis[3].style.left=-715*index4+'px'

    }

}


// for(var y=1;y<=4;y++){
//     const x=document.querySelectorAll('.li');
//     prev[i].onclick=function(){
//     x[i].style.left=-715+'px'

// }    
// }