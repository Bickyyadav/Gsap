var Path = "M 10 100 Q 500 100 990 100"

var finalPath = "M 10 100 Q 500 100 990 100"
var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    // console.log(dets.y);
    Path=  `M 10 100 Q 500 ${dets.y} 990 100`
    
    
    gsap.to("svg path",{
        attr: {d: Path},
        duration:0.2,
        ease:"power3.out"
    })
})

