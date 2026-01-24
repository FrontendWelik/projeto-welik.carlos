gsap.registerPlugin(ScrollTrigger)
const pageContainer = document.querySelector(".container")


const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
})

scroller.on("scroll",ScrollTrigger.update)

ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value){
        return arguments.length
        ? scroller.scrollTop(value, 0, 0)
        : scroller.scroll.instance.scroll.y
    },
    getBoundingClientRect(){
        return {
            left:0,
            top:0,
            width: window.innerWidth,
            height: window.innerHeight,
        }
    },
    pinType: pageContainer.computedStyleMap.transform ? "transform" : "fixed"
})

window.addEventListener("load", function() {
    let pinWrap = document.querySelector(".pin-wrap")
    let pinWrapWidth = pinWrap.ffsetWidth;
})