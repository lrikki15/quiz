"use strict";

window.onload = function () {
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
            безопасности или решение спорных и конфликтных ситуаций</p>`,
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
    let commentDesktop = document.querySelector('.quiz__comment-body');
    let objectPage = document.querySelector('#object');
    let currentObject = objectPage.querySelector('input:checked');
    toggleHideClass(commentDesktop);

    if (0 < screenCounter < 9) {
      if (pages[screenCounter] == '#cameracount') {
        if (currentObject != null) {
          comment.innerHTML = comments[pages[screenCounter]][currentObject.id];
          commentDesktop.innerHTML = comments[pages[screenCounter]][currentObject.id];
        } else {
          comment.innerHTML = comments[pages[screenCounter]]['nochosen'];
          commentDesktop.innerHTML = comments[pages[screenCounter]]['nochosen'];
        }
      } else {
        comment.innerHTML = comments[pages[screenCounter]];
        commentDesktop.innerHTML = comments[pages[screenCounter]];
      }
    }

    setTimeout(toggleHideClass(commentDesktop), 3000);
  } //скрыть и показать элемент


  function toggleHideClass(elem) {
    elem.classList.toggle('hide');
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

    document.querySelector('.form__button_back').onclick = () => navigation('back'); // document.querySelector('.form__button_sendOffer').onclick = () => alert('Form was sent!');

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
  } //валидация формы   


  const form = document.querySelector('.form__form');
  form.addEventListener("submit", formSend);

  async function formSend(event) {
    event.preventDefault();
    let validError = formValidate(form);

    if (validError) {
      alert('Некорректное заполнение полей: пожалуйста, проверьте корректность данных');
    } else {
      let formData = new FormData(form);
      formData.append('result', JSON.stringify({
        'inner': "3",
        'object': 'house',
        'test': 'test'
      }));
      let response = await fetch('../core.php', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
      } else {
        alert("Ошибка HTTP: " + response.status);
      }
    }
  }

  function formValidate(form) {
    let error = 0;
    let formValidFields = document.querySelectorAll('._valid');
    formValidFields.forEach(field => {
      formRemoveError(field);

      switch (field.type) {
        case 'text':
          if (field.value == '') {
            formAddError(field);
            error++;
          }

          ;
          break;

        case 'tel':
          if (phoneTest(field)) {
            formAddError(field);
            error++;
          }

          ;
          break;

        case 'email':
          if (emailTest(field)) {
            formAddError(field);
            error++;
          }

          break;

        case 'checkbox':
          if (!field.checked) {
            formAddError(field);
            error++;
          }

          break;
      }
    });
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_err');
    input.classList.add('_err');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_err');
    input.classList.remove('_err');
  } //+79261234567


  function phoneTest(input) {
    return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
  }
  /*// Проверка телефона на соответствие виду:
  // 89261234567
  // 79261234567
  // +7 926 123 45 67
  // 8(926)123-45-67
  // 123-45-67
  // 9261234567
  // 79261234567
  // (495)1234567
  // (495) 123 45 67
  // 89261234567
  // 8-926-123-45-67
  // 8 927 1234 234
  // 8 927 12 12 888
  // 8 927 12 555 12
  // 8 927 123 8 123*/


  function emailTest(input) {
    return !/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/.test(input.value);
  } // return !/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/.test(input.value);

};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNjcmVlbkNvdW50ZXIiLCJwYWdlcyIsInF1ZXN0aW9ucyIsImNvbW1lbnRzIiwibmVlZFNvdW5kRXZlbnQiLCJmYXN0TGV2ZWxDaGFuZ2UiLCJyYWRpb0NoZWNrQWN0aXZlIiwicmFkaW9PbkNoYW5nZSIsImZ1bmNTbGlkZXJzIiwic2hvd0N1cnJlbnRTcGhlcmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGROYXZpZ2F0aW9uVG9CdXR0b25zIiwiYWRkRXZlbnRPbkFsbElucHV0cyIsImFkZFNob3dQZXJpbWV0ZXIiLCJhZGRTaG93SGlkZUNvbW1lbnRFdmVudCIsInJlZnJlc2hDb21tZW50Iiwic2hvd0hpZGVDb21tZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2hvd0NvbW1lbnRCdXR0b24iLCJjbG9zZUNvbW1lbnRCdXR0b24iLCJvbmNsaWNrIiwiY29tbWVudCIsImNvbW1lbnREZXNrdG9wIiwib2JqZWN0UGFnZSIsImN1cnJlbnRPYmplY3QiLCJ0b2dnbGVIaWRlQ2xhc3MiLCJpbm5lckhUTUwiLCJpZCIsInNldFRpbWVvdXQiLCJlbGVtIiwibmF2aWdhdGlvbiIsImRpcmVjdGlvbiIsImN1cnJlbnRQYWdlIiwiaGlkZSIsInBhcmVudEVsZW1lbnQiLCJuZXh0UGFnZSIsInNob3ciLCJyZWZyZXNoUXVlc3Rpb24iLCJjaGVja0J1dHRvbiIsInN0eWxlIiwib3BhY2l0eSIsImRpc3BsYXkiLCJkaXNwUHJvcGVydHkiLCJxdWVzdGlvbiIsInRleHRDb250ZW50IiwiYnV0dG9uRm9yd2FyZCIsImNoZWNrSXNDaG9zZW4iLCJkaXNhYmxlZCIsImlzVHJ1ZSIsIm9iamVjdFJhZGlvcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmFkaW8iLCJjaGVja2VkIiwibG9jYXRpb25SYWRpb3MiLCJjYW1lcmFjb3VudFJhbmdlcyIsInJhbmdlIiwidmFsdWUiLCJhcmNoaWV2ZVJhZGlvcyIsInNvdW5kTmVlZElucHV0IiwicmVzZXJ2ZU5lZWQiLCJpbnRlcm5ldE5lZWQiLCJzb3VuZE5lZWQiLCJmYXN0SGlnaCIsImZhc3RNaWQiLCJmYXN0TG93IiwiZmFzdE93biIsImZhc3RPd25GaWVsZCIsInNxdWFyZUlucHV0cyIsInNxdWFyZVBlcmltZXRlciIsInNxdWFyZU9iamVjdExvbmciLCJzcXVhcmVPYmplY3RXaWR0aCIsInNxdWFyZVBlcmltZXRlckxvbmciLCJzcXVhcmVQZXJpbWV0ZXJXaWR0aCIsImNvbnRhaW5zIiwiY29tcGxlY3RhdGlvblJhZGlvcyIsInJhZGlvSXRlbXMiLCJpdGVtIiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1cnJlbnRSYWRpbyIsInJlc2V0VmFsdWVzIiwic2hvd1BlcmltZXRlciIsImlucHV0IiwiY3VycmVudFNwaGVyZSIsImRhdGFzZXQiLCJjaG9pc2UiLCJjYW1Db3VudGVycyIsImNvdW50ZXIiLCJjdXJyZW50Q291bnRlciIsImNvdW50UGFnZSIsInBlcmltZXRlclJhbmdlcyIsInNxYXJlUGVyaW1ldGVyIiwicGVyaW1ldGVySGFzIiwic3FhcmVQZXJpbWV0ZXJSYW5nZXMiLCJyZWZyZXNoUmFuZ2UiLCJjYW1Db3VudCIsInJhbmdlc0NhbUNvdW50IiwibG9jYXRpb24iLCJyZXNldFJhZGlvIiwiYXJjaGl2ZSIsInJhZGlvc0FyY2hpZXZlIiwiZG9wcGVsIiwiY2hlY2tib3hlc0RvcHBlbCIsImNoZWNrYm94IiwicmVzZXRDaGVja0JveCIsInJhbmdlRG9wcGVsIiwiY2hlY2tOZWVkU291bmQiLCJmYXN0IiwicmFkaW9zRmFzdCIsImhhc093bkFuc3dlciIsInNxdWFyZSIsInNxdWFyZVJhbmdlcyIsInNsaWRlcnMiLCJzbGlkZXIiLCJjdXJyZW50IiwibmV4dFNpYmxpbmciLCJwZXJjZW50VmFsdWUiLCJtYXgiLCJjb2xvciIsImJhY2tncm91bmQiLCJyZWNvcmRDaGVja2JveCIsInRvZ2dsZVJhbmdlIiwic291bmROZWVkUmFuZ2UiLCJvd25BbnN3ZXJBcmVhIiwiaGFzT3duIiwicXVpekJvZHkiLCJhbGxSYWRpb3MiLCJhbGxSYW5nZXMiLCJhbGxDaGVja2JveGVzIiwiZm9ybSIsImZvcm1TZW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkRXJyb3IiLCJmb3JtVmFsaWRhdGUiLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJvayIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImZvcm1WYWxpZEZpZWxkcyIsImZpZWxkIiwiZm9ybVJlbW92ZUVycm9yIiwidHlwZSIsImZvcm1BZGRFcnJvciIsInBob25lVGVzdCIsImVtYWlsVGVzdCIsInRlc3QiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFVO0FBQ3RCLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLFFBQU1DLEtBQUssR0FBRyxDQUNWLGdCQURVLEVBRVYsU0FGVSxFQUdWLFdBSFUsRUFJVixjQUpVLEVBS1YsV0FMVSxFQU1WLFNBTlUsRUFPVixVQVBVLEVBUVYsU0FSVSxFQVNWLGdCQVRVLEVBVVYsZUFWVSxFQVdWLGFBWFUsQ0FBZDtBQWFBLFFBQU1DLFNBQVMsR0FBRyxDQUNkLEVBRGMsRUFFZCw0REFGYyxFQUdkLHVCQUhjLEVBSWQseUNBSmMsRUFLZCx3QkFMYyxFQU1kLHFEQU5jLEVBT2QsK0JBUGMsRUFRZCwyQkFSYyxFQVNkLHlEQVRjLENBQWxCO0FBV0EsUUFBTUMsUUFBUSxHQUFHO0FBQ2Isb0JBQWdCO0FBQ1osa0JBQVksaUJBREE7QUFHWix1QkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQVR3QjtBQVdaLHdCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQWhCd0I7QUFrQlosc0JBQWdCO0FBQzVCO0FBQ0E7QUFDQSx3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QUFSO0FBQ0gsR0Fya0JxQixDQXNrQnRCOztBQUVILENBeGtCRCIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHNjcmVlbkNvdW50ZXIgPSAwO1xyXG4gICAgY29uc3QgcGFnZXMgPSBbXHJcbiAgICAgICAgJyNxdWl6X19wcmVsb2FkJyxcclxuICAgICAgICAnI29iamVjdCcsXHJcbiAgICAgICAgJyNsb2NhdGlvbicsXHJcbiAgICAgICAgJyNjYW1lcmFjb3VudCcsXHJcbiAgICAgICAgJyNhcmNoaWV2ZScsXHJcbiAgICAgICAgJyNkb3BwZWwnLFxyXG4gICAgICAgICcjaG93ZmFzdCcsXHJcbiAgICAgICAgJyNzcXVhcmUnLFxyXG4gICAgICAgICcjY29tcGxlY3RhdGlvbicsXHJcbiAgICAgICAgJyNxdWl6X19yZXN1bHQnLFxyXG4gICAgICAgICcjcXVpel9fZm9ybSdcclxuICAgIF07XHJcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBbXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJ9CU0LvRjyDQutCw0LrQvtCz0L4g0L7QsdGK0LXQutGC0LAg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNCwINGB0LjRgdGC0LXQvNCwINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjz8nLFxyXG4gICAgICAgICfQk9C00LUg0L3QsNGF0L7QtNC40YLRgdGPINC+0LHRitC10LrRgj8nLFxyXG4gICAgICAgICfQodC60L7Qu9GM0LrQviDQutCw0LzQtdGAINCS0Ysg0L/Qu9Cw0L3QuNGA0YPQtdGC0LUg0YPRgdGC0LDQvdC+0LLQuNGC0Yw/JyxcclxuICAgICAgICAn0JLRgNC10LzRjyDRhdGA0LDQvdC10L3QuNGPINCw0YDRhdC40LLQsDonLFxyXG4gICAgICAgICfQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC/0L7QttC10LvQsNC90LjRjyDQuiDRgdC40YHRgtC10LzQtSDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y86JyxcclxuICAgICAgICAn0JrQsNC6INGB0YDQvtGH0L3QviDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsD8nLFxyXG4gICAgICAgICfQn9GA0LjQvNC10YDQvdCw0Y8g0L/Qu9C+0YnQsNC00Ywg0L7QsdGK0LXQutGC0LAnLFxyXG4gICAgICAgICfQktCw0Lwg0L3Rg9C20LXQvSDQs9C+0YLQvtCy0YvQuSDQutC+0LzQv9C70LXQutGCINC40LvQuCDQvNC+0L3RgtCw0LYg0YHQuNGB0YLQtdC80Ysg0L/QvtC0INC60LvRjtGHPydcclxuICAgIF07XHJcbiAgICBjb25zdCBjb21tZW50cyA9IHtcclxuICAgICAgICAnI2NhbWVyYWNvdW50Jzoge1xyXG4gICAgICAgICAgICAnbm9jaG9zZW4nOiAn0JLRi9Cx0LXRgNC40YLQtSDQvtCx0YrQtdC60YInLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9faG91c2UnOiBgPHA+0JLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1INC00LvRjyDQt9Cw0LPQvtGA0L7QtNC90L7Qs9C+INC00L7QvNCwLCDQtNCw0YfQuCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90L4g0L/RgNC+0LLQvtC00L3Ri9C80Lgg0LggXHJcbiAgICAgICAgICAgINCx0LXRgdC/0YDQvtCy0L7QtNC90YvQvNC4INC60LDQvNC10YDQsNC80Lgg0YEg0YPQs9C70L7QvCDQvtCx0LfQvtGA0LAg0LTQviAxMDLCsCDQsCwg0YLQsNC6INC20LUg0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQvtC5ICBcclxuICAgICAgICAgICAg0YEg0LjQuiDQv9C+0LTRgdCy0LXRgtC60L7QuSDQvtGCIDEwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCi0LDQuiwg0LTQu9GPINC60L7QvdGC0YDQvtC70Y8g0L3QtdCx0L7Qu9GM0YjQvtCz0L4g0LTQstC+0YDQsCDQv9C+0LTQvtC50LTQtdGCIFxyXG4gICAgICAgICAgICDQv9GA0L7QstC+0LTQvdCw0Y8g0LrQsNC80LXRgNCwINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDRgSDQtNCw0LvRjNC90L7RgdGC0YzRjiDQvdC+0YfQvdC+0Lkg0YHRitC10LzQutC4IDIwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCd0LXRgdC60L7Qu9GM0LrQviDQutGD0L/QvtC70YzQvdGL0YUgV2ktRmkt0LLQuNC00LXQvtC60LDQvNC10YAgXHJcbiAgICAgICAgICAgINGBINGA0LDQt9GA0LXRiNC10L3QuNC10LwgMTA4MHAg0Lgg0L3QvtGH0L3Ri9C8INCy0LjQtNC10L3QuNC10Lwg0LTQviAzMCDQvNC10YLRgNC+0LIg0YHQvNC+0LPRg9GCINGB0LvQtdC00LjRgtGMINC30LAg0LHQvtC70YzRiNC+0Lkg0YLQtdGA0YDQuNGC0L7RgNC40LXQuS48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX2ZvbGRlcic6YDxwPtCU0LvRjyDRgdC60LvQsNC00YHQutC+0LPQviDQv9C+0LzQtdGJ0LXQvdC40Y8g0L/QvtC00L7QudC00YPRgiDQstC40LTQtdC+0LrQsNC80LXRgNGLINGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC+0YIgODUg0LTQviAxMTLCsCBcclxuICAgICAgICAgICAg0Lgg0L3QvtGH0L3Ri9C8INCy0LjQtNC10L3QuNC10LwgMjDigJQzMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QlNC70Y8g0YHQu9C10LbQtdC90LjRjyDQt9CwINC90LXRgdC60L7Qu9GM0LrQuNC80Lgg0YHQutC70LDQtNCw0LzQuCDQuNC70Lgg0L7QtNC90L7QuSDQsdC+0LvRjNGI0L7QuSDQv9C70L7RidCw0LTQutC+0Lkg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgNCDQv9GA0L7QstC+0LTQvdGL0LUg0LrQsNC80LXRgNGLLCBcclxuICAgICAgICAgICAg0L7QsdC10YHQv9C10YfQuNCy0LDRjtGJ0LjQtSDRgNCw0LfRgNC10YjQtdC90LjQtSAxMDgwcCDQuCDQvdC+0YfQvdGD0Y4g0YHRitC10LzQutGDINC00L4gMjAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0JLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1INC30LAg0L3QtdCx0L7Qu9GM0YjQuNC8INGB0LrQu9Cw0LTQvtC8INC80L7QttC10YIg0L7RgdGD0YnQtdGB0YLQstC70Y/RgtGMINC+0LTQvdCwIFxyXG4gICAgICAgICAgICDRhtC40LvQuNC90LTRgNC40YfQtdGB0LrQsNGPINCx0LXRgdC/0YDQvtCy0L7QtNC90LDRjyDQutCw0LzQtdGA0LAg0YEg0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQvtC5INC00L4gMzAg0LzQtdGC0YDQvtCyLjwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fc2hvcCc6YDxwPtCU0LvRjyDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0LIg0LzQsNCz0LDQt9C40L3QtSDQuNGB0L/QvtC70YzQt9GD0Y7RgtGB0Y8g0LrQsNC80LXRgNGLIFxyXG4gICAgICAgICAgICDRgSDQtNCw0LvRjNC90L7RgdGC0YzRjiDQvdC+0YfQvdC+0LPQviDQstC40LTQtdC90LjRjyAxMOKAlDMwINC80LXRgtGA0L7QsiDQuCDRg9Cz0LvQvtC8INC+0LHQt9C+0YDQsCA5MuKAlDExMsKwLjwvcD5cclxuICAgICAgICAgICAgPHA+0JTQu9GPINGB0LvQtdC20LXQvdC40Y8g0LfQsCDRgtC+0YDQs9C+0LLRi9C8INC30LDQu9C+0Lwg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgMiDQuNC70LggMyDQv9C+0LLQvtGA0L7RgtC90YvQtSBXaS1GaS3QstC40LTQtdC+0LrQsNC80LXRgNGLLjwvcD5cclxuICAgICAgICAgICAgPHA+0JIg0LrQsNGB0YHQvtCy0L7QuSDQt9C+0L3QtSDRhtC10LvQtdGB0L7QvtCx0YDQsNC30L3QviDRg9GB0YLQsNC90L7QstC40YLRjCDQv9GA0L7QstC+0LTQvdC+0LUg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1INGBINC40LfQvtCx0YDQsNC20LXQvdC40LXQvCDQsiBGdWxsSEQt0LrQsNGH0LXRgdGC0LLQtS48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX3NjaG9vbCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC70LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuICAgICAgICBcclxuICAgICAgICAgICAgJ29iamVjdF9fb2ZmaWNlJzpgPHA+0J/RgNC+0LLQvtC00L3Ri9C1INGD0YHRgtGA0L7QudGB0YLQstCwINC00LvRjyDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0LfQsCDQvtGE0LjRgdC+0LwgXHJcbiAgICAgICAgICAgINC/0YDQtdC00YHRgtCw0LLQu9C10L3RiyDQutCw0LzQtdGA0LDQvNC4INGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC+0YIgOTIg0LTQviAxMDPCsCDQuCDQvdC+0YfQvdC+0Lkg0YHRitC10LzQutC+0LkgMjAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0JHQtdGB0L/RgNC+0LLQvtC00L3QsNGPINCy0LjQtNC10L7RgdC40YHRgtC10LzQsCDQstC60LvRjtGH0LDQtdGCINC80L7QtNC10LvQuCDRgSDQvtCx0LfQvtGA0L7QvCDQvdCwIDEwNuKAlDExMsKwINC4INC00LDQu9GM0L3QvtGB0YLRjNGOINC90L7Rh9C90L7Qs9C+INCy0LjQtNC10L3QuNGPIDEw4oCUMzAg0LzQtdGC0YDQvtCyLjwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fY29uc3RydWN0JzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC7LdCy0L4g0LrQsNC80LXRgCDQv9C+INC00LDQvdC90YvQvCDQutGA0LjRgtC10YDQuNGP0Lwg0Lgg0L/QvtC00LHQtdGA0LXQvCDQtNC70Y8g0LLQsNGBINC+0L/RgtC40LzQsNC70YzQvdC+0LUg0YDQtdGI0LXQvdC40LUuIFxyXG4gICAgICAgICAgICDQndCwINGB0YLRgNC+0LjRgtC10LvRjNC90L7QvCDQvtCx0YrQtdC60YLQtSDQutCw0Log0L/RgNCw0LLQuNC70L4g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINC60LDQvNC10YDQsCDQtNC70Y8g0LzQvtC90LjRgtC+0YDQuNC90LPQsCDQv9GA0L7RhtC10YHRgdCwINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwINGBICDQvtC90LvQsNC50L0g0YLRgNCw0L3RgdC70Y/RhtC40LXQuSDQsiDQvtGE0LjRgSDQt9Cw0YHRgtGA0L7QudGJ0LjQutCwINC40LvQuCDQvdCwINGB0LDQudGCINC60L7QvNC/0LDQvdC40LguIFxyXG4gICAgICAgICAgICDQmtCw0LzQtdGA0LAg0L3QsCDQstGK0LXQt9C0INC4INCy0YvQtdC30LQg0YLQtdGF0L3QuNC60Lgg0L3QsCDQvtCx0YrQtdC60YIg0LTQu9GPINC80L7QvdC40YLQvtGA0LjQvdCz0LAg0LLQstC+0LfQuNC80YvRhSDQuNC70Lgg0LLRi9Cy0L7Qt9C40LzRi9GFINCz0YDRg9C30L7Qsi48L3A+YCxcclxuICAgICAgICBcclxuICAgICAgICAgICAgJ29iamVjdF9fb3RoZXInOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQvtC40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19mbGF0JzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCwg0Lgg0LzRiyDQv9C+0LnQvNC10LwsINC00LvRjyDQutCw0LrQuNGFINC30LDQtNCw0Ycg0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LAsINCx0YPQtNGMINGC0L4g0YLRgNC10LHQvtCy0LDQvdC40Y8g0L/QviDQv9Cw0YHQv9C+0YDRgtGDIFxyXG4gICAgICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0L7QuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fdHN6aCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC+0LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnI2xvY2F0aW9uJzogYDxwPtCf0L7QvdC40LzQsNC90LjQtSDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNGPINC+0LHRitC10LrRgtCwINC/0L7Qt9Cy0L7Qu9C40YIg0YHRgNCw0LfRgyDRg9GH0LXRgdGC0Ywg0YLRgNCw0L3RgdC/0L7RgNGC0L3Ri9C1IFxyXG4gICAgICAgINGA0LDRgdGF0L7QtNGLINCyINC60L7QvNC80LXRgNGH0LXRgdC60L7QvCDQv9GA0LXQtNC70L7QttC10L3QuNC4LCDRgtC10Lwg0YHQsNC80YvQvCDQv9C+0LLRi9GB0LjQsiDQtdCz0L4g0YLQvtGH0L3QvtGB0YLRjC48L3A+YCxcclxuICAgICAgICAnI29iamVjdCc6IGA8cD7QodGC0L7QuNC80L7RgdGC0Ywg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC30LDQstC40YHQuNGCINC00LDQu9C10LrQviDQvdC1INGC0L7Qu9GM0LrQviDQvtGCINC60L7Qu9C40YfQtdGB0YLQstCwINC60LDQvNC10YAuINCU0LvRjyDQutCw0LbQtNC+0LPQviDRgtC40L/QsCDQvtCx0YrQtdC60YLQsCDQtdGB0YLRjCDRgdGC0LDQvdC00LDRgNGC0L3Ri9C5INC90LDQsdC+0YAg0LfQsNC00LDRhy4g0JzRiyDRgdC80L7QttC10Lwg0LHQvtC70LXQtSDRgtC+0YfQvdC+INC+0L/RgNC10LTQtdC70LjRgtGMINGF0LDRgNCw0LrRgtC10YDQuNGB0YLQuNC60Lgg0Lgg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCxcclxuICAgICAgICAg0LfQvdCw0Y8g0YLQuNC/INCy0LDRiNC10LPQviDQvtCx0YrQtdC60YLQsC4g0JIg0YDQtdC30YPQu9GM0YLQsNGC0LUg0YDQsNGB0YfRkdGCINGB0YLQvtC40LzQvtGB0YLQuCDQsdGD0LTQtdGCINC90LDQuNCx0L7Qu9C10LUg0YLQvtGH0L3Ri9C8LjwvcD5gLFxyXG4gICAgICAgICcjYXJjaGlldmUnOmA8cD7QntGCINC00LDQvdC90L7Qs9C+INC/0L7QutCw0LfQsNGC0LXQu9GPINC30LDQstC40YHQuNGCINC10LzQutC+0YHRgtGMICDQttC10YHRgtC60L7Qs9C+INC00LjRgdC60LAsINC80L7QtNC10LvRjCDRgNC10LPQuNGB0YLRgNCw0YLQvtGA0LAsINGH0YLQviDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCDRgdC60LDQttC10YLRjNGB0Y8g0L3QsCDRgdGC0L7QuNC80L7RgdGC0Lgg0YHQuNGB0YLQtdC80YsuIFxyXG4gICAgICAgINCX0LTRgNCw0LLQviDQvtGG0LXQvdC40YLQtSDQutC+0L3RgNC60YLQvdGD0Y4g0L/QvtGC0YDQtdCx0L3QvtGB0YLRjCDQsiDQutC+0LvQuNGH0LXRgdGC0LLQtSDQtNC90LXQuTwvcD5gLFxyXG4gICAgICAgICcjZG9wcGVsJzpgXHJcbiAgICAgICAgPHAgY2xhc3M9J2NvbW1lbnRfX2NvbnRlbnQtdGl0bGUnPtCj0YHRgtGA0L7QudGB0YLQstC+INGA0LXQt9C10YDQstC90L7Qs9C+INGN0LvQtdC60YLRgNC+0L/QuNGC0LDQvdC40Y88L3A+XHJcbiAgICAgICAgPHA+0K3RgtC+INGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7Qt9Cy0L7Qu9C40YIgXHJcbiAgICAgICAg0YHQvtGF0YDQsNC90Y/RgtGMINGA0LDQsdC+0YLQvtGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0YHQuNGB0YLQtdC80Ysg0L/RgNC4INC+0YLQutC70Y7Rh9C10L3QuNC1INGN0LvQtdC60YLRgNC+0L/QuNGC0LDQvdC40Y88L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9J2NvbW1lbnRfX2NvbnRlbnQtdGl0bGUnPtCY0L3RgtC10YDQvdC10YIg0L3QsCDQvtCx0YrQtdC60YLQtTwvcD5cclxuICAgICAgICA8cD7QkiDQvdCw0YHRgtC+0Y/RidC10LUg0LLRgNC10LzRjyAg0YHQuNGB0YLQtdC80Ysg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC/0L7Qt9Cy0L7Qu9GP0Y7RgiDQvtGB0YPRidC10YHRgtCy0LvRj9GC0Ywg0LrQvtC90YLRgNC+0LvRjCDQt9CwINC/0YDQvtC40YHRhdC+0LTRj9GJ0LjQvCBcclxuICAgICAgICDQsiDRgNC10LbQuNC80LUg0YDQtdCw0LvRjNC90L7Qs9C+INCy0YDQtdC80LXQvdC4LiDQodC70LXQtNC40YLRjCDQt9CwINC+0LHRgdGC0LDQvdC+0LLQutC+0Lkg0LIg0LfQvtC90LUg0LLQuNC00LjQvNC+0YHRgtC4INCx0LXRgdC/0YDQvtCy0L7QtNC90L7QuSDQutCw0LzQtdGA0Ysg0LzQvtC20L3QviBcclxuICAgICAgICDRgSDQv9C+0LzQvtGJ0YzRjiDRgdC/0LXRhtC40LDQu9GM0L3QvtCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8uINCU0L7RgdGC0YPQvyDQuiDQuNC30L7QsdGA0LDQttC10L3QuNGOINC/0YDQvtCy0L7QtNC90YvRhSDQutCw0LzQtdGAINCyINC+0L3Qu9Cw0LnQvS3RgNC10LbQuNC80LUg0LLQvtC30LzQvtC20LXQvSBcclxuICAgICAgICDRh9C10YDQtdC3INC40L3RgtC10YDQvdC10YIg0L/QvtGB0YDQtdC00YHRgtCy0L7QvCDQstC40LTQtdC+0YDQtdCz0LjRgdGC0YDQsNGC0L7RgNCwLiDQldGB0LvQuCDRgyDQstCw0YEg0L3QtdGCINC00L7RgdGC0YPQv9CwIFxyXG4gICAgICAgINCyINC40L3RgtC10YDQvdC10YIg0L3QsCDQvtCx0YrQtdC60YLQtSwg0L3QviDQvdGD0LbQtdC9INGD0LTQsNC70LXQvdC90YvQuSDQv9GA0L7RgdC80L7RgtGALCDRg9C60LDQttC40YLQtSDQtNCw0L3QvdGL0Lkg0L/Rg9C90LrRgi48L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9J2NvbW1lbnRfX2NvbnRlbnQtdGl0bGUnPtCX0LDQv9C40YHRjCDQt9Cy0YPQutCwPC9wPlxyXG4gICAgICAgIDxwPtCS0YHQtSDQsdC10YHQv9GA0L7QstC+0LTQvdGL0LUg0YHQuNGB0YLQtdC80Ysg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC+0YHQvdCw0YnQtdC90Ysg0LLRgdGC0YDQvtC10L3QvdGL0Lwg0LzQuNC60YDQvtGE0L7QvdC+0Lwg0LTQu9GPINC30LDQv9C40YHQuCDQt9Cy0YPQutCwLiBcclxuICAgICAgICDQn9GA0L7QstC+0LTQvdGL0LUg0LrQsNC80LXRgNGLINGC0LDQutC40Lwg0YPRgdGC0YDQvtC50YHRgtCy0L7QvCDQvdC1INGA0LDRgdC/0L7Qu9Cw0LPQsNGO0YIsINC90L4g0Lgg0LTQu9GPINC90LjRhSDQvNC+0LbQvdC+INC+0YLQtNC10LvRjNC90L4g0L/RgNC40L7QsdGA0LXRgdGC0Lgg0Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LzQuNC60YDQvtGE0L7QvS48L3A+YCxcclxuICAgICAgICAnI2hvd2Zhc3QnOmA8cD7QodGA0L7QutC4INC90LUg0LLQu9C40Y/RjtGCINC90LAg0YHRgtC+0LjQvNC+0YHRgtGMINGB0LjRgdGC0LXQvNGLLCDQvdC+INGN0YLQviDQv9C+0LfQstCw0LvRj9C10YIg0L/QvtC00L7QsdGA0LDRgtGMINC+0L/RgtC40LzQsNC70YzQvdC+0LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1INC4INGB0L/Qu9Cw0L3QuNGA0L7QstCw0YLRjCDRgNCw0LHQvtGC0YMg0LzQvtC90YLQsNC20L3QuNC60L7Qsi48L3A+YCxcclxuICAgICAgICAnI3NxdWFyZSc6YDxwPtCj0LrQsNC20LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRiyDQstCw0YjQtdCz0L4g0L7QsdGK0LXQutGC0LAg0LTQu9C40L3QvdGDINC4INGI0LjRgNC40L3Rgywg0Y3RgtC+INC/0L7Qt9Cy0L7Qu9C40YIg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3QviDRgNCw0YHRh9C40YLQsNGC0Ywg0LTQu9C40L3RgyBcclxuICAgICAgICDQutCw0LHQtdC70YzQvdGL0YUg0YLRgNCw0YFjINC40LvQuCDRg9C60LDQttC40YLQtSDQv9GA0LjQvNC10YDQvdGD0Y4g0LTQu9C40L3RgyBcclxuICAgICAgICDQutCw0LHQtdC70Y8g0L7RgiDQutCw0LzQtdGA0Ysg0LTQviDQv9GA0LXQtNC/0L7Qu9Cw0LPQsNC10LzQvtCz0L4g0LzQtdGB0YLQsCDRg9GB0YLQsNC90L7QstC60Lgg0LfQsNC/0LjRgdGL0LLQsNGO0YnQtdCz0L4g0YPRgdGC0YDQvtC50YHRgtCy0LAuPC9wPmAsXHJcbiAgICAgICAgJyNjb21wbGVjdGF0aW9uJzogYDxwPtCt0YLQviDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC70Y8g0YLQvtGH0L3QvtCz0L4g0YDQsNGB0YfQtdGC0LAg0L/QvtC70L3QvtCz0L4g0L/QtdGA0LXRh9C90Y8g0L7QsdC+0YDRg9C00L7QstCw0L3QuNGPOiDQtNC70Y8g0YDQsNGB0YfQtdGC0LAg0YHQuNGB0YLQtdC80YsgwqvQv9C+0LQg0LrQu9GO0YfCuy48L3A+YFxyXG4gICAgfVxyXG4gICAgbmVlZFNvdW5kRXZlbnQoKTtcclxuICAgIGZhc3RMZXZlbENoYW5nZSgpO1xyXG4gICAgcmFkaW9DaGVja0FjdGl2ZSgpO1xyXG4gICAgcmFkaW9PbkNoYW5nZSgpO1xyXG4gICAgZnVuY1NsaWRlcnMoKTtcclxuICAgIHNob3dDdXJyZW50U3BoZXJlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvYmplY3RfX2hvdXNlJykpO1xyXG4gICAgYWRkTmF2aWdhdGlvblRvQnV0dG9ucygpXHJcbiAgICBhZGRFdmVudE9uQWxsSW5wdXRzKCk7XHJcbiAgICBhZGRTaG93UGVyaW1ldGVyKCk7XHJcbiAgICBhZGRTaG93SGlkZUNvbW1lbnRFdmVudCgpO1xyXG4gICAgcmVmcmVzaENvbW1lbnQoKTtcclxuXHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINC60L7QvNC80LXQvdGC0Ysg0LIg0LzQvtCx0LjQu9GM0L3QvtC5INCy0LXRgNGB0LjQuFxyXG4gICAgZnVuY3Rpb24gc2hvd0hpZGVDb21tZW50KCl7XHJcbiAgICAgICAgbGV0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJyk7XHJcbiAgICAgICAgY29tbWVudHMuY2xhc3NMaXN0LnRvZ2dsZSgnY29tbWVudHNfYWN0aXZlJylcclxuICAgIH1cclxuICAgIC8vINC90LDQstC10YHQuNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0LrQvtC80LzQtdC90YLQsCDQuCDQutGA0LXRgdGC0LjQulxyXG4gICAgZnVuY3Rpb24gYWRkU2hvd0hpZGVDb21tZW50RXZlbnQoKXtcclxuICAgICAgICBsZXQgc2hvd0NvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2NpcmNsZScpO1xyXG4gICAgICAgIGxldCBjbG9zZUNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHNfX2Nsb3NlJyk7XHJcbiAgICAgICAgc2hvd0NvbW1lbnRCdXR0b24ub25jbGljayA9IHNob3dIaWRlQ29tbWVudDtcclxuICAgICAgICBjbG9zZUNvbW1lbnRCdXR0b24ub25jbGljayA9IHNob3dIaWRlQ29tbWVudDtcclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjCDRgtC10LrRg9GJ0LjQuSDQutC+0LzQvNC10L3RgtCw0YDQuNC5XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoQ29tbWVudCgpe1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLWNvbnRlbnQnKTtcclxuICAgICAgICBsZXQgY29tbWVudERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fY29tbWVudC1ib2R5JylcclxuICAgICAgICBsZXQgb2JqZWN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvYmplY3QnKTtcclxuICAgICAgICBsZXQgY3VycmVudE9iamVjdCA9IG9iamVjdFBhZ2UucXVlcnlTZWxlY3RvcignaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIHRvZ2dsZUhpZGVDbGFzcyhjb21tZW50RGVza3RvcCk7XHJcbiAgICAgICAgaWYoMCA8IHNjcmVlbkNvdW50ZXIgPCA5KXtcclxuICAgICAgICAgICAgaWYocGFnZXNbc2NyZWVuQ291bnRlcl0gPT0gJyNjYW1lcmFjb3VudCcpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50T2JqZWN0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gY29tbWVudHNbcGFnZXNbc2NyZWVuQ291bnRlcl1dW2N1cnJlbnRPYmplY3QuaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnREZXNrdG9wLmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXVtjdXJyZW50T2JqZWN0LmlkXTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5pbm5lckhUTUwgPSBjb21tZW50c1twYWdlc1tzY3JlZW5Db3VudGVyXV1bJ25vY2hvc2VuJ107XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudERlc2t0b3AuaW5uZXJIVE1MID0gY29tbWVudHNbcGFnZXNbc2NyZWVuQ291bnRlcl1dWydub2Nob3NlbiddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnREZXNrdG9wLmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KHRvZ2dsZUhpZGVDbGFzcyhjb21tZW50RGVza3RvcCksIDMwMDApO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL9GB0LrRgNGL0YLRjCDQuCDQv9C+0LrQsNC30LDRgtGMINGN0LvQtdC80LXQvdGCXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVIaWRlQ2xhc3MoZWxlbSl7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/RhNGD0L3QutGG0LjQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgIGZ1bmN0aW9uIG5hdmlnYXRpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ2ZvcndhcmQnKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSA4P2hpZGUoY3VycmVudFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTpoaWRlKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlcisrO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNjcmVlbkNvdW50ZXIpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3cobmV4dFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCAnZ3JpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIHNob3cobmV4dFBhZ2UsICdncmlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBcclxuICAgICAgICAgICAgICAgICAgICBzaG93KG5leHRQYWdlLCAnZmxleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoJ2JhY2snKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSAxP2hpZGUoY3VycmVudFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTpoaWRlKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlci0tO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzY3JlZW5Db3VudGVyID09IDg/c2hvdyhuZXh0UGFnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICdncmlkJyk6c2hvdyhuZXh0UGFnZSwgJ2ZsZXgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMCA8IHNjcmVlbkNvdW50ZXIgPCA5KXtcclxuICAgICAgICAgICAgcmVmcmVzaFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHJlZnJlc2hDb21tZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/QtNC+0LHQsNCy0LvQtdC90LjQtSDQvdCw0LLQuNCz0LDRhtC40Lgg0L3QsCDQutC90L7Qv9C60LhcclxuICAgIGZ1bmN0aW9uIGFkZE5hdmlnYXRpb25Ub0J1dHRvbnMoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZF9fYnV0dG9uJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2ZvcndhcmQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2ZvcndhcmQnKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignZm9yd2FyZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2J1dHRvbl9nZXRPZmZlcicpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdmb3J3YXJkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9iYWNrJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2JhY2snKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19idXR0b25fYmFjaycpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdiYWNrJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbl9iYWNrJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2JhY2snKTtcclxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uX3NlbmRPZmZlcicpLm9uY2xpY2sgPSAoKSA9PiBhbGVydCgnRm9ybSB3YXMgc2VudCEnKTtcclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjC/RgdC60YDRi9GC0Ywg0Y3Qu9C10LzQtdC90YIg0L/RgNC4INC90LDQstC40LPQsNGG0LjQuFxyXG4gICAgZnVuY3Rpb24gaGlkZShlbGVtKXtcclxuICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3coZWxlbSwgZGlzcFByb3BlcnR5KXtcclxuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwUHJvcGVydHk7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH0gICAgXHJcbiAgICAvL9Ce0LHQvdC+0LLQuNGC0Ywg0LLQvtC/0YDQvtGBXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoUXVlc3Rpb24oKXtcclxuICAgICAgICBsZXQgcXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcXVlc3Rpb24tdGV4dCcpO1xyXG4gICAgICAgIHF1ZXN0aW9uLnRleHRDb250ZW50ID0gcXVlc3Rpb25zW3NjcmVlbkNvdW50ZXJdO1xyXG4gICAgfVxyXG4gICAgLy/QsdC70L7QutC40YDQvtCy0LrQsC/RgNCw0LfQsdC70L7QutC40YDQvtCy0LrQsCDQutC90L7Qv9C60LhcclxuICAgIGZ1bmN0aW9uIGNoZWNrQnV0dG9uKCl7XHJcbiAgICAgICAgbGV0IGJ1dHRvbkZvcndhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2ZvcndhcmQnKTtcclxuICAgICAgICBpZighY2hlY2tJc0Nob3NlbihzY3JlZW5Db3VudGVyKSl7XHJcbiAgICAgICAgICAgIGJ1dHRvbkZvcndhcmQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBidXR0b25Gb3J3YXJkLmRpc2FibGVkID0gZmFsc2U7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0L/RgNC+0LLQtdGA0LjRgtGMINCy0YvQsdGA0LDQvSDQu9C4INCy0LDRgNC40LDQvdGCINC90LAg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbQtVxyXG4gICAgZnVuY3Rpb24gY2hlY2tJc0Nob3NlbihzY3JlZW5Db3VudGVyKXtcclxuICAgICAgICBsZXQgaXNUcnVlID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgIHN3aXRjaChwYWdlc1tzY3JlZW5Db3VudGVyXSl7XHJcbiAgICAgICAgICAgIGNhc2UgJyNvYmplY3QnOlxyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdFJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vYmplY3RfX2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RSYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7aWYocmFkaW8uY2hlY2tlZCkgaXNUcnVlKyt9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICAgICAgY2FzZSAnI2xvY2F0aW9uJzpcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhdGlvblJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2NhdGlvbl9faW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpIGlzVHJ1ZSsrfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2NhbWVyYWNvdW50JzpcclxuICAgICAgICAgICAgICAgIGxldCBjYW1lcmFjb3VudFJhbmdlcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFjb3VudFJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtpZihyYW5nZS52YWx1ZSAhPSAwKSBpc1RydWUrKzt9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjYXJjaGlldmUnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGFyY2hpZXZlUmFkaW9zID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICAgICAgYXJjaGlldmVSYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7aWYocmFkaW8uY2hlY2tlZClpc1RydWUrKzt9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjZG9wcGVsJzpcclxuICAgICAgICAgICAgICAgIGxldCBzb3VuZE5lZWRJbnB1dCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzZXJ2ZU5lZWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZV9uZWVkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJuZXROZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2ludGVybmV0X25lZWQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzb3VuZE5lZWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYoKHNvdW5kTmVlZC5jaGVja2VkIHx8ICFzb3VuZE5lZWQuY2hlY2tlZCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAocmVzZXJ2ZU5lZWQuY2hlY2tlZCB8fCAhcmVzZXJ2ZU5lZWQuY2hlY2tlZCkgJiYgKCFzb3VuZE5lZWQuY2hlY2tlZCB8fCBcclxuICAgICAgICAgICAgICAgICAgICAoc291bmROZWVkLmNoZWNrZWQgJiYgc291bmROZWVkSW5wdXQudmFsdWUgIT0gMCkpKSBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjaG93ZmFzdCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdEhpZ2ggPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9oaWdoJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdE1pZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X21pZGRsZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RMb3cgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9sb3cnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0T3duID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3Rfb3duJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdE93bkZpZWxkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfYXJlYScpO1xyXG4gICAgICAgICAgICAgICAgaWYoZmFzdEhpZ2guY2hlY2tlZCB8fCBmYXN0TWlkLmNoZWNrZWQgfHwgZmFzdExvdy5jaGVja2VkIHx8IChmYXN0T3duLmNoZWNrZWQgJiYgZmFzdE93bkZpZWxkLnZhbHVlICE9JycpKSBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjc3F1YXJlJzogXHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlSW5wdXRzID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVQZXJpbWV0ZXIgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc3FhcmVfX3BlcmltZXRyYWwnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVPYmplY3RMb25nID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1vYmplY3QtbG9uZycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZU9iamVjdFdpZHRoID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1vYmplY3Qtd2lkdGgnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVQZXJpbWV0ZXJMb25nID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1wZXJpbWV0ZXItbG9uZycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVBlcmltZXRlcldpZHRoID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1wZXJpbWV0ZXItd2lkdGgnKTtcclxuICAgICAgICAgICAgICAgIGlmKHNxdWFyZVBlcmltZXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlT2JqZWN0TG9uZy52YWx1ZSAhPSAwICYmIHNxdWFyZU9iamVjdFdpZHRoICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighc3F1YXJlUGVyaW1ldGVyLmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmVPYmplY3RMb25nLnZhbHVlICE9IDAgJiYgc3F1YXJlT2JqZWN0V2lkdGggIT0gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlUGVyaW1ldGVyTG9uZy52YWx1ZSAhPSAwICYmIHNxdWFyZVBlcmltZXRlcldpZHRoLnZhbHVlICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjY29tcGxlY3RhdGlvbic6XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcGxlY3RhdGlvblJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGVjdGF0aW9uX19pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgY29tcGxlY3RhdGlvblJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyYWRpby5jaGVja2VkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaXNUcnVlO1xyXG4gICAgfVxyXG4gICAgLy/RgNCw0LTQuNC+0LrQvdC+0L/QutC4INCS0L7Qv9GA0L7RgSAxXHJcbiAgICAvL9C/0YDQvtCy0LXRgNC60LAg0YDQsNC00LjQvtC60L3QvtC/0L7QuiDQvdCwIGNoZWNrZWRcclxuICAgIGZ1bmN0aW9uIHJhZGlvQ2hlY2tBY3RpdmUoKXtcclxuICAgICAgICBsZXQgcmFkaW9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J3JhZGlvJ11gKTtcclxuICAgICAgICByYWRpb0l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb2JqZWN0X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb2JqZWN0X19pdGVtX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgLy/QtNC+0LHQsNCy0LvQtdC90LjQtSDQuNCy0LXQvdGC0LAg0L/QviDQuNC30LzQtdC90LXQvdC40Y4g0YDQsNC00LjQviDQvdCwIDEg0YHRgtGA0LDQvdC40YbQtVxyXG4gICAgZnVuY3Rpb24gcmFkaW9PbkNoYW5nZSgpe1xyXG4gICAgICAgIGxldCBvYmplY3RSYWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub2JqZWN0X19pbnB1dCcpO1xyXG4gICAgICAgIG9iamVjdFJhZGlvcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJhZGlvID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHJhZGlvQ2hlY2tBY3RpdmUoKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93Q3VycmVudFNwaGVyZShjdXJyZW50UmFkaW8pO1xyXG4gICAgICAgICAgICAgICAgc2hvd1BlcmltZXRlcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywg0LLQviAyINCy0L7Qv9GA0L7RgdC1INC90YPQttC90YPRjiDRgdGE0LXRgNGDINC/0YDQuNC80LXQvdC10L3QuNGPLCDRgdC60YDRi9CyINC90LXQvdGD0LbQvdC+0LVcclxuICAgIGZ1bmN0aW9uIHNob3dDdXJyZW50U3BoZXJlKGlucHV0KXtcclxuICAgICAgICBsZXQgY3VycmVudFNwaGVyZSA9IGlucHV0LmRhdGFzZXQuY2hvaXNlO1xyXG4gICAgICAgIGxldCBjYW1Db3VudGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW1lcmEtY291bnRfX2l0ZW0nKTtcclxuICAgICAgICBjYW1Db3VudGVycy5mb3JFYWNoKGNvdW50ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb3VudGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgY3VycmVudENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FtZXJhLWNvdW50X18ke2N1cnJlbnRTcGhlcmV9YCk7XHJcbiAgICAgICAgY3VycmVudENvdW50ZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjCDQsiBzcXVhcmUg0L/QtdGA0LjQvNC10YLRgNCw0LvQutC4LCDQtdGB0LvQuCDQt9C90LDRh9C10L3QuNC1INC40YUg0LIg0LrQvtC70LjRh9C10YHRgtCy0LUgIT0gMFxyXG4gICAgZnVuY3Rpb24gc2hvd1BlcmltZXRlcigpe1xyXG4gICAgICAgIGxldCBjb3VudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FtZXJhY291bnQnKTtcclxuICAgICAgICBsZXQgcGVyaW1ldGVyUmFuZ2VzID0gY291bnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZXJpbWV0ZXInKTtcclxuICAgICAgICBsZXQgc3FhcmVQZXJpbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3FhcmVfX3BlcmltZXRyYWwnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGVyaW1ldGVySGFzID0gMDtcclxuICAgICAgICBwZXJpbWV0ZXJSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJhbmdlLnZhbHVlICE9IDApe1xyXG4gICAgICAgICAgICAgICAgcGVyaW1ldGVySGFzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHBlcmltZXRlckhhcyAhPSAwKXtcclxuXHJcbiAgICAgICAgICAgIHNxYXJlUGVyaW1ldGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgbGV0IHNxYXJlUGVyaW1ldGVyUmFuZ2VzID0gc3FhcmVQZXJpbWV0ZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXJSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByYW5nZS52YWx1ZSA9IDBcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNxYXJlUGVyaW1ldGVyLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDQv9C+0LLQtdGB0LjRgtGMINC90LAgcmFuZ2Ug0L/QtdGA0LjQvNC10YLRgNCw0LvQvtC6INCyIGNhbWVyYWNvdW50INGB0L7QsdGL0YLQuNC1IHNob3dQZXJpbWV0ZXIg0L3QsCBpbnB1dFxyXG4gICAgZnVuY3Rpb24gYWRkU2hvd1BlcmltZXRlcigpe1xyXG4gICAgICAgIGxldCBjb3VudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FtZXJhY291bnQnKTtcclxuICAgICAgICBsZXQgcGVyaW1ldGVyUmFuZ2VzID0gY291bnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZXJpbWV0ZXInKTtcclxuICAgICAgICBsZXQgc3FhcmVQZXJpbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3FhcmVfX3BlcmltZXRyYWwnKTtcclxuICAgICAgICBwZXJpbWV0ZXJSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2hvd1BlcmltZXRlcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v0YHQsdGA0L7RgdC40YLRjCDRgdGH0LXRgtGH0LjQutC4XHJcbiAgICBmdW5jdGlvbiByZXNldFZhbHVlcygpe1xyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSDQviDQutC+0LvQuNGH0LXRgdGC0LLQtSDRgdGH0LXRgtGH0LjQutC4INC60LDQvNC10YAg0YPQstC10YHRgtC4INC90LAgMFxyXG4gICAgICAgICAgICBsZXQgY2FtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWNvdW50Jyk7XHJcbiAgICAgICAgICAgIGxldCByYW5nZXNDYW1Db3VudCA9IGNhbUNvdW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgICAgIHJhbmdlc0NhbUNvdW50LmZvckVhY2gocmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v0L7QsdGK0LXQutGCIC0g0YHQsdGA0L7RgSDRgNCw0LTQuNC+XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbicpO1xyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb25SYWRpb3MgPSBsb2NhdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvJyk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRSYWRpbyhyYWRpbyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBINC+0LEg0LDRgNGF0LjQstC1INGB0LHRgNC+0YHQuNGC0YwgcmFkaW8gXHJcbiAgICAgICAgICAgIGxldCBhcmNoaXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyY2hpZXZlJyk7XHJcbiAgICAgICAgICAgIGxldCByYWRpb3NBcmNoaWV2ZSA9IGFyY2hpdmUucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICByYWRpb3NBcmNoaWV2ZS5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0UmFkaW8ocmFkaW8pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSDQtNC+0L8g0L7Qv9GG0LjQuCDRgdCx0YDQvtGB0LjRgtGMINGH0LXQutCx0L7QutGB0Ysg0LggcmFuZ2Ug0YHQsdGA0L7RgdC40YLRjCDQuCDRgdC60YDRi9GC0YxcclxuICAgICAgICAgICAgbGV0IGRvcHBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kb3BwZWwnKTtcclxuICAgICAgICAgICAgbGV0IGNoZWNrYm94ZXNEb3BwZWwgPSBkb3BwZWwucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1jaGVjaycpO1xyXG4gICAgICAgICAgICBjaGVja2JveGVzRG9wcGVsLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRDaGVja0JveChjaGVja2JveCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGxldCByYW5nZURvcHBlbCA9IGRvcHBlbC5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZF9yYW5nZScpO1xyXG4gICAgICAgICAgICByYW5nZURvcHBlbC52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHJlZnJlc2hSYW5nZShyYW5nZURvcHBlbCk7XHJcbiAgICAgICAgICAgIGNoZWNrTmVlZFNvdW5kKCk7XHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBIGhvd0Zhc3Qg0YHQsdGA0L7RgdC40YLRjCDRgNCw0LTQuNC+XHJcbiAgICAgICAgICAgIGxldCBmYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhc3QnKTtcclxuICAgICAgICAgICAgbGV0IHJhZGlvc0Zhc3QgPSBmYXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgcmFkaW9zRmFzdC5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0UmFkaW8ocmFkaW8pO1xyXG4gICAgICAgICAgICAgICAgaGFzT3duQW5zd2VyKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBIHNxdWFyZSDRgdCx0YDQvtGB0LjRgtGMIHJhbmdlXHJcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3F1YXJlJyk7XHJcbiAgICAgICAgICAgIGxldCBzcXVhcmVSYW5nZXMgPSBzcXVhcmUucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLXNsaWRlcicpO1xyXG4gICAgICAgICAgICBzcXVhcmVSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiByYW5nZS52YWx1ZSA9IDApO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/QtNC+0LHQsNCy0LvQtdC90LjQtSDQvtCx0YDQsNCx0L7RgtGH0LjQutCwINC90LAg0YHQu9Cw0LnQtNC10YBcclxuICAgIGZ1bmN0aW9uIGZ1bmNTbGlkZXJzKCl7XHJcbiAgICAgICAgbGV0IHNsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX3NsaWRlcicpO1xyXG4gICAgICAgIHNsaWRlcnMuZm9yRWFjaChzbGlkZXIgPT4ge1xyXG4gICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tCdXR0b24oKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL9GB0LHRgNC+0YEg0YDQsNC00LjQvlxyXG4gICAgZnVuY3Rpb24gcmVzZXRSYWRpbyhlbGVtKXtcclxuICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vcmVzZXQgY2hlY2tib3hcclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hlY2tCb3goZWxlbSl7XHJcbiAgICAgICAgZWxlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL9C+0LHQvdC+0LLQuNGC0Ywg0L/QvtC70LfRg9C90L7QulxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFJhbmdlKGN1cnJlbnQpe1xyXG4gICAgICAgIGN1cnJlbnQubmV4dFNpYmxpbmcuaW5uZXJIVE1MID0gY3VycmVudC52YWx1ZTtcclxuICAgICAgICBsZXQgcGVyY2VudFZhbHVlID0gKGN1cnJlbnQudmFsdWUvY3VycmVudC5tYXgpKjEwMDtcclxuICAgICAgICBsZXQgY29sb3IgPSBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDMsODEsMTQ1LDEpICR7cGVyY2VudFZhbHVlfSUsIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xNzgpICR7cGVyY2VudFZhbHVlfSUpYFxyXG4gICAgICAgIGN1cnJlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG4gICAgfVxyXG4gICAgLy/QktC+0L/RgNC+0YEgNCDQvdGD0LbQtdC9INC30LLRg9C6XHJcbiAgICBmdW5jdGlvbiBuZWVkU291bmRFdmVudCgpe1xyXG4gICAgICAgIGxldCByZWNvcmRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkJyk7XHJcbiAgICAgICAgcmVjb3JkQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hlY2tOZWVkU291bmQpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjaGVja05lZWRTb3VuZCgpe1xyXG4gICAgICAgIGxldCByZWNvcmRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkJyk7XHJcbiAgICAgICAgbGV0IHRvZ2dsZVJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvcHBlbF9fc291bmRyZWNvcmQnKTtcclxuICAgICAgICBsZXQgc291bmROZWVkUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZF9yYW5nZScpO1xyXG4gICAgICAgIGlmKHJlY29yZENoZWNrYm94LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICB0b2dnbGVSYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdkb3BwZWxfX3NvdW5kcmVjb3JkX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0b2dnbGVSYW5nZS5jbGFzc0xpc3QuYWRkKCdkb3BwZWxfX3NvdW5kcmVjb3JkX2hpZGRlbicpO1xyXG4gICAgICAgICAgICBzb3VuZE5lZWRSYW5nZS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIHJlZnJlc2hSYW5nZShzb3VuZE5lZWRSYW5nZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/QktC+0L/RgNC+0YE1INGB0LLQvtC5INCy0LDRgNC40LDQvdGCINC+0YLQstC10YLQsFxyXG4gICAgICAgIC8v0L/RgNC+0LLQtdGA0LjRgtGMINGH0LXQuiDRgyDRgNCw0LTQuNC+INGB0LLQvtC5INCy0LDRgNC40LDQvdGCLCDQtdGB0LvQuCDQtNCwLCDRgtC+INGD0LTQsNC70LjRgtGMINC60LvQsNGB0YEg0YHQutGA0YvRgtC40Y8sINC10YHQu9C4INC90LXRgiAtINC00L7QsdCw0LLQuNGC0YxcclxuICAgIGZ1bmN0aW9uIGhhc093bkFuc3dlcigpe1xyXG4gICAgICAgIGxldCBvd25BbnN3ZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhc3RfX293bmFuc3dlcicpO1xyXG4gICAgICAgIGxldCBoYXNPd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmFzdF9vd24nKTtcclxuICAgICAgICBpZihoYXNPd24uY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIG93bkFuc3dlckFyZWEuY2xhc3NMaXN0LnJlbW92ZSgnZmFzdF9fb3duYW5zd2VyX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBvd25BbnN3ZXJBcmVhLmNsYXNzTGlzdC5hZGQoJ2Zhc3RfX293bmFuc3dlcl9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9C90LDQstC10YHQuNGC0Ywg0Y3RgtGDINGE0YPQvdC60YbQuNGOINC90LAg0LjQt9C80LXQvdC10L3QuNC1INCy0YHQtdGFINGHL9CxINCyINCz0YDRg9C/0L/QtVxyXG4gICAgZnVuY3Rpb24gZmFzdExldmVsQ2hhbmdlKCl7XHJcbiAgICAgICAgbGV0IHJhZGlvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmFzdF9faW5wdXRgKTtcclxuICAgICAgICByYWRpb0l0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFzT3duQW5zd2VyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8v0L7QsdGJ0LjQuSDQuNCy0LXQvdGCINC90LAg0LLRgdC1INC40L3Qv9GD0YLRiyDQstC+0L/RgNC+0YHQvtCyIGNoZWNrQnV0dG9uKCkgLSDQv9GA0L7QstC10YDQuNGC0YwsIFxyXG4gICAgLy/QtdGB0YLRjCDQu9C4INCy0YvQsdGA0LDQvdC90YvQtSDQuCDQstCy0LXQtNC10L3QvdGL0LUg0LfQvdCw0YfQtdC90LjRjyDQuCDQtdGB0LvQuCDQtdGB0YLRjCxcclxuICAgIC8v0Lgg0LXRgdC70Lgg0LXRgdGC0YwgLSDRgNCw0LfQsdC70L7QutC40YDQvtCy0LDRgtGMINC60L3QvtC/0LrRg1xyXG4gICAgLy/QuNGJ0LXQvCDRh9C10YDQtdC3INGA0L7QtNC40YLQtdC70Y8gLnF1aXpfX3F1ZXN0aW9uLWJvZHksINGH0YLQvtCxINC90LUg0LfQsNGG0LXQv9C40YLRjCDRgdGC0YDQsNC90LjRhtGDINGBINGE0L7RgNC80L7QuVxyXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRPbkFsbElucHV0cygpe1xyXG4gICAgICAgIGxldCBxdWl6Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19xdWVzdGlvbi1ib2R5ICcpO1xyXG4gICAgICAgIGxldCBhbGxSYWRpb3MgPSBxdWl6Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcclxuICAgICAgICBhbGxSYWRpb3MuZm9yRWFjaChpdGVtID0+IHtpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNoZWNrQnV0dG9uKCkpfSk7XHJcbiAgICAgICAgbGV0IGFsbFJhbmdlcyA9IHF1aXpCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYW5nZVwiXScpO1xyXG4gICAgICAgIGFsbFJhbmdlcy5mb3JFYWNoKGl0ZW0gPT4ge2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBjaGVja0J1dHRvbigpKX0pO1xyXG4gICAgICAgIGxldCBhbGxDaGVja2JveGVzID0gcXVpekJvZHkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcbiAgICAgICAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKGl0ZW0gPT4ge2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tCdXR0b24oKSl9KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvNGLICAgXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19mb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZm9ybVNlbmQpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZm9ybVNlbmQoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHZhbGlkRXJyb3IgPSBmb3JtVmFsaWRhdGUoZm9ybSk7XHJcbiAgICAgICAgaWYodmFsaWRFcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQndC10LrQvtGA0YDQtdC60YLQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0L/QvtC70LXQuTog0L/QvtC20LDQu9GD0LnRgdGC0LAsINC/0YDQvtCy0LXRgNGM0YLQtSDQutC+0YDRgNC10LrRgtC90L7RgdGC0Ywg0LTQsNC90L3Ri9GFJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZXN1bHQnLCBKU09OLnN0cmluZ2lmeSh7J2lubmVyJzogXCIzXCIsICdvYmplY3QnOiAnaG91c2UnLCAndGVzdCc6ICd0ZXN0J30pKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4uL2NvcmUucGhwJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7IC8vINC10YHQu9C4IEhUVFAt0YHRgtCw0YLRg9GBINCyINC00LjQsNC/0LDQt9C+0L3QtSAyMDAtMjk5XHJcbiAgICAgICAgICAgICAgICAvLyDQv9C+0LvRg9GH0LDQtdC8INGC0LXQu9C+INC+0YLQstC10YLQsCAo0YHQvC4g0L/RgNC+INGN0YLQvtGCINC80LXRgtC+0LQg0L3QuNC20LUpXHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLQntGI0LjQsdC60LAgSFRUUDogXCIgKyByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybVZhbGlkYXRlKGZvcm0pe1xyXG4gICAgICAgIGxldCBlcnJvciA9IDA7XHJcbiAgICAgICAgbGV0IGZvcm1WYWxpZEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5fdmFsaWQnKTtcclxuICAgICAgICBmb3JtVmFsaWRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1SZW1vdmVFcnJvcihmaWVsZCk7XHJcbiAgICAgICAgICAgIHN3aXRjaChmaWVsZC50eXBlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZpZWxkLnZhbHVlID09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IrKztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndGVsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZihwaG9uZVRlc3QoZmllbGQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IrKztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVtYWlsVGVzdChmaWVsZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQWRkRXJyb3IoZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICAgICAgICAgICAgICBpZighZmllbGQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1BZGRFcnJvcihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtQWRkRXJyb3IoaW5wdXQpe1xyXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2VycicpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ19lcnInKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1SZW1vdmVFcnJvcihpbnB1dCl7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyJyk7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnX2VycicpO1xyXG4gICAgfVxyXG4gICAgLy8rNzkyNjEyMzQ1NjdcclxuICAgIGZ1bmN0aW9uIHBob25lVGVzdChpbnB1dCl7XHJcbiAgICAgICAgcmV0dXJuICEvXigoOHxcXCs3KVtcXC0gXT8pPyhcXCg/XFxkezN9XFwpP1tcXC0gXT8pP1tcXGRcXC0gXXs3LDEwfSQvLnRlc3QoaW5wdXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyovLyDQn9GA0L7QstC10YDQutCwINGC0LXQu9C10YTQvtC90LAg0L3QsCDRgdC+0L7RgtCy0LXRgtGB0YLQstC40LUg0LLQuNC00YM6XHJcbiAgICAvLyA4OTI2MTIzNDU2N1xyXG4gICAgLy8gNzkyNjEyMzQ1NjdcclxuICAgIC8vICs3IDkyNiAxMjMgNDUgNjdcclxuICAgIC8vIDgoOTI2KTEyMy00NS02N1xyXG4gICAgLy8gMTIzLTQ1LTY3XHJcbiAgICAvLyA5MjYxMjM0NTY3XHJcbiAgICAvLyA3OTI2MTIzNDU2N1xyXG4gICAgLy8gKDQ5NSkxMjM0NTY3XHJcbiAgICAvLyAoNDk1KSAxMjMgNDUgNjdcclxuICAgIC8vIDg5MjYxMjM0NTY3XHJcbiAgICAvLyA4LTkyNi0xMjMtNDUtNjdcclxuICAgIC8vIDggOTI3IDEyMzQgMjM0XHJcbiAgICAvLyA4IDkyNyAxMiAxMiA4ODhcclxuICAgIC8vIDggOTI3IDEyIDU1NSAxMlxyXG4gICAgLy8gOCA5MjcgMTIzIDggMTIzKi9cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZW1haWxUZXN0KGlucHV0KXtcclxuICAgICAgICByZXR1cm4gIS9eWy1hLXowLTkhIyQlJicqKy89P15fYHt8fX5dKyg/OlxcLlstYS16MC05ISMkJSYnKisvPT9eX2B7fH1+XSspKkAoPzpbYS16MC05XShbLWEtejAtOV17MCw2MX1bYS16MC05XSk/XFwuKSooPzphZXJvfGFycGF8YXNpYXxiaXp8Y2F0fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8am9ic3xtaWx8bW9iaXxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0ZWx8dHJhdmVsfFthLXpdW2Etel0pJC8udGVzdChpbnB1dC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gIS9eKCgoWzAtOUEtWmEtel17MX1bLTAtOUEtelxcLl17MSx9WzAtOUEtWmEtel17MX0pfChbMC050JAt0K/QsC3Rj117MX1bLTAtOdCQLdGPXFwuXXsxLH1bMC050JAt0K/QsC3Rj117MX0pKUAoWy0wLTlBLVphLXpdezEsfVxcLil7MSwyfVstQS1aYS16XXsyLH0pJC8udGVzdChpbnB1dC52YWx1ZSk7XHJcbiAgICBcclxufVxyXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
