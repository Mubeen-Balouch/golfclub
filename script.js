var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


document.addEventListener("mousemove" , function(dets) {


    crsr.style.left =  dets.x + "px";
    crsr.style.top = dets.y+ "px";
    blur.style.left =  dets.x - 250 + "px";
    blur.style.top = dets.y- 250 + "px";

})








gsap.to("#nav" , {

    height: "110px",
    backgroundColor : "#000",
    duration : 0.5,


    scrollTrigger: {
 
        trigger : "#nav",
        scroller : "body",

        start : "top -10%",
        end : "top -11%",
        scrub : 1 ,


    }

})


gsap.to("#main", {


    backgroundColor: "#000",

    scrollTrigger: {


        scroller : "body",
        trigger : "main",
      
        start : "top -25%",
        end : "top -70%",
        scrub : 2,




    }




})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){

        crsr.style.scale = 3 ; 

        crsr.style.backgroundColor =  "transparent";
        crsr.style.border =  "1px solid white" ;
        
    })

    elem.addEventListener("mouseleave", function(){

        crsr.style.scale = 1 ; 

        crsr.style.backgroundColor =  "#95C11E";
        crsr.style.border =  "0px solid #95C11E" ;
        
    })
})

gsap.from("#aboutus img , #aboutus-in " , {

    y:50,
    opacity : 0,
    duration : 1, 
    

    scrollTrigger : {

        scroller : "body"  ,
        trigger : "#aboutus" , 

        start : "top 60%",
        end : "top 58%",
        scrub : 1 ,

    }


})


gsap.from(".cards " , {



    scale : 0.8,
    y:50,
    opacity : 0,
    duration : 1, 
    

    scrollTrigger : {

        scroller : "body"  ,
        trigger : ".cards" ,  
    
        start : "top 70%",
        end : "top 65%",
        scrub : 3 ,

    }




})



gsap.from("#colon1 " , {

    y:-70,
    x : -70 ,
    
    

    scrollTrigger : {

        scroller : "body"  ,
        trigger : "#colon1" , 
    
        start : "top 50%",
        end : "top 45%",
        scrub : 4    ,

    }


})


gsap.from("#colon2 " , {

    y:70,
    x : 70 ,
    
    

    scrollTrigger : {

        scroller : "body"  ,
        trigger : "#colon2" , 
    
        start : "top 55%",
        end : "top 45%",
        scrub : 4    

    }


})


gsap.from("#page4 h1 " , {

    y:50,

    
    

    scrollTrigger : {

        scroller : "body"  ,
        trigger : "#page4 h1" , 
    
    
        start : "top 75%",
        end : "top 70%",
        scrub : 3,    

    }


})