/**animação para quando scrollar texto for para o lado  */
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
        ? scroller.scrollTo(value, 0, 0)
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
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
})

/**carrossel infinto */

const track = document.querySelector('.carrossel-track');
const cards = Array.from(track.children);

//duplicar cada card dinamicamente para garantir o loop
cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('arial-hidden', true);
    track.appendChild(clone);
})

/** secao animação horizontal */

window.addEventListener("load", function(){
    let pinWrap = document.querySelector(".pin-wrap")
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(".pin-wrap",{
        scrollTrigger:{
            scroller: pageContainer,
            scrub: true,
            trigger: "#sectionPin",
            pin: true,
            start: "top top",
            end: pinWrapWidth,

        },
        x: -horizontalScrollLength,
    })

    ScrollTrigger.addEventListener("refresh", () => scroller.update())

    scrollerTrigger.refresh();
})

const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".anima",
        scroller: pageContainer,
        start:"top 25%",
        end:"botton 40%",
        scrub: 2,

    }
})

tl.fromTo(".anima",{scale: 1},{scale: 2.5})
tl.fromTo(".anima",{opacity: 1},{opacity: 0.2})

/**secao pasta de projetos   */

window.addEventListener("load",function(){
    const pastas = gsap.utils.toArray(".pasta-card");
    const pasta2 = document.querySelector(".item2");
    const pasta3 = document.querySelector(".item3");
    const pasta4 = document.querySelector(".item4");

    //a timeline para animaçao subir
    const tlPastas = gsap.timeline({
        scrollTrigger:{
            trigger: ".secao-pasta",
            scroller: pageContainer,
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 1,
        }
    });

    tlPastas.to(pasta2, {y: "40px", ease: "none"});
    tlPastas.to(pasta3, {y: "80px", ease: "none"});
    tlPastas.to(pasta4, {y: "120px", ease: "none"});


    
    // ação de clique : trazer para o topo 

    pastas.forEach((pasta) => {
        pasta.addEventListener("click", () => {
            // Se a pasta clicada já estiver no topo, nós resetamos
            if (pasta.classList.contains("active-pasta")) {
                pasta.classList.remove("active-pasta");
            } else {
                // Remove o destaque de qualquer outra pasta
                pastas.forEach(f => f.classList.remove("active-pasta"));
                // Adiciona o destaque na pasta clicada
                pasta.classList.add("active-pasta");
            }
        });
    });

    ScrollTrigger.refresh();
    });