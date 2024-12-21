function page1Animation(){
    var tl  = gsap.timeline()

tl.from("nav h1 , nav button , nav h4",{
    y:-30,
    opacity:0,
    delay:0.1,
    duration:0.3,
    stagger: 1,
})

tl.from(".center-part1 h1",{
    x:-500,
    opacity:0,
    duration:0.5
})

tl.from(".center-part1 p",{
    x:-200,
    opacity:0,
    duration:0.5
})

tl.from(".center-part1 button",{
    opacity:0,
    duration:0.5
})

tl.from(".center-part2 img",{
    opacity:0,
    duration:0.5
},"-=1")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.1,
    duration:0.6,
})
}

page1Animation()



var t12 = gsap.timeline({
    scrollTrigger:{
        trigger:".services h3",
        scroller:"body",
        marker: true,
        start: "top 50%",
        end: "top 0%",
        scrub: 2
    }
})
t12.from(".services h3",{
    y:30,
    opacity:0,
})

t12.from(".line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"right")       // in which we have written left they will run both on same time 

t12.from(".line1.right",{
    x:-300,
    opacity:0,
    duration:1
},"left")

t12.from(".line1.left",{
    x:-300,
    opacity:0,
    duration:1  
},"right")    // in which we have written left they will run both on same time 




t12.from(".line1.right",{
    x:-300,
    opacity:0,
    duration:1
},"left")
