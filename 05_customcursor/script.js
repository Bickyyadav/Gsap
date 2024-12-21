var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imagediv = document.querySelector('#images')

main.addEventListener('mousemove',function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        // ease: 'back.out' // this we have use to move the circrl with cursor in smooth way the the easing from gsap webiste 
    })
})

imagediv.addEventListener("mouseenter",function(){
    cursor.innerHTML = 'view more'
   gsap.to(cursor,{
    scale:2,
   })
})

imagediv.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
     scale:1,
    })
 })




 //will show what keyword we have pressed
// window.addEventListener('keypress',function(dets){
//     console.log(dets);
// })
