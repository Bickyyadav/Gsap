
function breakthetext (){

var h1text = document.querySelector('h1')
var textcontent = h1text.textContent

var splittedText = textcontent.split("")
var halftext = Math.floor(splittedText.length /2);


var clutter = ""
splittedText.forEach(function (elem,index) {

    if(index < halftext){
        clutter = clutter + `<span class="halfletter">${elem }</span>`    
    }
    else{
         clutter = clutter + `<span class="lastletter">${elem }</span>`
    }
})

h1text.innerHTML = clutter
}

breakthetext()


gsap.from("h1  .halfletter",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.5,
})

gsap.from("h1  .lastletter",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger: -0.5,
})
