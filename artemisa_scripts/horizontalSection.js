function horizontalSection(){
    console.log("horizontalSection CARGADO");

    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".beneficio");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".contenedor-horizontal",
            pin: true,
            start: "top top",
            crub: 1,
            snap: false,
           end: () => "+=" + document.querySelector(".contenedor-horizontal").offsetWidth
        }
    });

  //*************************-----TABS---*************************
    let pos1 = $('.pin-spacer').position();
    let ben1 = pos1.top;
    const box = document.querySelector('div.pin-spacer');
    const rect = box.getBoundingClientRect().width;
    let part = rect / 3;
    let chang = part / 2;
    let ben2 = ben1 + part;
    let ben3 = ben2 + part;
    let ben4 = ben3 + part;
    let chang0 = ben1 - chang;
    let chang1 = ben1 + chang;
    let chang2 = ben2 + chang;
    let chang3 = ben3 + chang;
    let chang4 = ben4 + chang;


    document.querySelector('#min1').addEventListener('click', function(e) {
        scrollTo(0,ben1);
    })
    document.querySelector('#min2').addEventListener('click', function(e) {
        scrollTo(0,ben2);
    })
    document.querySelector('#min3').addEventListener('click', function(e) {
        scrollTo(0,ben3);
    })
    document.querySelector('#min4').addEventListener('click', function(e) {
        scrollTo(0,ben4);
    })

    //-------------------------chang CON SCROLL
    $(window).scroll(function(){
        var scroll = jQuery(window).scrollTop();
        if (scroll >= chang0 && scroll <= chang1) {
            $("#min1").addClass("opac");
        }else{
            $("#min1").removeClass("opac");
        }
        //-------------------------------------------------
        if (scroll > chang1 && scroll <= chang2) {
            $("#min2").addClass("opac");
        }else{
            $("#min2").removeClass("opac");  	
        }
        //-------------------------------------------------
        if (scroll > chang2 && scroll <= chang3) {
            $("#min3").addClass("opac");
        }else{
            $("#min3").removeClass("opac");
        }
        //-------------------------------------------------
        if (scroll > chang3 && scroll <= chang4) {
            $("#min4").addClass("opac");
        }else{
            $("#min4").removeClass("opac");
        }
    });
};