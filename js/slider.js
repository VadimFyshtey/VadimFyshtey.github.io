'use strict';

var newSlide = new SliderNew({
    prev: 'prevS',
    next: 'nextS',
    auto: false,
    time: 1000,
    count: 3
});

function SliderNew(obj) {
    this.elem = document.querySelectorAll('#slide img');
    if(screen.width <= 400){
        this.count = 2;
    } else {
        this.count = obj.count || 2;
    }
    this.auto = obj.auto;
    if (!this.auto){
        this.prev = document.getElementById(obj.prev);
        this.next = document.getElementById(obj.next);
    } else {
        this.time = obj.time || 1000;
    }

    var widths = (this.elem[0].width) + 1;
    var heights = (this.elem[0].height) + 1;
    var monitor = (widths * this.count);
    var allImg = this.elem.length - 1;
    var posit = 0;

    var sliders = document.querySelector('.sliders');
    var slide = document.getElementById('slide');
    sliders.style.width = monitor + 'px';
    sliders.style.height = heights + 'px';
    sliders.style.overflow = 'hidden';
    slide.style.width = ( (widths * allImg) + widths ) + 'px';

    if (!this.auto){
        this.next.onclick = function () {
            posit -= widths;
            if( posit < -( ( widths * allImg ) - (monitor - widths) ) ){
                posit = 0;
            }
            slide.style.left = posit + 'px';
        };
        this.prev.onclick = function () {
            posit += widths;
            if(posit > 0){
                posit = -((widths * allImg) - (monitor - widths));
            }
            slide.style.left = posit + 'px';
        };
    } else {
        setInterval(function () {
            posit -= widths;
            if(posit < -( ( widths * allImg ) - (monitor - widths)) ){
                posit = 0;
            }
            slide.style.left = posit + 'px';
        }, this.time)
    }
}
