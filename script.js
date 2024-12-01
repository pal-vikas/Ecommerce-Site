let dayNight = document.querySelector(".dayNight");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
    banner.classList.toggle("night");
});

let typeingEffect = new Typed("#text",{

    strings:["Developer","Learner","Aspriring SDE"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
})


