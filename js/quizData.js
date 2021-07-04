"use strict";

const pages = ['#quiz__preload', '#object', '#cameracount', '#doppel', '#square', '#complectation', '#quiz__result', '#quiz__succesfull'];
const questions = {
  '#object': 'Для какого объекта Вам необходима система видеонаблюдения?',
  '#cameracount': 'Сколько камер Вы планируете установить?',
  '#archieve': 'Время хранения архива:',
  '#doppel': 'Дополнительные пожелания к системе видеонаблюдения:',
  '#square': 'Примерная площадь объекта',
  '#complectation': 'Вам нужен готовый комплект или монтаж системы под ключ?'
};
const comments = {
  '#cameracount': {
    'nochosen': 'Выберите объект',
    'object__house': `<p>Видеонаблюдение для загородного дома, дачи представлено проводными и 
        беспроводными камерами с углом обзора до 102° а, так же ночной съемкой  
        с ик подсветкой от 10 метров.</p>
        <p>Так, для контроля небольшого двора подойдет 
        проводная камера видеонаблюдения с дальностью ночной съемки 20 метров.</p>
        <p>Несколько купольных Wi-Fi-видеокамер 
        с разрешением 1080p и ночным видением до 30 метров смогут следить за большой территорией.</p>`,
    'object__folder': `<p>Для складского помещения подойдут видеокамеры с углом обзора от 85 до 112° 
        и ночным видением 20—30 метров.</p>
        <p>Для слежения за несколькими складами или одной большой площадкой можно использовать 4 проводные камеры, 
        обеспечивающие разрешение 1080p и ночную съемку до 20 метров.</p>
        <p>Видеонаблюдение за небольшим складом может осуществлять одна 
        цилиндрическая беспроводная камера с ночной съемкой до 30 метров.</p>`,
    'object__shop': `<p>Для видеонаблюдения в магазине используются камеры 
        с дальностью ночного видения 10—30 метров и углом обзора 92—112°.</p>
        <p>Для слежения за торговым залом можно использовать 2 или 3 поворотные Wi-Fi-видеокамеры.</p>
        <p>В кассовой зоне целесообразно установить проводное видеонаблюдение с изображением в FullHD-качестве.</p>`,
    'object__school': `<p>Укажите количество камер, и мы поймем, для каких задач Вам нужна система, будь то требования по паспорту 
        безопасности или решение спорных и конфликтных ситуаций</p>`,
    'object__office': `<p>Проводные устройства для видеонаблюдения за офисом 
        представлены камерами с углом обзора от 92 до 103° и ночной съемкой 20 метров.</p>
        <p>Беспроводная видеосистема включает модели с обзором на 106—112° и дальностью ночного видения 10—30 метров.</p>`,
    'object__construct': `<p>Укажите кол-во камер по данным критериям и подберем для вас оптимальное решение. 
        На строительном объекте как правило устанавливается камера для мониторинга процесса строительства с  онлайн трансляцией в офис застройщика или на сайт компании. 
        Камера на въезд и выезд техники на объект для мониторинга ввозимых или вывозимых грузов.</p>`,
    'object__other': `<p>Укажите количество камер, и мы поймем, для каких задач Вам нужна система, будь то требования по паспорту 
        безопасности или решение спорных и конфликтных ситуаций</p>`,
    'object__flat': `<p>Укажите количество камер, и мы поймем, для каких задач Вам нужна система, будь то требования по паспорту 
        безопасности или решение спорных и конфликтных ситуаций</p>`,
    'object__tszh': `<p>Укажите количество камер, и мы поймем, для каких задач Вам нужна система, будь то требования по паспорту 
        безопасности или решение спорных и конфликтных ситуаций</p>`
  },
  '#object': `<p>Стоимость видеонаблюдения зависит не только от количества камер. Для каждого типа объекта есть стандартный набор задач. Мы сможем более точно определить характеристики и количество камер,
        зная тип вашего объекта. В результате расчёт стоимости будет наиболее точным.</p>`,
  '#archieve': `<p>От данного показателя зависит емкость  жесткого диска, модель регистратора, что в свою очередь скажеться на стоимости системы. 
    Оцените конкретную потребность в количестве дней</p>`,
  '#doppel': `
    <p class='comment__content-title'><b>Устройство резервного электропитания</b></p>
    <p>Это устройство позволит 
    сохранять работоспособность системы при отключении электропитания</p>
    <p class='comment__content-title'><b>Интернет на объекте</b></p>
    <p>В настоящее время  системы видеонаблюдения позволяют осуществлять контроль за происходящим 
    в режиме реального времени. Следить за обстановкой в зоне видимости беспроводной камеры можно 
    с помощью специального приложения. Доступ к изображению проводных камер в онлайн-режиме возможен 
    через интернет посредством видеорегистратора. Если у вас нет доступа 
    в интернет на объекте, но нужен удаленный просмотр, укажите данный пункт.</p>
    <p class='comment__content-title'><b>Запись звука</b></p>
    <p>Все беспроводные системы видеонаблюдения оснащены встроенным микрофоном для записи звука. 
    Проводные камеры таким устройством не располагают, но и для них можно отдельно приобрести и установить микрофон.</p>`,
  '#howfast': `<p>Сроки не влияют на стоимость системы, но это позволяет подобрать оптимальное оборудование и спланировать работу монтажников.</p>`,
  '#square': `<p>Укажите параметры вашего объекта длину и ширину, это позволит предварительно рассчитать длину 
    кабельных трасc или укажите примерную длину 
    кабеля от камеры до предполагаемого места установки записывающего устройства.</p>`,
  '#complectation': `<p>Это необходимо для точного расчета полного перечня оборудования: для расчета системы «под ключ».</p>`
};
const goods = {
  'indoorCamera': {
    'price': 2190,
    'name': 'EZ-HAC-T1A21P-0360B',
    'src': '../assets/images/pdf/fromArchieve/indoorCam.jpg',
    'description': ''
  },
  'indoorCameraWithSound': {
    'price': 2890,
    'name': 'EZ-HAC-T5B20P-A-0360B',
    'src': '../assets/images/pdf/fromArchieve/indoorCamWithSound.jpg',
    'description': ''
  },
  'outdoorCamera': {
    'price': 2890,
    'name': 'EZ-HAC-B5B20P-A-0280B',
    'src': '../assets/images/pdf/fromArchieve/outdoorCam.jpg',
    'description': ''
  },
  'panoramCamera': {
    'price': 28990,
    'name': 'DH-SD49225-HC-LA',
    'src': '../assets/images/pdf/fromArchieve/panoramCam.jpg',
    'description': ''
  },
  'registrator1_4': {
    'price': 6000,
    'name': 'DH-XVR5104C-X1',
    'src': '../assets/images/pdf/fromArchieve/registrator1_4.jpg',
    'description': ''
  },
  'registrator5_8': {
    'price': 9000,
    'name': 'DH-XVR5108C-X',
    'src': '../assets/images/pdf/fromArchieve/registrator1_4.jpg',
    'description': ''
  },
  'registrator9_16': {
    'price': 16000,
    'name': 'DH-XVR5116HS-X',
    'src': '../assets/images/pdf/fromArchieve/registrator8_16.jpg',
    'description': ''
  },
  'registrator16_32': {
    'price': 22200,
    'name': 'DH-XVR4232AN-X',
    'src': '../assets/images/pdf/fromArchieve/registrator16more.jpg',
    'description': ''
  },
  'cable': {
    'price': 25,
    'name': 'Кабель витая пара',
    'src': '../assets/images/pdf/fromArchieve/cable.jpg',
    'description': ''
  },
  'complectInternet': {
    'price': 8750,
    'name': 'Комплект оборудования для подключения интернета',
    'src': '../assets/images/pdf/fromArchieve/default.jpg',
    'description': ''
  },
  'ibp1_4': {
    'price': 2250,
    'name': 'BBG-125',
    'src': '../assets/images/pdf/fromArchieve/ibp1_4.jpg',
    'description': ''
  },
  'ibp5_8': {
    'price': 4250,
    'name': 'BBG-12108',
    'src': '../assets/images/pdf/fromArchieve/ibp5_8.jpg',
    'description': ''
  },
  'montageCableIndoor': {
    'price': 30,
    'name': 'монтаж кабеля внутри помещений'
  },
  'montageCableOutdoor': {
    'price': 40,
    'name': 'монтаж кабеля на улице'
  },
  'internetInstallation': {
    'price': 2500,
    'name': 'подключение интернета'
  },
  'systemCustmization': {
    'price': 2000,
    'name': 'монтажные работы и настройка оборудования',
    'src': '../assets/images/pdf/fromArchieve/default.jpg'
  },
  'indoorCameraMontage': {
    'price': 1600,
    'name': 'монтаж камер внутри помещений'
  },
  'outdoorCameraMontage': {
    'price': 2500,
    'name': 'монтаж камер на улице'
  },
  'complectMontage': {
    'price': 6050,
    'name': 'Cтандартный монтажный комплект',
    'src': '../assets/images/pdf/fromArchieve/default.jpg'
  },
  'hardDisk1Tb': {
    'price': 4600,
    'name': 'Seagate SkyHawk 1Tb',
    'src': '../assets/images/pdf/fromArchieve/hardDisk.jpg',
    'description': ''
  },
  'hardDisk2Tb': {
    'price': 7300,
    'name': 'Seagate SkyHawk 2Tb',
    'src': '../assets/images/pdf/fromArchieve/hardDisk.jpg',
    'description': ''
  },
  'hardDisk4Tb': {
    'price': 20100,
    'name': 'Seagate SkyHawk 4Tb',
    'src': '../assets/images/pdf/fromArchieve/hardDisk.jpg',
    'description': ''
  },
  'hardDisk6Tb': {
    'price': 27600,
    'name': 'Seagate SkyHawk 6Tb',
    'src': '../assets/images/pdf/fromArchieve/hardDisk.jpg',
    'description': ''
  },
  'hardDisk8Tb': {
    'price': 45100,
    'name': 'Seagate SkyHawk 8Tb',
    'src': '../assets/images/pdf/fromArchieve/hardDisk.jpg',
    'description': ''
  },
  'hardDisk10Tb': {
    'price': 60100,
    'name': 'Seagate SkyHawk 10Tb',
    'src': '../assets/images/pdf/fromArchieve/hardDisk.jpg',
    'description': ''
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aXpEYXRhLmpzIl0sIm5hbWVzIjpbInBhZ2VzIiwicXVlc3Rpb25zIiwiY29tbWVudHMiLCJnb29kcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxLQUFLLEdBQUcsQ0FDVixnQkFEVSxFQUNRLFNBRFIsRUFDbUIsY0FEbkIsRUFFVixTQUZVLEVBRUMsU0FGRCxFQUdWLGdCQUhVLEVBR1EsZUFIUixFQUd5QixtQkFIekIsQ0FBZDtBQUtBLE1BQU1DLFNBQVMsR0FBRztBQUNkLGFBQVcsNERBREc7QUFFZCxrQkFBZ0IseUNBRkY7QUFHZCxlQUFhLHdCQUhDO0FBSWQsYUFBVyxxREFKRztBQUtkLGFBQVcsMkJBTEc7QUFNZCxvQkFBa0I7QUFOSixDQUFsQjtBQVFBLE1BQU1DLFFBQVEsR0FBRztBQUNqQixrQkFBZ0I7QUFDWixnQkFBWSxpQkFEQTtBQUVaLHFCQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0dBUmdCO0FBU1osc0JBQW1CO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBZGdCO0FBZVosb0JBQWlCO0FBQ3JCO0FBQ0E7QUFDQSxvSEFsQmdCO0FBbUJaLHNCQUFtQjtBQUN2QixvRUFwQmdCO0FBcUJaLHNCQUFtQjtBQUN2QjtBQUNBLDBIQXZCZ0I7QUF3QloseUJBQXNCO0FBQzFCO0FBQ0EscUdBMUJnQjtBQTJCWixxQkFBa0I7QUFDdEIsb0VBNUJnQjtBQTZCWixvQkFBaUI7QUFDckIsb0VBOUJnQjtBQStCWixvQkFBaUI7QUFDckI7QUFoQ2dCLEdBREM7QUFtQ2pCLGFBQVk7QUFDWiwwRkFwQ2lCO0FBcUNqQixlQUFjO0FBQ2QseURBdENpQjtBQXVDakIsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFuRGlCO0FBb0RqQixjQUFhLHFJQXBESTtBQXFEakIsYUFBWTtBQUNaO0FBQ0Esc0ZBdkRpQjtBQXdEakIsb0JBQW1CO0FBeERGLENB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QUFzSWQsa0JBQWdCO0FBQ1osYUFBUyxLQURHO0FBRVosWUFBUSxzQkFGSTtBQUdaLFdBQU8sZ0RBSEs7QUFJWixtQkFBZTtBQUpIO0FBdElGLENBQWQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwYWdlcyA9IFtcclxuICAgICcjcXVpel9fcHJlbG9hZCcsICcjb2JqZWN0JywgJyNjYW1lcmFjb3VudCcsIFxyXG4gICAgJyNkb3BwZWwnLCAnI3NxdWFyZScsIFxyXG4gICAgJyNjb21wbGVjdGF0aW9uJywgJyNxdWl6X19yZXN1bHQnLCAnI3F1aXpfX3N1Y2Nlc2Z1bGwnXHJcbl07XHJcbmNvbnN0IHF1ZXN0aW9ucyA9IHtcclxuICAgICcjb2JqZWN0JzogJ9CU0LvRjyDQutCw0LrQvtCz0L4g0L7QsdGK0LXQutGC0LAg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNCwINGB0LjRgdGC0LXQvNCwINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjz8nLFxyXG4gICAgJyNjYW1lcmFjb3VudCc6ICfQodC60L7Qu9GM0LrQviDQutCw0LzQtdGAINCS0Ysg0L/Qu9Cw0L3QuNGA0YPQtdGC0LUg0YPRgdGC0LDQvdC+0LLQuNGC0Yw/JyxcclxuICAgICcjYXJjaGlldmUnOiAn0JLRgNC10LzRjyDRhdGA0LDQvdC10L3QuNGPINCw0YDRhdC40LLQsDonLFxyXG4gICAgJyNkb3BwZWwnOiAn0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQv9C+0LbQtdC70LDQvdC40Y8g0Log0YHQuNGB0YLQtdC80LUg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPOicsXHJcbiAgICAnI3NxdWFyZSc6ICfQn9GA0LjQvNC10YDQvdCw0Y8g0L/Qu9C+0YnQsNC00Ywg0L7QsdGK0LXQutGC0LAnLFxyXG4gICAgJyNjb21wbGVjdGF0aW9uJzogJ9CS0LDQvCDQvdGD0LbQtdC9INCz0L7RgtC+0LLRi9C5INC60L7QvNC/0LvQtdC60YIg0LjQu9C4INC80L7QvdGC0LDQtiDRgdC40YHRgtC10LzRiyDQv9C+0LQg0LrQu9GO0Yc/J1xyXG59O1xyXG5jb25zdCBjb21tZW50cyA9IHtcclxuJyNjYW1lcmFjb3VudCc6IHtcclxuICAgICdub2Nob3Nlbic6ICfQktGL0LHQtdGA0LjRgtC1INC+0LHRitC10LrRgicsXHJcbiAgICAnb2JqZWN0X19ob3VzZSc6IGA8cD7QktC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LUg0LTQu9GPINC30LDQs9C+0YDQvtC00L3QvtCz0L4g0LTQvtC80LAsINC00LDRh9C4INC/0YDQtdC00YHRgtCw0LLQu9C10L3QviDQv9GA0L7QstC+0LTQvdGL0LzQuCDQuCBcclxuICAgICAgICDQsdC10YHQv9GA0L7QstC+0LTQvdGL0LzQuCDQutCw0LzQtdGA0LDQvNC4INGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC00L4gMTAywrAg0LAsINGC0LDQuiDQttC1INC90L7Rh9C90L7QuSDRgdGK0LXQvNC60L7QuSAgXHJcbiAgICAgICAg0YEg0LjQuiDQv9C+0LTRgdCy0LXRgtC60L7QuSDQvtGCIDEwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgPHA+0KLQsNC6LCDQtNC70Y8g0LrQvtC90YLRgNC+0LvRjyDQvdC10LHQvtC70YzRiNC+0LPQviDQtNCy0L7RgNCwINC/0L7QtNC+0LnQtNC10YIgXHJcbiAgICAgICAg0L/RgNC+0LLQvtC00L3QsNGPINC60LDQvNC10YDQsCDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0YEg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQuCAyMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgIDxwPtCd0LXRgdC60L7Qu9GM0LrQviDQutGD0L/QvtC70YzQvdGL0YUgV2ktRmkt0LLQuNC00LXQvtC60LDQvNC10YAgXHJcbiAgICAgICAg0YEg0YDQsNC30YDQtdGI0LXQvdC40LXQvCAxMDgwcCDQuCDQvdC+0YfQvdGL0Lwg0LLQuNC00LXQvdC40LXQvCDQtNC+IDMwINC80LXRgtGA0L7QsiDRgdC80L7Qs9GD0YIg0YHQu9C10LTQuNGC0Ywg0LfQsCDQsdC+0LvRjNGI0L7QuSDRgtC10YDRgNC40YLQvtGA0LjQtdC5LjwvcD5gLFxyXG4gICAgJ29iamVjdF9fZm9sZGVyJzogYDxwPtCU0LvRjyDRgdC60LvQsNC00YHQutC+0LPQviDQv9C+0LzQtdGJ0LXQvdC40Y8g0L/QvtC00L7QudC00YPRgiDQstC40LTQtdC+0LrQsNC80LXRgNGLINGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC+0YIgODUg0LTQviAxMTLCsCBcclxuICAgICAgICDQuCDQvdC+0YfQvdGL0Lwg0LLQuNC00LXQvdC40LXQvCAyMOKAlDMwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgPHA+0JTQu9GPINGB0LvQtdC20LXQvdC40Y8g0LfQsCDQvdC10YHQutC+0LvRjNC60LjQvNC4INGB0LrQu9Cw0LTQsNC80Lgg0LjQu9C4INC+0LTQvdC+0Lkg0LHQvtC70YzRiNC+0Lkg0L/Qu9C+0YnQsNC00LrQvtC5INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIDQg0L/RgNC+0LLQvtC00L3Ri9C1INC60LDQvNC10YDRiywgXHJcbiAgICAgICAg0L7QsdC10YHQv9C10YfQuNCy0LDRjtGJ0LjQtSDRgNCw0LfRgNC10YjQtdC90LjQtSAxMDgwcCDQuCDQvdC+0YfQvdGD0Y4g0YHRitC10LzQutGDINC00L4gMjAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICA8cD7QktC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LUg0LfQsCDQvdC10LHQvtC70YzRiNC40Lwg0YHQutC70LDQtNC+0Lwg0LzQvtC20LXRgiDQvtGB0YPRidC10YHRgtCy0LvRj9GC0Ywg0L7QtNC90LAgXHJcbiAgICAgICAg0YbQuNC70LjQvdC00YDQuNGH0LXRgdC60LDRjyDQsdC10YHQv9GA0L7QstC+0LTQvdCw0Y8g0LrQsNC80LXRgNCwINGBINC90L7Rh9C90L7QuSDRgdGK0LXQvNC60L7QuSDQtNC+IDMwINC80LXRgtGA0L7Qsi48L3A+YCxcclxuICAgICdvYmplY3RfX3Nob3AnOiBgPHA+0JTQu9GPINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQsiDQvNCw0LPQsNC30LjQvdC1INC40YHQv9C+0LvRjNC30YPRjtGC0YHRjyDQutCw0LzQtdGA0YsgXHJcbiAgICAgICAg0YEg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtCz0L4g0LLQuNC00LXQvdC40Y8gMTDigJQzMCDQvNC10YLRgNC+0LIg0Lgg0YPQs9C70L7QvCDQvtCx0LfQvtGA0LAgOTLigJQxMTLCsC48L3A+XHJcbiAgICAgICAgPHA+0JTQu9GPINGB0LvQtdC20LXQvdC40Y8g0LfQsCDRgtC+0YDQs9C+0LLRi9C8INC30LDQu9C+0Lwg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgMiDQuNC70LggMyDQv9C+0LLQvtGA0L7RgtC90YvQtSBXaS1GaS3QstC40LTQtdC+0LrQsNC80LXRgNGLLjwvcD5cclxuICAgICAgICA8cD7QkiDQutCw0YHRgdC+0LLQvtC5INC30L7QvdC1INGG0LXQu9C10YHQvtC+0LHRgNCw0LfQvdC+INGD0YHRgtCw0L3QvtCy0LjRgtGMINC/0YDQvtCy0L7QtNC90L7QtSDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LUg0YEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtdC8INCyIEZ1bGxIRC3QutCw0YfQtdGB0YLQstC1LjwvcD5gLFxyXG4gICAgJ29iamVjdF9fc2Nob29sJzogYDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0LvQuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gLFxyXG4gICAgJ29iamVjdF9fb2ZmaWNlJzogYDxwPtCf0YDQvtCy0L7QtNC90YvQtSDRg9GB0YLRgNC+0LnRgdGC0LLQsCDQtNC70Y8g0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC30LAg0L7RhNC40YHQvtC8IFxyXG4gICAgICAgINC/0YDQtdC00YHRgtCw0LLQu9C10L3RiyDQutCw0LzQtdGA0LDQvNC4INGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC+0YIgOTIg0LTQviAxMDPCsCDQuCDQvdC+0YfQvdC+0Lkg0YHRitC10LzQutC+0LkgMjAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICA8cD7QkdC10YHQv9GA0L7QstC+0LTQvdCw0Y8g0LLQuNC00LXQvtGB0LjRgdGC0LXQvNCwINCy0LrQu9GO0YfQsNC10YIg0LzQvtC00LXQu9C4INGBINC+0LHQt9C+0YDQvtC8INC90LAgMTA24oCUMTEywrAg0Lgg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtCz0L4g0LLQuNC00LXQvdC40Y8gMTDigJQzMCDQvNC10YLRgNC+0LIuPC9wPmAsXHJcbiAgICAnb2JqZWN0X19jb25zdHJ1Y3QnOiBgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC7LdCy0L4g0LrQsNC80LXRgCDQv9C+INC00LDQvdC90YvQvCDQutGA0LjRgtC10YDQuNGP0Lwg0Lgg0L/QvtC00LHQtdGA0LXQvCDQtNC70Y8g0LLQsNGBINC+0L/RgtC40LzQsNC70YzQvdC+0LUg0YDQtdGI0LXQvdC40LUuIFxyXG4gICAgICAgINCd0LAg0YHRgtGA0L7QuNGC0LXQu9GM0L3QvtC8INC+0LHRitC10LrRgtC1INC60LDQuiDQv9GA0LDQstC40LvQviDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0LrQsNC80LXRgNCwINC00LvRjyDQvNC+0L3QuNGC0L7RgNC40L3Qs9CwINC/0YDQvtGG0LXRgdGB0LAg0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0LAg0YEgINC+0L3Qu9Cw0LnQvSDRgtGA0LDQvdGB0LvRj9GG0LjQtdC5INCyINC+0YTQuNGBINC30LDRgdGC0YDQvtC50YnQuNC60LAg0LjQu9C4INC90LAg0YHQsNC50YIg0LrQvtC80L/QsNC90LjQuC4gXHJcbiAgICAgICAg0JrQsNC80LXRgNCwINC90LAg0LLRitC10LfQtCDQuCDQstGL0LXQt9C0INGC0LXRhdC90LjQutC4INC90LAg0L7QsdGK0LXQutGCINC00LvRjyDQvNC+0L3QuNGC0L7RgNC40L3Qs9CwINCy0LLQvtC30LjQvNGL0YUg0LjQu9C4INCy0YvQstC+0LfQuNC80YvRhSDQs9GA0YPQt9C+0LIuPC9wPmAsXHJcbiAgICAnb2JqZWN0X19vdGhlcic6IGA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC70LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuICAgICdvYmplY3RfX2ZsYXQnOiBgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCwg0Lgg0LzRiyDQv9C+0LnQvNC10LwsINC00LvRjyDQutCw0LrQuNGFINC30LDQtNCw0Ycg0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LAsINCx0YPQtNGMINGC0L4g0YLRgNC10LHQvtCy0LDQvdC40Y8g0L/QviDQv9Cw0YHQv9C+0YDRgtGDIFxyXG4gICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQu9C40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcbiAgICAnb2JqZWN0X190c3poJzogYDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0LvQuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gXHJcbn0sXHJcbicjb2JqZWN0JzogYDxwPtCh0YLQvtC40LzQvtGB0YLRjCDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0LfQsNCy0LjRgdC40YIg0L3QtSDRgtC+0LvRjNC60L4g0L7RgiDQutC+0LvQuNGH0LXRgdGC0LLQsCDQutCw0LzQtdGALiDQlNC70Y8g0LrQsNC20LTQvtCz0L4g0YLQuNC/0LAg0L7QsdGK0LXQutGC0LAg0LXRgdGC0Ywg0YHRgtCw0L3QtNCw0YDRgtC90YvQuSDQvdCw0LHQvtGAINC30LDQtNCw0YcuINCc0Ysg0YHQvNC+0LbQtdC8INCx0L7Qu9C10LUg0YLQvtGH0L3QviDQvtC/0YDQtdC00LXQu9C40YLRjCDRhdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutC4INC4INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsXHJcbiAgICAgICAg0LfQvdCw0Y8g0YLQuNC/INCy0LDRiNC10LPQviDQvtCx0YrQtdC60YLQsC4g0JIg0YDQtdC30YPQu9GM0YLQsNGC0LUg0YDQsNGB0YfRkdGCINGB0YLQvtC40LzQvtGB0YLQuCDQsdGD0LTQtdGCINC90LDQuNCx0L7Qu9C10LUg0YLQvtGH0L3Ri9C8LjwvcD5gLFxyXG4nI2FyY2hpZXZlJzogYDxwPtCe0YIg0LTQsNC90L3QvtCz0L4g0L/QvtC60LDQt9Cw0YLQtdC70Y8g0LfQsNCy0LjRgdC40YIg0LXQvNC60L7RgdGC0YwgINC20LXRgdGC0LrQvtCz0L4g0LTQuNGB0LrQsCwg0LzQvtC00LXQu9GMINGA0LXQs9C40YHRgtGA0LDRgtC+0YDQsCwg0YfRgtC+INCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMINGB0LrQsNC20LXRgtGM0YHRjyDQvdCwINGB0YLQvtC40LzQvtGB0YLQuCDRgdC40YHRgtC10LzRiy4gXHJcbiAgICDQntGG0LXQvdC40YLQtSDQutC+0L3QutGA0LXRgtC90YPRjiDQv9C+0YLRgNC10LHQvdC+0YHRgtGMINCyINC60L7Qu9C40YfQtdGB0YLQstC1INC00L3QtdC5PC9wPmAsXHJcbicjZG9wcGVsJzogYFxyXG4gICAgPHAgY2xhc3M9J2NvbW1lbnRfX2NvbnRlbnQtdGl0bGUnPjxiPtCj0YHRgtGA0L7QudGB0YLQstC+INGA0LXQt9C10YDQstC90L7Qs9C+INGN0LvQtdC60YLRgNC+0L/QuNGC0LDQvdC40Y88L2I+PC9wPlxyXG4gICAgPHA+0K3RgtC+INGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7Qt9Cy0L7Qu9C40YIgXHJcbiAgICDRgdC+0YXRgNCw0L3Rj9GC0Ywg0YDQsNCx0L7RgtC+0YHQv9C+0YHQvtCx0L3QvtGB0YLRjCDRgdC40YHRgtC10LzRiyDQv9GA0Lgg0L7RgtC60LvRjtGH0LXQvdC40Lgg0Y3Qu9C10LrRgtGA0L7Qv9C40YLQsNC90LjRjzwvcD5cclxuICAgIDxwIGNsYXNzPSdjb21tZW50X19jb250ZW50LXRpdGxlJz48Yj7QmNC90YLQtdGA0L3QtdGCINC90LAg0L7QsdGK0LXQutGC0LU8L2I+PC9wPlxyXG4gICAgPHA+0JIg0L3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8gINGB0LjRgdGC0LXQvNGLINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQv9C+0LfQstC+0LvRj9GO0YIg0L7RgdGD0YnQtdGB0YLQstC70Y/RgtGMINC60L7QvdGC0YDQvtC70Ywg0LfQsCDQv9GA0L7QuNGB0YXQvtC00Y/RidC40LwgXHJcbiAgICDQsiDRgNC10LbQuNC80LUg0YDQtdCw0LvRjNC90L7Qs9C+INCy0YDQtdC80LXQvdC4LiDQodC70LXQtNC40YLRjCDQt9CwINC+0LHRgdGC0LDQvdC+0LLQutC+0Lkg0LIg0LfQvtC90LUg0LLQuNC00LjQvNC+0YHRgtC4INCx0LXRgdC/0YDQvtCy0L7QtNC90L7QuSDQutCw0LzQtdGA0Ysg0LzQvtC20L3QviBcclxuICAgINGBINC/0L7QvNC+0YnRjNGOINGB0L/QtdGG0LjQsNC70YzQvdC+0LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjy4g0JTQvtGB0YLRg9C/INC6INC40LfQvtCx0YDQsNC20LXQvdC40Y4g0L/RgNC+0LLQvtC00L3Ri9GFINC60LDQvNC10YAg0LIg0L7QvdC70LDQudC9LdGA0LXQttC40LzQtSDQstC+0LfQvNC+0LbQtdC9IFxyXG4gICAg0YfQtdGA0LXQtyDQuNC90YLQtdGA0L3QtdGCINC/0L7RgdGA0LXQtNGB0YLQstC+0Lwg0LLQuNC00LXQvtGA0LXQs9C40YHRgtGA0LDRgtC+0YDQsC4g0JXRgdC70Lgg0YMg0LLQsNGBINC90LXRgiDQtNC+0YHRgtGD0L/QsCBcclxuICAgINCyINC40L3RgtC10YDQvdC10YIg0L3QsCDQvtCx0YrQtdC60YLQtSwg0L3QviDQvdGD0LbQtdC9INGD0LTQsNC70LXQvdC90YvQuSDQv9GA0L7RgdC80L7RgtGALCDRg9C60LDQttC40YLQtSDQtNCw0L3QvdGL0Lkg0L/Rg9C90LrRgi48L3A+XHJcbiAgICA8cCBjbGFzcz0nY29tbWVudF9fY29udGVudC10aXRsZSc+PGI+0JfQsNC/0LjRgdGMINC30LLRg9C60LA8L2I+PC9wPlxyXG4gICAgPHA+0JLRgdC1INCx0LXRgdC/0YDQvtCy0L7QtNC90YvQtSDRgdC40YHRgtC10LzRiyDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0L7RgdC90LDRidC10L3RiyDQstGB0YLRgNC+0LXQvdC90YvQvCDQvNC40LrRgNC+0YTQvtC90L7QvCDQtNC70Y8g0LfQsNC/0LjRgdC4INC30LLRg9C60LAuIFxyXG4gICAg0J/RgNC+0LLQvtC00L3Ri9C1INC60LDQvNC10YDRiyDRgtCw0LrQuNC8INGD0YHRgtGA0L7QudGB0YLQstC+0Lwg0L3QtSDRgNCw0YHQv9C+0LvQsNCz0LDRjtGCLCDQvdC+INC4INC00LvRjyDQvdC40YUg0LzQvtC20L3QviDQvtGC0LTQtdC70YzQvdC+INC/0YDQuNC+0LHRgNC10YHRgtC4INC4INGD0YHRgtCw0L3QvtCy0LjRgtGMINC80LjQutGA0L7RhNC+0L0uPC9wPmAsXHJcbicjaG93ZmFzdCc6IGA8cD7QodGA0L7QutC4INC90LUg0LLQu9C40Y/RjtGCINC90LAg0YHRgtC+0LjQvNC+0YHRgtGMINGB0LjRgdGC0LXQvNGLLCDQvdC+INGN0YLQviDQv9C+0LfQstC+0LvRj9C10YIg0L/QvtC00L7QsdGA0LDRgtGMINC+0L/RgtC40LzQsNC70YzQvdC+0LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1INC4INGB0L/Qu9Cw0L3QuNGA0L7QstCw0YLRjCDRgNCw0LHQvtGC0YMg0LzQvtC90YLQsNC20L3QuNC60L7Qsi48L3A+YCxcclxuJyNzcXVhcmUnOiBgPHA+0KPQutCw0LbQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLINCy0LDRiNC10LPQviDQvtCx0YrQtdC60YLQsCDQtNC70LjQvdGDINC4INGI0LjRgNC40L3Rgywg0Y3RgtC+INC/0L7Qt9Cy0L7Qu9C40YIg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3QviDRgNCw0YHRgdGH0LjRgtCw0YLRjCDQtNC70LjQvdGDIFxyXG4gICAg0LrQsNCx0LXQu9GM0L3Ri9GFINGC0YDQsNGBYyDQuNC70Lgg0YPQutCw0LbQuNGC0LUg0L/RgNC40LzQtdGA0L3Rg9GOINC00LvQuNC90YMgXHJcbiAgICDQutCw0LHQtdC70Y8g0L7RgiDQutCw0LzQtdGA0Ysg0LTQviDQv9GA0LXQtNC/0L7Qu9Cw0LPQsNC10LzQvtCz0L4g0LzQtdGB0YLQsCDRg9GB0YLQsNC90L7QstC60Lgg0LfQsNC/0LjRgdGL0LLQsNGO0YnQtdCz0L4g0YPRgdGC0YDQvtC50YHRgtCy0LAuPC9wPmAsXHJcbicjY29tcGxlY3RhdGlvbic6IGA8cD7QrdGC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQu9GPINGC0L7Rh9C90L7Qs9C+INGA0LDRgdGH0LXRgtCwINC/0L7Qu9C90L7Qs9C+INC/0LXRgNC10YfQvdGPINC+0LHQvtGA0YPQtNC+0LLQsNC90LjRjzog0LTQu9GPINGA0LDRgdGH0LXRgtCwINGB0LjRgdGC0LXQvNGLIMKr0L/QvtC0INC60LvRjtGHwrsuPC9wPmBcclxufTtcclxuY29uc3QgZ29vZHMgPSB7XHJcbidpbmRvb3JDYW1lcmEnOiB7XHJcbiAgICAncHJpY2UnOiAyMTkwLFxyXG4gICAgJ25hbWUnOiAnRVotSEFDLVQxQTIxUC0wMzYwQicsXHJcbiAgICAnc3JjJzogJy4uL2Fzc2V0cy9pbWFnZXMvcGRmL2Zyb21BcmNoaWV2ZS9pbmRvb3JDYW0uanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidpbmRvb3JDYW1lcmFXaXRoU291bmQnOiB7XHJcbiAgICAncHJpY2UnOiAyODkwLFxyXG4gICAgJ25hbWUnOiAnRVotSEFDLVQ1QjIwUC1BLTAzNjBCJyxcclxuICAgICdzcmMnOiAnLi4vYXNzZXRzL2ltYWdlcy9wZGYvZnJvbUFyY2hpZXZlL2luZG9vckNhbVdpdGhTb3VuZC5qcGcnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcclxufSxcclxuJ291dGRvb3JDYW1lcmEnOiB7XHJcbiAgICAncHJpY2UnOiAyODkwLFxyXG4gICAgJ25hbWUnOiAnRVotSEFDLUI1QjIwUC1BLTAyODBCJyxcclxuICAgICdzcmMnOiAnLi4vYXNzZXRzL2ltYWdlcy9wZGYvZnJvbUFyY2hpZXZlL291dGRvb3JDYW0uanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidwYW5vcmFtQ2FtZXJhJzoge1xyXG4gICAgJ3ByaWNlJzogMjg5OTAsXHJcbiAgICAnbmFtZSc6ICdESC1TRDQ5MjI1LUhDLUxBJyxcclxuICAgICdzcmMnOiAnLi4vYXNzZXRzL2ltYWdlcy9wZGYvZnJvbUFyY2hpZXZlL3Bhbm9yYW1DYW0uanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidyZWdpc3RyYXRvcjFfNCc6IHtcclxuICAgICdwcmljZSc6IDYwMDAsXHJcbiAgICAnbmFtZSc6ICdESC1YVlI1MTA0Qy1YMScsXHJcbiAgICAnc3JjJzogJy4uL2Fzc2V0cy9pbWFnZXMvcGRmL2Zyb21BcmNoaWV2ZS9yZWdpc3RyYXRvcjFfNC5qcGcnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcclxufSxcclxuJ3JlZ2lzdHJhdG9yNV84Jzoge1xyXG4gICAgJ3ByaWNlJzogOTAwMCxcclxuICAgICduYW1lJzogJ0RILVhWUjUxMDhDLVgnLFxyXG4gICAgJ3NyYyc6ICcuLi9hc3NldHMvaW1hZ2VzL3BkZi9mcm9tQXJjaGlldmUvcmVnaXN0cmF0b3IxXzQuanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidyZWdpc3RyYXRvcjlfMTYnOiB7XHJcbiAgICAncHJpY2UnOiAxNjAwMCxcclxuICAgICduYW1lJzogJ0RILVhWUjUxMTZIUy1YJyxcclxuICAgICdzcmMnOiAnLi4vYXNzZXRzL2ltYWdlcy9wZGYvZnJvbUFyY2hpZXZlL3JlZ2lzdHJhdG9yOF8xNi5qcGcnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcclxuICAgIFxyXG59LFxyXG4ncmVnaXN0cmF0b3IxNl8zMic6IHtcclxuICAgICdwcmljZSc6IDIyMjAwLFxyXG4gICAgJ25hbWUnOiAnREgtWFZSNDIzMkFOLVgnLFxyXG4gICAgJ3NyYyc6ICcuLi9hc3NldHMvaW1hZ2VzL3BkZi9mcm9tQXJjaGlldmUvcmVnaXN0cmF0b3IxNm1vcmUuanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidjYWJsZSc6IHtcclxuICAgICdwcmljZSc6IDI1LFxyXG4gICAgJ25hbWUnOiAn0JrQsNCx0LXQu9GMINCy0LjRgtCw0Y8g0L/QsNGA0LAnLFxyXG4gICAgJ3NyYyc6ICcuLi9hc3NldHMvaW1hZ2VzL3BkZi9mcm9tQXJjaGlldmUvY2FibGUuanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidjb21wbGVjdEludGVybmV0Jzoge1xyXG4gICAgJ3ByaWNlJzogODc1MCxcclxuICAgICduYW1lJzogJ9Ca0L7QvNC/0LvQtdC60YIg0L7QsdC+0YDRg9C00L7QstCw0L3QuNGPINC00LvRjyDQv9C+0LTQutC70Y7Rh9C10L3QuNGPINC40L3RgtC10YDQvdC10YLQsCcsXHJcbiAgICAnc3JjJzogJy4uL2Fzc2V0cy9pbWFnZXMvcGRmL2Zyb21BcmNoaWV2ZS9kZWZhdWx0LmpwZycsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnJ1xyXG59LFxyXG4naWJwMV80Jzoge1xyXG4gICAgJ3ByaWNlJzogMjI1MCxcclxuICAgICduYW1lJzogJ0JCRy0xMjUnLFxyXG4gICAgJ3NyYyc6ICcuLi9hc3NldHMvaW1hZ2VzL3BkZi9mcm9tQXJjaGlldmUvaWJwMV80LmpwZycsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnJ1xyXG59LFxyXG4naWJwNV84Jzoge1xyXG4gICAgJ3ByaWNlJzogNDI1MCxcclxuICAgICduYW1lJzogJ0JCRy0xMjEwOCcsXHJcbiAgICAnc3JjJzogJy4uL2Fzc2V0cy9pbWFnZXMvcGRmL2Zyb21BcmNoaWV2ZS9pYnA1XzguanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidtb250YWdlQ2FibGVJbmRvb3InOiB7XHJcbiAgICAncHJpY2UnOiAzMCxcclxuICAgICduYW1lJzogJ9C80L7QvdGC0LDQtiDQutCw0LHQtdC70Y8g0LLQvdGD0YLRgNC4INC/0L7QvNC10YnQtdC90LjQuSdcclxufSxcclxuJ21vbnRhZ2VDYWJsZU91dGRvb3InOiB7XHJcbiAgICAncHJpY2UnOiA0MCxcclxuICAgICduYW1lJzogJ9C80L7QvdGC0LDQtiDQutCw0LHQtdC70Y8g0L3QsCDRg9C70LjRhtC1J1xyXG59LFxyXG4naW50ZXJuZXRJbnN0YWxsYXRpb24nOiB7XHJcbiAgICAncHJpY2UnOiAyNTAwLFxyXG4gICAgJ25hbWUnOiAn0L/QvtC00LrQu9GO0YfQtdC90LjQtSDQuNC90YLQtdGA0L3QtdGC0LAnXHJcbn0sXHJcbidzeXN0ZW1DdXN0bWl6YXRpb24nOiB7XHJcbiAgICAncHJpY2UnOiAyMDAwLFxyXG4gICAgJ25hbWUnOiAn0LzQvtC90YLQsNC20L3Ri9C1INGA0LDQsdC+0YLRiyDQuCDQvdCw0YHRgtGA0L7QudC60LAg0L7QsdC+0YDRg9C00L7QstCw0L3QuNGPJyxcclxuICAgICdzcmMnOiAnLi4vYXNzZXRzL2ltYWdlcy9wZGYvZnJvbUFyY2hpZXZlL2RlZmF1bHQuanBnJ1xyXG59LFxyXG4naW5kb29yQ2FtZXJhTW9udGFnZSc6IHtcclxuICAgICdwcmljZSc6IDE2MDAsXHJcbiAgICAnbmFtZSc6ICfQvNC+0L3RgtCw0LYg0LrQsNC80LXRgCDQstC90YPRgtGA0Lgg0L/QvtC80LXRidC10L3QuNC5J1xyXG59LFxyXG4nb3V0ZG9vckNhbWVyYU1vbnRhZ2UnOiB7XHJcbiAgICAncHJpY2UnOiAyNTAwLFxyXG4gICAgJ25hbWUnOiAn0LzQvtC90YLQsNC2INC60LDQvNC10YAg0L3QsCDRg9C70LjRhtC1J1xyXG59LFxyXG4nY29tcGxlY3RNb250YWdlJzoge1xyXG4gICAgJ3ByaWNlJzogNjA1MCxcclxuICAgICduYW1lJzogJ0PRgtCw0L3QtNCw0YDRgtC90YvQuSDQvNC+0L3RgtCw0LbQvdGL0Lkg0LrQvtC80L/Qu9C10LrRgicsXHJcbiAgICAnc3JjJzogJy4uL2Fzc2V0cy9pbWFnZXMvcGRmL2Zyb21BcmNoaWV2ZS9kZWZhdWx0LmpwZydcclxufSxcclxuJ2hhcmREaXNrMVRiJzoge1xyXG4gICAgJ3ByaWNlJzogNDYwMCxcclxuICAgICduYW1lJzogJ1NlYWdhdGUgU2t5SGF3ayAxVGInLFxyXG4gICAgJ3NyYyc6ICcuLi9hc3NldHMvaW1hZ2VzL3BkZi9mcm9tQXJjaGlldmUvaGFyZERpc2suanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidoYXJkRGlzazJUYic6IHtcclxuICAgICdwcmljZSc6IDczMDAsXHJcbiAgICAnbmFtZSc6ICdTZWFnYXRlIFNreUhhd2sgMlRiJyxcclxuICAgICdzcmMnOiAnLi4vYXNzZXRzL2ltYWdlcy9wZGYvZnJvbUFyY2hpZXZlL2hhcmREaXNrLmpwZycsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnJ1xyXG59LFxyXG4naGFyZERpc2s0VGInOiB7XHJcbiAgICAncHJpY2UnOiAyMDEwMCxcclxuICAgICduYW1lJzogJ1NlYWdhdGUgU2t5SGF3ayA0VGInLFxyXG4gICAgJ3NyYyc6ICcuLi9hc3NldHMvaW1hZ2VzL3BkZi9mcm9tQXJjaGlldmUvaGFyZERpc2suanBnJyxcclxuICAgICdkZXNjcmlwdGlvbic6ICcnXHJcbn0sXHJcbidoYXJkRGlzazZUYic6IHtcclxuICAgICdwcmljZSc6IDI3NjAwLFxyXG4gICAgJ25hbWUnOiAnU2VhZ2F0ZSBTa3lIYXdrIDZUYicsXHJcbiAgICAnc3JjJzogJy4uL2Fzc2V0cy9pbWFnZXMvcGRmL2Zyb21BcmNoaWV2ZS9oYXJkRGlzay5qcGcnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcclxufSxcclxuJ2hhcmREaXNrOFRiJzoge1xyXG4gICAgJ3ByaWNlJzogNDUxMDAsXHJcbiAgICAnbmFtZSc6ICdTZWFnYXRlIFNreUhhd2sgOFRiJyxcclxuICAgICdzcmMnOiAnLi4vYXNzZXRzL2ltYWdlcy9wZGYvZnJvbUFyY2hpZXZlL2hhcmREaXNrLmpwZycsXHJcbiAgICAnZGVzY3JpcHRpb24nOiAnJ1xyXG59LFxyXG4naGFyZERpc2sxMFRiJzoge1xyXG4gICAgJ3ByaWNlJzogNjAxMDAsXHJcbiAgICAnbmFtZSc6ICdTZWFnYXRlIFNreUhhd2sgMTBUYicsXHJcbiAgICAnc3JjJzogJy4uL2Fzc2V0cy9pbWFnZXMvcGRmL2Zyb21BcmNoaWV2ZS9oYXJkRGlzay5qcGcnLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogJydcclxufSxcclxufTsiXSwiZmlsZSI6InF1aXpEYXRhLmpzIn0=
