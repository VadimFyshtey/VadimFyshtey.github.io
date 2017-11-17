jQuery(document).ready(function ($) {

    $('.site img:eq(0)').modal({
        'titleModal' : 'Сайт рецептів',
        'descriptionModal' : 'Сайт сделан на фреймворке yii2, база данных MySql под управлением из phpmyadmin.' +
        'Удобная и простая админка. Система коментариев для каждого поста.',
        'urlSite' : 'http://receptu.in.ua'
    });

    $('.site img:eq(1)').modal({
        'titleModal' : 'Сайт Kizaru',
        'descriptionModal' : 'Сайт сделан на фреймворке yii2, база данных MySql под управлением из phpmyadmin.' +
        ' Удобная и простая админка.',
        'urlSite' : 'http://kizaru.com.ru'
    });

    $('.site img:eq(2)').modal({
        'titleModal' : 'Школьный сайт',
        'descriptionModal' : 'Сайт сделан на cms wordpress, подключено много интересных плагинов, дизайн рисовал сам, верстал тоже сам, сайт сделан в тестовых целях.',
        'urlSite' : 'https://rusrap88.000webhostapp.com/'
    });

    $('.site img:eq(3)').modal({
        'titleModal' : 'Студия плихологической помощи',
        'descriptionModal' : 'Сайт сделан на cms wordpress, дизайн рисовал сам, верстал тоже сам, сайт сделан в тестовых целях.',
        'urlSite' : 'http://by88.000webhostapp.com/'
    });
    $('.oneSkill:eq(0)').modal({
        'titleModal' : 'Сайт на yii2',
        'descriptionModal' : '- Создание дизайна <br/> - Создание базы данных <br/> - Интеграция дизайна с yii2 <br/> - Создание сайта <br/> - Тестирование',
        'width' : '24%',
        'radius' : '800px',
        'left' : '38%'
    });
    $('.oneSkill:eq(1)').modal({
        'titleModal' : 'Верстка',
        'descriptionModal' : '- Зарисовка будущего макета <br/> - Обзор конкуретков <br/> - Создание psd макета <br/> - Верстка <br/> - Адаптация под моб.устройства',
        'width' : '24%',
        'radius' : '800px',
        'left' : '38%'
    });
    $('.oneSkill:eq(2)').modal({
        'titleModal' : 'Wordpress',
        'descriptionModal' : '- Создание дизайна <br/> - Создание базы данных <br/> - Интеграция дизайна с wp <br/> - Создание сайта <br/> - Подключение плагинов <br/> - Тестирование',
        'width' : '24%',
        'radius' : '800px',
        'left' : '38%'
    });
    $('.oneSkill:eq(3)').modal({
        'titleModal' : 'Скрипты',
        'descriptionModal' : ' - Определение работы: (Создание/Доработка) <br/> - Планирование <br/>  - Процес создание/доработки <br/> - Добавление опций <br/> - Тестирование',
        'width' : '24%',
        'radius' : '800px',
        'left' : '38%'
    });
});