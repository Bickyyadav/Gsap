// gsap.to("#box1",{
//     x:1000,
//     duration: 2,
//     delay:1
// })


// gsap.to("#box1",{
//     x:1000,
//     duration: 2,
//     delay:1,
//     rotate: 360,
//     backgroundColor:"blue",
//     borderRadius: "50%",
//     scale: 0.5,
//    repeat:2 , run the whole box 3 times and if we use -1 time then it is infinity times
//    yoyo:true , helps to run the back if we use the repeat -1  in the code
// })


// gsap.from("#box1",{
//     x:1000,
//     duration: 2,
//     delay:1,
//     rotate: 360,
//     backgroundColor:"blue",
//     borderRadius: "50%",
//     scale: 0.5,   //size of increate and decrease by using scale
// })


// gsap.to("#box2",{
//     x:1000,
//     duration: 2,
//     delay:2
// })


// gsap.from("h1",{
//     // color:"red",
//     opacity:0,
//     duration:2,
//     y:200,        //comming from the yaxis 
//     delay:1,
//     stagger:1,   //vale=0.3/1/-1 we have wrote 3 h1 each will come one after another 
// })  


// gsap.to("#box3",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })


// gsap.to("#box4",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     delay:2,
// })



// gsap.to("#box5",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     delay:3,
// })



// timeline just like a train running one after another 
//  var tl = gsap.timeline()
//  tl.to("#box3",{
//     x:1500,
//     rotate:360,
//     duration: 1.5,
//     delay:1
//  })
// tl.to("#box4",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
// })
// tl.to("#box5",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
// })



var tl = gsap.timeline()
tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1, 
    delay:0.5
})
tl.from("h3",{
    y:-30,
    opacity:0,
    duration:1, 
    delay:0.5,
    stagger:0.3
})
tl.from("h1",{
    y:20,
    opacity:0,
    duration:0.5, 
    delay:0.5,
    scale:0.2,
})
