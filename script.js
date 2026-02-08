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


window.addEventListener("load", function() {
    let pinWrap = document.querySelector(".pin-wrap")
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    gsap.to(".pin-wrap", {
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

    ScrollTrigger.refresh();
})

const tl = gsap.timeline({
    scrollTrigger:{
        trigger: ".anima",
        scroller: pageContainer,
        start: "top 25%",
        end: "botton 40%",
        scrub: 2,
    }
})

tl.fromTo(".anima", {scale: 1}, {scale: 2.5})
tl.fromTo(".anima", {opacity: 1}, {opacity: 0.2})


/*carrosel infinito */

const track = document.querySelector('.carousel-track');
const cards = Array.from(track.children);

// Duplica cada card dinamicamente para garantir o loop
cards.forEach(card => {
  const clone = card.cloneNode(true);
  clone.setAttribute('aria-hidden', true);
  track.appendChild(clone);
});





window.addEventListener("load", function() {
    
    const folders = gsap.utils.toArray(".folder-card");
    const folder2 = document.querySelector(".item2");
    const folder3 = document.querySelector(".item3");
    const folder4 = document.querySelector(".item4");
    const folder5 = document.querySelector(".item5");
    const folder6 = document.querySelector(".item6");

    // 1. A Timeline do Scroll (Mantém as pastas subindo conforme você desce)
    const tlPastas = gsap.timeline({
        scrollTrigger: {
            trigger: ".folder-section",
            scroller: pageContainer,
            start: "top top",
            end: "+=2000",
            pin: true,
            scrub: 1,
        }
    });

    tlPastas.to(folder2, { y: "40px", ease: "none" })
    tlPastas.to(folder3, { y: "80px", ease: "none" });
    tlPastas.to(folder4, { y: "120px", ease: "none" });
    tlPastas.to(folder5, { y: "160px", ease: "none" });
    tlPastas.to(folder6, { y: "200px", ease: "none" });


    // 2. AÇÃO DE CLIQUE: Trazer para o topo
    folders.forEach((folder) => {
        folder.addEventListener("click", () => {
            // Se a pasta clicada já estiver no topo, nós resetamos
            if (folder.classList.contains("active-folder")) {
                folder.classList.remove("active-folder");
            } else {
                // Remove o destaque de qualquer outra pasta
                folders.forEach(f => f.classList.remove("active-folder"));
                // Adiciona o destaque na pasta clicada
                folder.classList.add("active-folder");
            }
        });
    });

    ScrollTrigger.refresh();
});





    

 