"use strict";

window.onload = () => {
  let screenCounter = 0;
  const pages = ['#quiz__preload', '#object', '#location', '#cameracount', '#archieve', '#doppel', '#howfast', '#square', '#complectation', '#quiz__result', '#quiz__form'];
  const questions = ['', 'Для какого объекта Вам необходима система видеонаблюдения?', 'Где находится объект?', 'Сколько камер Вы планируете установить?', 'Время хранения архива:', 'Дополнительные пожелания к системе видеонаблюдения:', 'Как срочно Вам нужна система?', 'Примерная площадь объекта', 'Вам нужен готовый комплект или монтаж системы под ключ?'];
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
            безопасности или решение спорных и конфоиктных ситуаций</p>`,
      'object__office': `<p>Проводные устройства для видеонаблюдения за офисом 
            представлены камерами с углом обзора от 92 до 103° и ночной съемкой 20 метров.</p>
            <p>Беспроводная видеосистема включает модели с обзором на 106—112° и дальностью ночного видения 10—30 метров.</p>`,
      'object__construct': `<p>Укажите кол-во камер по данным критериям и подберем для вас оптимальное решение. 
            На строительном объекте как правило устанавливается камера для мониторинга процесса строительства с  онлайн трансляцией в офис застройщика или на сайт компании. 
            Камера на въезд и выезд техники на объект для мониторинга ввозимых или вывозимых грузов.</p>`,
      'object__other': `<p>Укажите количество камер, и мы поймем, для каких задач Вам нужна система, будь то требования по паспорту 
            безопасности или решение спорных и конфоиктных ситуаций</p>`,
      'object__flat': `<p>Укажите количество камер, и мы поймем, для каких задач Вам нужна система, будь то требования по паспорту 
            безопасности или решение спорных и конфоиктных ситуаций</p>`,
      'object__tszh': `<p>Укажите количество камер, и мы поймем, для каких задач Вам нужна система, будь то требования по паспорту 
            безопасности или решение спорных и конфоиктных ситуаций</p>`
    },
    '#location': `<p>Понимание местоположения объекта позволит сразу учесть транспортные 
        расходы в коммерческом предложении, тем самым повысив его точность.</p>`,
    '#object': `<p>Стоимость видеонаблюдения зависит далеко не только от количества камер. Для каждого типа объекта есть стандартный набор задач. Мы сможем более точно определить характеристики и количество камер,
         зная тип вашего объекта. В результате расчёт стоимости будет наиболее точным.</p>`,
    '#archieve': `<p>От данного показателя зависит емкость  жесткого диска, модель регистратора, что в свою очередь скажеться на стоимости системы. 
        Здраво оцените конрктную потребность в количестве дней</p>`,
    '#doppel': `
        <p class='comment__content-title'>Устройство резервного электропитания</p>
        <p>Это устройство позволит 
        сохранять работоспособность системы при отключение электропитания</p>
        <p class='comment__content-title'>Интернет на объекте</p>
        <p>В настоящее время  системы видеонаблюдения позволяют осуществлять контроль за происходящим 
        в режиме реального времени. Следить за обстановкой в зоне видимости беспроводной камеры можно 
        с помощью специального приложения. Доступ к изображению проводных камер в онлайн-режиме возможен 
        через интернет посредством видеорегистратора. Если у вас нет доступа 
        в интернет на объекте, но нужен удаленный просмотр, укажите данный пункт.</p>
        <p class='comment__content-title'>Запись звука</p>
        <p>Все беспроводные системы видеонаблюдения оснащены встроенным микрофоном для записи звука. 
        Проводные камеры таким устройством не располагают, но и для них можно отдельно приобрести и установить микрофон.</p>`,
    '#howfast': `<p>Сроки не влияют на стоимость системы, но это позваляет подобрать оптимальное оборудование и спланировать работу монтажников.</p>`,
    '#square': `<p>Укажите параметры вашего объекта длинну и ширину, это позволит предварительно расчитать длину 
        кабельных трасc или укажите примерную длину 
        кабеля от камеры до предполагаемого места установки записывающего устройства.</p>`,
    '#complectation': `<p>Это необходимо для точного расчета полного перечня оборудования: для расчета системы «под ключ».</p>`
  };
  needSoundEvent();
  fastLevelChange();
  radioCheckActive();
  radioOnChange();
  funcSliders();
  showCurrentSphere(document.querySelector('#object__house'));
  addNavigationToButtons();
  addEventOnAllInputs();
  addShowPerimeter();
  addShowHideCommentEvent();
  refreshComment(); //показать/скрыть комменты в мобильной версии

  function showHideComment() {
    let comments = document.querySelector('.comments');
    comments.classList.toggle('comments_active');
  } // навесить на кнопку коммента и крестик


  function addShowHideCommentEvent() {
    let showCommentButton = document.querySelector('.quiz__button_circle');
    let closeCommentButton = document.querySelector('.comments__close');
    showCommentButton.onclick = showHideComment;
    closeCommentButton.onclick = showHideComment;
  } //показать текущий комментарий


  function refreshComment() {
    let comment = document.querySelector('#comments-content');
    let objectPage = document.querySelector('#object ');
    let currentObject = objectPage.querySelector('input:checked');

    if (0 < screenCounter < 9) {
      if (pages[screenCounter] == '#cameracount') {
        if (currentObject != null) {
          comment.innerHTML = comments[pages[screenCounter]][currentObject.id];
        } else {
          comment.innerHTML = comments[pages[screenCounter]]['nochosen'];
        }
      } else {
        comment.innerHTML = comments[pages[screenCounter]];
      }
    }
  } //функции навигации


  function navigation(direction) {
    if (direction == 'forward') {
      let currentPage = document.querySelector(`${pages[screenCounter]}`);
      screenCounter == 8 ? hide(currentPage.parentElement.parentElement) : hide(currentPage);
      screenCounter++;
      let nextPage = document.querySelector(`${pages[screenCounter]}`);

      switch (screenCounter) {
        case 1:
          show(nextPage.parentElement.parentElement, 'grid');
          break;

        case 9:
          show(nextPage, 'grid');
          break;

        default:
          show(nextPage, 'flex');
          break;
      }
    } else if ('back') {
      let currentPage = document.querySelector(`${pages[screenCounter]}`);
      screenCounter == 1 ? hide(currentPage.parentElement.parentElement) : hide(currentPage);
      screenCounter--;
      let nextPage = document.querySelector(`${pages[screenCounter]}`);
      screenCounter == 8 ? show(nextPage.parentElement.parentElement, 'grid') : show(nextPage, 'flex');
    }

    if (0 < screenCounter < 9) {
      refreshQuestion();
      checkButton();
      refreshComment();
    }
  } //добавление навигации на кнопки


  function addNavigationToButtons() {
    document.querySelector('.preload__button').onclick = () => navigation('forward');

    document.querySelector('.quiz__button_forward').onclick = () => navigation('forward');

    document.querySelector('.result__button_getOffer').onclick = () => navigation('forward');

    document.querySelector('.quiz__button_back').onclick = () => navigation('back');

    document.querySelector('.result__button_back').onclick = () => navigation('back');

    document.querySelector('.form__button_back').onclick = () => navigation('back');

    document.querySelector('.form__button_sendOffer').onclick = () => alert('Form was sent!');
  } //показать/скрыть элемент при навигации


  function hide(elem) {
    elem.style.opacity = 0;
    elem.style.display = 'none';
  }

  function show(elem, dispProperty) {
    elem.style.display = dispProperty;
    elem.style.opacity = 1;
  } //Обновить вопрос


  function refreshQuestion() {
    let question = document.querySelector('.quiz__question-text');
    question.textContent = questions[screenCounter];
  } //блокировка/разблокировка кнопки


  function checkButton() {
    let buttonForward = document.querySelector('.quiz__button_forward');

    if (!checkIsChosen(screenCounter)) {
      buttonForward.disabled = true;
    } else {
      buttonForward.disabled = false;
    }
  } //проверить выбран ли вариант на текущей странице


  function checkIsChosen(screenCounter) {
    let isTrue = 0;
    let currentPage = document.querySelector(`${pages[screenCounter]}`);

    switch (pages[screenCounter]) {
      case '#object':
        let objectRadios = currentPage.querySelectorAll('.object__input');
        objectRadios.forEach(radio => {
          if (radio.checked) isTrue++;
        });
        break;

      case '#location':
        let locationRadios = currentPage.querySelectorAll('.location__input');
        locationRadios.forEach(radio => {
          if (radio.checked) isTrue++;
        });
        break;

      case '#cameracount':
        let cameracountRanges = currentPage.querySelectorAll('.range__slider');
        cameracountRanges.forEach(range => {
          if (range.value != 0) isTrue++;
        });
        break;

      case '#archieve':
        let archieveRadios = currentPage.querySelectorAll('.custom-radio');
        archieveRadios.forEach(radio => {
          if (radio.checked) isTrue++;
        });
        break;

      case '#doppel':
        let soundNeedInput = currentPage.querySelector('#sound_need_range');
        let reserveNeed = currentPage.querySelector('#reserve_need');
        let internetNeed = currentPage.querySelector('#internet_need');
        let soundNeed = currentPage.querySelector('#sound_need');
        if ((soundNeed.checked || !soundNeed.checked) && (reserveNeed.checked || !reserveNeed.checked) && (!soundNeed.checked || soundNeed.checked && soundNeedInput.value != 0)) isTrue++;
        break;

      case '#howfast':
        let fastHigh = currentPage.querySelector('#fast_high');
        let fastMid = currentPage.querySelector('#fast_middle');
        let fastLow = currentPage.querySelector('#fast_low');
        let fastOwn = currentPage.querySelector('#fast_own');
        let fastOwnField = currentPage.querySelector('#fast_area');
        if (fastHigh.checked || fastMid.checked || fastLow.checked || fastOwn.checked && fastOwnField.value != '') isTrue++;
        break;

      case '#square':
        let squareInputs = currentPage.querySelectorAll('input');
        let squarePerimeter = currentPage.querySelector('#sqare__perimetral');
        let squareObjectLong = currentPage.querySelector('#square-object-long');
        let squareObjectWidth = currentPage.querySelector('#square-object-width');
        let squarePerimeterLong = currentPage.querySelector('#square-perimeter-long');
        let squarePerimeterWidth = currentPage.querySelector('#square-perimeter-width');

        if (squarePerimeter.classList.contains('square__perimetral_hidden')) {
          if (squareObjectLong.value != 0 && squareObjectWidth != 0) {
            isTrue++;
          }
        }

        if (!squarePerimeter.classList.contains('square__perimetral_hidden')) {
          if (squareObjectLong.value != 0 && squareObjectWidth != 0 && squarePerimeterLong.value != 0 && squarePerimeterWidth.value != 0) {
            isTrue++;
          }
        }

        break;

      case '#complectation':
        let complectationRadios = currentPage.querySelectorAll('.complectation__input');
        complectationRadios.forEach(radio => {
          if (radio.checked) {
            isTrue++;
          }
        });
        break;
    }

    return isTrue;
  } //радиокнопки Вопрос 1
  //проверка радиокнопок на checked


  function radioCheckActive() {
    let radioItems = document.querySelectorAll(`input[type='radio']`);
    radioItems.forEach(item => {
      if (item.checked) {
        item.parentElement.classList.add('object__item_active');
      } else {
        item.parentElement.classList.remove('object__item_active');
      }
    });
  } //добавление ивента по изменению радио на 1 странице


  function radioOnChange() {
    let objectRadios = document.querySelectorAll('.object__input');
    objectRadios.forEach(item => {
      item.addEventListener('change', function () {
        let currentRadio = this;
        radioCheckActive();
        resetValues();
        showCurrentSphere(currentRadio);
        showPerimeter();
        refreshComment();
      });
    });
  } //показать во 2 вопросе нужную сферу применения, скрыв ненужное


  function showCurrentSphere(input) {
    let currentSphere = input.dataset.choise;
    let camCounters = document.querySelectorAll('.camera-count__item');
    camCounters.forEach(counter => {
      counter.style.display = 'none';
    });
    let currentCounter = document.querySelector(`.camera-count__${currentSphere}`);
    currentCounter.style.display = 'flex';
  } //показать в square периметралки, если значение их в количестве != 0


  function showPerimeter() {
    let countPage = document.querySelector('#cameracount');
    let perimeterRanges = countPage.querySelectorAll('.perimeter');
    let sqarePerimeter = document.querySelector('#sqare__perimetral');
    let perimeterHas = 0;
    perimeterRanges.forEach(range => {
      if (range.value != 0) {
        perimeterHas++;
      }
    });

    if (perimeterHas != 0) {
      sqarePerimeter.classList.remove('square__perimetral_hidden');
    } else {
      let sqarePerimeterRanges = sqarePerimeter.querySelectorAll('input');
      sqarePerimeterRanges.forEach(range => {
        range.value = 0;
        refreshRange(range);
      });
      sqarePerimeter.classList.add('square__perimetral_hidden');
    }
  } // повесить на range периметралок в cameracount событие showPerimeter на input


  function addShowPerimeter() {
    let countPage = document.querySelector('#cameracount');
    let perimeterRanges = countPage.querySelectorAll('.perimeter');
    let sqarePerimeter = document.querySelector('#sqare__perimetral');
    perimeterRanges.forEach(range => {
      range.addEventListener('input', showPerimeter);
    });
  } //сбросить счетчики


  function resetValues() {
    //вопрос о количестве счетчики камер увести на 0
    let camCount = document.querySelector('.camera-count');
    let rangesCamCount = camCount.querySelectorAll('.range__slider');
    rangesCamCount.forEach(range => {
      range.value = 0;
      refreshRange(range);
    }); //объект - сброс радио

    let location = document.querySelector('#location');
    let locationRadios = location.querySelectorAll('.custom-radio');
    locationRadios.forEach(radio => {
      resetRadio(radio);
    }); //вопрос об архиве сбросить radio 

    let archive = document.querySelector('.archieve');
    let radiosArchieve = archive.querySelectorAll('.custom-radio');
    radiosArchieve.forEach(radio => {
      resetRadio(radio);
    }); //вопрос доп опции сбросить чекбоксы и range сбросить и скрыть

    let doppel = document.querySelector('.doppel');
    let checkboxesDoppel = doppel.querySelectorAll('.custom-check');
    checkboxesDoppel.forEach(checkbox => {
      resetCheckBox(checkbox);
    });
    let rangeDoppel = doppel.querySelector('#sound_need_range');
    rangeDoppel.value = 0;
    refreshRange(rangeDoppel);
    checkNeedSound(); //вопрос howFast сбросить радио

    let fast = document.querySelector('.fast');
    let radiosFast = fast.querySelectorAll('.custom-radio');
    radiosFast.forEach(radio => {
      resetRadio(radio);
      hasOwnAnswer();
    }); //вопрос square сбросить range

    let square = document.querySelector('#square');
    let squareRanges = square.querySelectorAll('.range-slider');
    squareRanges.forEach(range => range.value = 0);
  } //добавление обработчика на слайдер


  function funcSliders() {
    let sliders = document.querySelectorAll('.range__slider');
    sliders.forEach(slider => {
      slider.addEventListener('input', function () {
        refreshRange(this);
        checkButton();
      });
    });
  } //сброс радио


  function resetRadio(elem) {
    elem.checked = false;
  } //reset checkbox


  function resetCheckBox(elem) {
    elem.checked = false;
  } //обновить ползунок


  function refreshRange(current) {
    current.nextSibling.innerHTML = current.value;
    let percentValue = current.value / current.max * 100;
    let color = `linear-gradient(90deg, rgba(3,81,145,1) ${percentValue}%, rgba(128, 128, 128, 0.178) ${percentValue}%)`;
    current.style.background = color;
  } //Вопрос 4 нужен звук


  function needSoundEvent() {
    let recordCheckbox = document.querySelector('#sound_need');
    recordCheckbox.addEventListener('change', checkNeedSound);
  }

  function checkNeedSound() {
    let recordCheckbox = document.querySelector('#sound_need');
    let toggleRange = document.querySelector('#doppel__soundrecord');
    let soundNeedRange = document.querySelector('#sound_need_range');

    if (recordCheckbox.checked) {
      toggleRange.classList.remove('doppel__soundrecord_hidden');
    } else {
      toggleRange.classList.add('doppel__soundrecord_hidden');
      soundNeedRange.value = 0;
      refreshRange(soundNeedRange);
    }
  } //Вопрос5 свой вариант ответа
  //проверить чек у радио свой вариант, если да, то удалить класс скрытия, если нет - добавить


  function hasOwnAnswer() {
    let ownAnswerArea = document.querySelector('.fast__ownanswer');
    let hasOwn = document.querySelector('#fast_own');

    if (hasOwn.checked) {
      ownAnswerArea.classList.remove('fast__ownanswer_hidden');
    } else {
      ownAnswerArea.classList.add('fast__ownanswer_hidden');
    }
  } //навесить эту функцию на изменение всех ч/б в группе


  function fastLevelChange() {
    let radioItems = document.querySelectorAll(`.fast__input`);
    radioItems.forEach(item => {
      item.addEventListener('change', hasOwnAnswer);
    });
  } //общий ивент на все инпуты вопросов checkButton() - проверить, 
  //есть ли выбранные и введенные значения и если есть,
  //и если есть - разблокировать кнопку
  //ищем через родителя .quiz__question-body, чтоб не зацепить страницу с формой


  function addEventOnAllInputs() {
    let quizBody = document.querySelector('.quiz__question-body ');
    let allRadios = quizBody.querySelectorAll('input[type="radio"]');
    allRadios.forEach(item => {
      item.addEventListener('change', () => checkButton());
    });
    let allRanges = quizBody.querySelectorAll('input[type="range"]');
    allRanges.forEach(item => {
      item.addEventListener('input', () => checkButton());
    });
    let allCheckboxes = quizBody.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(item => {
      item.addEventListener('change', () => checkButton());
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNjcmVlbkNvdW50ZXIiLCJwYWdlcyIsInF1ZXN0aW9ucyIsImNvbW1lbnRzIiwibmVlZFNvdW5kRXZlbnQiLCJmYXN0TGV2ZWxDaGFuZ2UiLCJyYWRpb0NoZWNrQWN0aXZlIiwicmFkaW9PbkNoYW5nZSIsImZ1bmNTbGlkZXJzIiwic2hvd0N1cnJlbnRTcGhlcmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGROYXZpZ2F0aW9uVG9CdXR0b25zIiwiYWRkRXZlbnRPbkFsbElucHV0cyIsImFkZFNob3dQZXJpbWV0ZXIiLCJhZGRTaG93SGlkZUNvbW1lbnRFdmVudCIsInJlZnJlc2hDb21tZW50Iiwic2hvd0hpZGVDb21tZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2hvd0NvbW1lbnRCdXR0b24iLCJjbG9zZUNvbW1lbnRCdXR0b24iLCJvbmNsaWNrIiwiY29tbWVudCIsIm9iamVjdFBhZ2UiLCJjdXJyZW50T2JqZWN0IiwiaW5uZXJIVE1MIiwiaWQiLCJuYXZpZ2F0aW9uIiwiZGlyZWN0aW9uIiwiY3VycmVudFBhZ2UiLCJoaWRlIiwicGFyZW50RWxlbWVudCIsIm5leHRQYWdlIiwic2hvdyIsInJlZnJlc2hRdWVzdGlvbiIsImNoZWNrQnV0dG9uIiwiYWxlcnQiLCJlbGVtIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImRpc3BQcm9wZXJ0eSIsInF1ZXN0aW9uIiwidGV4dENvbnRlbnQiLCJidXR0b25Gb3J3YXJkIiwiY2hlY2tJc0Nob3NlbiIsImRpc2FibGVkIiwiaXNUcnVlIiwib2JqZWN0UmFkaW9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyYWRpbyIsImNoZWNrZWQiLCJsb2NhdGlvblJhZGlvcyIsImNhbWVyYWNvdW50UmFuZ2VzIiwicmFuZ2UiLCJ2YWx1ZSIsImFyY2hpZXZlUmFkaW9zIiwic291bmROZWVkSW5wdXQiLCJyZXNlcnZlTmVlZCIsImludGVybmV0TmVlZCIsInNvdW5kTmVlZCIsImZhc3RIaWdoIiwiZmFzdE1pZCIsImZhc3RMb3ciLCJmYXN0T3duIiwiZmFzdE93bkZpZWxkIiwic3F1YXJlSW5wdXRzIiwic3F1YXJlUGVyaW1ldGVyIiwic3F1YXJlT2JqZWN0TG9uZyIsInNxdWFyZU9iamVjdFdpZHRoIiwic3F1YXJlUGVyaW1ldGVyTG9uZyIsInNxdWFyZVBlcmltZXRlcldpZHRoIiwiY29udGFpbnMiLCJjb21wbGVjdGF0aW9uUmFkaW9zIiwicmFkaW9JdGVtcyIsIml0ZW0iLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudFJhZGlvIiwicmVzZXRWYWx1ZXMiLCJzaG93UGVyaW1ldGVyIiwiaW5wdXQiLCJjdXJyZW50U3BoZXJlIiwiZGF0YXNldCIsImNob2lzZSIsImNhbUNvdW50ZXJzIiwiY291bnRlciIsImN1cnJlbnRDb3VudGVyIiwiY291bnRQYWdlIiwicGVyaW1ldGVyUmFuZ2VzIiwic3FhcmVQZXJpbWV0ZXIiLCJwZXJpbWV0ZXJIYXMiLCJzcWFyZVBlcmltZXRlclJhbmdlcyIsInJlZnJlc2hSYW5nZSIsImNhbUNvdW50IiwicmFuZ2VzQ2FtQ291bnQiLCJsb2NhdGlvbiIsInJlc2V0UmFkaW8iLCJhcmNoaXZlIiwicmFkaW9zQXJjaGlldmUiLCJkb3BwZWwiLCJjaGVja2JveGVzRG9wcGVsIiwiY2hlY2tib3giLCJyZXNldENoZWNrQm94IiwicmFuZ2VEb3BwZWwiLCJjaGVja05lZWRTb3VuZCIsImZhc3QiLCJyYWRpb3NGYXN0IiwiaGFzT3duQW5zd2VyIiwic3F1YXJlIiwic3F1YXJlUmFuZ2VzIiwic2xpZGVycyIsInNsaWRlciIsImN1cnJlbnQiLCJuZXh0U2libGluZyIsInBlcmNlbnRWYWx1ZSIsIm1heCIsImNvbG9yIiwiYmFja2dyb3VuZCIsInJlY29yZENoZWNrYm94IiwidG9nZ2xlUmFuZ2UiLCJzb3VuZE5lZWRSYW5nZSIsIm93bkFuc3dlckFyZWEiLCJoYXNP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QUNBO0FBQ0E7OztBQUNBLFdBQVNsRyxtQkFBVCxHQUE4QjtBQUMxQixRQUFJa0gsUUFBUSxHQUFHckgsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQUFmO0FBQ0EsUUFBSXFILFNBQVMsR0FBR0QsUUFBUSxDQUFDN0UsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWhCO0FBQ0E4RSxJQUFBQSxTQUFTLENBQUM3RSxPQUFWLENBQWtCMEIsSUFBSSxJQUFJO0FBQUNBLE1BQUFBLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsTUFBTTVDLFdBQVcsRUFBakQ7QUFBcUQsS0FBaEY7QUFDQSxRQUFJNkYsU0FBUyxHQUFHRixRQUFRLENBQUM3RSxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBaEI7QUFDQStFLElBQUFBLFNBQVMsQ0FBQzlFLE9BQVYsQ0FBa0IwQixJQUFJLElBQUk7QUFBQ0EsTUFBQUEsSUFBSSxDQUFDRyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixNQUFNNUMsV0FBVyxFQUFoRDtBQUFvRCxLQUEvRTtBQUNBLFFBQUk4RixhQUFhLEdBQUdILFFBQVEsQ0FBQzdFLGdCQUFULENBQTBCLHdCQUExQixDQUFwQjtBQUNBZ0YsSUFBQUEsYUFBYSxDQUFDL0UsT0FBZCxDQUFzQjBCLElBQUksSUFBSTtBQUFDQSxNQUFBQSxJQUFJLENBQUNHLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU01QyxXQUFXLEVBQWpEO0FBQXFELEtBQXBGO0FBRUg7QUFDSixDQTNkRCIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2NyZWVuQ291bnRlciA9IDA7XHJcbiAgICBjb25zdCBwYWdlcyA9IFtcclxuICAgICAgICAnI3F1aXpfX3ByZWxvYWQnLFxyXG4gICAgICAgICcjb2JqZWN0JyxcclxuICAgICAgICAnI2xvY2F0aW9uJyxcclxuICAgICAgICAnI2NhbWVyYWNvdW50JyxcclxuICAgICAgICAnI2FyY2hpZXZlJyxcclxuICAgICAgICAnI2RvcHBlbCcsXHJcbiAgICAgICAgJyNob3dmYXN0JyxcclxuICAgICAgICAnI3NxdWFyZScsXHJcbiAgICAgICAgJyNjb21wbGVjdGF0aW9uJyxcclxuICAgICAgICAnI3F1aXpfX3Jlc3VsdCcsXHJcbiAgICAgICAgJyNxdWl6X19mb3JtJ1xyXG4gICAgXTtcclxuICAgIGNvbnN0IHF1ZXN0aW9ucyA9IFtcclxuICAgICAgICAnJyxcclxuICAgICAgICAn0JTQu9GPINC60LDQutC+0LPQviDQvtCx0YrQtdC60YLQsCDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80LAg0YHQuNGB0YLQtdC80LAg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPPycsXHJcbiAgICAgICAgJ9CT0LTQtSDQvdCw0YXQvtC00LjRgtGB0Y8g0L7QsdGK0LXQutGCPycsXHJcbiAgICAgICAgJ9Ch0LrQvtC70YzQutC+INC60LDQvNC10YAg0JLRiyDQv9C70LDQvdC40YDRg9C10YLQtSDRg9GB0YLQsNC90L7QstC40YLRjD8nLFxyXG4gICAgICAgICfQktGA0LXQvNGPINGF0YDQsNC90LXQvdC40Y8g0LDRgNGF0LjQstCwOicsXHJcbiAgICAgICAgJ9CU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0L/QvtC20LXQu9Cw0L3QuNGPINC6INGB0LjRgdGC0LXQvNC1INCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjzonLFxyXG4gICAgICAgICfQmtCw0Log0YHRgNC+0YfQvdC+INCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwPycsXHJcbiAgICAgICAgJ9Cf0YDQuNC80LXRgNC90LDRjyDQv9C70L7RidCw0LTRjCDQvtCx0YrQtdC60YLQsCcsXHJcbiAgICAgICAgJ9CS0LDQvCDQvdGD0LbQtdC9INCz0L7RgtC+0LLRi9C5INC60L7QvNC/0LvQtdC60YIg0LjQu9C4INC80L7QvdGC0LDQtiDRgdC40YHRgtC10LzRiyDQv9C+0LQg0LrQu9GO0Yc/J1xyXG4gICAgXTtcclxuICAgIGNvbnN0IGNvbW1lbnRzID0ge1xyXG4gICAgICAgICcjY2FtZXJhY291bnQnOiB7XHJcbiAgICAgICAgICAgICdub2Nob3Nlbic6ICfQktGL0LHQtdGA0LjRgtC1INC+0LHRitC10LrRgicsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19ob3VzZSc6IGA8cD7QktC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LUg0LTQu9GPINC30LDQs9C+0YDQvtC00L3QvtCz0L4g0LTQvtC80LAsINC00LDRh9C4INC/0YDQtdC00YHRgtCw0LLQu9C10L3QviDQv9GA0L7QstC+0LTQvdGL0LzQuCDQuCBcclxuICAgICAgICAgICAg0LHQtdGB0L/RgNC+0LLQvtC00L3Ri9C80Lgg0LrQsNC80LXRgNCw0LzQuCDRgSDRg9Cz0LvQvtC8INC+0LHQt9C+0YDQsCDQtNC+IDEwMsKwINCwLCDRgtCw0Log0LbQtSDQvdC+0YfQvdC+0Lkg0YHRitC10LzQutC+0LkgIFxyXG4gICAgICAgICAgICDRgSDQuNC6INC/0L7QtNGB0LLQtdGC0LrQvtC5INC+0YIgMTAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0KLQsNC6LCDQtNC70Y8g0LrQvtC90YLRgNC+0LvRjyDQvdC10LHQvtC70YzRiNC+0LPQviDQtNCy0L7RgNCwINC/0L7QtNC+0LnQtNC10YIgXHJcbiAgICAgICAgICAgINC/0YDQvtCy0L7QtNC90LDRjyDQutCw0LzQtdGA0LAg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINGBINC00LDQu9GM0L3QvtGB0YLRjNGOINC90L7Rh9C90L7QuSDRgdGK0LXQvNC60LggMjAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0J3QtdGB0LrQvtC70YzQutC+INC60YPQv9C+0LvRjNC90YvRhSBXaS1GaS3QstC40LTQtdC+0LrQsNC80LXRgCBcclxuICAgICAgICAgICAg0YEg0YDQsNC30YDQtdGI0LXQvdC40LXQvCAxMDgwcCDQuCDQvdC+0YfQvdGL0Lwg0LLQuNC00LXQvdC40LXQvCDQtNC+IDMwINC80LXRgtGA0L7QsiDRgdC80L7Qs9GD0YIg0YHQu9C10LTQuNGC0Ywg0LfQsCDQsdC+0LvRjNGI0L7QuSDRgtC10YDRgNC40YLQvtGA0LjQtdC5LjwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fZm9sZGVyJzpgPHA+0JTQu9GPINGB0LrQu9Cw0LTRgdC60L7Qs9C+INC/0L7QvNC10YnQtdC90LjRjyDQv9C+0LTQvtC50LTRg9GCINCy0LjQtNC10L7QutCw0LzQtdGA0Ysg0YEg0YPQs9C70L7QvCDQvtCx0LfQvtGA0LAg0L7RgiA4NSDQtNC+IDExMsKwIFxyXG4gICAgICAgICAgICDQuCDQvdC+0YfQvdGL0Lwg0LLQuNC00LXQvdC40LXQvCAyMOKAlDMwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCU0LvRjyDRgdC70LXQttC10L3QuNGPINC30LAg0L3QtdGB0LrQvtC70YzQutC40LzQuCDRgdC60LvQsNC00LDQvNC4INC40LvQuCDQvtC00L3QvtC5INCx0L7Qu9GM0YjQvtC5INC/0LvQvtGJ0LDQtNC60L7QuSDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCA0INC/0YDQvtCy0L7QtNC90YvQtSDQutCw0LzQtdGA0YssIFxyXG4gICAgICAgICAgICDQvtCx0LXRgdC/0LXRh9C40LLQsNGO0YnQuNC1INGA0LDQt9GA0LXRiNC10L3QuNC1IDEwODBwINC4INC90L7Rh9C90YPRjiDRgdGK0LXQvNC60YMg0LTQviAyMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QktC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LUg0LfQsCDQvdC10LHQvtC70YzRiNC40Lwg0YHQutC70LDQtNC+0Lwg0LzQvtC20LXRgiDQvtGB0YPRidC10YHRgtCy0LvRj9GC0Ywg0L7QtNC90LAgXHJcbiAgICAgICAgICAgINGG0LjQu9C40L3QtNGA0LjRh9C10YHQutCw0Y8g0LHQtdGB0L/RgNC+0LLQvtC00L3QsNGPINC60LDQvNC10YDQsCDRgSDQvdC+0YfQvdC+0Lkg0YHRitC10LzQutC+0Lkg0LTQviAzMCDQvNC10YLRgNC+0LIuPC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19zaG9wJzpgPHA+0JTQu9GPINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQsiDQvNCw0LPQsNC30LjQvdC1INC40YHQv9C+0LvRjNC30YPRjtGC0YHRjyDQutCw0LzQtdGA0YsgXHJcbiAgICAgICAgICAgINGBINC00LDQu9GM0L3QvtGB0YLRjNGOINC90L7Rh9C90L7Qs9C+INCy0LjQtNC10L3QuNGPIDEw4oCUMzAg0LzQtdGC0YDQvtCyINC4INGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwIDky4oCUMTEywrAuPC9wPlxyXG4gICAgICAgICAgICA8cD7QlNC70Y8g0YHQu9C10LbQtdC90LjRjyDQt9CwINGC0L7RgNCz0L7QstGL0Lwg0LfQsNC70L7QvCDQvNC+0LbQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCAyINC40LvQuCAzINC/0L7QstC+0YDQvtGC0L3Ri9C1IFdpLUZpLdCy0LjQtNC10L7QutCw0LzQtdGA0YsuPC9wPlxyXG4gICAgICAgICAgICA8cD7QkiDQutCw0YHRgdC+0LLQvtC5INC30L7QvdC1INGG0LXQu9C10YHQvtC+0LHRgNCw0LfQvdC+INGD0YHRgtCw0L3QvtCy0LjRgtGMINC/0YDQvtCy0L7QtNC90L7QtSDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40LUg0YEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtdC8INCyIEZ1bGxIRC3QutCw0YfQtdGB0YLQstC1LjwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fc2Nob29sJzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCwg0Lgg0LzRiyDQv9C+0LnQvNC10LwsINC00LvRjyDQutCw0LrQuNGFINC30LDQtNCw0Ycg0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LAsINCx0YPQtNGMINGC0L4g0YLRgNC10LHQvtCy0LDQvdC40Y8g0L/QviDQv9Cw0YHQv9C+0YDRgtGDIFxyXG4gICAgICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0L7QuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gLFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAnb2JqZWN0X19vZmZpY2UnOmA8cD7Qn9GA0L7QstC+0LTQvdGL0LUg0YPRgdGC0YDQvtC50YHRgtCy0LAg0LTQu9GPINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQt9CwINC+0YTQuNGB0L7QvCBcclxuICAgICAgICAgICAg0L/RgNC10LTRgdGC0LDQstC70LXQvdGLINC60LDQvNC10YDQsNC80Lgg0YEg0YPQs9C70L7QvCDQvtCx0LfQvtGA0LAg0L7RgiA5MiDQtNC+IDEwM8KwINC4INC90L7Rh9C90L7QuSDRgdGK0LXQvNC60L7QuSAyMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QkdC10YHQv9GA0L7QstC+0LTQvdCw0Y8g0LLQuNC00LXQvtGB0LjRgdGC0LXQvNCwINCy0LrQu9GO0YfQsNC10YIg0LzQvtC00LXQu9C4INGBINC+0LHQt9C+0YDQvtC8INC90LAgMTA24oCUMTEywrAg0Lgg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtCz0L4g0LLQuNC00LXQvdC40Y8gMTDigJQzMCDQvNC10YLRgNC+0LIuPC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19jb25zdHJ1Y3QnOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0Lst0LLQviDQutCw0LzQtdGAINC/0L4g0LTQsNC90L3Ri9C8INC60YDQuNGC0LXRgNC40Y/QvCDQuCDQv9C+0LTQsdC10YDQtdC8INC00LvRjyDQstCw0YEg0L7Qv9GC0LjQvNCw0LvRjNC90L7QtSDRgNC10YjQtdC90LjQtS4gXHJcbiAgICAgICAgICAgINCd0LAg0YHRgtGA0L7QuNGC0LXQu9GM0L3QvtC8INC+0LHRitC10LrRgtC1INC60LDQuiDQv9GA0LDQstC40LvQviDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0LrQsNC80LXRgNCwINC00LvRjyDQvNC+0L3QuNGC0L7RgNC40L3Qs9CwINC/0YDQvtGG0LXRgdGB0LAg0YHRgtGA0L7QuNGC0LXQu9GM0YHRgtCy0LAg0YEgINC+0L3Qu9Cw0LnQvSDRgtGA0LDQvdGB0LvRj9GG0LjQtdC5INCyINC+0YTQuNGBINC30LDRgdGC0YDQvtC50YnQuNC60LAg0LjQu9C4INC90LAg0YHQsNC50YIg0LrQvtC80L/QsNC90LjQuC4gXHJcbiAgICAgICAgICAgINCa0LDQvNC10YDQsCDQvdCwINCy0YrQtdC30LQg0Lgg0LLRi9C10LfQtCDRgtC10YXQvdC40LrQuCDQvdCwINC+0LHRitC10LrRgiDQtNC70Y8g0LzQvtC90LjRgtC+0YDQuNC90LPQsCDQstCy0L7Qt9C40LzRi9GFINC40LvQuCDQstGL0LLQvtC30LjQvNGL0YUg0LPRgNGD0LfQvtCyLjwvcD5gLFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAnb2JqZWN0X19vdGhlcic6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC+0LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX2ZsYXQnOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQvtC40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X190c3poJzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCwg0Lgg0LzRiyDQv9C+0LnQvNC10LwsINC00LvRjyDQutCw0LrQuNGFINC30LDQtNCw0Ycg0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LAsINCx0YPQtNGMINGC0L4g0YLRgNC10LHQvtCy0LDQvdC40Y8g0L/QviDQv9Cw0YHQv9C+0YDRgtGDIFxyXG4gICAgICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0L7QuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgICcjbG9jYXRpb24nOiBgPHA+0J/QvtC90LjQvNCw0L3QuNC1INC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40Y8g0L7QsdGK0LXQutGC0LAg0L/QvtC30LLQvtC70LjRgiDRgdGA0LDQt9GDINGD0YfQtdGB0YLRjCDRgtGA0LDQvdGB0L/QvtGA0YLQvdGL0LUgXHJcbiAgICAgICAg0YDQsNGB0YXQvtC00Ysg0LIg0LrQvtC80LzQtdGA0YfQtdGB0LrQvtC8INC/0YDQtdC00LvQvtC20LXQvdC40LgsINGC0LXQvCDRgdCw0LzRi9C8INC/0L7QstGL0YHQuNCyINC10LPQviDRgtC+0YfQvdC+0YHRgtGMLjwvcD5gLFxyXG4gICAgICAgICcjb2JqZWN0JzogYDxwPtCh0YLQvtC40LzQvtGB0YLRjCDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0LfQsNCy0LjRgdC40YIg0LTQsNC70LXQutC+INC90LUg0YLQvtC70YzQutC+INC+0YIg0LrQvtC70LjRh9C10YHRgtCy0LAg0LrQsNC80LXRgC4g0JTQu9GPINC60LDQttC00L7Qs9C+INGC0LjQv9CwINC+0LHRitC10LrRgtCwINC10YHRgtGMINGB0YLQsNC90LTQsNGA0YLQvdGL0Lkg0L3QsNCx0L7RgCDQt9Cw0LTQsNGHLiDQnNGLINGB0LzQvtC20LXQvCDQsdC+0LvQtdC1INGC0L7Rh9C90L4g0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0YXQsNGA0LDQutGC0LXRgNC40YHRgtC40LrQuCDQuCDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALFxyXG4gICAgICAgICDQt9C90LDRjyDRgtC40L8g0LLQsNGI0LXQs9C+INC+0LHRitC10LrRgtCwLiDQkiDRgNC10LfRg9C70YzRgtCw0YLQtSDRgNCw0YHRh9GR0YIg0YHRgtC+0LjQvNC+0YHRgtC4INCx0YPQtNC10YIg0L3QsNC40LHQvtC70LXQtSDRgtC+0YfQvdGL0LwuPC9wPmAsXHJcbiAgICAgICAgJyNhcmNoaWV2ZSc6YDxwPtCe0YIg0LTQsNC90L3QvtCz0L4g0L/QvtC60LDQt9Cw0YLQtdC70Y8g0LfQsNCy0LjRgdC40YIg0LXQvNC60L7RgdGC0YwgINC20LXRgdGC0LrQvtCz0L4g0LTQuNGB0LrQsCwg0LzQvtC00LXQu9GMINGA0LXQs9C40YHRgtGA0LDRgtC+0YDQsCwg0YfRgtC+INCyINGB0LLQvtGOINC+0YfQtdGA0LXQtNGMINGB0LrQsNC20LXRgtGM0YHRjyDQvdCwINGB0YLQvtC40LzQvtGB0YLQuCDRgdC40YHRgtC10LzRiy4gXHJcbiAgICAgICAg0JfQtNGA0LDQstC+INC+0YbQtdC90LjRgtC1INC60L7QvdGA0LrRgtC90YPRjiDQv9C+0YLRgNC10LHQvdC+0YHRgtGMINCyINC60L7Qu9C40YfQtdGB0YLQstC1INC00L3QtdC5PC9wPmAsXHJcbiAgICAgICAgJyNkb3BwZWwnOmBcclxuICAgICAgICA8cCBjbGFzcz0nY29tbWVudF9fY29udGVudC10aXRsZSc+0KPRgdGC0YDQvtC50YHRgtCy0L4g0YDQtdC30LXRgNCy0L3QvtCz0L4g0Y3Qu9C10LrRgtGA0L7Qv9C40YLQsNC90LjRjzwvcD5cclxuICAgICAgICA8cD7QrdGC0L4g0YPRgdGC0YDQvtC50YHRgtCy0L4g0L/QvtC30LLQvtC70LjRgiBcclxuICAgICAgICDRgdC+0YXRgNCw0L3Rj9GC0Ywg0YDQsNCx0L7RgtC+0YHQv9C+0YHQvtCx0L3QvtGB0YLRjCDRgdC40YHRgtC10LzRiyDQv9GA0Lgg0L7RgtC60LvRjtGH0LXQvdC40LUg0Y3Qu9C10LrRgtGA0L7Qv9C40YLQsNC90LjRjzwvcD5cclxuICAgICAgICA8cCBjbGFzcz0nY29tbWVudF9fY29udGVudC10aXRsZSc+0JjQvdGC0LXRgNC90LXRgiDQvdCwINC+0LHRitC10LrRgtC1PC9wPlxyXG4gICAgICAgIDxwPtCSINC90LDRgdGC0L7Rj9GJ0LXQtSDQstGA0LXQvNGPICDRgdC40YHRgtC10LzRiyDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0L/QvtC30LLQvtC70Y/RjtGCINC+0YHRg9GJ0LXRgdGC0LLQu9GP0YLRjCDQutC+0L3RgtGA0L7Qu9GMINC30LAg0L/RgNC+0LjRgdGF0L7QtNGP0YnQuNC8IFxyXG4gICAgICAgINCyINGA0LXQttC40LzQtSDRgNC10LDQu9GM0L3QvtCz0L4g0LLRgNC10LzQtdC90LguINCh0LvQtdC00LjRgtGMINC30LAg0L7QsdGB0YLQsNC90L7QstC60L7QuSDQsiDQt9C+0L3QtSDQstC40LTQuNC80L7RgdGC0Lgg0LHQtdGB0L/RgNC+0LLQvtC00L3QvtC5INC60LDQvNC10YDRiyDQvNC+0LbQvdC+IFxyXG4gICAgICAgINGBINC/0L7QvNC+0YnRjNGOINGB0L/QtdGG0LjQsNC70YzQvdC+0LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjy4g0JTQvtGB0YLRg9C/INC6INC40LfQvtCx0YDQsNC20LXQvdC40Y4g0L/RgNC+0LLQvtC00L3Ri9GFINC60LDQvNC10YAg0LIg0L7QvdC70LDQudC9LdGA0LXQttC40LzQtSDQstC+0LfQvNC+0LbQtdC9IFxyXG4gICAgICAgINGH0LXRgNC10Lcg0LjQvdGC0LXRgNC90LXRgiDQv9C+0YHRgNC10LTRgdGC0LLQvtC8INCy0LjQtNC10L7RgNC10LPQuNGB0YLRgNCw0YLQvtGA0LAuINCV0YHQu9C4INGDINCy0LDRgSDQvdC10YIg0LTQvtGB0YLRg9C/0LAgXHJcbiAgICAgICAg0LIg0LjQvdGC0LXRgNC90LXRgiDQvdCwINC+0LHRitC10LrRgtC1LCDQvdC+INC90YPQttC10L0g0YPQtNCw0LvQtdC90L3Ri9C5INC/0YDQvtGB0LzQvtGC0YAsINGD0LrQsNC20LjRgtC1INC00LDQvdC90YvQuSDQv9GD0L3QutGCLjwvcD5cclxuICAgICAgICA8cCBjbGFzcz0nY29tbWVudF9fY29udGVudC10aXRsZSc+0JfQsNC/0LjRgdGMINC30LLRg9C60LA8L3A+XHJcbiAgICAgICAgPHA+0JLRgdC1INCx0LXRgdC/0YDQvtCy0L7QtNC90YvQtSDRgdC40YHRgtC10LzRiyDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0L7RgdC90LDRidC10L3RiyDQstGB0YLRgNC+0LXQvdC90YvQvCDQvNC40LrRgNC+0YTQvtC90L7QvCDQtNC70Y8g0LfQsNC/0LjRgdC4INC30LLRg9C60LAuIFxyXG4gICAgICAgINCf0YDQvtCy0L7QtNC90YvQtSDQutCw0LzQtdGA0Ysg0YLQsNC60LjQvCDRg9GB0YLRgNC+0LnRgdGC0LLQvtC8INC90LUg0YDQsNGB0L/QvtC70LDQs9Cw0Y7Rgiwg0L3QviDQuCDQtNC70Y8g0L3QuNGFINC80L7QttC90L4g0L7RgtC00LXQu9GM0L3QviDQv9GA0LjQvtCx0YDQtdGB0YLQuCDQuCDRg9GB0YLQsNC90L7QstC40YLRjCDQvNC40LrRgNC+0YTQvtC9LjwvcD5gLFxyXG4gICAgICAgICcjaG93ZmFzdCc6YDxwPtCh0YDQvtC60Lgg0L3QtSDQstC70LjRj9GO0YIg0L3QsCDRgdGC0L7QuNC80L7RgdGC0Ywg0YHQuNGB0YLQtdC80YssINC90L4g0Y3RgtC+INC/0L7Qt9Cy0LDQu9GP0LXRgiDQv9C+0LTQvtCx0YDQsNGC0Ywg0L7Qv9GC0LjQvNCw0LvRjNC90L7QtSDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40LUg0Lgg0YHQv9C70LDQvdC40YDQvtCy0LDRgtGMINGA0LDQsdC+0YLRgyDQvNC+0L3RgtCw0LbQvdC40LrQvtCyLjwvcD5gLFxyXG4gICAgICAgICcjc3F1YXJlJzpgPHA+0KPQutCw0LbQuNGC0LUg0L/QsNGA0LDQvNC10YLRgNGLINCy0LDRiNC10LPQviDQvtCx0YrQtdC60YLQsCDQtNC70LjQvdC90YMg0Lgg0YjQuNGA0LjQvdGDLCDRjdGC0L4g0L/QvtC30LLQvtC70LjRgiDQv9GA0LXQtNCy0LDRgNC40YLQtdC70YzQvdC+INGA0LDRgdGH0LjRgtCw0YLRjCDQtNC70LjQvdGDIFxyXG4gICAgICAgINC60LDQsdC10LvRjNC90YvRhSDRgtGA0LDRgWMg0LjQu9C4INGD0LrQsNC20LjRgtC1INC/0YDQuNC80LXRgNC90YPRjiDQtNC70LjQvdGDIFxyXG4gICAgICAgINC60LDQsdC10LvRjyDQvtGCINC60LDQvNC10YDRiyDQtNC+INC/0YDQtdC00L/QvtC70LDQs9Cw0LXQvNC+0LPQviDQvNC10YHRgtCwINGD0YHRgtCw0L3QvtCy0LrQuCDQt9Cw0L/QuNGB0YvQstCw0Y7RidC10LPQviDRg9GB0YLRgNC+0LnRgdGC0LLQsC48L3A+YCxcclxuICAgICAgICAnI2NvbXBsZWN0YXRpb24nOiBgPHA+0K3RgtC+INC90LXQvtCx0YXQvtC00LjQvNC+INC00LvRjyDRgtC+0YfQvdC+0LPQviDRgNCw0YHRh9C10YLQsCDQv9C+0LvQvdC+0LPQviDQv9C10YDQtdGH0L3RjyDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40Y86INC00LvRjyDRgNCw0YHRh9C10YLQsCDRgdC40YHRgtC10LzRiyDCq9C/0L7QtCDQutC70Y7Rh8K7LjwvcD5gXHJcbiAgICB9XHJcbiAgICBuZWVkU291bmRFdmVudCgpO1xyXG4gICAgZmFzdExldmVsQ2hhbmdlKCk7XHJcbiAgICByYWRpb0NoZWNrQWN0aXZlKCk7XHJcbiAgICByYWRpb09uQ2hhbmdlKCk7XHJcbiAgICBmdW5jU2xpZGVycygpO1xyXG4gICAgc2hvd0N1cnJlbnRTcGhlcmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29iamVjdF9faG91c2UnKSk7XHJcbiAgICBhZGROYXZpZ2F0aW9uVG9CdXR0b25zKClcclxuICAgIGFkZEV2ZW50T25BbGxJbnB1dHMoKTtcclxuICAgIGFkZFNob3dQZXJpbWV0ZXIoKTtcclxuICAgIGFkZFNob3dIaWRlQ29tbWVudEV2ZW50KCk7XHJcbiAgICByZWZyZXNoQ29tbWVudCgpO1xyXG5cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjC/RgdC60YDRi9GC0Ywg0LrQvtC80LzQtdC90YLRiyDQsiDQvNC+0LHQuNC70YzQvdC+0Lkg0LLQtdGA0YHQuNC4XHJcbiAgICBmdW5jdGlvbiBzaG93SGlkZUNvbW1lbnQoKXtcclxuICAgICAgICBsZXQgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcclxuICAgICAgICBjb21tZW50cy5jbGFzc0xpc3QudG9nZ2xlKCdjb21tZW50c19hY3RpdmUnKVxyXG4gICAgfVxyXG4gICAgLy8g0L3QsNCy0LXRgdC40YLRjCDQvdCwINC60L3QvtC/0LrRgyDQutC+0LzQvNC10L3RgtCwINC4INC60YDQtdGB0YLQuNC6XHJcbiAgICBmdW5jdGlvbiBhZGRTaG93SGlkZUNvbW1lbnRFdmVudCgpe1xyXG4gICAgICAgIGxldCBzaG93Q29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19idXR0b25fY2lyY2xlJyk7XHJcbiAgICAgICAgbGV0IGNsb3NlQ29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50c19fY2xvc2UnKTtcclxuICAgICAgICBzaG93Q29tbWVudEJ1dHRvbi5vbmNsaWNrID0gc2hvd0hpZGVDb21tZW50O1xyXG4gICAgICAgIGNsb3NlQ29tbWVudEJ1dHRvbi5vbmNsaWNrID0gc2hvd0hpZGVDb21tZW50O1xyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGMINGC0LXQutGD0YnQuNC5INC60L7QvNC80LXQvdGC0LDRgNC40LlcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hDb21tZW50KCl7XHJcbiAgICAgICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMtY29udGVudCcpO1xyXG4gICAgICAgIGxldCBvYmplY3RQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29iamVjdCAnKTtcclxuICAgICAgICBsZXQgY3VycmVudE9iamVjdCA9IG9iamVjdFBhZ2UucXVlcnlTZWxlY3RvcignaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIGlmKDAgPCBzY3JlZW5Db3VudGVyIDwgOSl7XHJcbiAgICAgICAgICAgIGlmKHBhZ2VzW3NjcmVlbkNvdW50ZXJdID09ICcjY2FtZXJhY291bnQnKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudE9iamVjdCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXVtjdXJyZW50T2JqZWN0LmlkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5pbm5lckhUTUwgPSBjb21tZW50c1twYWdlc1tzY3JlZW5Db3VudGVyXV1bJ25vY2hvc2VuJ107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gY29tbWVudHNbcGFnZXNbc2NyZWVuQ291bnRlcl1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0YTRg9C90LrRhtC40Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICBmdW5jdGlvbiBuYXZpZ2F0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgaWYoZGlyZWN0aW9uID09ICdmb3J3YXJkJyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGFnZXNbc2NyZWVuQ291bnRlcl19YCk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXIgPT0gOD9oaWRlKGN1cnJlbnRQYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk6aGlkZShjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXIrKztcclxuICAgICAgICAgICAgbGV0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc3dpdGNoIChzY3JlZW5Db3VudGVyKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzaG93KG5leHRQYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCwgJ2dyaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICBzaG93KG5leHRQYWdlLCAnZ3JpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyhuZXh0UGFnZSwgJ2ZsZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCdiYWNrJyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGFnZXNbc2NyZWVuQ291bnRlcl19YCk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXIgPT0gMT9oaWRlKGN1cnJlbnRQYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk6aGlkZShjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXItLTtcclxuICAgICAgICAgICAgbGV0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSA4P3Nob3cobmV4dFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCAnZ3JpZCcpOnNob3cobmV4dFBhZ2UsICdmbGV4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDAgPCBzY3JlZW5Db3VudGVyIDwgOSl7XHJcbiAgICAgICAgICAgIHJlZnJlc2hRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICBjaGVja0J1dHRvbigpO1xyXG4gICAgICAgICAgICByZWZyZXNoQ29tbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0L3QsNCy0LjQs9Cw0YbQuNC4INC90LAg0LrQvdC+0L/QutC4XHJcbiAgICBmdW5jdGlvbiBhZGROYXZpZ2F0aW9uVG9CdXR0b25zKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRfX2J1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdmb3J3YXJkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9mb3J3YXJkJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2ZvcndhcmQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19idXR0b25fZ2V0T2ZmZXInKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignZm9yd2FyZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19idXR0b25fYmFjaycpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdiYWNrJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fYnV0dG9uX2JhY2snKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignYmFjaycpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b25fYmFjaycpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdiYWNrJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbl9zZW5kT2ZmZXInKS5vbmNsaWNrID0gKCkgPT4gYWxlcnQoJ0Zvcm0gd2FzIHNlbnQhJyk7XHJcbiAgICB9XHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINGN0LvQtdC80LXQvdGCINC/0YDQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgIGZ1bmN0aW9uIGhpZGUoZWxlbSl7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93KGVsZW0sIGRpc3BQcm9wZXJ0eSl7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcFByb3BlcnR5O1xyXG4gICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB9ICAgIFxyXG4gICAgLy/QntCx0L3QvtCy0LjRgtGMINCy0L7Qv9GA0L7RgVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFF1ZXN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX3F1ZXN0aW9uLXRleHQnKTtcclxuICAgICAgICBxdWVzdGlvbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uc1tzY3JlZW5Db3VudGVyXTtcclxuICAgIH1cclxuICAgIC8v0LHQu9C+0LrQuNGA0L7QstC60LAv0YDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAg0LrQvdC+0L/QutC4XHJcbiAgICBmdW5jdGlvbiBjaGVja0J1dHRvbigpe1xyXG4gICAgICAgIGxldCBidXR0b25Gb3J3YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9mb3J3YXJkJyk7XHJcbiAgICAgICAgaWYoIWNoZWNrSXNDaG9zZW4oc2NyZWVuQ291bnRlcikpe1xyXG4gICAgICAgICAgICBidXR0b25Gb3J3YXJkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYnV0dG9uRm9yd2FyZC5kaXNhYmxlZCA9IGZhbHNlOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9C/0YDQvtCy0LXRgNC40YLRjCDQstGL0LHRgNCw0L0g0LvQuCDQstCw0YDQuNCw0L3RgiDQvdCwINGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0LVcclxuICAgIGZ1bmN0aW9uIGNoZWNrSXNDaG9zZW4oc2NyZWVuQ291bnRlcil7XHJcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IDA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICBzd2l0Y2gocGFnZXNbc2NyZWVuQ291bnRlcl0pe1xyXG4gICAgICAgICAgICBjYXNlICcjb2JqZWN0JzpcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RSYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcub2JqZWN0X19pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0UmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpIGlzVHJ1ZSsrfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIGNhc2UgJyNsb2NhdGlvbic6XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25SYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcubG9jYXRpb25fX2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtpZihyYWRpby5jaGVja2VkKSBpc1RydWUrK30pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNjYW1lcmFjb3VudCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FtZXJhY291bnRSYW5nZXMgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX3NsaWRlcicpO1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhY291bnRSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7aWYocmFuZ2UudmFsdWUgIT0gMCkgaXNUcnVlKys7fSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2FyY2hpZXZlJzpcclxuICAgICAgICAgICAgICAgIGxldCBhcmNoaWV2ZVJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgICAgIGFyY2hpZXZlUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpaXNUcnVlKys7fSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2RvcHBlbCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgc291bmROZWVkSW5wdXQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZF9yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc2VydmVOZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3Jlc2VydmVfbmVlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVybmV0TmVlZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNpbnRlcm5ldF9uZWVkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291bmROZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICAgICAgICAgIGlmKChzb3VuZE5lZWQuY2hlY2tlZCB8fCAhc291bmROZWVkLmNoZWNrZWQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc2VydmVOZWVkLmNoZWNrZWQgfHwgIXJlc2VydmVOZWVkLmNoZWNrZWQpICYmICghc291bmROZWVkLmNoZWNrZWQgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgKHNvdW5kTmVlZC5jaGVja2VkICYmIHNvdW5kTmVlZElucHV0LnZhbHVlICE9IDApKSkgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2hvd2Zhc3QnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RIaWdoID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfaGlnaCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RNaWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9taWRkbGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0TG93ID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfbG93Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdE93biA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X293bicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RPd25GaWVsZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X2FyZWEnKTtcclxuICAgICAgICAgICAgICAgIGlmKGZhc3RIaWdoLmNoZWNrZWQgfHwgZmFzdE1pZC5jaGVja2VkIHx8IGZhc3RMb3cuY2hlY2tlZCB8fCAoZmFzdE93bi5jaGVja2VkICYmIGZhc3RPd25GaWVsZC52YWx1ZSAhPScnKSkgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI3NxdWFyZSc6IFxyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZUlucHV0cyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlUGVyaW1ldGVyID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxYXJlX19wZXJpbWV0cmFsJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlT2JqZWN0TG9uZyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtb2JqZWN0LWxvbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVPYmplY3RXaWR0aCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtb2JqZWN0LXdpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlUGVyaW1ldGVyTG9uZyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtcGVyaW1ldGVyLWxvbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVQZXJpbWV0ZXJXaWR0aCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtcGVyaW1ldGVyLXdpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICBpZihzcXVhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmVfX3BlcmltZXRyYWxfaGlkZGVuJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZU9iamVjdExvbmcudmFsdWUgIT0gMCAmJiBzcXVhcmVPYmplY3RXaWR0aCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIXNxdWFyZVBlcmltZXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlT2JqZWN0TG9uZy52YWx1ZSAhPSAwICYmIHNxdWFyZU9iamVjdFdpZHRoICE9IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZVBlcmltZXRlckxvbmcudmFsdWUgIT0gMCAmJiBzcXVhcmVQZXJpbWV0ZXJXaWR0aC52YWx1ZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2NvbXBsZWN0YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZWN0YXRpb25SYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxlY3RhdGlvbl9faW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGNvbXBsZWN0YXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmFkaW8uY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzVHJ1ZTtcclxuICAgIH1cclxuICAgIC8v0YDQsNC00LjQvtC60L3QvtC/0LrQuCDQktC+0L/RgNC+0YEgMVxyXG4gICAgLy/Qv9GA0L7QstC10YDQutCwINGA0LDQtNC40L7QutC90L7Qv9C+0Log0L3QsCBjaGVja2VkXHJcbiAgICBmdW5jdGlvbiByYWRpb0NoZWNrQWN0aXZlKCl7XHJcbiAgICAgICAgbGV0IHJhZGlvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdyYWRpbyddYCk7XHJcbiAgICAgICAgcmFkaW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0LjQstC10L3RgtCwINC/0L4g0LjQt9C80LXQvdC10L3QuNGOINGA0LDQtNC40L4g0L3QsCAxINGB0YLRgNCw0L3QuNGG0LVcclxuICAgIGZ1bmN0aW9uIHJhZGlvT25DaGFuZ2UoKXtcclxuICAgICAgICBsZXQgb2JqZWN0UmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9iamVjdF9faW5wdXQnKTtcclxuICAgICAgICBvYmplY3RSYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSYWRpbyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByYWRpb0NoZWNrQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0N1cnJlbnRTcGhlcmUoY3VycmVudFJhZGlvKTtcclxuICAgICAgICAgICAgICAgIHNob3dQZXJpbWV0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hDb21tZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjCDQstC+IDIg0LLQvtC/0YDQvtGB0LUg0L3Rg9C20L3Rg9GOINGB0YTQtdGA0YMg0L/RgNC40LzQtdC90LXQvdC40Y8sINGB0LrRgNGL0LIg0L3QtdC90YPQttC90L7QtVxyXG4gICAgZnVuY3Rpb24gc2hvd0N1cnJlbnRTcGhlcmUoaW5wdXQpe1xyXG4gICAgICAgIGxldCBjdXJyZW50U3BoZXJlID0gaW5wdXQuZGF0YXNldC5jaG9pc2U7XHJcbiAgICAgICAgbGV0IGNhbUNvdW50ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbWVyYS1jb3VudF9faXRlbScpO1xyXG4gICAgICAgIGNhbUNvdW50ZXJzLmZvckVhY2goY291bnRlciA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBjdXJyZW50Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYW1lcmEtY291bnRfXyR7Y3VycmVudFNwaGVyZX1gKTtcclxuICAgICAgICBjdXJyZW50Q291bnRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGMINCyIHNxdWFyZSDQv9C10YDQuNC80LXRgtGA0LDQu9C60LgsINC10YHQu9C4INC30L3QsNGH0LXQvdC40LUg0LjRhSDQsiDQutC+0LvQuNGH0LXRgdGC0LLQtSAhPSAwXHJcbiAgICBmdW5jdGlvbiBzaG93UGVyaW1ldGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW1lcmFjb3VudCcpO1xyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJSYW5nZXMgPSBjb3VudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnBlcmltZXRlcicpO1xyXG4gICAgICAgIGxldCBzcWFyZVBlcmltZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcWFyZV9fcGVyaW1ldHJhbCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJIYXMgPSAwO1xyXG4gICAgICAgIHBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgaWYocmFuZ2UudmFsdWUgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBwZXJpbWV0ZXJIYXMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYocGVyaW1ldGVySGFzICE9IDApe1xyXG5cclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgc3FhcmVQZXJpbWV0ZXJSYW5nZXMgPSBzcWFyZVBlcmltZXRlci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBzcWFyZVBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnZhbHVlID0gMFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LmFkZCgnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vINC/0L7QstC10YHQuNGC0Ywg0L3QsCByYW5nZSDQv9C10YDQuNC80LXRgtGA0LDQu9C+0Log0LIgY2FtZXJhY291bnQg0YHQvtCx0YvRgtC40LUgc2hvd1BlcmltZXRlciDQvdCwIGlucHV0XHJcbiAgICBmdW5jdGlvbiBhZGRTaG93UGVyaW1ldGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW1lcmFjb3VudCcpO1xyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJSYW5nZXMgPSBjb3VudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnBlcmltZXRlcicpO1xyXG4gICAgICAgIGxldCBzcWFyZVBlcmltZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcWFyZV9fcGVyaW1ldHJhbCcpO1xyXG4gICAgICAgIHBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzaG93UGVyaW1ldGVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/RgdCx0YDQvtGB0LjRgtGMINGB0YfQtdGC0YfQuNC60LhcclxuICAgIGZ1bmN0aW9uIHJlc2V0VmFsdWVzKCl7XHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBINC+INC60L7Qu9C40YfQtdGB0YLQstC1INGB0YfQtdGC0YfQuNC60Lgg0LrQsNC80LXRgCDRg9Cy0LXRgdGC0Lgg0L3QsCAwXHJcbiAgICAgICAgICAgIGxldCBjYW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtY291bnQnKTtcclxuICAgICAgICAgICAgbGV0IHJhbmdlc0NhbUNvdW50ID0gY2FtQ291bnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19zbGlkZXInKTtcclxuICAgICAgICAgICAgcmFuZ2VzQ2FtQ291bnQuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByYW5nZS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy/QvtCx0YrQtdC60YIgLSDRgdCx0YDQvtGBINGA0LDQtNC40L5cclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblJhZGlvcyA9IGxvY2F0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgbG9jYXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldFJhZGlvKHJhZGlvKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEg0L7QsSDQsNGA0YXQuNCy0LUg0YHQsdGA0L7RgdC40YLRjCByYWRpbyBcclxuICAgICAgICAgICAgbGV0IGFyY2hpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJjaGlldmUnKTtcclxuICAgICAgICAgICAgbGV0IHJhZGlvc0FyY2hpZXZlID0gYXJjaGl2ZS5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvJyk7XHJcbiAgICAgICAgICAgIHJhZGlvc0FyY2hpZXZlLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRSYWRpbyhyYWRpbyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBINC00L7QvyDQvtC/0YbQuNC4INGB0LHRgNC+0YHQuNGC0Ywg0YfQtdC60LHQvtC60YHRiyDQuCByYW5nZSDRgdCx0YDQvtGB0LjRgtGMINC4INGB0LrRgNGL0YLRjFxyXG4gICAgICAgICAgICBsZXQgZG9wcGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvcHBlbCcpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tib3hlc0RvcHBlbCA9IGRvcHBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWNoZWNrJyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNEb3BwZWwuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldENoZWNrQm94KGNoZWNrYm94KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IHJhbmdlRG9wcGVsID0gZG9wcGVsLnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgICAgIHJhbmdlRG9wcGVsLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlRG9wcGVsKTtcclxuICAgICAgICAgICAgY2hlY2tOZWVkU291bmQoKTtcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEgaG93RmFzdCDRgdCx0YDQvtGB0LjRgtGMINGA0LDQtNC40L5cclxuICAgICAgICAgICAgbGV0IGZhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzdCcpO1xyXG4gICAgICAgICAgICBsZXQgcmFkaW9zRmFzdCA9IGZhc3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICByYWRpb3NGYXN0LmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRSYWRpbyhyYWRpbyk7XHJcbiAgICAgICAgICAgICAgICBoYXNPd25BbnN3ZXIoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEgc3F1YXJlINGB0LHRgNC+0YHQuNGC0YwgcmFuZ2VcclxuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUnKTtcclxuICAgICAgICAgICAgbGV0IHNxdWFyZVJhbmdlcyA9IHNxdWFyZS5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2Utc2xpZGVyJyk7XHJcbiAgICAgICAgICAgIHNxdWFyZVJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHJhbmdlLnZhbHVlID0gMCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9C00L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0L3QsCDRgdC70LDQudC00LXRgFxyXG4gICAgZnVuY3Rpb24gZnVuY1NsaWRlcnMoKXtcclxuICAgICAgICBsZXQgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgc2xpZGVycy5mb3JFYWNoKHNsaWRlciA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUmFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvbigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v0YHQsdGA0L7RgSDRgNCw0LTQuNC+XHJcbiAgICBmdW5jdGlvbiByZXNldFJhZGlvKGVsZW0pe1xyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy9yZXNldCBjaGVja2JveFxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGVja0JveChlbGVtKXtcclxuICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8v0L7QsdC90L7QstC40YLRjCDQv9C+0LvQt9GD0L3QvtC6XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoUmFuZ2UoY3VycmVudCl7XHJcbiAgICAgICAgY3VycmVudC5uZXh0U2libGluZy5pbm5lckhUTUwgPSBjdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGxldCBwZXJjZW50VmFsdWUgPSAoY3VycmVudC52YWx1ZS9jdXJyZW50Lm1heCkqMTAwO1xyXG4gICAgICAgIGxldCBjb2xvciA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMyw4MSwxNDUsMSkgJHtwZXJjZW50VmFsdWV9JSwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE3OCkgJHtwZXJjZW50VmFsdWV9JSlgXHJcbiAgICAgICAgY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICAvL9CS0L7Qv9GA0L7RgSA0INC90YPQttC10L0g0LfQstGD0LpcclxuICAgIGZ1bmN0aW9uIG5lZWRTb3VuZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHJlY29yZENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICByZWNvcmRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja05lZWRTb3VuZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoZWNrTmVlZFNvdW5kKCl7XHJcbiAgICAgICAgbGV0IHJlY29yZENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICBsZXQgdG9nZ2xlUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9wcGVsX19zb3VuZHJlY29yZCcpO1xyXG4gICAgICAgIGxldCBzb3VuZE5lZWRSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgaWYocmVjb3JkQ2hlY2tib3guY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHRvZ2dsZVJhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2RvcHBlbF9fc291bmRyZWNvcmRfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZ2dsZVJhbmdlLmNsYXNzTGlzdC5hZGQoJ2RvcHBlbF9fc291bmRyZWNvcmRfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHNvdW5kTmVlZFJhbmdlLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHNvdW5kTmVlZFJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9CS0L7Qv9GA0L7RgTUg0YHQstC+0Lkg0LLQsNGA0LjQsNC90YIg0L7RgtCy0LXRgtCwXHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDQuNGC0Ywg0YfQtdC6INGDINGA0LDQtNC40L4g0YHQstC+0Lkg0LLQsNGA0LjQsNC90YIsINC10YHQu9C4INC00LAsINGC0L4g0YPQtNCw0LvQuNGC0Ywg0LrQu9Cw0YHRgSDRgdC60YDRi9GC0LjRjywg0LXRgdC70Lgg0L3QtdGCIC0g0LTQvtCx0LDQstC40YLRjFxyXG4gICAgZnVuY3Rpb24gaGFzT3duQW5zd2VyKCl7XHJcbiAgICAgICAgbGV0IG93bkFuc3dlckFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzdF9fb3duYW5zd2VyJyk7XHJcbiAgICAgICAgbGV0IGhhc093biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X293bicpO1xyXG4gICAgICAgIGlmKGhhc093bi5jaGVja2VkKXtcclxuICAgICAgICAgICAgb3duQW5zd2VyQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdmYXN0X19vd25hbnN3ZXJfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIG93bkFuc3dlckFyZWEuY2xhc3NMaXN0LmFkZCgnZmFzdF9fb3duYW5zd2VyX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0L3QsNCy0LXRgdC40YLRjCDRjdGC0YMg0YTRg9C90LrRhtC40Y4g0L3QsCDQuNC30LzQtdC90LXQvdC40LUg0LLRgdC10YUg0Ycv0LEg0LIg0LPRgNGD0L/Qv9C1XHJcbiAgICBmdW5jdGlvbiBmYXN0TGV2ZWxDaGFuZ2UoKXtcclxuICAgICAgICBsZXQgcmFkaW9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5mYXN0X19pbnB1dGApO1xyXG4gICAgICAgIHJhZGlvSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYXNPd25BbnN3ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy/QvtCx0YnQuNC5INC40LLQtdC90YIg0L3QsCDQstGB0LUg0LjQvdC/0YPRgtGLINCy0L7Qv9GA0L7RgdC+0LIgY2hlY2tCdXR0b24oKSAtINC/0YDQvtCy0LXRgNC40YLRjCwgXHJcbiAgICAvL9C10YHRgtGMINC70Lgg0LLRi9Cx0YDQsNC90L3Ri9C1INC4INCy0LLQtdC00LXQvdC90YvQtSDQt9C90LDRh9C10L3QuNGPINC4INC10YHQu9C4INC10YHRgtGMLFxyXG4gICAgLy/QuCDQtdGB0LvQuCDQtdGB0YLRjCAtINGA0LDQt9Cx0LvQvtC60LjRgNC+0LLQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICAvL9C40YnQtdC8INGH0LXRgNC10Lcg0YDQvtC00LjRgtC10LvRjyAucXVpel9fcXVlc3Rpb24tYm9keSwg0YfRgtC+0LEg0L3QtSDQt9Cw0YbQtdC/0LjRgtGMINGB0YLRgNCw0L3QuNGG0YMg0YEg0YTQvtGA0LzQvtC5XHJcbiAgICBmdW5jdGlvbiBhZGRFdmVudE9uQWxsSW5wdXRzKCl7XHJcbiAgICAgICAgbGV0IHF1aXpCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX3F1ZXN0aW9uLWJvZHkgJyk7XHJcbiAgICAgICAgbGV0IGFsbFJhZGlvcyA9IHF1aXpCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4gICAgICAgIGFsbFJhZGlvcy5mb3JFYWNoKGl0ZW0gPT4ge2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tCdXR0b24oKSl9KTtcclxuICAgICAgICBsZXQgYWxsUmFuZ2VzID0gcXVpekJvZHkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJyk7XHJcbiAgICAgICAgYWxsUmFuZ2VzLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGNoZWNrQnV0dG9uKCkpfSk7XHJcbiAgICAgICAgbGV0IGFsbENoZWNrYm94ZXMgPSBxdWl6Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuICAgICAgICBhbGxDaGVja2JveGVzLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjaGVja0J1dHRvbigpKX0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
