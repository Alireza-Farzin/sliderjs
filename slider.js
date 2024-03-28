let left = document.querySelector('.left');
let right = document.querySelector('.right');
let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.image')

let sliderNumber = 1;

let length=images.length;

let nextSlider =()=>{
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    sliderNumber++;   
}

let privSlider=()=>{
    slider.style.transform = `translateX(-${(sliderNumber -2) *800}px)`;
    sliderNumber--;    
};

let getFerstSlider=()=>{
    slider.style.transform = `translateX(-${length -1}*800px)`;
    sliderNumber=1;   

}


let getLastSlider=()=>{
    slider.style.transform = `translateX(-${(length-1) * 800}px)`;
    sliderNumber=length;   

}


right.addEventListener('click', function () {

    sliderNumber < length ? nextSlider() :  privSlider();  
  
});


left.addEventListener('click', function () {

    sliderNumber >1 ? privSlider() : getLastSlider();
  
});

