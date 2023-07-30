const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

$(document).on("mousemove",(details)=>{

    $(".circle").css({
        opacity: 1,
        transform: `translate(${details.clientX}px,${details.clientY}px)`
    });

    if (details.clientY <= 3){
        $(".circle").css({
            opacity: 0
        });
    }
    else{
        $(".circle").css({
            opacity: 1
        });
    }
});


gsap.from("nav",{
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: Power1
});

let tl = gsap.timeline();
tl.from("#first-heading",{
    y: 80,
    opacity: 0,
    duration: 1,
    ease: Power1
});
tl.from("header div h1",{
    y: 80,
    opacity: 0,
    duration: 1,
    delay: "-0.6",
    ease: Power1
});
tl.from("header h3",{
    y: -10,
    opacity: 0,
    delay: "-0.5",
    ease: Power1
});
tl.from(".hero-footer",{
    y: 50,
    opacity: 0,
    delay: "-0.2",
    ease: Power1
});

document.querySelectorAll(".elements").forEach((elem)=>{
    let img = elem.querySelector("img");
    let prevPosition = 0;
    let diff = 0;

    $(elem).on("mouseover",(details)=>{
        let distanceFromTop = details.clientY - elem.getBoundingClientRect().top;

        diff = details.clientX - prevPosition;
        prevPosition = details.clientX;
        
        gsap.to(img,{
            y: distanceFromTop - img.offsetHeight/2,
            x: details.clientX - img.offsetWidth/2,
            opacity: 1,
            ease: Power2,
            rotate: gsap.utils.clamp(-5,5,diff)
        });
    });

    $(elem).on("mouseleave",()=>{     
        gsap.to(img,{
            opacity: 0,
            ease: Power1
        });
    });
});

document.querySelectorAll(".link").forEach((elem)=>{
    let underline = elem.querySelector(".underline");
    $(elem).on("mouseover",()=>{
        gsap.to(underline,{
            width: "100%",
            ease: Power1
        });
    });
    $(elem).on("mouseleave",()=>{
        gsap.to(underline,{
            width: 0,
            ease: Power1
        });
    });
});

let date = new Date();

let yrs = date.getFullYear();

$("#curr-year").html(
    `${yrs} `
)

let hrs;
let mins = date.getMinutes();

if (date.getHours() > 12){
    hrs = Number(date.getHours()) - 12;
    $("#curr-time").html(
        `${hrs}:${mins} PM`
    );
}
else{
    hrs = date.getHours();
    $("#curr-time").html(
        `${hrs}:${mins} AM`
    );
}