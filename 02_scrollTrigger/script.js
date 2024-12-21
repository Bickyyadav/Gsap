gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})


gsap.from("#page2 #box",{
    scale:0,
    delay:2,
    duration:2,
    rotate:360,
    // scrollTrigger:"#page2 #box"  // only run when the user go to the second page only this property will run
    scrollTrigger:{
        trigger:" #page2 #box",
        scroller: "body",
        markers: true,
        start: "top 50%",  // top se 50 percent chalega we can se in the webpage 
        end:"top 30%",
        scrub:true,   // this will reply the motion if we move our mouse down and up motion will be repeat 
        pin:true 
    }
})


gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})

