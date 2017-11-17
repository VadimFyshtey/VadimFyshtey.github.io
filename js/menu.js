'use strict';
;(function menu() {
    var menu = document.getElementById('menu');
    var block = document.getElementsByClassName('block_menu')[0];
    var wrapper = document.getElementsByClassName('wrapper');
    var h = document.getElementById('h');
    var head = document.getElementsByClassName('head')[0];
    menu.onclick = function () {
        block.style.right = 0;
        wrapper[1].style.filter = 'blur(1.5px)';
        h.style.filter = 'blur(1.5px)';
    }
    for(var i = 0; i < wrapper.length; i++){
        wrapper[i].onclick = function () {
            block.style.right = -(block.clientWidth) + 'px';
            h.style.filter = 'none';
            wrapper[0].style.filter = 'none';
            wrapper[1].style.filter = 'none';
        }
    }
    menu.onmouseover = function () {
        this.style.opacity = 1;
    }
    menu.onmouseout = function () {
        this.style.opacity = 0.8;
    }
    document.body.onmousewheel = function (e) {
        if(e.pageY >= 700){
            if(window.screen.width >= 1026){
                menu.style.opacity = 0.8;
                menu.style.marginTop = '15px';
                menu.style.marginLeft = '180px';
            }
        } else {
            if(window.screen.width >= 1026){
                menu.style.marginTop = '38px';
                menu.style.marginLeft = 0;
                menu.style.opacity = 1;
            }
        }
    }
})();
