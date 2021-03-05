const sliderContainer = document.querySelector(".slider-container")

const leftSlide = document.querySelector(".left-slide")
const rightSlide = document.querySelector(".right-slide")
const downBtn = document.querySelector(".down-button")
const upBtn = document.querySelector(".up-button")
const slidesLegth = rightSlide.querySelectorAll("div").length

let active = 0
leftSlide.style.top = `-${(slidesLegth - 1) * 100}vh`
upBtn.addEventListener("click", ()=> change(false))
downBtn.addEventListener("click", ()=> change(true))

function change(direction){
    if(!direction){
        active++
        if(active > slidesLegth -1){
            active = 0
        }
    }else{
        active--
        if(active < 0){
            active = slidesLegth - 1

        }
    }
 rightSlide.style.transform = `translateY(-${active * 100}vh)`
 leftSlide.style.transform = `translateY(${active * 100}vh)`
}