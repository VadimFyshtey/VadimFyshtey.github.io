;(function scrollTop() {

    var scrolled, timer;
    var top = document.getElementById('top');

    top.onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }
    function scrollToTop() {
        if(scrolled > 0){
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(scrollToTop, 25);
        } else {
            clearTimeout(timer);
            var menu = document.getElementById('menu');
            if(window.screen.width >= 1026){
                menu.style.marginTop = '38px';
                menu.style.marginLeft = 0;
                menu.style.opacity = 1;
            }
            window.scrollTo(0, 0);
            top.style.display = 'none';
        }
    }

    document.onmousewheel = function (e) {
        if(window.screen.width >= 1026){
            if(e.pageY >= 700){
                top.style.display = 'block';
            } else {
                top.style.display = 'none';
            }
        }

    }
})();