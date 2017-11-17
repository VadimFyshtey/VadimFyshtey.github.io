'use strict';

var slider = new Slider({
    images : '.galery .photos img',
    auto : true,
    time : 3000,
});

function Slider(obj) {
    this.images = document.querySelectorAll(obj.images);
    this.auto = obj.auto;

    if(this.auto) { this.time = obj.time || 1000; };

    var count = 0;
    var slider = this;

    this.next = function () {
        slider.images[count].classList.remove('show');
        count++;
        if(count >= slider.images.length){
            count = 0;
        }
        slider.images[count].classList.add('show');
    };
    if(slider.auto){
        setInterval(slider.next, slider.time);
    }
}

