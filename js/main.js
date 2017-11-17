$(document).ready(function(){

    // Анимация h1
    var $h1_margit_top = $('.header .head h1:first').css('margin-top');
    $('.header .head h1:first').css('margin-top', '-100px').animate({'margin-top' : $h1_margit_top}, 1000);

    // Анимация Лого и  Меню
    $('.logo, .menu').hide().fadeIn(2000);

    // Анимация Имени
    $('.header h2, .header h3').css('margin-left', '-400px').animate({'margin-left' : '0'}, 1000);


    $(document).scroll(function () {
        var val = $(this).scrollTop();
        // Анимация блока Обо мне
        function animateAbout() {
            if(val < 250){
                $('.about p').hide();
            } else if(val >= 250){
                $('.about p').fadeIn(600);
            }
        }
        animateAbout();

        // Анимация блока Резюме
        function animateSummary() {
            if(val < 700){
                $('.summary_block1 span').css('margin-right', '-400px');
                $('.summary_block2 span').css('margin-left', '-400px');
                $('.summary_block1 p').fadeOut();
                $('.summary_block2 p').fadeOut();
            } else if(val >= 700){
                $('.summary_block1 span').animate({'margin-right' : '0'}, 1000);
                $('.summary_block2 span').animate({'margin-left' : '0'}, 1000);
                $('.summary_block1 p').fadeIn(1000);
                $('.summary_block2 p').fadeIn(1000);
            }
        }
        animateSummary();

        // Анимация блока Что я умею делать
        function animateSkills() {
           if(val >= 1350){
                $('.oneSkill').css({'transform' : 'rotate(360deg)', 'transition' : 'transform ease 1s'});
            }
        }
        animateSkills();

        // Анимация блока Мои работы
        function animateMyWorks() {
           if(val < 2000){
               $('.site img').css('margin-top', '300px');
           } else if(val >= 2000){
               $('.site img').animate({'margin-top' : '0'}, 700);
           }
        }
        animateMyWorks();

        // Анимация футера
        function animateFooter() {
            if(val < 3600){
                $('.allsrcipt').fadeOut();
                $('.social').fadeOut();
                $('.info').fadeOut();
            } else if(val >= 3600){
                $('.allsrcipt').fadeIn(1300);
                $('.social').fadeIn(2500);
                $('.info').fadeIn(2500);
            } else if(val >= 3700){

            }
        }
        animateFooter();
    });



});