const sSpace=document.getElementById('space');
            const sAlbum=document.getElementById('album');
            const sWidth=370;
            const sImg=document.querySelectorAll('.sli');
            const sConunt=sImg.length;
            let index=0;
            const next=document.querySelector('.next');
            const prev=document.querySelector('.prev');
            sAlbum.style.width=sWidth*sConunt+'px';
            const itemWidth=document.getElementById('album').offsetWidth
            let per=sSpace.offsetWidth/2
            let item=document.querySelector('#space').offsetWidth
            
            const dot1=document.getElementById('dot1');        
            const dot2=document.getElementById('dot2');        
            const dot3=document.getElementById('dot3');        
            const dot4=document.getElementById('dot4');

        if(window.matchMedia("(max-width: 750px)").matches){
            sAlbum.style.width=sWidth*sConunt+'px';
            // sImg[0,1,2,3,4,5,6].style.width=item/2+'px'
            let img_width=sImg[0].offsetWidth+20
            dot1.addEventListener('click',function(){
                sAlbum.style.left=0+'px'
                
            })
            dot2.addEventListener('click',function(){
                sAlbum.style.left=-img_width+'px'

            })
            dot3.addEventListener('click',function(){
                sAlbum.style.left=-img_width*2+'px'
            })
            dot4.addEventListener('click',function(){
                sAlbum.style.left=-img_width*3+'px'
            })
            dot5.addEventListener('click',function(){
                sAlbum.style.left=-img_width*4+'px'
            })
            dot6.addEventListener('click',function(){
                sAlbum.style.left=-img_width*5+'px'
            })
            dot7.addEventListener('click',function(){
                sAlbum.style.left=-img_width*6+'px'
            })
            
        }
        if(window.matchMedia("(min-width: 751px)").matches){
            window.onload=function(){
                dot1.style.backgroundColor='#666'
            }
            
         
           
            
            dot1.addEventListener('click',function(){
                if(sAlbum.style.left==-sWidth*6+'px'||sAlbum.style.left==-sWidth*5+'px'){
                    sAlbum.style.left=-sWidth*7+'px'
                    setTimeout(function(){
                   sAlbum.style.left=0+'px'
                    sAlbum.style.transition='none'    
                    },1000)
                    setTimeout(function(){
                        sAlbum.style.transition='1s'
                    },1005)
                    
                }
            
                else{
                    sAlbum.style.left=0+'px'
                }
            });
            dot2.addEventListener('click',function(){
                if(sAlbum.style.left==-sWidth*6+'px'||sAlbum.style.left==-sWidth*5+'px'){
                    sAlbum.style.left=-sWidth*8+'px'
                    setTimeout(function(){
                   sAlbum.style.left=-sWidth+'px'
                    sAlbum.style.transition='none'    
                    },1000)
                    setTimeout(function(){
                        sAlbum.style.transition='1s'
                    },1050)
                    
                }
            
                else{
                    sAlbum.style.left=-sWidth+'px'
                }
            });
            
            
           
          
            dot3.addEventListener('click',function(){
                sAlbum.style.left=-sWidth*2+'px'
            })
            dot4.addEventListener('click',function(){
                sAlbum.style.left=-sWidth*3+'px'
            })
            dot5.addEventListener('click',function(){
                sAlbum.style.left=-sWidth*4+'px'
            })
            dot6.addEventListener('click',function(){
                sAlbum.style.left=-sWidth*5+'px'
            })
            dot7.addEventListener('click',function(){
                sAlbum.style.left=-sWidth*6+'px'
            })
          
        }
            var init=document.getElementsByClassName('init');
            for(var i=0;i<init.length;i++){
                init[i].addEventListener('click',function(){
                    for(var j=0;j<init.length;j++){
                        init[j].style.backgroundColor='#fad091';
                    }
                    this.style.backgroundColor='#666';
                })
            }


                 // function move(num){
            //     sAlbum.style.left=-num*sWidth+'px';
            //     index=num;
            // }
            // prev.addEventListener('click',function(){
            //     if(index!==0)move(index-1);
            // })
            // next.addEventListener('click',function(){
            //     if(index!==sConunt-3){
            //         move(index+1);
            //     }
            // })


          