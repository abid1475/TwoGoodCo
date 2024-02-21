// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


let play = document.querySelector("#play")
let video = document.querySelector("#video-container")
play.style.display = "none"
video.addEventListener("mousemove", function(dets){
    play.style.left = dets.clientX-30 + "px";
    play.style.top = dets.clientY-40 + "px";
    play.style.display = "block"

    video.addEventListener("mouseleave", function(){
        play.style.display= "none" 
        play.style.transition = "0.2s"
    })
})
gsap.from("#page1 h1",{
    y:100,
    opacity:0, 
    delay:0.5,
    duration:0.9,
    stagger:0.2
})

var space = document.querySelector("#space")
var page3 = document.querySelector("#page3")
page3.addEventListener("mousemove", function(dets){
//    console.log(dets.y);
space.style.left = dets.x-50 + "px"
space.style.top = dets.y-60 + "px"
space.style.display = "block"
})
page3.addEventListener("mouseleave", function(dets){
    space.style.display = "none"
})







