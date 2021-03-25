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
        if ((soundNeed.checked || !soundNeed.checked) && (reserveNeed.checked || !reserveNeed.checked) && (!soundNeed.checked || !soundNeed.checked && soundNeedInput.value != 0)) isTrue++;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNjcmVlbkNvdW50ZXIiLCJwYWdlcyIsInF1ZXN0aW9ucyIsImNvbW1lbnRzIiwibmVlZFNvdW5kRXZlbnQiLCJmYXN0TGV2ZWxDaGFuZ2UiLCJyYWRpb0NoZWNrQWN0aXZlIiwicmFkaW9PbkNoYW5nZSIsImZ1bmNTbGlkZXJzIiwic2hvd0N1cnJlbnRTcGhlcmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGROYXZpZ2F0aW9uVG9CdXR0b25zIiwiYWRkRXZlbnRPbkFsbElucHV0cyIsImFkZFNob3dQZXJpbWV0ZXIiLCJhZGRTaG93SGlkZUNvbW1lbnRFdmVudCIsInJlZnJlc2hDb21tZW50Iiwic2hvd0hpZGVDb21tZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2hvd0NvbW1lbnRCdXR0b24iLCJjbG9zZUNvbW1lbnRCdXR0b24iLCJvbmNsaWNrIiwiY29tbWVudCIsIm9iamVjdFBhZ2UiLCJjdXJyZW50T2JqZWN0IiwiaW5uZXJIVE1MIiwiaWQiLCJuYXZpZ2F0aW9uIiwiZGlyZWN0aW9uIiwiY3VycmVudFBhZ2UiLCJoaWRlIiwicGFyZW50RWxlbWVudCIsIm5leHRQYWdlIiwic2hvdyIsInJlZnJlc2hRdWVzdGlvbiIsImNoZWNrQnV0dG9uIiwiYWxlcnQiLCJlbGVtIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImRpc3BQcm9wZXJ0eSIsInF1ZXN0aW9uIiwidGV4dENvbnRlbnQiLCJidXR0b25Gb3J3YXJkIiwiY2hlY2tJc0Nob3NlbiIsImRpc2FibGVkIiwiaXNUcnVlIiwib2JqZWN0UmFkaW9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyYWRpbyIsImNoZWNrZWQiLCJsb2NhdGlvblJhZGlvcyIsImNhbWVyYWNvdW50UmFuZ2VzIiwicmFuZ2UiLCJ2YWx1ZSIsImFyY2hpZXZlUmFkaW9zIiwic291bmROZWVkSW5wdXQiLCJyZXNlcnZlTmVlZCIsImludGVybmV0TmVlZCIsInNvdW5kTmVlZCIsImZhc3RIaWdoIiwiZmFzdE1pZCIsImZhc3RMb3ciLCJmYXN0T3duIiwiZmFzdE93bkZpZWxkIiwic3F1YXJlSW5wdXRzIiwic3F1YXJlUGVyaW1ldGVyIiwic3F1YXJlT2JqZWN0TG9uZyIsInNxdWFyZU9iamVjdFdpZHRoIiwic3F1YXJlUGVyaW1ldGVyTG9uZyIsInNxdWFyZVBlcmltZXRlcldpZHRoIiwiY29udGFpbnMiLCJjb21wbGVjdGF0aW9uUmFkaW9zIiwicmFkaW9JdGVtcyIsIml0ZW0iLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudFJhZGlvIiwicmVzZXRWYWx1ZXMiLCJzaG93UGVyaW1ldGVyIiwiaW5wdXQiLCJjdXJyZW50U3BoZXJlIiwiZGF0YXNldCIsImNob2lzZSIsImNhbUNvdW50ZXJzIiwiY291bnRlciIsImN1cnJlbnRDb3VudGVyIiwiY291bnRQYWdlIiwicGVyaW1ldGVyUmFuZ2VzIiwic3FhcmVQZXJpbWV0ZXIiLCJwZXJpbWV0ZXJIYXMiLCJzcWFyZVBlcmltZXRlclJhbmdlcyIsInJlZnJlc2hSYW5nZSIsImNhbUNvdW50IiwicmFuZ2VzQ2FtQ291bnQiLCJsb2NhdGlvbiIsInJlc2V0UmFkaW8iLCJhcmNoaXZlIiwicmFkaW9zQXJjaGlldmUiLCJkb3BwZWwiLCJjaGVja2JveGVzRG9wcGVsIiwiY2hlY2tib3giLCJyZXNldENoZWNrQm94IiwicmFuZ2VEb3BwZWwiLCJjaGVja05lZWRTb3VuZCIsImZhc3QiLCJyYWRpb3NGYXN0IiwiaGFzT3duQW5zd2VyIiwic3F1YXJlIiwic3F1YXJlUmFuZ2VzIiwic2xpZGVycyIsInNsaWRlciIsImN1cnJlbnQiLCJuZXh0U2libGluZyIsInBlcmNlbnRWYWx1ZSIsIm1heCIsImNvbG9yIiwiYmFja2dyb3VuZCIsInJlY29yZENoZWNrYm94IiwidG9nZ2xlUmFuZ2UiLCJzb3VuZE5lZWRSYW5nZSIsIm93bkFuc3dlckFyZWEiLCJoYXNP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QUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBU2xHLG1CQUFULEdBQThCO0FBQzFCLFFBQUlrSCxRQUFRLEdBQUdySCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQWY7QUFDQSxRQUFJcUgsU0FBUyxHQUFHRCxRQUFRLENBQUM3RSxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBaEI7QUFDQThFLElBQUFBLFNBQVMsQ0FBQzdFLE9BQVYsQ0FBa0IwQixJQUFJLElBQUk7QUFBQ0EsTUFBQUEsSUFBSSxDQUFDRyxnQkFBTCxDQUFzQixRQUF0QixFQUFnQyxNQUFNNUMsV0FBVyxFQUFqRDtBQUFxRCxLQUFoRjtBQUNBLFFBQUk2RixTQUFTLEdBQUdGLFFBQVEsQ0FBQzdFLGdCQUFULENBQTBCLHFCQUExQixDQUFoQjtBQUNBK0UsSUFBQUEsU0FBUyxDQUFDOUUsT0FBVixDQUFrQjBCLElBQUksSUFBSTtBQUFDQSxNQUFBQSxJQUFJLENBQUNHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLE1BQU01QyxXQUFXLEVBQWhEO0FBQW9ELEtBQS9FO0FBQ0EsUUFBSThGLGFBQWEsR0FBR0gsUUFBUSxDQUFDN0UsZ0JBQVQsQ0FBMEIsd0JBQTFCLENBQXBCO0FBQ0FnRixJQUFBQSxhQUFhLENBQUMvRSxPQUFkLENBQXNCMEIsSUFBSSxJQUFJO0FBQUNBLE1BQUFBLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsTUFBTTVDLFdBQVcsRUFBakQ7QUFBcUQsS0FBcEY7QUFFSDtBQUNKLENBM2REIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGxldCBzY3JlZW5Db3VudGVyID0gMDtcclxuICAgIGNvbnN0IHBhZ2VzID0gW1xyXG4gICAgICAgICcjcXVpel9fcHJlbG9hZCcsXHJcbiAgICAgICAgJyNvYmplY3QnLFxyXG4gICAgICAgICcjbG9jYXRpb24nLFxyXG4gICAgICAgICcjY2FtZXJhY291bnQnLFxyXG4gICAgICAgICcjYXJjaGlldmUnLFxyXG4gICAgICAgICcjZG9wcGVsJyxcclxuICAgICAgICAnI2hvd2Zhc3QnLFxyXG4gICAgICAgICcjc3F1YXJlJyxcclxuICAgICAgICAnI2NvbXBsZWN0YXRpb24nLFxyXG4gICAgICAgICcjcXVpel9fcmVzdWx0JyxcclxuICAgICAgICAnI3F1aXpfX2Zvcm0nXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcXVlc3Rpb25zID0gW1xyXG4gICAgICAgICcnLFxyXG4gICAgICAgICfQlNC70Y8g0LrQsNC60L7Qs9C+INC+0LHRitC10LrRgtCwINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQsCDRgdC40YHRgtC10LzQsCDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8/JyxcclxuICAgICAgICAn0JPQtNC1INC90LDRhdC+0LTQuNGC0YHRjyDQvtCx0YrQtdC60YI/JyxcclxuICAgICAgICAn0KHQutC+0LvRjNC60L4g0LrQsNC80LXRgCDQktGLINC/0LvQsNC90LjRgNGD0LXRgtC1INGD0YHRgtCw0L3QvtCy0LjRgtGMPycsXHJcbiAgICAgICAgJ9CS0YDQtdC80Y8g0YXRgNCw0L3QtdC90LjRjyDQsNGA0YXQuNCy0LA6JyxcclxuICAgICAgICAn0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQv9C+0LbQtdC70LDQvdC40Y8g0Log0YHQuNGB0YLQtdC80LUg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPOicsXHJcbiAgICAgICAgJ9Ca0LDQuiDRgdGA0L7Rh9C90L4g0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LA/JyxcclxuICAgICAgICAn0J/RgNC40LzQtdGA0L3QsNGPINC/0LvQvtGJ0LDQtNGMINC+0LHRitC10LrRgtCwJyxcclxuICAgICAgICAn0JLQsNC8INC90YPQttC10L0g0LPQvtGC0L7QstGL0Lkg0LrQvtC80L/Qu9C10LrRgiDQuNC70Lgg0LzQvtC90YLQsNC2INGB0LjRgdGC0LXQvNGLINC/0L7QtCDQutC70Y7Rhz8nXHJcbiAgICBdO1xyXG4gICAgY29uc3QgY29tbWVudHMgPSB7XHJcbiAgICAgICAgJyNjYW1lcmFjb3VudCc6IHtcclxuICAgICAgICAgICAgJ25vY2hvc2VuJzogJ9CS0YvQsdC10YDQuNGC0LUg0L7QsdGK0LXQutGCJyxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX2hvdXNlJzogYDxwPtCS0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjQtSDQtNC70Y8g0LfQsNCz0L7RgNC+0LTQvdC+0LPQviDQtNC+0LzQsCwg0LTQsNGH0Lgg0L/RgNC10LTRgdGC0LDQstC70LXQvdC+INC/0YDQvtCy0L7QtNC90YvQvNC4INC4IFxyXG4gICAgICAgICAgICDQsdC10YHQv9GA0L7QstC+0LTQvdGL0LzQuCDQutCw0LzQtdGA0LDQvNC4INGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC00L4gMTAywrAg0LAsINGC0LDQuiDQttC1INC90L7Rh9C90L7QuSDRgdGK0LXQvNC60L7QuSAgXHJcbiAgICAgICAgICAgINGBINC40Log0L/QvtC00YHQstC10YLQutC+0Lkg0L7RgiAxMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QotCw0LosINC00LvRjyDQutC+0L3RgtGA0L7Qu9GPINC90LXQsdC+0LvRjNGI0L7Qs9C+INC00LLQvtGA0LAg0L/QvtC00L7QudC00LXRgiBcclxuICAgICAgICAgICAg0L/RgNC+0LLQvtC00L3QsNGPINC60LDQvNC10YDQsCDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0YEg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQuCAyMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QndC10YHQutC+0LvRjNC60L4g0LrRg9C/0L7Qu9GM0L3Ri9GFIFdpLUZpLdCy0LjQtNC10L7QutCw0LzQtdGAIFxyXG4gICAgICAgICAgICDRgSDRgNCw0LfRgNC10YjQtdC90LjQtdC8IDEwODBwINC4INC90L7Rh9C90YvQvCDQstC40LTQtdC90LjQtdC8INC00L4gMzAg0LzQtdGC0YDQvtCyINGB0LzQvtCz0YPRgiDRgdC70LXQtNC40YLRjCDQt9CwINCx0L7Qu9GM0YjQvtC5INGC0LXRgNGA0LjRgtC+0YDQuNC10LkuPC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19mb2xkZXInOmA8cD7QlNC70Y8g0YHQutC70LDQtNGB0LrQvtCz0L4g0L/QvtC80LXRidC10L3QuNGPINC/0L7QtNC+0LnQtNGD0YIg0LLQuNC00LXQvtC60LDQvNC10YDRiyDRgSDRg9Cz0LvQvtC8INC+0LHQt9C+0YDQsCDQvtGCIDg1INC00L4gMTEywrAgXHJcbiAgICAgICAgICAgINC4INC90L7Rh9C90YvQvCDQstC40LTQtdC90LjQtdC8IDIw4oCUMzAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0JTQu9GPINGB0LvQtdC20LXQvdC40Y8g0LfQsCDQvdC10YHQutC+0LvRjNC60LjQvNC4INGB0LrQu9Cw0LTQsNC80Lgg0LjQu9C4INC+0LTQvdC+0Lkg0LHQvtC70YzRiNC+0Lkg0L/Qu9C+0YnQsNC00LrQvtC5INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIDQg0L/RgNC+0LLQvtC00L3Ri9C1INC60LDQvNC10YDRiywgXHJcbiAgICAgICAgICAgINC+0LHQtdGB0L/QtdGH0LjQstCw0Y7RidC40LUg0YDQsNC30YDQtdGI0LXQvdC40LUgMTA4MHAg0Lgg0L3QvtGH0L3Rg9GOINGB0YrQtdC80LrRgyDQtNC+IDIwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCS0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjQtSDQt9CwINC90LXQsdC+0LvRjNGI0LjQvCDRgdC60LvQsNC00L7QvCDQvNC+0LbQtdGCINC+0YHRg9GJ0LXRgdGC0LLQu9GP0YLRjCDQvtC00L3QsCBcclxuICAgICAgICAgICAg0YbQuNC70LjQvdC00YDQuNGH0LXRgdC60LDRjyDQsdC10YHQv9GA0L7QstC+0LTQvdCw0Y8g0LrQsNC80LXRgNCwINGBINC90L7Rh9C90L7QuSDRgdGK0LXQvNC60L7QuSDQtNC+IDMwINC80LXRgtGA0L7Qsi48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX3Nob3AnOmA8cD7QlNC70Y8g0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINCyINC80LDQs9Cw0LfQuNC90LUg0LjRgdC/0L7Qu9GM0LfRg9GO0YLRgdGPINC60LDQvNC10YDRiyBcclxuICAgICAgICAgICAg0YEg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtCz0L4g0LLQuNC00LXQvdC40Y8gMTDigJQzMCDQvNC10YLRgNC+0LIg0Lgg0YPQs9C70L7QvCDQvtCx0LfQvtGA0LAgOTLigJQxMTLCsC48L3A+XHJcbiAgICAgICAgICAgIDxwPtCU0LvRjyDRgdC70LXQttC10L3QuNGPINC30LAg0YLQvtGA0LPQvtCy0YvQvCDQt9Cw0LvQvtC8INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIDIg0LjQu9C4IDMg0L/QvtCy0L7RgNC+0YLQvdGL0LUgV2ktRmkt0LLQuNC00LXQvtC60LDQvNC10YDRiy48L3A+XHJcbiAgICAgICAgICAgIDxwPtCSINC60LDRgdGB0L7QstC+0Lkg0LfQvtC90LUg0YbQtdC70LXRgdC+0L7QsdGA0LDQt9C90L4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0L/RgNC+0LLQvtC00L3QvtC1INCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjQtSDRgSDQuNC30L7QsdGA0LDQttC10L3QuNC10Lwg0LIgRnVsbEhELdC60LDRh9C10YHRgtCy0LUuPC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19zY2hvb2wnOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQvtC40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICdvYmplY3RfX29mZmljZSc6YDxwPtCf0YDQvtCy0L7QtNC90YvQtSDRg9GB0YLRgNC+0LnRgdGC0LLQsCDQtNC70Y8g0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC30LAg0L7RhNC40YHQvtC8IFxyXG4gICAgICAgICAgICDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90Ysg0LrQsNC80LXRgNCw0LzQuCDRgSDRg9Cz0LvQvtC8INC+0LHQt9C+0YDQsCDQvtGCIDkyINC00L4gMTAzwrAg0Lgg0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQvtC5IDIwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCR0LXRgdC/0YDQvtCy0L7QtNC90LDRjyDQstC40LTQtdC+0YHQuNGB0YLQtdC80LAg0LLQutC70Y7Rh9Cw0LXRgiDQvNC+0LTQtdC70Lgg0YEg0L7QsdC30L7RgNC+0Lwg0L3QsCAxMDbigJQxMTLCsCDQuCDQtNCw0LvRjNC90L7RgdGC0YzRjiDQvdC+0YfQvdC+0LPQviDQstC40LTQtdC90LjRjyAxMOKAlDMwINC80LXRgtGA0L7Qsi48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX2NvbnN0cnVjdCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Quy3QstC+INC60LDQvNC10YAg0L/QviDQtNCw0L3QvdGL0Lwg0LrRgNC40YLQtdGA0LjRj9C8INC4INC/0L7QtNCx0LXRgNC10Lwg0LTQu9GPINCy0LDRgSDQvtC/0YLQuNC80LDQu9GM0L3QvtC1INGA0LXRiNC10L3QuNC1LiBcclxuICAgICAgICAgICAg0J3QsCDRgdGC0YDQvtC40YLQtdC70YzQvdC+0Lwg0L7QsdGK0LXQutGC0LUg0LrQsNC6INC/0YDQsNCy0LjQu9C+INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQutCw0LzQtdGA0LAg0LTQu9GPINC80L7QvdC40YLQvtGA0LjQvdCz0LAg0L/RgNC+0YbQtdGB0YHQsCDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQsCDRgSAg0L7QvdC70LDQudC9INGC0YDQsNC90YHQu9GP0YbQuNC10Lkg0LIg0L7RhNC40YEg0LfQsNGB0YLRgNC+0LnRidC40LrQsCDQuNC70Lgg0L3QsCDRgdCw0LnRgiDQutC+0LzQv9Cw0L3QuNC4LiBcclxuICAgICAgICAgICAg0JrQsNC80LXRgNCwINC90LAg0LLRitC10LfQtCDQuCDQstGL0LXQt9C0INGC0LXRhdC90LjQutC4INC90LAg0L7QsdGK0LXQutGCINC00LvRjyDQvNC+0L3QuNGC0L7RgNC40L3Qs9CwINCy0LLQvtC30LjQvNGL0YUg0LjQu9C4INCy0YvQstC+0LfQuNC80YvRhSDQs9GA0YPQt9C+0LIuPC9wPmAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICdvYmplY3RfX290aGVyJzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCwg0Lgg0LzRiyDQv9C+0LnQvNC10LwsINC00LvRjyDQutCw0LrQuNGFINC30LDQtNCw0Ycg0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LAsINCx0YPQtNGMINGC0L4g0YLRgNC10LHQvtCy0LDQvdC40Y8g0L/QviDQv9Cw0YHQv9C+0YDRgtGDIFxyXG4gICAgICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0L7QuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fZmxhdCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC+0LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX3RzemgnOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQvtC40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyNsb2NhdGlvbic6IGA8cD7Qn9C+0L3QuNC80LDQvdC40LUg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjRjyDQvtCx0YrQtdC60YLQsCDQv9C+0LfQstC+0LvQuNGCINGB0YDQsNC30YMg0YPRh9C10YHRgtGMINGC0YDQsNC90YHQv9C+0YDRgtC90YvQtSBcclxuICAgICAgICDRgNCw0YHRhdC+0LTRiyDQsiDQutC+0LzQvNC10YDRh9C10YHQutC+0Lwg0L/RgNC10LTQu9C+0LbQtdC90LjQuCwg0YLQtdC8INGB0LDQvNGL0Lwg0L/QvtCy0YvRgdC40LIg0LXQs9C+INGC0L7Rh9C90L7RgdGC0YwuPC9wPmAsXHJcbiAgICAgICAgJyNvYmplY3QnOiBgPHA+0KHRgtC+0LjQvNC+0YHRgtGMINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQt9Cw0LLQuNGB0LjRgiDQtNCw0LvQtdC60L4g0L3QtSDRgtC+0LvRjNC60L4g0L7RgiDQutC+0LvQuNGH0LXRgdGC0LLQsCDQutCw0LzQtdGALiDQlNC70Y8g0LrQsNC20LTQvtCz0L4g0YLQuNC/0LAg0L7QsdGK0LXQutGC0LAg0LXRgdGC0Ywg0YHRgtCw0L3QtNCw0YDRgtC90YvQuSDQvdCw0LHQvtGAINC30LDQtNCw0YcuINCc0Ysg0YHQvNC+0LbQtdC8INCx0L7Qu9C10LUg0YLQvtGH0L3QviDQvtC/0YDQtdC00LXQu9C40YLRjCDRhdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutC4INC4INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsXHJcbiAgICAgICAgINC30L3QsNGPINGC0LjQvyDQstCw0YjQtdCz0L4g0L7QsdGK0LXQutGC0LAuINCSINGA0LXQt9GD0LvRjNGC0LDRgtC1INGA0LDRgdGH0ZHRgiDRgdGC0L7QuNC80L7RgdGC0Lgg0LHRg9C00LXRgiDQvdCw0LjQsdC+0LvQtdC1INGC0L7Rh9C90YvQvC48L3A+YCxcclxuICAgICAgICAnI2FyY2hpZXZlJzpgPHA+0J7RgiDQtNCw0L3QvdC+0LPQviDQv9C+0LrQsNC30LDRgtC10LvRjyDQt9Cw0LLQuNGB0LjRgiDQtdC80LrQvtGB0YLRjCAg0LbQtdGB0YLQutC+0LPQviDQtNC40YHQutCwLCDQvNC+0LTQtdC70Ywg0YDQtdCz0LjRgdGC0YDQsNGC0L7RgNCwLCDRh9GC0L4g0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00Ywg0YHQutCw0LbQtdGC0YzRgdGPINC90LAg0YHRgtC+0LjQvNC+0YHRgtC4INGB0LjRgdGC0LXQvNGLLiBcclxuICAgICAgICDQl9C00YDQsNCy0L4g0L7RhtC10L3QuNGC0LUg0LrQvtC90YDQutGC0L3Rg9GOINC/0L7RgtGA0LXQsdC90L7RgdGC0Ywg0LIg0LrQvtC70LjRh9C10YHRgtCy0LUg0LTQvdC10Lk8L3A+YCxcclxuICAgICAgICAnI2RvcHBlbCc6YFxyXG4gICAgICAgIDxwIGNsYXNzPSdjb21tZW50X19jb250ZW50LXRpdGxlJz7Qo9GB0YLRgNC+0LnRgdGC0LLQviDRgNC10LfQtdGA0LLQvdC+0LPQviDRjdC70LXQutGC0YDQvtC/0LjRgtCw0L3QuNGPPC9wPlxyXG4gICAgICAgIDxwPtCt0YLQviDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0LfQstC+0LvQuNGCIFxyXG4gICAgICAgINGB0L7RhdGA0LDQvdGP0YLRjCDRgNCw0LHQvtGC0L7RgdC/0L7RgdC+0LHQvdC+0YHRgtGMINGB0LjRgdGC0LXQvNGLINC/0YDQuCDQvtGC0LrQu9GO0YfQtdC90LjQtSDRjdC70LXQutGC0YDQvtC/0LjRgtCw0L3QuNGPPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPSdjb21tZW50X19jb250ZW50LXRpdGxlJz7QmNC90YLQtdGA0L3QtdGCINC90LAg0L7QsdGK0LXQutGC0LU8L3A+XHJcbiAgICAgICAgPHA+0JIg0L3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8gINGB0LjRgdGC0LXQvNGLINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQv9C+0LfQstC+0LvRj9GO0YIg0L7RgdGD0YnQtdGB0YLQstC70Y/RgtGMINC60L7QvdGC0YDQvtC70Ywg0LfQsCDQv9GA0L7QuNGB0YXQvtC00Y/RidC40LwgXHJcbiAgICAgICAg0LIg0YDQtdC20LjQvNC1INGA0LXQsNC70YzQvdC+0LPQviDQstGA0LXQvNC10L3QuC4g0KHQu9C10LTQuNGC0Ywg0LfQsCDQvtCx0YHRgtCw0L3QvtCy0LrQvtC5INCyINC30L7QvdC1INCy0LjQtNC40LzQvtGB0YLQuCDQsdC10YHQv9GA0L7QstC+0LTQvdC+0Lkg0LrQsNC80LXRgNGLINC80L7QttC90L4gXHJcbiAgICAgICAg0YEg0L/QvtC80L7RidGM0Y4g0YHQv9C10YbQuNCw0LvRjNC90L7Qs9C+INC/0YDQuNC70L7QttC10L3QuNGPLiDQlNC+0YHRgtGD0L8g0Log0LjQt9C+0LHRgNCw0LbQtdC90LjRjiDQv9GA0L7QstC+0LTQvdGL0YUg0LrQsNC80LXRgCDQsiDQvtC90LvQsNC50L0t0YDQtdC20LjQvNC1INCy0L7Qt9C80L7QttC10L0gXHJcbiAgICAgICAg0YfQtdGA0LXQtyDQuNC90YLQtdGA0L3QtdGCINC/0L7RgdGA0LXQtNGB0YLQstC+0Lwg0LLQuNC00LXQvtGA0LXQs9C40YHRgtGA0LDRgtC+0YDQsC4g0JXRgdC70Lgg0YMg0LLQsNGBINC90LXRgiDQtNC+0YHRgtGD0L/QsCBcclxuICAgICAgICDQsiDQuNC90YLQtdGA0L3QtdGCINC90LAg0L7QsdGK0LXQutGC0LUsINC90L4g0L3Rg9C20LXQvSDRg9C00LDQu9C10L3QvdGL0Lkg0L/RgNC+0YHQvNC+0YLRgCwg0YPQutCw0LbQuNGC0LUg0LTQsNC90L3Ri9C5INC/0YPQvdC60YIuPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPSdjb21tZW50X19jb250ZW50LXRpdGxlJz7Ql9Cw0L/QuNGB0Ywg0LfQstGD0LrQsDwvcD5cclxuICAgICAgICA8cD7QktGB0LUg0LHQtdGB0L/RgNC+0LLQvtC00L3Ri9C1INGB0LjRgdGC0LXQvNGLINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQvtGB0L3QsNGJ0LXQvdGLINCy0YHRgtGA0L7QtdC90L3Ri9C8INC80LjQutGA0L7RhNC+0L3QvtC8INC00LvRjyDQt9Cw0L/QuNGB0Lgg0LfQstGD0LrQsC4gXHJcbiAgICAgICAg0J/RgNC+0LLQvtC00L3Ri9C1INC60LDQvNC10YDRiyDRgtCw0LrQuNC8INGD0YHRgtGA0L7QudGB0YLQstC+0Lwg0L3QtSDRgNCw0YHQv9C+0LvQsNCz0LDRjtGCLCDQvdC+INC4INC00LvRjyDQvdC40YUg0LzQvtC20L3QviDQvtGC0LTQtdC70YzQvdC+INC/0YDQuNC+0LHRgNC10YHRgtC4INC4INGD0YHRgtCw0L3QvtCy0LjRgtGMINC80LjQutGA0L7RhNC+0L0uPC9wPmAsXHJcbiAgICAgICAgJyNob3dmYXN0JzpgPHA+0KHRgNC+0LrQuCDQvdC1INCy0LvQuNGP0Y7RgiDQvdCwINGB0YLQvtC40LzQvtGB0YLRjCDRgdC40YHRgtC10LzRiywg0L3QviDRjdGC0L4g0L/QvtC30LLQsNC70Y/QtdGCINC/0L7QtNC+0LHRgNCw0YLRjCDQvtC/0YLQuNC80LDQu9GM0L3QvtC1INC+0LHQvtGA0YPQtNC+0LLQsNC90LjQtSDQuCDRgdC/0LvQsNC90LjRgNC+0LLQsNGC0Ywg0YDQsNCx0L7RgtGDINC80L7QvdGC0LDQttC90LjQutC+0LIuPC9wPmAsXHJcbiAgICAgICAgJyNzcXVhcmUnOmA8cD7Qo9C60LDQttC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0LLQsNGI0LXQs9C+INC+0LHRitC10LrRgtCwINC00LvQuNC90L3RgyDQuCDRiNC40YDQuNC90YMsINGN0YLQviDQv9C+0LfQstC+0LvQuNGCINC/0YDQtdC00LLQsNGA0LjRgtC10LvRjNC90L4g0YDQsNGB0YfQuNGC0LDRgtGMINC00LvQuNC90YMgXHJcbiAgICAgICAg0LrQsNCx0LXQu9GM0L3Ri9GFINGC0YDQsNGBYyDQuNC70Lgg0YPQutCw0LbQuNGC0LUg0L/RgNC40LzQtdGA0L3Rg9GOINC00LvQuNC90YMgXHJcbiAgICAgICAg0LrQsNCx0LXQu9GPINC+0YIg0LrQsNC80LXRgNGLINC00L4g0L/RgNC10LTQv9C+0LvQsNCz0LDQtdC80L7Qs9C+INC80LXRgdGC0LAg0YPRgdGC0LDQvdC+0LLQutC4INC30LDQv9C40YHRi9Cy0LDRjtGJ0LXQs9C+INGD0YHRgtGA0L7QudGB0YLQstCwLjwvcD5gLFxyXG4gICAgICAgICcjY29tcGxlY3RhdGlvbic6IGA8cD7QrdGC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQu9GPINGC0L7Rh9C90L7Qs9C+INGA0LDRgdGH0LXRgtCwINC/0L7Qu9C90L7Qs9C+INC/0LXRgNC10YfQvdGPINC+0LHQvtGA0YPQtNC+0LLQsNC90LjRjzog0LTQu9GPINGA0LDRgdGH0LXRgtCwINGB0LjRgdGC0LXQvNGLIMKr0L/QvtC0INC60LvRjtGHwrsuPC9wPmBcclxuICAgIH1cclxuICAgIG5lZWRTb3VuZEV2ZW50KCk7XHJcbiAgICBmYXN0TGV2ZWxDaGFuZ2UoKTtcclxuICAgIHJhZGlvQ2hlY2tBY3RpdmUoKTtcclxuICAgIHJhZGlvT25DaGFuZ2UoKTtcclxuICAgIGZ1bmNTbGlkZXJzKCk7XHJcbiAgICBzaG93Q3VycmVudFNwaGVyZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2JqZWN0X19ob3VzZScpKTtcclxuICAgIGFkZE5hdmlnYXRpb25Ub0J1dHRvbnMoKVxyXG4gICAgYWRkRXZlbnRPbkFsbElucHV0cygpO1xyXG4gICAgYWRkU2hvd1BlcmltZXRlcigpO1xyXG4gICAgYWRkU2hvd0hpZGVDb21tZW50RXZlbnQoKTtcclxuICAgIHJlZnJlc2hDb21tZW50KCk7XHJcblxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDQutC+0LzQvNC10L3RgtGLINCyINC80L7QsdC40LvRjNC90L7QuSDQstC10YDRgdC40LhcclxuICAgIGZ1bmN0aW9uIHNob3dIaWRlQ29tbWVudCgpe1xyXG4gICAgICAgIGxldCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xyXG4gICAgICAgIGNvbW1lbnRzLmNsYXNzTGlzdC50b2dnbGUoJ2NvbW1lbnRzX2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICAvLyDQvdCw0LLQtdGB0LjRgtGMINC90LAg0LrQvdC+0L/QutGDINC60L7QvNC80LXQvdGC0LAg0Lgg0LrRgNC10YHRgtC40LpcclxuICAgIGZ1bmN0aW9uIGFkZFNob3dIaWRlQ29tbWVudEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHNob3dDb21tZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9jaXJjbGUnKTtcclxuICAgICAgICBsZXQgY2xvc2VDb21tZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzX19jbG9zZScpO1xyXG4gICAgICAgIHNob3dDb21tZW50QnV0dG9uLm9uY2xpY2sgPSBzaG93SGlkZUNvbW1lbnQ7XHJcbiAgICAgICAgY2xvc2VDb21tZW50QnV0dG9uLm9uY2xpY2sgPSBzaG93SGlkZUNvbW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywg0YLQtdC60YPRidC40Lkg0LrQvtC80LzQtdC90YLQsNGA0LjQuVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaENvbW1lbnQoKXtcclxuICAgICAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1jb250ZW50Jyk7XHJcbiAgICAgICAgbGV0IG9iamVjdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2JqZWN0ICcpO1xyXG4gICAgICAgIGxldCBjdXJyZW50T2JqZWN0ID0gb2JqZWN0UGFnZS5xdWVyeVNlbGVjdG9yKCdpbnB1dDpjaGVja2VkJyk7XHJcbiAgICAgICAgaWYoMCA8IHNjcmVlbkNvdW50ZXIgPCA5KXtcclxuICAgICAgICAgICAgaWYocGFnZXNbc2NyZWVuQ291bnRlcl0gPT0gJyNjYW1lcmFjb3VudCcpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50T2JqZWN0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gY29tbWVudHNbcGFnZXNbc2NyZWVuQ291bnRlcl1dW2N1cnJlbnRPYmplY3QuaWRdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXVsnbm9jaG9zZW4nXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC5pbm5lckhUTUwgPSBjb21tZW50c1twYWdlc1tzY3JlZW5Db3VudGVyXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/RhNGD0L3QutGG0LjQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgIGZ1bmN0aW9uIG5hdmlnYXRpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ2ZvcndhcmQnKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSA4P2hpZGUoY3VycmVudFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTpoaWRlKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlcisrO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNjcmVlbkNvdW50ZXIpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3cobmV4dFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCAnZ3JpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3cobmV4dFBhZ2UsICdncmlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgICAgICBzaG93KG5leHRQYWdlLCAnZmxleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoJ2JhY2snKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSAxP2hpZGUoY3VycmVudFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTpoaWRlKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlci0tO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzY3JlZW5Db3VudGVyID09IDg/c2hvdyhuZXh0UGFnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICdncmlkJyk6c2hvdyhuZXh0UGFnZSwgJ2ZsZXgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMCA8IHNjcmVlbkNvdW50ZXIgPCA5KXtcclxuICAgICAgICAgICAgcmVmcmVzaFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHJlZnJlc2hDb21tZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/QtNC+0LHQsNCy0LvQtdC90LjQtSDQvdCw0LLQuNCz0LDRhtC40Lgg0L3QsCDQutC90L7Qv9C60LhcclxuICAgIGZ1bmN0aW9uIGFkZE5hdmlnYXRpb25Ub0J1dHRvbnMoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZF9fYnV0dG9uJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2ZvcndhcmQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2ZvcndhcmQnKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignZm9yd2FyZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2J1dHRvbl9nZXRPZmZlcicpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdmb3J3YXJkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9iYWNrJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2JhY2snKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19idXR0b25fYmFjaycpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdiYWNrJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbl9iYWNrJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2JhY2snKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uX3NlbmRPZmZlcicpLm9uY2xpY2sgPSAoKSA9PiBhbGVydCgnRm9ybSB3YXMgc2VudCEnKTtcclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjC/RgdC60YDRi9GC0Ywg0Y3Qu9C10LzQtdC90YIg0L/RgNC4INC90LDQstC40LPQsNGG0LjQuFxyXG4gICAgZnVuY3Rpb24gaGlkZShlbGVtKXtcclxuICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3coZWxlbSwgZGlzcFByb3BlcnR5KXtcclxuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwUHJvcGVydHk7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH0gICAgXHJcbiAgICAvL9Ce0LHQvdC+0LLQuNGC0Ywg0LLQvtC/0YDQvtGBXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoUXVlc3Rpb24oKXtcclxuICAgICAgICBsZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcXVlc3Rpb24tdGV4dCcpO1xyXG4gICAgICAgIHF1ZXN0aW9uLnRleHRDb250ZW50ID0gcXVlc3Rpb25zW3NjcmVlbkNvdW50ZXJdO1xyXG4gICAgfVxyXG4gICAgLy/QsdC70L7QutC40YDQvtCy0LrQsC/RgNCw0LfQsdC70L7QutC40YDQvtCy0LrQsCDQutC90L7Qv9C60LhcclxuICAgIGZ1bmN0aW9uIGNoZWNrQnV0dG9uKCl7XHJcbiAgICAgICAgbGV0IGJ1dHRvbkZvcndhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2ZvcndhcmQnKTtcclxuICAgICAgICBpZighY2hlY2tJc0Nob3NlbihzY3JlZW5Db3VudGVyKSl7XHJcbiAgICAgICAgICAgIGJ1dHRvbkZvcndhcmQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBidXR0b25Gb3J3YXJkLmRpc2FibGVkID0gZmFsc2U7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0L/RgNC+0LLQtdGA0LjRgtGMINCy0YvQsdGA0LDQvSDQu9C4INCy0LDRgNC40LDQvdGCINC90LAg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbQtVxyXG4gICAgZnVuY3Rpb24gY2hlY2tJc0Nob3NlbihzY3JlZW5Db3VudGVyKXtcclxuICAgICAgICBsZXQgaXNUcnVlID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgIHN3aXRjaChwYWdlc1tzY3JlZW5Db3VudGVyXSl7XHJcbiAgICAgICAgICAgIGNhc2UgJyNvYmplY3QnOlxyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vYmplY3RfX2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RSYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7aWYocmFkaW8uY2hlY2tlZCkgaXNUcnVlKyt9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgY2FzZSAnI2xvY2F0aW9uJzpcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvblJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2NhdGlvbl9faW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpIGlzVHJ1ZSsrfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2NhbWVyYWNvdW50JzpcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFjb3VudFJhbmdlcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFjb3VudFJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtpZihyYW5nZS52YWx1ZSAhPSAwKSBpc1RydWUrKzt9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjYXJjaGlldmUnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGFyY2hpZXZlUmFkaW9zID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICAgICAgYXJjaGlldmVSYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7aWYocmFkaW8uY2hlY2tlZClpc1RydWUrKzt9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjZG9wcGVsJzpcclxuICAgICAgICAgICAgICAgIGxldCBzb3VuZE5lZWRJbnB1dCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzZXJ2ZU5lZWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZV9uZWVkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJuZXROZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2ludGVybmV0X25lZWQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzb3VuZE5lZWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYoKHNvdW5kTmVlZC5jaGVja2VkIHx8ICFzb3VuZE5lZWQuY2hlY2tlZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAocmVzZXJ2ZU5lZWQuY2hlY2tlZCB8fCAhcmVzZXJ2ZU5lZWQuY2hlY2tlZCkgJiYgKCFzb3VuZE5lZWQuY2hlY2tlZCB8fCBcclxuICAgICAgICAgICAgICAgICAgICAoIXNvdW5kTmVlZC5jaGVja2VkICYmIHNvdW5kTmVlZElucHV0LnZhbHVlICE9IDApKSkgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2hvd2Zhc3QnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RIaWdoID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfaGlnaCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RNaWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9taWRkbGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0TG93ID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfbG93Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdE93biA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X293bicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RPd25GaWVsZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X2FyZWEnKTtcclxuICAgICAgICAgICAgICAgIGlmKGZhc3RIaWdoLmNoZWNrZWQgfHwgZmFzdE1pZC5jaGVja2VkIHx8IGZhc3RMb3cuY2hlY2tlZCB8fCAoZmFzdE93bi5jaGVja2VkICYmIGZhc3RPd25GaWVsZC52YWx1ZSAhPScnKSkgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI3NxdWFyZSc6IFxyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZUlucHV0cyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlUGVyaW1ldGVyID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxYXJlX19wZXJpbWV0cmFsJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlT2JqZWN0TG9uZyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtb2JqZWN0LWxvbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVPYmplY3RXaWR0aCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtb2JqZWN0LXdpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlUGVyaW1ldGVyTG9uZyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtcGVyaW1ldGVyLWxvbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVQZXJpbWV0ZXJXaWR0aCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtcGVyaW1ldGVyLXdpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICBpZihzcXVhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmVfX3BlcmltZXRyYWxfaGlkZGVuJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZU9iamVjdExvbmcudmFsdWUgIT0gMCAmJiBzcXVhcmVPYmplY3RXaWR0aCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIXNxdWFyZVBlcmltZXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlT2JqZWN0TG9uZy52YWx1ZSAhPSAwICYmIHNxdWFyZU9iamVjdFdpZHRoICE9IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZVBlcmltZXRlckxvbmcudmFsdWUgIT0gMCAmJiBzcXVhcmVQZXJpbWV0ZXJXaWR0aC52YWx1ZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2NvbXBsZWN0YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZWN0YXRpb25SYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxlY3RhdGlvbl9faW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGNvbXBsZWN0YXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmFkaW8uY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzVHJ1ZTtcclxuICAgIH1cclxuICAgIC8v0YDQsNC00LjQvtC60L3QvtC/0LrQuCDQktC+0L/RgNC+0YEgMVxyXG4gICAgLy/Qv9GA0L7QstC10YDQutCwINGA0LDQtNC40L7QutC90L7Qv9C+0Log0L3QsCBjaGVja2VkXHJcbiAgICBmdW5jdGlvbiByYWRpb0NoZWNrQWN0aXZlKCl7XHJcbiAgICAgICAgbGV0IHJhZGlvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdyYWRpbyddYCk7XHJcbiAgICAgICAgcmFkaW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0LjQstC10L3RgtCwINC/0L4g0LjQt9C80LXQvdC10L3QuNGOINGA0LDQtNC40L4g0L3QsCAxINGB0YLRgNCw0L3QuNGG0LVcclxuICAgIGZ1bmN0aW9uIHJhZGlvT25DaGFuZ2UoKXtcclxuICAgICAgICBsZXQgb2JqZWN0UmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9iamVjdF9faW5wdXQnKTtcclxuICAgICAgICBvYmplY3RSYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSYWRpbyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByYWRpb0NoZWNrQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0N1cnJlbnRTcGhlcmUoY3VycmVudFJhZGlvKTtcclxuICAgICAgICAgICAgICAgIHNob3dQZXJpbWV0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hDb21tZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjCDQstC+IDIg0LLQvtC/0YDQvtGB0LUg0L3Rg9C20L3Rg9GOINGB0YTQtdGA0YMg0L/RgNC40LzQtdC90LXQvdC40Y8sINGB0LrRgNGL0LIg0L3QtdC90YPQttC90L7QtVxyXG4gICAgZnVuY3Rpb24gc2hvd0N1cnJlbnRTcGhlcmUoaW5wdXQpe1xyXG4gICAgICAgIGxldCBjdXJyZW50U3BoZXJlID0gaW5wdXQuZGF0YXNldC5jaG9pc2U7XHJcbiAgICAgICAgbGV0IGNhbUNvdW50ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbWVyYS1jb3VudF9faXRlbScpO1xyXG4gICAgICAgIGNhbUNvdW50ZXJzLmZvckVhY2goY291bnRlciA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBjdXJyZW50Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYW1lcmEtY291bnRfXyR7Y3VycmVudFNwaGVyZX1gKTtcclxuICAgICAgICBjdXJyZW50Q291bnRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGMINCyIHNxdWFyZSDQv9C10YDQuNC80LXRgtGA0LDQu9C60LgsINC10YHQu9C4INC30L3QsNGH0LXQvdC40LUg0LjRhSDQsiDQutC+0LvQuNGH0LXRgdGC0LLQtSAhPSAwXHJcbiAgICBmdW5jdGlvbiBzaG93UGVyaW1ldGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW1lcmFjb3VudCcpO1xyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJSYW5nZXMgPSBjb3VudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnBlcmltZXRlcicpO1xyXG4gICAgICAgIGxldCBzcWFyZVBlcmltZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcWFyZV9fcGVyaW1ldHJhbCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJIYXMgPSAwO1xyXG4gICAgICAgIHBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgaWYocmFuZ2UudmFsdWUgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBwZXJpbWV0ZXJIYXMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYocGVyaW1ldGVySGFzICE9IDApe1xyXG5cclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgc3FhcmVQZXJpbWV0ZXJSYW5nZXMgPSBzcWFyZVBlcmltZXRlci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBzcWFyZVBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnZhbHVlID0gMFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LmFkZCgnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vINC/0L7QstC10YHQuNGC0Ywg0L3QsCByYW5nZSDQv9C10YDQuNC80LXRgtGA0LDQu9C+0Log0LIgY2FtZXJhY291bnQg0YHQvtCx0YvRgtC40LUgc2hvd1BlcmltZXRlciDQvdCwIGlucHV0XHJcbiAgICBmdW5jdGlvbiBhZGRTaG93UGVyaW1ldGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW1lcmFjb3VudCcpO1xyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJSYW5nZXMgPSBjb3VudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnBlcmltZXRlcicpO1xyXG4gICAgICAgIGxldCBzcWFyZVBlcmltZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcWFyZV9fcGVyaW1ldHJhbCcpO1xyXG4gICAgICAgIHBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBzaG93UGVyaW1ldGVyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/RgdCx0YDQvtGB0LjRgtGMINGB0YfQtdGC0YfQuNC60LhcclxuICAgIGZ1bmN0aW9uIHJlc2V0VmFsdWVzKCl7XHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBINC+INC60L7Qu9C40YfQtdGB0YLQstC1INGB0YfQtdGC0YfQuNC60Lgg0LrQsNC80LXRgCDRg9Cy0LXRgdGC0Lgg0L3QsCAwXHJcbiAgICAgICAgICAgIGxldCBjYW1Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW1lcmEtY291bnQnKTtcclxuICAgICAgICAgICAgbGV0IHJhbmdlc0NhbUNvdW50ID0gY2FtQ291bnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19zbGlkZXInKTtcclxuICAgICAgICAgICAgcmFuZ2VzQ2FtQ291bnQuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByYW5nZS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy/QvtCx0YrQtdC60YIgLSDRgdCx0YDQvtGBINGA0LDQtNC40L5cclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblJhZGlvcyA9IGxvY2F0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgbG9jYXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldFJhZGlvKHJhZGlvKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEg0L7QsSDQsNGA0YXQuNCy0LUg0YHQsdGA0L7RgdC40YLRjCByYWRpbyBcclxuICAgICAgICAgICAgbGV0IGFyY2hpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJjaGlldmUnKTtcclxuICAgICAgICAgICAgbGV0IHJhZGlvc0FyY2hpZXZlID0gYXJjaGl2ZS5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvJyk7XHJcbiAgICAgICAgICAgIHJhZGlvc0FyY2hpZXZlLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRSYWRpbyhyYWRpbyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBINC00L7QvyDQvtC/0YbQuNC4INGB0LHRgNC+0YHQuNGC0Ywg0YfQtdC60LHQvtC60YHRiyDQuCByYW5nZSDRgdCx0YDQvtGB0LjRgtGMINC4INGB0LrRgNGL0YLRjFxyXG4gICAgICAgICAgICBsZXQgZG9wcGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvcHBlbCcpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tib3hlc0RvcHBlbCA9IGRvcHBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWNoZWNrJyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNEb3BwZWwuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldENoZWNrQm94KGNoZWNrYm94KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IHJhbmdlRG9wcGVsID0gZG9wcGVsLnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgICAgIHJhbmdlRG9wcGVsLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlRG9wcGVsKTtcclxuICAgICAgICAgICAgY2hlY2tOZWVkU291bmQoKTtcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEgaG93RmFzdCDRgdCx0YDQvtGB0LjRgtGMINGA0LDQtNC40L5cclxuICAgICAgICAgICAgbGV0IGZhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzdCcpO1xyXG4gICAgICAgICAgICBsZXQgcmFkaW9zRmFzdCA9IGZhc3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICByYWRpb3NGYXN0LmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRSYWRpbyhyYWRpbyk7XHJcbiAgICAgICAgICAgICAgICBoYXNPd25BbnN3ZXIoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEgc3F1YXJlINGB0LHRgNC+0YHQuNGC0YwgcmFuZ2VcclxuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUnKTtcclxuICAgICAgICAgICAgbGV0IHNxdWFyZVJhbmdlcyA9IHNxdWFyZS5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2Utc2xpZGVyJyk7XHJcbiAgICAgICAgICAgIHNxdWFyZVJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHJhbmdlLnZhbHVlID0gMCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9C00L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0L3QsCDRgdC70LDQudC00LXRgFxyXG4gICAgZnVuY3Rpb24gZnVuY1NsaWRlcnMoKXtcclxuICAgICAgICBsZXQgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgc2xpZGVycy5mb3JFYWNoKHNsaWRlciA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUmFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvbigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v0YHQsdGA0L7RgSDRgNCw0LTQuNC+XHJcbiAgICBmdW5jdGlvbiByZXNldFJhZGlvKGVsZW0pe1xyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy9yZXNldCBjaGVja2JveFxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGVja0JveChlbGVtKXtcclxuICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8v0L7QsdC90L7QstC40YLRjCDQv9C+0LvQt9GD0L3QvtC6XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoUmFuZ2UoY3VycmVudCl7XHJcbiAgICAgICAgY3VycmVudC5uZXh0U2libGluZy5pbm5lckhUTUwgPSBjdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGxldCBwZXJjZW50VmFsdWUgPSAoY3VycmVudC52YWx1ZS9jdXJyZW50Lm1heCkqMTAwO1xyXG4gICAgICAgIGxldCBjb2xvciA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMyw4MSwxNDUsMSkgJHtwZXJjZW50VmFsdWV9JSwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE3OCkgJHtwZXJjZW50VmFsdWV9JSlgXHJcbiAgICAgICAgY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICAvL9CS0L7Qv9GA0L7RgSA0INC90YPQttC10L0g0LfQstGD0LpcclxuICAgIGZ1bmN0aW9uIG5lZWRTb3VuZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHJlY29yZENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICByZWNvcmRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja05lZWRTb3VuZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoZWNrTmVlZFNvdW5kKCl7XHJcbiAgICAgICAgbGV0IHJlY29yZENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICBsZXQgdG9nZ2xlUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9wcGVsX19zb3VuZHJlY29yZCcpO1xyXG4gICAgICAgIGxldCBzb3VuZE5lZWRSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgaWYocmVjb3JkQ2hlY2tib3guY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHRvZ2dsZVJhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2RvcHBlbF9fc291bmRyZWNvcmRfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZ2dsZVJhbmdlLmNsYXNzTGlzdC5hZGQoJ2RvcHBlbF9fc291bmRyZWNvcmRfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHNvdW5kTmVlZFJhbmdlLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHNvdW5kTmVlZFJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9CS0L7Qv9GA0L7RgTUg0YHQstC+0Lkg0LLQsNGA0LjQsNC90YIg0L7RgtCy0LXRgtCwXHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDQuNGC0Ywg0YfQtdC6INGDINGA0LDQtNC40L4g0YHQstC+0Lkg0LLQsNGA0LjQsNC90YIsINC10YHQu9C4INC00LAsINGC0L4g0YPQtNCw0LvQuNGC0Ywg0LrQu9Cw0YHRgSDRgdC60YDRi9GC0LjRjywg0LXRgdC70Lgg0L3QtdGCIC0g0LTQvtCx0LDQstC40YLRjFxyXG4gICAgZnVuY3Rpb24gaGFzT3duQW5zd2VyKCl7XHJcbiAgICAgICAgbGV0IG93bkFuc3dlckFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzdF9fb3duYW5zd2VyJyk7XHJcbiAgICAgICAgbGV0IGhhc093biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X293bicpO1xyXG4gICAgICAgIGlmKGhhc093bi5jaGVja2VkKXtcclxuICAgICAgICAgICAgb3duQW5zd2VyQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdmYXN0X19vd25hbnN3ZXJfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIG93bkFuc3dlckFyZWEuY2xhc3NMaXN0LmFkZCgnZmFzdF9fb3duYW5zd2VyX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0L3QsNCy0LXRgdC40YLRjCDRjdGC0YMg0YTRg9C90LrRhtC40Y4g0L3QsCDQuNC30LzQtdC90LXQvdC40LUg0LLRgdC10YUg0Ycv0LEg0LIg0LPRgNGD0L/Qv9C1XHJcbiAgICBmdW5jdGlvbiBmYXN0TGV2ZWxDaGFuZ2UoKXtcclxuICAgICAgICBsZXQgcmFkaW9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5mYXN0X19pbnB1dGApO1xyXG4gICAgICAgIHJhZGlvSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYXNPd25BbnN3ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy/QvtCx0YnQuNC5INC40LLQtdC90YIg0L3QsCDQstGB0LUg0LjQvdC/0YPRgtGLINCy0L7Qv9GA0L7RgdC+0LIgY2hlY2tCdXR0b24oKSAtINC/0YDQvtCy0LXRgNC40YLRjCwgXHJcbiAgICAvL9C10YHRgtGMINC70Lgg0LLRi9Cx0YDQsNC90L3Ri9C1INC4INCy0LLQtdC00LXQvdC90YvQtSDQt9C90LDRh9C10L3QuNGPINC4INC10YHQu9C4INC10YHRgtGMLFxyXG4gICAgLy/QuCDQtdGB0LvQuCDQtdGB0YLRjCAtINGA0LDQt9Cx0LvQvtC60LjRgNC+0LLQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICAvL9C40YnQtdC8INGH0LXRgNC10Lcg0YDQvtC00LjRgtC10LvRjyAucXVpel9fcXVlc3Rpb24tYm9keSwg0YfRgtC+0LEg0L3QtSDQt9Cw0YbQtdC/0LjRgtGMINGB0YLRgNCw0L3QuNGG0YMg0YEg0YTQvtGA0LzQvtC5XHJcbiAgICBmdW5jdGlvbiBhZGRFdmVudE9uQWxsSW5wdXRzKCl7XHJcbiAgICAgICAgbGV0IHF1aXpCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX3F1ZXN0aW9uLWJvZHkgJyk7XHJcbiAgICAgICAgbGV0IGFsbFJhZGlvcyA9IHF1aXpCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4gICAgICAgIGFsbFJhZGlvcy5mb3JFYWNoKGl0ZW0gPT4ge2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tCdXR0b24oKSl9KTtcclxuICAgICAgICBsZXQgYWxsUmFuZ2VzID0gcXVpekJvZHkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJyk7XHJcbiAgICAgICAgYWxsUmFuZ2VzLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGNoZWNrQnV0dG9uKCkpfSk7XHJcbiAgICAgICAgbGV0IGFsbENoZWNrYm94ZXMgPSBxdWl6Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuICAgICAgICBhbGxDaGVja2JveGVzLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjaGVja0J1dHRvbigpKX0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiJdLCJmaWxlIjoiaW5kZXguanMifQ==
