;(function ($) {
    $.fn.modal = function (options) {

        var options = $.extend({
            'titleModal' : 'Title',
            'descriptionModal' : 'Description',
            'urlSite' : '',
            'bgColor' : '',
            'modalColor' : '#62af9d',
            'radius' : '5px',
            'width' : '',
            'left' : ''
        }, options);
        function createElement() {
            var bgModal = document.createElement('div');
            bgModal.classList.add('bgModal');
            document.body.insertBefore(bgModal, document.body.lastChild);

            var modal = document.createElement('div');
            modal.classList.add('modal');
            document.body.insertBefore(modal, document.body.lastChild);

            modal.innerHTML += '<button class="closeModal">X</button>';
            modal.innerHTML += '<h1>' + options.titleModal + '</h1>';
            modal.innerHTML += '<h3>' + options.descriptionModal + '</h3>';
            modal.innerHTML += '<h5><a target="_blank" href="'+ options.urlSite +'">' + options.urlSite + '</a></h5>';
        }


        return this.click(function () {
            createElement();
            $('.bgModal').css({
                'display' : 'block',
                'background-color' : options.bgColor
            })
            $('.wrap').css({
                'filter' : 'blur(1.5px)'
            })
            $('.modal').css({
                'display' : 'block',
                'background-color' : options.modalColor,
            })
            if(screen.width <= 1100){
               $('.modal').css({
                   'border-radius' : '0',
                   'width' : '',
                   'left' : ''
               });
            } else {
                $('.modal').css({
                    'border-radius' : options.radius,
                    'width' : options.width,
                    'left' : options.left
                });
            }

            $('.bgModal, .closeModal').click(function () {
                $('.bgModal').remove();
                $('.modal').remove();
                $('.wrap').css({'filter' : 'none'});
            })

        });

    };
})(jQuery);