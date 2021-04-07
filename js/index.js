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
  let systemProps = {};
  needSoundEvent();
  fastLevelChange();
  radioCheckActive();
  radioOnChange();
  funcSliders();
  showCurrentSphere(document.querySelector('#object__house'));
  addNavigationToButtons();
  addEventOnAllInputs();
  addShowPerimeter();
  addGetCamsPerimetral();
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
          //переход на страницу с вопросами
          show(nextPage.parentElement.parentElement, 'grid');
          break;

        case 9:
          //переход на страницу результата
          show(nextPage, 'grid');
          writeResult();
          console.log(systemProps);
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
        refreshProps(this);
        resetValues();
        showCurrentSphere(currentRadio);
        showPerimeter();
      });
    });
  } //показать в вопросе про количество камер нужную сферу применения, скрыв ненужное


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
      systemProps['showPerimeter'] = true;
    } else {
      delete systemProps['showPerimeter'];
      delete systemProps['perimeterLength'];
      delete systemProps['perimeterWidth'];
      let sqarePerimeterRanges = sqarePerimeter.querySelectorAll('input');
      sqarePerimeterRanges.forEach(range => {
        range.value = 0;
        refreshRange(range);
      });
      sqarePerimeter.classList.add('square__perimetral_hidden');
    }
  } //посчитать количество периметральных камер и записать в systemProps


  function getCamsPerimetral() {
    let countPage = document.querySelector('#cameracount');
    let perimeterRanges = countPage.querySelectorAll('.perimeter');
    let count = 0;
    perimeterRanges.forEach(range => {
      count = count + Number(range.value);
    });

    if (count != 0) {
      systemProps['camsPerimetralCount'] = count;
    } else if (count == 0) {
      delete systemProps['camsPerimetralCount'];
    } // console.log(systemProps);

  } //повесить на рэйнджи


  function addGetCamsPerimetral() {
    let countPage = document.querySelector('#cameracount');
    let perimeterRanges = countPage.querySelectorAll('.perimeter');
    perimeterRanges.forEach(range => {
      range.addEventListener('input', getCamsPerimetral);
    });
  } // повесить на range периметралок в cameracount функции showPerimeter на input


  function addShowPerimeter() {
    let countPage = document.querySelector('#cameracount');
    let perimeterRanges = countPage.querySelectorAll('.perimeter');
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
    });
    writeAllCamsKind(); //объект - сброс радио

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
  // Сбор данных в объект systemProps. Осуществляется при кождом нажатии кнопки (зашит в функцию навигации).
  // 1. Определение объекта - зашито в изменение радио страницы #object. Обнуляет systemProps + записывает новый объект


  function refreshProps(object) {
    systemProps = {};
    systemProps['object'] = object.dataset.choise;
  } // 2. Определение местоположения. Записывается в systemProps['location']. Обновляется при смене радио кнопки страницы
  // #location. 


  function writeObjectPosition() {
    let locationPage = document.querySelector('#location');
    let locationRadios = locationPage.querySelectorAll('.location__input');
    locationRadios.forEach(radio => {
      radio.addEventListener('change', function () {
        systemProps['location'] = this.dataset.location;
      });
    });
  }

  writeObjectPosition(); // 3. Количество камер. Навешиваем на все range в #cameracount на oninput запись в systemProps[camsCount][this.dataset.purpose.
  // После каждого изменения пересчитываются все составляющие подобъекта и в systemProps[CamsTotal] записываем 
  // суммарное число камер

  function writeCurrentCam() {
    let countcameraPage = document.querySelector('#cameracount');
    let rangesCameracount = countcameraPage.querySelectorAll('.range__slider');
    rangesCameracount.forEach(range => {
      range.addEventListener('input', function () {
        if (systemProps['camsCount'] === undefined) {
          let emtyObj = {};
          systemProps['camsCount'] = emtyObj;
        }

        if (this.value != 0) {
          systemProps['camsCount'][this.dataset.purpose] = this.value;
        } else {
          delete systemProps['camsCount'][this.dataset.purpose];
        }

        totalCams();
        writeAllCamsKind();
      });
    });
  }

  writeCurrentCam();

  function totalCams() {
    let total = 0;

    for (let key in systemProps['camsCount']) {
      total = total + Number(systemProps['camsCount'][key]);
    }

    systemProps['camsTotal'] = total;
  } // Дополнительно определяется количество внутренних, внешних и панорамных камер. Для этого делаем переборку по классам 
  // .cameraIndoor, .cameraOutdoor и .cameraPanoram
  // функция по классу проверяет каждый инпут и записывает его значение в total, возвращает total


  function getTotalCamsof(className) {
    let total = 0;
    let countcameraPage = document.querySelector('#cameracount');
    let ranges = countcameraPage.querySelectorAll(className);
    ranges.forEach(range => {
      total = total + Number(range.value);
    });
    return total;
  }

  function writeCamsKind(kindName, className) {
    if (getTotalCamsof(className) == 0) {
      delete systemProps[kindName];
    } else {
      systemProps[kindName] = getTotalCamsof(className);
    }
  } //функция при изменении любого из range на #cameracount перезаписывает значения в массиве.
  //Навесим ее так же в resetValues после обнуления всех range в счетчиках камер


  function writeAllCamsKind() {
    writeCamsKind('cameraIndoor', '.cameraIndoor');
    writeCamsKind('cameraOutdoor', '.cameraOutdoor');
    writeCamsKind('cameraPanoram', '.cameraPanoram');
  } // 4. Глубина хранения архива. Записывается в systemProps['archieve']


  function writeArchieve() {
    let archievePage = document.querySelector('#archieve');
    let archieveRadios = archievePage.querySelectorAll('.archieve__input');
    archieveRadios.forEach(radio => {
      radio.addEventListener('change', function () {
        systemProps['archieve'] = Number(this.dataset.days);
      });
    });
  }

  writeArchieve(); // 5. Дополнительные параметры. Записывается в systemProps['reserve_need'] systemProps['internet_need'] systemProps['sound_need_count']

  function writeDoppel() {
    document.querySelector('#reserve_need').onchange = function () {
      systemProps['reserve_need'] = this.checked;
    };

    document.querySelector('#internet_need').onchange = function () {
      systemProps['internet_need'] = this.checked;
    };

    document.querySelector('#sound_need').onchange = function () {
      if (this.checked) {
        document.querySelector('#sound_need_range').onchange = function () {
          systemProps['sound_need'] = this.value;
        };
      } else {
        delete systemProps['sound_need'];
      }
    };
  }

  writeDoppel(); // 6. Срочность. Записывается либо значение из data для первых 3 радио, либо текстом свой ответ в systemProps['howfast']

  function writehowFast() {
    let howFastPage = document.querySelector('#howfast');
    let howFastRadios = howFastPage.querySelectorAll('.fast__input');
    howFastRadios.forEach(radio => {
      radio.addEventListener('change', function () {
        if (this.dataset.fast != 'own') {
          systemProps['howfast'] = this.dataset.fast;
        } else {
          document.querySelector('#fast_area').addEventListener('blur', function writeValue() {
            systemProps['howfast'] = this.value;
          });
        }
      });
    });
  }

  writehowFast(); // 7. Площадь объекта. Значения с рэйндж записываются в systemProps['objectWidth'] systemProps['objectLength'] и
  // systemProps['perimeterWidth'] systemProps['perimeterLength']. При обнулении значения из массива удаляются, 
  // так же удаляются значения systemProps['perimeterWidth'] systemProps['perimeterLength'], если увести в 0 количество 
  // по периметру (функция удаления навешана в showPerimeter())

  function writeSquare() {
    let squarePage = document.querySelector('#square');
    let rangesSquare = squarePage.querySelectorAll('.range__slider');
    rangesSquare.forEach(range => {
      range.addEventListener('input', function () {
        if (this.value != 0) {
          systemProps[this.dataset.name] = this.value;
        } else {
          delete systemProps[this.dataset.name];
        }
      });
    });
  }

  writeSquare(); // 8.Комплектация. Два варианта complect/montage. События навешаны на радио текущей страницы

  function writeComplectation() {
    let complectationPage = document.querySelector('#complectation');
    let complectationRadios = complectationPage.querySelectorAll('.complectation__input');
    complectationRadios.forEach(radio => {
      radio.addEventListener('change', function () {
        systemProps['complectation'] = this.dataset.name;
      });
    });
  }

  writeComplectation(); // Расчет финальной суммы для отображения на экране result

  function getResult() {
    let result = 0; //расчет стоимости наружных камер

    if (systemProps.cameraOutdoor != undefined) {
      result = result + systemProps.cameraOutdoor * prices.outdoorCamera;
    } //расчет стоимости панорамных камер


    if (systemProps.cameraPanoram != undefined) {
      result = result + systemProps.cameraPanoram * prices.panoramCamera;
    } //расчет стоимости внутренних камер


    if (systemProps.cameraIndoor != undefined) {
      if (systemProps.sound_need) {
        result = result + ((systemProps.cameraIndoor - systemProps.sound_need) * prices.indoorCamera + systemProps.sound_need * prices.indoorCameraWithSound);
      } else {
        result = result + systemProps.cameraIndoor * prices.indoorCamera;
      }
    } //расчет стоимости монтажа камер: отдельно внутри помещений, отдельно снаружи


    if (systemProps.complectation == "montage") {
      if (systemProps.cameraIndoor != undefined) {
        result = result + systemProps.cameraIndoor * prices.indoorCameraMontage;
      }

      if (systemProps.cameraOutdoor != undefined) {
        result = result + systemProps.cameraOutdoor * prices.outdoorCameraMontage;
      }

      if (systemProps.cameraPanoram != undefined) {
        result = result + systemProps.cameraPanoram * prices.outdoorCameraMontage;
      }
    } // расчет длины кабеля


    let objectCableLenght = Number(systemProps.objectWidth) + Number(systemProps.objectLength);
    let perimetralCableLenght = Number(systemProps.perimeterLength) + Number(systemProps.perimeterWidth); // стоимость кабеля
    // панорамные камеры

    if (systemProps.cameraPanoram != undefined) {
      result = result + perimetralCableLenght * prices.cable * systemProps.cameraPanoram;
    } // по периметру участка


    if (systemProps.camsPerimetralCount != undefined) {
      result = result + perimetralCableLenght * prices.cable * systemProps.camsPerimetralCount;
    } // внутри объекта


    if (systemProps.cameraIndoor != undefined) {
      result = result + objectCableLenght * prices.cable * systemProps.cameraIndoor;
    } // по периметру объекта (например дома, а не участка), равно количество outdoor - количество perimetral


    if (systemProps.cameraOutdoor != undefined) {
      if (systemProps.camsPerimetralCount != 0) {
        result = result + objectCableLenght * prices.cable * (systemProps.cameraOutdoor - systemProps.camsPerimetralCount);
      } else {
        result = result + objectCableLenght * prices.cable * systemProps.cameraOutdoor;
      }
    } // стоимость монтажа кабеля


    if (systemProps.complectation == "montage") {
      if (systemProps.cameraPanoram != undefined) {
        result = result + perimetralCableLenght * prices.montageCableOutdoor * systemProps.cameraPanoram;
      }

      if (systemProps.camsPerimetralCount != undefined) {
        result = result + perimetralCableLenght * prices.montageCableOutdoor * systemProps.camsPerimetralCount;
      }

      if (systemProps.cameraIndoor != undefined) {
        result = result + objectCableLenght * prices.montageCableIndoor * systemProps.cameraIndoor;
      }

      if (systemProps.cameraOutdoor != undefined) {
        if (systemProps.camsPerimetralCount != 0) {
          result = result + objectCableLenght * prices.montageCableOutdoor * (systemProps.cameraOutdoor - systemProps.camsPerimetralCount);
        } else {
          result = result + objectCableLenght * prices.montageCableOutdoor * systemProps.cameraOutdoor;
        }
      }
    } //стоимость комплекта для интернета


    if (systemProps.internet_need) {
      result = result + prices.complectInternet;

      if (systemProps.complectation == "montage") {
        result = result + prices.internetInstallation;
      }
    } //стоимость регистратора


    let camsTotal = systemProps.camsTotal;

    switch (camsTotal) {
      case camsTotal >= 1 && camsTotal <= 4:
        result = result + prices.registrator1_4;
        break;

      case camsTotal > 4 && camsTotal <= 8:
        result = result + prices.registrator5_8;
        break;

      case camsTotal > 8 && camsTotal <= 16:
        result = result + prices.registrator8_16;
        break;

      case camsTotal > 16:
        result = result + prices.registrator16more;
        break;
    } //расчет ибп


    switch (camsTotal) {
      case camsTotal >= 1 && camsTotal <= 4:
        result = result + prices.ibp1_4;
        break;

      case camsTotal > 4 && camsTotal <= 8:
        result = result + prices.ibp5_8;
        break;

      case camsTotal > 8 && camsTotal <= 12:
        result = result + prices.ibp5_8 + prices.ibp1_4;
        break;

      case camsTotal > 12 && camsTotal <= 16:
        result = result + prices.ibp5_8 + prices.ibp5_8;
        break;

      case camsTotal > 16 && camsTotal <= 20:
        result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp1_4;
        break;

      case camsTotal > 20 && camsTotal <= 24:
        result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8;
        break;

      case camsTotal > 24 && camsTotal <= 28:
        result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp1_4;
        break;

      case camsTotal > 28 && camsTotal <= 32:
        result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8;
        break;

      case camsTotal > 32:
        result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8;
        break;
    } //расчет архива HDD


    switch (systemProps.archieve) {
      case 7:
        if (camsTotal >= 1 && camsTotal <= 4) {
          result = result + prices.hardDisk1Tb;
        } else if (camsTotal > 4 && camsTotal <= 8) {
          result = result + prices.hardDisk1Tb;
        } else if (camsTotal > 8 && camsTotal <= 16) {
          result = result + prices.hardDisk2Tb;
        } else if (camsTotal > 16 && camsTotal <= 32) {
          result = result + prices.hardDisk4Tb;
        } else if (camsTotal > 32) {
          result = result + prices.hardDisk8Tb;
        }

        break;

      case 14:
        if (camsTotal >= 1 && camsTotal <= 4) {
          result = result + prices.hardDisk1Tb;
        } else if (camsTotal > 4 && camsTotal <= 8) {
          result = result + prices.hardDisk2Tb;
        } else if (camsTotal > 8 && camsTotal <= 16) {
          result = result + prices.hardDisk4Tb;
        } else if (camsTotal > 16 && camsTotal <= 32) {
          result = result + prices.hardDisk8Tb;
        } else if (camsTotal > 32) {
          result = result + prices.hardDisk12Tb;
        }

        break;

      case 30:
        if (camsTotal >= 1 && camsTotal <= 4) {
          result = result + prices.hardDisk2Tb;
        } else if (camsTotal > 4 && camsTotal <= 8) {
          result = result + prices.hardDisk4Tb;
        } else if (camsTotal > 8 && camsTotal <= 16) {
          result = result + prices.hardDisk8Tb;
        } else if (camsTotal > 16 && camsTotal <= 32) {
          result = result + prices.hardDisk12Tb;
        } else if (camsTotal > 32) {
          result = result + prices.hardDisk8Tb * 2;
        }

        break;
    }

    ; //добавление монтажного комплекта

    result = result + prices.complectMontage; //добавление настройки и юстировки

    if (systemProps.complectation == "montage") {
      result = result + prices.systemCustmization;
    }

    return result;
  } // запись результата в span


  function writeResult() {
    const resultSpan = document.querySelector('.result__main-price-number');
    resultSpan.innerHTML = getResult();
  }

  const prices = {
    indoorCamera: 2190,
    //EZ-HAC-T1A21P-0360B
    indoorCameraWithSound: 2890,
    //EZ-HAC-T5B20P-A-0360B
    outdoorCamera: 2890,
    //EZ-HAC-B5B20P-A-0280B
    panoramCamera: 28990,
    //DH-SD49225-HC-LA -28990
    indoorCameraMontage: 1600,
    outdoorCameraMontage: 2500,
    cable: 80,
    montageCableIndoor: 30,
    montageCableOutdoor: 40,
    hardDisk1Tb: 4100,
    hardDisk2Tb: 5500,
    hardDisk4Tb: 9400,
    hardDisk6Tb: 14800,
    hardDisk8Tb: 19500,
    hardDisk10Tb: 25900,
    hardDisk12Tb: 29800,
    systemCustmization: 2000,
    internetInstallation: 2500,
    complectInternet: 8750,
    complectMontage: 6050,
    registrator1_4: 6000,
    registrator5_8: 9000,
    registrator8_16: 16000,
    registrator16more: 32990,
    ibp1_4: 1300,
    ibp5_8: 2200
  };
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNjcmVlbkNvdW50ZXIiLCJwYWdlcyIsInF1ZXN0aW9ucyIsImNvbW1lbnRzIiwic3lzdGVtUHJvcHMiLCJuZWVkU291bmRFdmVudCIsImZhc3RMZXZlbENoYW5nZSIsInJhZGlvQ2hlY2tBY3RpdmUiLCJyYWRpb09uQ2hhbmdlIiwiZnVuY1NsaWRlcnMiLCJzaG93Q3VycmVudFNwaGVyZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZE5hdmlnYXRpb25Ub0J1dHRvbnMiLCJhZGRFdmVudE9uQWxsSW5wdXRzIiwiYWRkU2hvd1BlcmltZXRlciIsImFkZEdldENhbXNQZXJpbWV0cmFsIiwiYWRkU2hvd0hpZGVDb21tZW50RXZlbnQiLCJyZWZyZXNoQ29tbWVudCIsInNob3dIaWRlQ29tbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNob3dDb21tZW50QnV0dG9uIiwiY2xvc2VDb21tZW50QnV0dG9uIiwib25jbGljayIsImNvbW1lbnQiLCJjb21tZW50RGVza3RvcCIsIm9iamVjdFBhZ2UiLCJjdXJyZW50T2JqZWN0IiwidG9nZ2xlSGlkZUNsYXNzIiwiaW5uZXJIVE1MIiwiaWQiLCJzZXRUaW1lb3V0IiwiZWxlbSIsIm5hdmlnYXRpb24iLCJkaXJlY3Rpb24iLCJjdXJyZW50UGFnZSIsImhpZGUiLCJwYXJlbnRFbGVtZW50IiwibmV4dFBhZ2UiLCJzaG93Iiwid3JpdGVSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaFF1ZXN0aW9uIiwiY2hlY2tCdXR0b24iLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiZGlzcFByb3BlcnR5IiwicXVlc3Rpb24iLCJ0ZXh0Q29udGVudCIsImJ1dHRvbkZvcndhcmQiLCJjaGVja0lzQ2hvc2VuIiwiZGlzYWJsZWQiLCJpc1RydWUiLCJvYmplY3RSYWRpb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJhZGlvIiwiY2hlY2tlZCIsImxvY2F0aW9uUmFkaW9zIiwiY2FtZXJhY291bnRSYW5nZXMiLCJyYW5nZSIsInZhbHVlIiwiYXJjaGlldmVSYWRpb3MiLCJzb3VuZE5lZWRJbnB1dCIsInJlc2VydmVOZWVkIiwiaW50ZXJuZXROZWVkIiwic291bmROZWVkIiwiZmFzdEhpZ2giLCJmYXN0TWlkIiwiZmFzdExvdyIsImZhc3RPd24iLCJmYXN0T3duRmllbGQiLCJzcXVhcmVJbnB1dHMiLCJzcXVhcmVQZXJpbWV0ZXIiLCJzcXVhcmVPYmplY3RMb25nIiwic3F1YXJlT2JqZWN0V2lkdGgiLCJzcXVhcmVQZXJpbWV0ZXJMb25nIiwic3F1YXJlUGVyaW1ldGVyV2lkdGgiLCJjb250YWlucyIsImNvbXBsZWN0YXRpb25SYWRpb3MiLCJyYWRpb0l0ZW1zIiwiaXRlbSIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50UmFkaW8iLCJyZWZyZXNoUHJvcHMiLCJyZXNldFZhbHVlcyIsInNob3dQZXJpbWV0ZXIiLCJpbnB1dCIsImN1cnJlbnRTcGhlcmUiLCJkYXRhc2V0IiwiY2hvaXNlIiwiY2FtQ291bnRlcnMiLCJjb3VudGVyIiwiY3VycmVudENvdW50ZXIiLCJjb3VudFBhZ2UiLCJwZXJpbWV0ZXJSYW5nZXMiLCJzcWFyZVBlcmltZXRlciIsInBlcmltZXRlckhhcyIsInNxYXJlUGVyaW1ldGVyUmFuZ2VzIiwicmVmcmVzaFJhbmdlIiwiZ2V0Q2Ftc1BlcmltZXRyYWwiLCJjb3VudCIsIk51bWJlciIsImNhbUNvdW50IiwicmFuZ2VzQ2FtQ291bnQiLCJ3cml0ZUFsbENhbXNLaW5kIiwibG9jYXRpb24iLCJyZXNldFJhZGlvIiwiYXJjaGl2ZSIsInJhZGlvc0FyY2hpZXZlIiwiZG9wcGVsIiwiY2hlY2tib3hlc0RvcHBlbCIsImNoZWNrYm94IiwicmVzZXRDaGVja0JveCIsInJhbmdlRG9wcGVsIiwiY2hlY2tOZWVkU291bmQiLCJmYXN0IiwicmFkaW9zRmFzdCIsImhhc093bkFuc3dlciIsInNxdWFyZSIsInNxdWFyZVJhbmdlcyIsInNsaWRlcnMiLCJzbGlkZXIiLCJjdXJyZW50IiwibmV4dFNpYmxpbmciLCJwZXJjZW50VmFsdWUiLCJtYXgiLCJjb2xvciIsImJhY2tncm91bmQiLCJyZWNvcmRDaGVja2JveCIsInRvZ2dsZVJhbmdlIiwic291bmROZWVkUmFuZ2UiLCJvd25BbnN3ZXJBcmVhIiwiaGFzT3duIiwicXVpekJvZHkiLCJhbGxSYWRpb3MiLCJhbGxSYW5nZXMiLCJhbGxDaGVja2JveGVzIiwiZm9ybSIsImZvcm1TZW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkRXJyb3IiLCJmb3JtVmFsaWRhdGUiLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJvayIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImZvcm1WYWxpZEZpZWxkcyIsImZpZWxkIiwiZm9ybVJlbW92ZUVycm9yIiwidHlwZSIsImZvcm1BZGRFcnJvciIsInBob25lVGVzdCIsImVtYWlsVGVzdCIsInRlc3QiLCJvYmplY3QiLCJ3cml0ZU9iamVjdFBvc2l0aW9uIiwibG9jYXRpb25QYWdlIiwid3JpdGVDdXJyZW50Q2FtIiwiY291bnRjYW1lcmFQYWdlIiwicmFuZ2VzQ2FtZXJhY291bnQiLCJ1bmRlZmluZWQiLCJlbXR5T2JqIiwicHVycG9zZSIsInRvdGFsQ2FtcyIsInRvdGFsIiwia2V5IiwiZ2V0VG90YWxDYW1zb2YiLCJjbGFzc05hbWUiLCJyYW5nZXMiLCJ3cml0ZUNhbXNLaW5kIiwia2luZE5hbWUiLCJ3cml0ZUFyY2hpZXZlIiwiYXJjaGlldmVQYWdlIiwiZGF5cyIsIndyaXRlRG9wcGVsIiwib25jaGFuZ2UiLCJ3cml0ZWhvd0Zhc3QiLCJob3dGYXN0UGFnZSIsImhvd0Zhc3RSYWRpb3MiLCJ3cml0ZVZhbHVlIiwid3JpdGVTcXVhcmUiLCJzcXVhcmVQYWdlIiwicmFuZ2VzU3F1YXJlIiwibmFtZSIsIndyaXRlQ29tcGxlY3RhdGlvbiIsImNvbXBsZWN0YXRpb25QYWdlIiwiZ2V0UmVzdWx0IiwicmVzdWx0IiwiY2FtZXJhT3V0ZG9vciIsInByaWNlcyIsIm91dGRvb3JDYW1lcmEiLCJjYW1lcmFQYW5vcmFtIiwicGFub3JhbUNhbWVyYSIsImNhbWVyYUluZG9vciIsInNvdW5kX25lZWQiLCJpbmRvb3JDYW1lcmEiLCJpbmRvb3JDYW1lcmFXaXRoU291bmQiLCJjb21wbGVjdGF0aW9uIiwiaW5kb29yQ2FtZXJhTW9udGFnZSIsIm91dGRvb3JDYW1lcmFNb250YWdlIiwib2JqZWN0Q2FibGVMZW5naHQiLCJvYmplY3RXaWR0aCIsIm9iamVjdExlbmd0aCIsInBlcmltZXRyYWxDYWJsZUxlbmdodCIsInBlcmltZXRlckxlbmd0aCIsInBlcmltZXRlcldpZHRoIiwiY2FibGUiLCJjYW1zUGVyaW1ldHJhbENvdW50IiwibW9udGFnZUNhYmxlT3V0ZG9vciIsIm1vbnRhZ2VDYWJsZUluZG9vciIsImludGVybmV0X25lZWQiLCJjb21wbGVjdEludGVybmV0IiwiaW50ZXJuZXRJbnN0YWxsYXRpb24iLCJjYW1zVG90YWwiLCJyZWdpc3RyYXRvcjFfNCIsInJlZ2lzdHJhdG9yNV84IiwicmVnaXN0cmF0b3I4XzE2IiwicmVnaXN0cmF0b3IxNm1vcmUiLCJpYnAxXzQiLCJpYnA1XzgiLCJhcmNoaWV2ZSIsImhhcmREaXNrMVRiIiwiaGFyZERpc2syVGIiLCJoYXJkRGlzazRUYiIsImhhcmREaXNrOFRiIiwiaGFyZERpc2sxMlRiIiwiY29tcGxlY3RNb250YWdlIiwic3lzdGVtQ3VzdG1pemF0aW9uIiwicmVzdWx0U3BhbiIsImhhcmREaXNrNlRiIiwiaGFyZERpc2sxMFRiIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVTtBQUN0QixNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsQ0FDVixnQkFEVSxFQUVWLFNB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LENBNytCRCIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHNjcmVlbkNvdW50ZXIgPSAwO1xyXG4gICAgY29uc3QgcGFnZXMgPSBbXHJcbiAgICAgICAgJyNxdWl6X19wcmVsb2FkJyxcclxuICAgICAgICAnI29iamVjdCcsXHJcbiAgICAgICAgJyNsb2NhdGlvbicsXHJcbiAgICAgICAgJyNjYW1lcmFjb3VudCcsXHJcbiAgICAgICAgJyNhcmNoaWV2ZScsXHJcbiAgICAgICAgJyNkb3BwZWwnLFxyXG4gICAgICAgICcjaG93ZmFzdCcsXHJcbiAgICAgICAgJyNzcXVhcmUnLFxyXG4gICAgICAgICcjY29tcGxlY3RhdGlvbicsXHJcbiAgICAgICAgJyNxdWl6X19yZXN1bHQnLFxyXG4gICAgICAgICcjcXVpel9fZm9ybSdcclxuICAgIF07XHJcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBbXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJ9CU0LvRjyDQutCw0LrQvtCz0L4g0L7QsdGK0LXQutGC0LAg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNCwINGB0LjRgdGC0LXQvNCwINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjz8nLFxyXG4gICAgICAgICfQk9C00LUg0L3QsNGF0L7QtNC40YLRgdGPINC+0LHRitC10LrRgj8nLFxyXG4gICAgICAgICfQodC60L7Qu9GM0LrQviDQutCw0LzQtdGAINCS0Ysg0L/Qu9Cw0L3QuNGA0YPQtdGC0LUg0YPRgdGC0LDQvdC+0LLQuNGC0Yw/JyxcclxuICAgICAgICAn0JLRgNC10LzRjyDRhdGA0LDQvdC10L3QuNGPINCw0YDRhdC40LLQsDonLFxyXG4gICAgICAgICfQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC/0L7QttC10LvQsNC90LjRjyDQuiDRgdC40YHRgtC10LzQtSDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y86JyxcclxuICAgICAgICAn0JrQsNC6INGB0YDQvtGH0L3QviDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsD8nLFxyXG4gICAgICAgICfQn9GA0LjQvNC10YDQvdCw0Y8g0L/Qu9C+0YnQsNC00Ywg0L7QsdGK0LXQutGC0LAnLFxyXG4gICAgICAgICfQktCw0Lwg0L3Rg9C20LXQvSDQs9C+0YLQvtCy0YvQuSDQutC+0LzQv9C70LXQutGCINC40LvQuCDQvNC+0L3RgtCw0LYg0YHQuNGB0YLQtdC80Ysg0L/QvtC0INC60LvRjtGHPydcclxuICAgIF07XHJcbiAgICBjb25zdCBjb21tZW50cyA9IHtcclxuICAgICAgICAnI2NhbWVyYWNvdW50Jzoge1xyXG4gICAgICAgICAgICAnbm9jaG9zZW4nOiAn0JLRi9Cx0LXRgNC40YLQtSDQvtCx0YrQtdC60YInLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9faG91c2UnOiBgPHA+0JLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1INC00LvRjyDQt9Cw0LPQvtGA0L7QtNC90L7Qs9C+INC00L7QvNCwLCDQtNCw0YfQuCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90L4g0L/RgNC+0LLQvtC00L3Ri9C80Lgg0LggXHJcbiAgICAgICAgICAgINCx0LXRgdC/0YDQvtCy0L7QtNC90YvQvNC4INC60LDQvNC10YDQsNC80Lgg0YEg0YPQs9C70L7QvCDQvtCx0LfQvtGA0LAg0LTQviAxMDLCsCDQsCwg0YLQsNC6INC20LUg0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQvtC5ICBcclxuICAgICAgICAgICAg0YEg0LjQuiDQv9C+0LTRgdCy0LXRgtC60L7QuSDQvtGCIDEwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCi0LDQuiwg0LTQu9GPINC60L7QvdGC0YDQvtC70Y8g0L3QtdCx0L7Qu9GM0YjQvtCz0L4g0LTQstC+0YDQsCDQv9C+0LTQvtC50LTQtdGCIFxyXG4gICAgICAgICAgICDQv9GA0L7QstC+0LTQvdCw0Y8g0LrQsNC80LXRgNCwINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDRgSDQtNCw0LvRjNC90L7RgdGC0YzRjiDQvdC+0YfQvdC+0Lkg0YHRitC10LzQutC4IDIwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCd0LXRgdC60L7Qu9GM0LrQviDQutGD0L/QvtC70YzQvdGL0YUgV2ktRmkt0LLQuNC00LXQvtC60LDQvNC10YAgXHJcbiAgICAgICAgICAgINGBINGA0LDQt9GA0LXRiNC10L3QuNC10LwgMTA4MHAg0Lgg0L3QvtGH0L3Ri9C8INCy0LjQtNC10L3QuNC10Lwg0LTQviAzMCDQvNC10YLRgNC+0LIg0YHQvNC+0LPRg9GCINGB0LvQtdC00LjRgtGMINC30LAg0LHQvtC70YzRiNC+0Lkg0YLQtdGA0YDQuNGC0L7RgNC40LXQuS48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX2ZvbGRlcic6YDxwPtCU0LvRjyDRgdC60LvQsNC00YHQutC+0LPQviDQv9C+0LzQtdGJ0LXQvdC40Y8g0L/QvtC00L7QudC00YPRgiDQstC40LTQtdC+0LrQsNC80LXRgNGLINGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC+0YIgODUg0LTQviAxMTLCsCBcclxuICAgICAgICAgICAg0Lgg0L3QvtGH0L3Ri9C8INCy0LjQtNC10L3QuNC10LwgMjDigJQzMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QlNC70Y8g0YHQu9C10LbQtdC90LjRjyDQt9CwINC90LXRgdC60L7Qu9GM0LrQuNC80Lgg0YHQutC70LDQtNCw0LzQuCDQuNC70Lgg0L7QtNC90L7QuSDQsdC+0LvRjNGI0L7QuSDQv9C70L7RidCw0LTQutC+0Lkg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgNCDQv9GA0L7QstC+0LTQvdGL0LUg0LrQsNC80LXRgNGLLCBcclxuICAgICAgICAgICAg0L7QsdC10YHQv9C10YfQuNCy0LDRjtGJ0LjQtSDRgNCw0LfRgNC10YjQtdC90LjQtSAxMDgwcCDQuCDQvdC+0YfQvdGD0Y4g0YHRitC10LzQutGDINC00L4gMjAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0JLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1INC30LAg0L3QtdCx0L7Qu9GM0YjQuNC8INGB0LrQu9Cw0LTQvtC8INC80L7QttC10YIg0L7RgdGD0YnQtdGB0YLQstC70Y/RgtGMINC+0LTQvdCwIFxyXG4gICAgICAgICAgICDRhtC40LvQuNC90LTRgNC40YfQtdGB0LrQsNGPINCx0LXRgdC/0YDQvtCy0L7QtNC90LDRjyDQutCw0LzQtdGA0LAg0YEg0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQvtC5INC00L4gMzAg0LzQtdGC0YDQvtCyLjwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fc2hvcCc6YDxwPtCU0LvRjyDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0LIg0LzQsNCz0LDQt9C40L3QtSDQuNGB0L/QvtC70YzQt9GD0Y7RgtGB0Y8g0LrQsNC80LXRgNGLIFxyXG4gICAgICAgICAgICDRgSDQtNCw0LvRjNC90L7RgdGC0YzRjiDQvdC+0YfQvdC+0LPQviDQstC40LTQtdC90LjRjyAxMOKAlDMwINC80LXRgtGA0L7QsiDQuCDRg9Cz0LvQvtC8INC+0LHQt9C+0YDQsCA5MuKAlDExMsKwLjwvcD5cclxuICAgICAgICAgICAgPHA+0JTQu9GPINGB0LvQtdC20LXQvdC40Y8g0LfQsCDRgtC+0YDQs9C+0LLRi9C8INC30LDQu9C+0Lwg0LzQvtC20L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgMiDQuNC70LggMyDQv9C+0LLQvtGA0L7RgtC90YvQtSBXaS1GaS3QstC40LTQtdC+0LrQsNC80LXRgNGLLjwvcD5cclxuICAgICAgICAgICAgPHA+0JIg0LrQsNGB0YHQvtCy0L7QuSDQt9C+0L3QtSDRhtC10LvQtdGB0L7QvtCx0YDQsNC30L3QviDRg9GB0YLQsNC90L7QstC40YLRjCDQv9GA0L7QstC+0LTQvdC+0LUg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNC1INGBINC40LfQvtCx0YDQsNC20LXQvdC40LXQvCDQsiBGdWxsSEQt0LrQsNGH0LXRgdGC0LLQtS48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX3NjaG9vbCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC70LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuICAgICAgICBcclxuICAgICAgICAgICAgJ29iamVjdF9fb2ZmaWNlJzpgPHA+0J/RgNC+0LLQvtC00L3Ri9C1INGD0YHRgtGA0L7QudGB0YLQstCwINC00LvRjyDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0LfQsCDQvtGE0LjRgdC+0LwgXHJcbiAgICAgICAgICAgINC/0YDQtdC00YHRgtCw0LLQu9C10L3RiyDQutCw0LzQtdGA0LDQvNC4INGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC+0YIgOTIg0LTQviAxMDPCsCDQuCDQvdC+0YfQvdC+0Lkg0YHRitC10LzQutC+0LkgMjAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0JHQtdGB0L/RgNC+0LLQvtC00L3QsNGPINCy0LjQtNC10L7RgdC40YHRgtC10LzQsCDQstC60LvRjtGH0LDQtdGCINC80L7QtNC10LvQuCDRgSDQvtCx0LfQvtGA0L7QvCDQvdCwIDEwNuKAlDExMsKwINC4INC00LDQu9GM0L3QvtGB0YLRjNGOINC90L7Rh9C90L7Qs9C+INCy0LjQtNC10L3QuNGPIDEw4oCUMzAg0LzQtdGC0YDQvtCyLjwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fY29uc3RydWN0JzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC7LdCy0L4g0LrQsNC80LXRgCDQv9C+INC00LDQvdC90YvQvCDQutGA0LjRgtC10YDQuNGP0Lwg0Lgg0L/QvtC00LHQtdGA0LXQvCDQtNC70Y8g0LLQsNGBINC+0L/RgtC40LzQsNC70YzQvdC+0LUg0YDQtdGI0LXQvdC40LUuIFxyXG4gICAgICAgICAgICDQndCwINGB0YLRgNC+0LjRgtC10LvRjNC90L7QvCDQvtCx0YrQtdC60YLQtSDQutCw0Log0L/RgNCw0LLQuNC70L4g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINC60LDQvNC10YDQsCDQtNC70Y8g0LzQvtC90LjRgtC+0YDQuNC90LPQsCDQv9GA0L7RhtC10YHRgdCwINGB0YLRgNC+0LjRgtC10LvRjNGB0YLQstCwINGBICDQvtC90LvQsNC50L0g0YLRgNCw0L3RgdC70Y/RhtC40LXQuSDQsiDQvtGE0LjRgSDQt9Cw0YHRgtGA0L7QudGJ0LjQutCwINC40LvQuCDQvdCwINGB0LDQudGCINC60L7QvNC/0LDQvdC40LguIFxyXG4gICAgICAgICAgICDQmtCw0LzQtdGA0LAg0L3QsCDQstGK0LXQt9C0INC4INCy0YvQtdC30LQg0YLQtdGF0L3QuNC60Lgg0L3QsCDQvtCx0YrQtdC60YIg0LTQu9GPINC80L7QvdC40YLQvtGA0LjQvdCz0LAg0LLQstC+0LfQuNC80YvRhSDQuNC70Lgg0LLRi9Cy0L7Qt9C40LzRi9GFINCz0YDRg9C30L7Qsi48L3A+YCxcclxuICAgICAgICBcclxuICAgICAgICAgICAgJ29iamVjdF9fb3RoZXInOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQvtC40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19mbGF0JzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCwg0Lgg0LzRiyDQv9C+0LnQvNC10LwsINC00LvRjyDQutCw0LrQuNGFINC30LDQtNCw0Ycg0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LAsINCx0YPQtNGMINGC0L4g0YLRgNC10LHQvtCy0LDQvdC40Y8g0L/QviDQv9Cw0YHQv9C+0YDRgtGDIFxyXG4gICAgICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0L7QuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fdHN6aCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC+0LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnI2xvY2F0aW9uJzogYDxwPtCf0L7QvdC40LzQsNC90LjQtSDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNGPINC+0LHRitC10LrRgtCwINC/0L7Qt9Cy0L7Qu9C40YIg0YHRgNCw0LfRgyDRg9GH0LXRgdGC0Ywg0YLRgNCw0L3RgdC/0L7RgNGC0L3Ri9C1IFxyXG4gICAgICAgINGA0LDRgdGF0L7QtNGLINCyINC60L7QvNC80LXRgNGH0LXRgdC60L7QvCDQv9GA0LXQtNC70L7QttC10L3QuNC4LCDRgtC10Lwg0YHQsNC80YvQvCDQv9C+0LLRi9GB0LjQsiDQtdCz0L4g0YLQvtGH0L3QvtGB0YLRjC48L3A+YCxcclxuICAgICAgICAnI29iamVjdCc6IGA8cD7QodGC0L7QuNC80L7RgdGC0Ywg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC30LDQstC40YHQuNGCINC00LDQu9C10LrQviDQvdC1INGC0L7Qu9GM0LrQviDQvtGCINC60L7Qu9C40YfQtdGB0YLQstCwINC60LDQvNC10YAuINCU0LvRjyDQutCw0LbQtNC+0LPQviDRgtC40L/QsCDQvtCx0YrQtdC60YLQsCDQtdGB0YLRjCDRgdGC0LDQvdC00LDRgNGC0L3Ri9C5INC90LDQsdC+0YAg0LfQsNC00LDRhy4g0JzRiyDRgdC80L7QttC10Lwg0LHQvtC70LXQtSDRgtC+0YfQvdC+INC+0L/RgNC10LTQtdC70LjRgtGMINGF0LDRgNCw0LrRgtC10YDQuNGB0YLQuNC60Lgg0Lgg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCxcclxuICAgICAgICAg0LfQvdCw0Y8g0YLQuNC/INCy0LDRiNC10LPQviDQvtCx0YrQtdC60YLQsC4g0JIg0YDQtdC30YPQu9GM0YLQsNGC0LUg0YDQsNGB0YfRkdGCINGB0YLQvtC40LzQvtGB0YLQuCDQsdGD0LTQtdGCINC90LDQuNCx0L7Qu9C10LUg0YLQvtGH0L3Ri9C8LjwvcD5gLFxyXG4gICAgICAgICcjYXJjaGlldmUnOmA8cD7QntGCINC00LDQvdC90L7Qs9C+INC/0L7QutCw0LfQsNGC0LXQu9GPINC30LDQstC40YHQuNGCINC10LzQutC+0YHRgtGMICDQttC10YHRgtC60L7Qs9C+INC00LjRgdC60LAsINC80L7QtNC10LvRjCDRgNC10LPQuNGB0YLRgNCw0YLQvtGA0LAsINGH0YLQviDQsiDRgdCy0L7RjiDQvtGH0LXRgNC10LTRjCDRgdC60LDQttC10YLRjNGB0Y8g0L3QsCDRgdGC0L7QuNC80L7RgdGC0Lgg0YHQuNGB0YLQtdC80YsuIFxyXG4gICAgICAgINCX0LTRgNCw0LLQviDQvtGG0LXQvdC40YLQtSDQutC+0L3RgNC60YLQvdGD0Y4g0L/QvtGC0YDQtdCx0L3QvtGB0YLRjCDQsiDQutC+0LvQuNGH0LXRgdGC0LLQtSDQtNC90LXQuTwvcD5gLFxyXG4gICAgICAgICcjZG9wcGVsJzpgXHJcbiAgICAgICAgPHAgY2xhc3M9J2NvbW1lbnRfX2NvbnRlbnQtdGl0bGUnPtCj0YHRgtGA0L7QudGB0YLQstC+INGA0LXQt9C10YDQstC90L7Qs9C+INGN0LvQtdC60YLRgNC+0L/QuNGC0LDQvdC40Y88L3A+XHJcbiAgICAgICAgPHA+0K3RgtC+INGD0YHRgtGA0L7QudGB0YLQstC+INC/0L7Qt9Cy0L7Qu9C40YIgXHJcbiAgICAgICAg0YHQvtGF0YDQsNC90Y/RgtGMINGA0LDQsdC+0YLQvtGB0L/QvtGB0L7QsdC90L7RgdGC0Ywg0YHQuNGB0YLQtdC80Ysg0L/RgNC4INC+0YLQutC70Y7Rh9C10L3QuNC1INGN0LvQtdC60YLRgNC+0L/QuNGC0LDQvdC40Y88L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9J2NvbW1lbnRfX2NvbnRlbnQtdGl0bGUnPtCY0L3RgtC10YDQvdC10YIg0L3QsCDQvtCx0YrQtdC60YLQtTwvcD5cclxuICAgICAgICA8cD7QkiDQvdCw0YHRgtC+0Y/RidC10LUg0LLRgNC10LzRjyAg0YHQuNGB0YLQtdC80Ysg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC/0L7Qt9Cy0L7Qu9GP0Y7RgiDQvtGB0YPRidC10YHRgtCy0LvRj9GC0Ywg0LrQvtC90YLRgNC+0LvRjCDQt9CwINC/0YDQvtC40YHRhdC+0LTRj9GJ0LjQvCBcclxuICAgICAgICDQsiDRgNC10LbQuNC80LUg0YDQtdCw0LvRjNC90L7Qs9C+INCy0YDQtdC80LXQvdC4LiDQodC70LXQtNC40YLRjCDQt9CwINC+0LHRgdGC0LDQvdC+0LLQutC+0Lkg0LIg0LfQvtC90LUg0LLQuNC00LjQvNC+0YHRgtC4INCx0LXRgdC/0YDQvtCy0L7QtNC90L7QuSDQutCw0LzQtdGA0Ysg0LzQvtC20L3QviBcclxuICAgICAgICDRgSDQv9C+0LzQvtGJ0YzRjiDRgdC/0LXRhtC40LDQu9GM0L3QvtCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8uINCU0L7RgdGC0YPQvyDQuiDQuNC30L7QsdGA0LDQttC10L3QuNGOINC/0YDQvtCy0L7QtNC90YvRhSDQutCw0LzQtdGAINCyINC+0L3Qu9Cw0LnQvS3RgNC10LbQuNC80LUg0LLQvtC30LzQvtC20LXQvSBcclxuICAgICAgICDRh9C10YDQtdC3INC40L3RgtC10YDQvdC10YIg0L/QvtGB0YDQtdC00YHRgtCy0L7QvCDQstC40LTQtdC+0YDQtdCz0LjRgdGC0YDQsNGC0L7RgNCwLiDQldGB0LvQuCDRgyDQstCw0YEg0L3QtdGCINC00L7RgdGC0YPQv9CwIFxyXG4gICAgICAgINCyINC40L3RgtC10YDQvdC10YIg0L3QsCDQvtCx0YrQtdC60YLQtSwg0L3QviDQvdGD0LbQtdC9INGD0LTQsNC70LXQvdC90YvQuSDQv9GA0L7RgdC80L7RgtGALCDRg9C60LDQttC40YLQtSDQtNCw0L3QvdGL0Lkg0L/Rg9C90LrRgi48L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9J2NvbW1lbnRfX2NvbnRlbnQtdGl0bGUnPtCX0LDQv9C40YHRjCDQt9Cy0YPQutCwPC9wPlxyXG4gICAgICAgIDxwPtCS0YHQtSDQsdC10YHQv9GA0L7QstC+0LTQvdGL0LUg0YHQuNGB0YLQtdC80Ysg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC+0YHQvdCw0YnQtdC90Ysg0LLRgdGC0YDQvtC10L3QvdGL0Lwg0LzQuNC60YDQvtGE0L7QvdC+0Lwg0LTQu9GPINC30LDQv9C40YHQuCDQt9Cy0YPQutCwLiBcclxuICAgICAgICDQn9GA0L7QstC+0LTQvdGL0LUg0LrQsNC80LXRgNGLINGC0LDQutC40Lwg0YPRgdGC0YDQvtC50YHRgtCy0L7QvCDQvdC1INGA0LDRgdC/0L7Qu9Cw0LPQsNGO0YIsINC90L4g0Lgg0LTQu9GPINC90LjRhSDQvNC+0LbQvdC+INC+0YLQtNC10LvRjNC90L4g0L/RgNC40L7QsdGA0LXRgdGC0Lgg0Lgg0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LzQuNC60YDQvtGE0L7QvS48L3A+YCxcclxuICAgICAgICAnI2hvd2Zhc3QnOmA8cD7QodGA0L7QutC4INC90LUg0LLQu9C40Y/RjtGCINC90LAg0YHRgtC+0LjQvNC+0YHRgtGMINGB0LjRgdGC0LXQvNGLLCDQvdC+INGN0YLQviDQv9C+0LfQstCw0LvRj9C10YIg0L/QvtC00L7QsdGA0LDRgtGMINC+0L/RgtC40LzQsNC70YzQvdC+0LUg0L7QsdC+0YDRg9C00L7QstCw0L3QuNC1INC4INGB0L/Qu9Cw0L3QuNGA0L7QstCw0YLRjCDRgNCw0LHQvtGC0YMg0LzQvtC90YLQsNC20L3QuNC60L7Qsi48L3A+YCxcclxuICAgICAgICAnI3NxdWFyZSc6YDxwPtCj0LrQsNC20LjRgtC1INC/0LDRgNCw0LzQtdGC0YDRiyDQstCw0YjQtdCz0L4g0L7QsdGK0LXQutGC0LAg0LTQu9C40L3QvdGDINC4INGI0LjRgNC40L3Rgywg0Y3RgtC+INC/0L7Qt9Cy0L7Qu9C40YIg0L/RgNC10LTQstCw0YDQuNGC0LXQu9GM0L3QviDRgNCw0YHRh9C40YLQsNGC0Ywg0LTQu9C40L3RgyBcclxuICAgICAgICDQutCw0LHQtdC70YzQvdGL0YUg0YLRgNCw0YFjINC40LvQuCDRg9C60LDQttC40YLQtSDQv9GA0LjQvNC10YDQvdGD0Y4g0LTQu9C40L3RgyBcclxuICAgICAgICDQutCw0LHQtdC70Y8g0L7RgiDQutCw0LzQtdGA0Ysg0LTQviDQv9GA0LXQtNC/0L7Qu9Cw0LPQsNC10LzQvtCz0L4g0LzQtdGB0YLQsCDRg9GB0YLQsNC90L7QstC60Lgg0LfQsNC/0LjRgdGL0LLQsNGO0YnQtdCz0L4g0YPRgdGC0YDQvtC50YHRgtCy0LAuPC9wPmAsXHJcbiAgICAgICAgJyNjb21wbGVjdGF0aW9uJzogYDxwPtCt0YLQviDQvdC10L7QsdGF0L7QtNC40LzQviDQtNC70Y8g0YLQvtGH0L3QvtCz0L4g0YDQsNGB0YfQtdGC0LAg0L/QvtC70L3QvtCz0L4g0L/QtdGA0LXRh9C90Y8g0L7QsdC+0YDRg9C00L7QstCw0L3QuNGPOiDQtNC70Y8g0YDQsNGB0YfQtdGC0LAg0YHQuNGB0YLQtdC80YsgwqvQv9C+0LQg0LrQu9GO0YfCuy48L3A+YFxyXG4gICAgfVxyXG4gICAgbGV0IHN5c3RlbVByb3BzID0ge307XHJcbiAgICBuZWVkU291bmRFdmVudCgpO1xyXG4gICAgZmFzdExldmVsQ2hhbmdlKCk7XHJcbiAgICByYWRpb0NoZWNrQWN0aXZlKCk7XHJcbiAgICByYWRpb09uQ2hhbmdlKCk7XHJcbiAgICBmdW5jU2xpZGVycygpO1xyXG4gICAgc2hvd0N1cnJlbnRTcGhlcmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29iamVjdF9faG91c2UnKSk7XHJcbiAgICBhZGROYXZpZ2F0aW9uVG9CdXR0b25zKClcclxuICAgIGFkZEV2ZW50T25BbGxJbnB1dHMoKTtcclxuICAgIGFkZFNob3dQZXJpbWV0ZXIoKTtcclxuICAgIGFkZEdldENhbXNQZXJpbWV0cmFsKCk7XHJcbiAgICBhZGRTaG93SGlkZUNvbW1lbnRFdmVudCgpO1xyXG4gICAgcmVmcmVzaENvbW1lbnQoKTtcclxuXHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINC60L7QvNC80LXQvdGC0Ysg0LIg0LzQvtCx0LjQu9GM0L3QvtC5INCy0LXRgNGB0LjQuFxyXG4gICAgZnVuY3Rpb24gc2hvd0hpZGVDb21tZW50KCl7XHJcbiAgICAgICAgbGV0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJyk7XHJcbiAgICAgICAgY29tbWVudHMuY2xhc3NMaXN0LnRvZ2dsZSgnY29tbWVudHNfYWN0aXZlJylcclxuICAgIH1cclxuICAgIC8vINC90LDQstC10YHQuNGC0Ywg0L3QsCDQutC90L7Qv9C60YMg0LrQvtC80LzQtdC90YLQsCDQuCDQutGA0LXRgdGC0LjQulxyXG4gICAgZnVuY3Rpb24gYWRkU2hvd0hpZGVDb21tZW50RXZlbnQoKXtcclxuICAgICAgICBsZXQgc2hvd0NvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2NpcmNsZScpO1xyXG4gICAgICAgIGxldCBjbG9zZUNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHNfX2Nsb3NlJyk7XHJcbiAgICAgICAgc2hvd0NvbW1lbnRCdXR0b24ub25jbGljayA9IHNob3dIaWRlQ29tbWVudDtcclxuICAgICAgICBjbG9zZUNvbW1lbnRCdXR0b24ub25jbGljayA9IHNob3dIaWRlQ29tbWVudDtcclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjCDRgtC10LrRg9GJ0LjQuSDQutC+0LzQvNC10L3RgtCw0YDQuNC5XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoQ29tbWVudCgpe1xyXG4gICAgICAgIGxldCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLWNvbnRlbnQnKTtcclxuICAgICAgICBsZXQgY29tbWVudERlc2t0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fY29tbWVudC1ib2R5JylcclxuICAgICAgICBsZXQgb2JqZWN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvYmplY3QnKTtcclxuICAgICAgICBsZXQgY3VycmVudE9iamVjdCA9IG9iamVjdFBhZ2UucXVlcnlTZWxlY3RvcignaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gICAgICAgIHRvZ2dsZUhpZGVDbGFzcyhjb21tZW50RGVza3RvcCk7XHJcbiAgICAgICAgaWYoMCA8IHNjcmVlbkNvdW50ZXIgPCA5KXtcclxuICAgICAgICAgICAgaWYocGFnZXNbc2NyZWVuQ291bnRlcl0gPT0gJyNjYW1lcmFjb3VudCcpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50T2JqZWN0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gY29tbWVudHNbcGFnZXNbc2NyZWVuQ291bnRlcl1dW2N1cnJlbnRPYmplY3QuaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnREZXNrdG9wLmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXVtjdXJyZW50T2JqZWN0LmlkXTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudC5pbm5lckhUTUwgPSBjb21tZW50c1twYWdlc1tzY3JlZW5Db3VudGVyXV1bJ25vY2hvc2VuJ107XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudERlc2t0b3AuaW5uZXJIVE1MID0gY29tbWVudHNbcGFnZXNbc2NyZWVuQ291bnRlcl1dWydub2Nob3NlbiddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50LmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnREZXNrdG9wLmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KHRvZ2dsZUhpZGVDbGFzcyhjb21tZW50RGVza3RvcCksIDMwMDApO1xyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL9GB0LrRgNGL0YLRjCDQuCDQv9C+0LrQsNC30LDRgtGMINGN0LvQtdC80LXQvdGCXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVIaWRlQ2xhc3MoZWxlbSl7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/RhNGD0L3QutGG0LjQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgIGZ1bmN0aW9uIG5hdmlnYXRpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ2ZvcndhcmQnKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSA4P2hpZGUoY3VycmVudFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTpoaWRlKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlcisrO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNjcmVlbkNvdW50ZXIpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAvL9C/0LXRgNC10YXQvtC0INC90LAg0YHRgtGA0LDQvdC40YbRgyDRgSDQstC+0L/RgNC+0YHQsNC80LhcclxuICAgICAgICAgICAgICAgICAgICBzaG93KG5leHRQYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCwgJ2dyaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgOTogLy/Qv9C10YDQtdGF0L7QtCDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0YDQtdC30YPQu9GM0YLQsNGC0LBcclxuICAgICAgICAgICAgICAgICAgICBzaG93KG5leHRQYWdlLCAnZ3JpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3lzdGVtUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyhuZXh0UGFnZSwgJ2ZsZXgnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKCdiYWNrJyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGFnZXNbc2NyZWVuQ291bnRlcl19YCk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXIgPT0gMT9oaWRlKGN1cnJlbnRQYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk6aGlkZShjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXItLTtcclxuICAgICAgICAgICAgbGV0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSA4P3Nob3cobmV4dFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCAnZ3JpZCcpOnNob3cobmV4dFBhZ2UsICdmbGV4Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKDAgPCBzY3JlZW5Db3VudGVyIDwgOSl7XHJcbiAgICAgICAgICAgIHJlZnJlc2hRdWVzdGlvbigpO1xyXG4gICAgICAgICAgICBjaGVja0J1dHRvbigpO1xyXG4gICAgICAgICAgICByZWZyZXNoQ29tbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0L3QsNCy0LjQs9Cw0YbQuNC4INC90LAg0LrQvdC+0L/QutC4XHJcbiAgICBmdW5jdGlvbiBhZGROYXZpZ2F0aW9uVG9CdXR0b25zKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWxvYWRfX2J1dHRvbicpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdmb3J3YXJkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9mb3J3YXJkJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2ZvcndhcmQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19idXR0b25fZ2V0T2ZmZXInKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignZm9yd2FyZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19idXR0b25fYmFjaycpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdiYWNrJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fYnV0dG9uX2JhY2snKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignYmFjaycpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b25fYmFjaycpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdiYWNrJyk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbl9zZW5kT2ZmZXInKS5vbmNsaWNrID0gKCkgPT4gYWxlcnQoJ0Zvcm0gd2FzIHNlbnQhJyk7XHJcbiAgICB9XHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINGN0LvQtdC80LXQvdGCINC/0YDQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgIGZ1bmN0aW9uIGhpZGUoZWxlbSl7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93KGVsZW0sIGRpc3BQcm9wZXJ0eSl7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcFByb3BlcnR5O1xyXG4gICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB9ICAgIFxyXG4gICAgLy/QntCx0L3QvtCy0LjRgtGMINCy0L7Qv9GA0L7RgVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFF1ZXN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX3F1ZXN0aW9uLXRleHQnKTtcclxuICAgICAgICBxdWVzdGlvbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uc1tzY3JlZW5Db3VudGVyXTtcclxuICAgIH1cclxuICAgIC8v0LHQu9C+0LrQuNGA0L7QstC60LAv0YDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAg0LrQvdC+0L/QutC4XHJcbiAgICBmdW5jdGlvbiBjaGVja0J1dHRvbigpe1xyXG4gICAgICAgIGxldCBidXR0b25Gb3J3YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9mb3J3YXJkJyk7XHJcbiAgICAgICAgaWYoIWNoZWNrSXNDaG9zZW4oc2NyZWVuQ291bnRlcikpe1xyXG4gICAgICAgICAgICBidXR0b25Gb3J3YXJkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYnV0dG9uRm9yd2FyZC5kaXNhYmxlZCA9IGZhbHNlOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9C/0YDQvtCy0LXRgNC40YLRjCDQstGL0LHRgNCw0L0g0LvQuCDQstCw0YDQuNCw0L3RgiDQvdCwINGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0LVcclxuICAgIGZ1bmN0aW9uIGNoZWNrSXNDaG9zZW4oc2NyZWVuQ291bnRlcil7XHJcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IDA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICBzd2l0Y2gocGFnZXNbc2NyZWVuQ291bnRlcl0pe1xyXG4gICAgICAgICAgICBjYXNlICcjb2JqZWN0JzpcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RSYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcub2JqZWN0X19pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0UmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpIGlzVHJ1ZSsrfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIGNhc2UgJyNsb2NhdGlvbic6XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25SYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcubG9jYXRpb25fX2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtpZihyYWRpby5jaGVja2VkKSBpc1RydWUrK30pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNjYW1lcmFjb3VudCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FtZXJhY291bnRSYW5nZXMgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX3NsaWRlcicpO1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhY291bnRSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7aWYocmFuZ2UudmFsdWUgIT0gMCkgaXNUcnVlKys7fSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2FyY2hpZXZlJzpcclxuICAgICAgICAgICAgICAgIGxldCBhcmNoaWV2ZVJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgICAgIGFyY2hpZXZlUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpaXNUcnVlKys7fSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2RvcHBlbCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgc291bmROZWVkSW5wdXQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZF9yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc2VydmVOZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3Jlc2VydmVfbmVlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVybmV0TmVlZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNpbnRlcm5ldF9uZWVkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291bmROZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICAgICAgICAgIGlmKChzb3VuZE5lZWQuY2hlY2tlZCB8fCAhc291bmROZWVkLmNoZWNrZWQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHJlc2VydmVOZWVkLmNoZWNrZWQgfHwgIXJlc2VydmVOZWVkLmNoZWNrZWQpICYmICghc291bmROZWVkLmNoZWNrZWQgfHwgXHJcbiAgICAgICAgICAgICAgICAgICAgKHNvdW5kTmVlZC5jaGVja2VkICYmIHNvdW5kTmVlZElucHV0LnZhbHVlICE9IDApKSkgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2hvd2Zhc3QnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RIaWdoID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfaGlnaCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RNaWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9taWRkbGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0TG93ID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfbG93Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdE93biA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X293bicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RPd25GaWVsZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X2FyZWEnKTtcclxuICAgICAgICAgICAgICAgIGlmKGZhc3RIaWdoLmNoZWNrZWQgfHwgZmFzdE1pZC5jaGVja2VkIHx8IGZhc3RMb3cuY2hlY2tlZCB8fCAoZmFzdE93bi5jaGVja2VkICYmIGZhc3RPd25GaWVsZC52YWx1ZSAhPScnKSkgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI3NxdWFyZSc6IFxyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZUlucHV0cyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlUGVyaW1ldGVyID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxYXJlX19wZXJpbWV0cmFsJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlT2JqZWN0TG9uZyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtb2JqZWN0LWxvbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVPYmplY3RXaWR0aCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtb2JqZWN0LXdpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlUGVyaW1ldGVyTG9uZyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtcGVyaW1ldGVyLWxvbmcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVQZXJpbWV0ZXJXaWR0aCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUtcGVyaW1ldGVyLXdpZHRoJyk7XHJcbiAgICAgICAgICAgICAgICBpZihzcXVhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmVfX3BlcmltZXRyYWxfaGlkZGVuJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZU9iamVjdExvbmcudmFsdWUgIT0gMCAmJiBzcXVhcmVPYmplY3RXaWR0aCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIXNxdWFyZVBlcmltZXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlT2JqZWN0TG9uZy52YWx1ZSAhPSAwICYmIHNxdWFyZU9iamVjdFdpZHRoICE9IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxdWFyZVBlcmltZXRlckxvbmcudmFsdWUgIT0gMCAmJiBzcXVhcmVQZXJpbWV0ZXJXaWR0aC52YWx1ZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2NvbXBsZWN0YXRpb24nOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBsZWN0YXRpb25SYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxlY3RhdGlvbl9faW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGNvbXBsZWN0YXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmFkaW8uY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGlzVHJ1ZTtcclxuICAgIH1cclxuICAgIC8v0YDQsNC00LjQvtC60L3QvtC/0LrQuCDQktC+0L/RgNC+0YEgMVxyXG4gICAgLy/Qv9GA0L7QstC10YDQutCwINGA0LDQtNC40L7QutC90L7Qv9C+0Log0L3QsCBjaGVja2VkXHJcbiAgICBmdW5jdGlvbiByYWRpb0NoZWNrQWN0aXZlKCl7XHJcbiAgICAgICAgbGV0IHJhZGlvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdyYWRpbyddYCk7XHJcbiAgICAgICAgcmFkaW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0LjQstC10L3RgtCwINC/0L4g0LjQt9C80LXQvdC10L3QuNGOINGA0LDQtNC40L4g0L3QsCAxINGB0YLRgNCw0L3QuNGG0LVcclxuICAgIGZ1bmN0aW9uIHJhZGlvT25DaGFuZ2UoKXtcclxuICAgICAgICBsZXQgb2JqZWN0UmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9iamVjdF9faW5wdXQnKTtcclxuICAgICAgICBvYmplY3RSYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSYWRpbyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByYWRpb0NoZWNrQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUHJvcHModGhpcyk7XHJcbiAgICAgICAgICAgICAgICByZXNldFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0N1cnJlbnRTcGhlcmUoY3VycmVudFJhZGlvKTtcclxuICAgICAgICAgICAgICAgIHNob3dQZXJpbWV0ZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywg0LIg0LLQvtC/0YDQvtGB0LUg0L/RgNC+INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAg0L3Rg9C20L3Rg9GOINGB0YTQtdGA0YMg0L/RgNC40LzQtdC90LXQvdC40Y8sINGB0LrRgNGL0LIg0L3QtdC90YPQttC90L7QtVxyXG4gICAgZnVuY3Rpb24gc2hvd0N1cnJlbnRTcGhlcmUoaW5wdXQpe1xyXG4gICAgICAgIGxldCBjdXJyZW50U3BoZXJlID0gaW5wdXQuZGF0YXNldC5jaG9pc2U7XHJcbiAgICAgICAgbGV0IGNhbUNvdW50ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbWVyYS1jb3VudF9faXRlbScpO1xyXG4gICAgICAgIGNhbUNvdW50ZXJzLmZvckVhY2goY291bnRlciA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50ZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBjdXJyZW50Q291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYW1lcmEtY291bnRfXyR7Y3VycmVudFNwaGVyZX1gKTtcclxuICAgICAgICBjdXJyZW50Q291bnRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGMINCyIHNxdWFyZSDQv9C10YDQuNC80LXRgtGA0LDQu9C60LgsINC10YHQu9C4INC30L3QsNGH0LXQvdC40LUg0LjRhSDQsiDQutC+0LvQuNGH0LXRgdGC0LLQtSAhPSAwXHJcbiAgICBmdW5jdGlvbiBzaG93UGVyaW1ldGVyKCl7XHJcbiAgICAgICAgbGV0IGNvdW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW1lcmFjb3VudCcpO1xyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJSYW5nZXMgPSBjb3VudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnBlcmltZXRlcicpO1xyXG4gICAgICAgIGxldCBzcWFyZVBlcmltZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcWFyZV9fcGVyaW1ldHJhbCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJIYXMgPSAwO1xyXG4gICAgICAgIHBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgaWYocmFuZ2UudmFsdWUgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICBwZXJpbWV0ZXJIYXMrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYocGVyaW1ldGVySGFzICE9IDApe1xyXG4gICAgICAgICAgICBzcWFyZVBlcmltZXRlci5jbGFzc0xpc3QucmVtb3ZlKCdzcXVhcmVfX3BlcmltZXRyYWxfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHN5c3RlbVByb3BzWydzaG93UGVyaW1ldGVyJ10gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBkZWxldGUgc3lzdGVtUHJvcHNbJ3Nob3dQZXJpbWV0ZXInXTtcclxuICAgICAgICAgICAgZGVsZXRlIHN5c3RlbVByb3BzWydwZXJpbWV0ZXJMZW5ndGgnXTtcclxuICAgICAgICAgICAgZGVsZXRlIHN5c3RlbVByb3BzWydwZXJpbWV0ZXJXaWR0aCddO1xyXG4gICAgICAgICAgICBsZXQgc3FhcmVQZXJpbWV0ZXJSYW5nZXMgPSBzcWFyZVBlcmltZXRlci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBzcWFyZVBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnZhbHVlID0gMFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LmFkZCgnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0L/QvtGB0YfQuNGC0LDRgtGMINC60L7Qu9C40YfQtdGB0YLQstC+INC/0LXRgNC40LzQtdGC0YDQsNC70YzQvdGL0YUg0LrQsNC80LXRgCDQuCDQt9Cw0L/QuNGB0LDRgtGMINCyIHN5c3RlbVByb3BzXHJcbiAgICBmdW5jdGlvbiBnZXRDYW1zUGVyaW1ldHJhbCgpe1xyXG4gICAgICAgIGxldCBjb3VudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FtZXJhY291bnQnKTtcclxuICAgICAgICBsZXQgcGVyaW1ldGVyUmFuZ2VzID0gY291bnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZXJpbWV0ZXInKTtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIHBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgY291bnQgPSBjb3VudCArIE51bWJlcihyYW5nZS52YWx1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGNvdW50ICE9IDApe1xyXG4gICAgICAgICAgICBzeXN0ZW1Qcm9wc1snY2Ftc1BlcmltZXRyYWxDb3VudCddID0gY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoY291bnQgPT0gMCl7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzeXN0ZW1Qcm9wc1snY2Ftc1BlcmltZXRyYWxDb3VudCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzeXN0ZW1Qcm9wcyk7XHJcbiAgICB9XHJcbiAgICAvL9C/0L7QstC10YHQuNGC0Ywg0L3QsCDRgNGN0LnQvdC00LbQuFxyXG4gICAgZnVuY3Rpb24gYWRkR2V0Q2Ftc1BlcmltZXRyYWwoKXtcclxuICAgICAgICBsZXQgY291bnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYWNvdW50Jyk7XHJcbiAgICAgICAgbGV0IHBlcmltZXRlclJhbmdlcyA9IGNvdW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucGVyaW1ldGVyJyk7XHJcbiAgICAgICAgcGVyaW1ldGVyUmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGdldENhbXNQZXJpbWV0cmFsKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyDQv9C+0LLQtdGB0LjRgtGMINC90LAgcmFuZ2Ug0L/QtdGA0LjQvNC10YLRgNCw0LvQvtC6INCyIGNhbWVyYWNvdW50INGE0YPQvdC60YbQuNC4IHNob3dQZXJpbWV0ZXIg0L3QsCBpbnB1dFxyXG4gICAgZnVuY3Rpb24gYWRkU2hvd1BlcmltZXRlcigpe1xyXG4gICAgICAgIGxldCBjb3VudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FtZXJhY291bnQnKTtcclxuICAgICAgICBsZXQgcGVyaW1ldGVyUmFuZ2VzID0gY291bnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZXJpbWV0ZXInKTtcclxuICAgICAgICBwZXJpbWV0ZXJSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2hvd1BlcmltZXRlcik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v0YHQsdGA0L7RgdC40YLRjCDRgdGH0LXRgtGH0LjQutC4XHJcbiAgICBmdW5jdGlvbiByZXNldFZhbHVlcygpe1xyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSDQviDQutC+0LvQuNGH0LXRgdGC0LLQtSDRgdGH0LXRgtGH0LjQutC4INC60LDQvNC10YAg0YPQstC10YHRgtC4INC90LAgMFxyXG4gICAgICAgICAgICBsZXQgY2FtQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FtZXJhLWNvdW50Jyk7XHJcbiAgICAgICAgICAgIGxldCByYW5nZXNDYW1Db3VudCA9IGNhbUNvdW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgICAgIHJhbmdlc0NhbUNvdW50LmZvckVhY2gocmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgd3JpdGVBbGxDYW1zS2luZCgpO1xyXG4gICAgICAgICAgICAvL9C+0LHRitC10LrRgiAtINGB0LHRgNC+0YEg0YDQsNC00LjQvlxyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUmFkaW9zID0gbG9jYXRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICBsb2NhdGlvblJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0UmFkaW8ocmFkaW8pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSDQvtCxINCw0YDRhdC40LLQtSDRgdCx0YDQvtGB0LjRgtGMIHJhZGlvIFxyXG4gICAgICAgICAgICBsZXQgYXJjaGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmNoaWV2ZScpO1xyXG4gICAgICAgICAgICBsZXQgcmFkaW9zQXJjaGlldmUgPSBhcmNoaXZlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgcmFkaW9zQXJjaGlldmUuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldFJhZGlvKHJhZGlvKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEg0LTQvtC/INC+0L/RhtC40Lgg0YHQsdGA0L7RgdC40YLRjCDRh9C10LrQsdC+0LrRgdGLINC4IHJhbmdlINGB0LHRgNC+0YHQuNGC0Ywg0Lgg0YHQutGA0YvRgtGMXHJcbiAgICAgICAgICAgIGxldCBkb3BwZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9wcGVsJyk7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2JveGVzRG9wcGVsID0gZG9wcGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tY2hlY2snKTtcclxuICAgICAgICAgICAgY2hlY2tib3hlc0RvcHBlbC5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hlY2tCb3goY2hlY2tib3gpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgcmFuZ2VEb3BwZWwgPSBkb3BwZWwucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWRfcmFuZ2UnKTtcclxuICAgICAgICAgICAgcmFuZ2VEb3BwZWwudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICByZWZyZXNoUmFuZ2UocmFuZ2VEb3BwZWwpO1xyXG4gICAgICAgICAgICBjaGVja05lZWRTb3VuZCgpO1xyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSBob3dGYXN0INGB0LHRgNC+0YHQuNGC0Ywg0YDQsNC00LjQvlxyXG4gICAgICAgICAgICBsZXQgZmFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXN0Jyk7XHJcbiAgICAgICAgICAgIGxldCByYWRpb3NGYXN0ID0gZmFzdC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvJyk7XHJcbiAgICAgICAgICAgIHJhZGlvc0Zhc3QuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldFJhZGlvKHJhZGlvKTtcclxuICAgICAgICAgICAgICAgIGhhc093bkFuc3dlcigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSBzcXVhcmUg0YHQsdGA0L7RgdC40YLRjCByYW5nZVxyXG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxdWFyZScpO1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlUmFuZ2VzID0gc3F1YXJlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZS1zbGlkZXInKTtcclxuICAgICAgICAgICAgc3F1YXJlUmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4gcmFuZ2UudmFsdWUgPSAwKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDQvdCwINGB0LvQsNC50LTQtdGAXHJcbiAgICBmdW5jdGlvbiBmdW5jU2xpZGVycygpe1xyXG4gICAgICAgIGxldCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19zbGlkZXInKTtcclxuICAgICAgICBzbGlkZXJzLmZvckVhY2goc2xpZGVyID0+IHtcclxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hSYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/RgdCx0YDQvtGBINGA0LDQtNC40L5cclxuICAgIGZ1bmN0aW9uIHJlc2V0UmFkaW8oZWxlbSl7XHJcbiAgICAgICAgZWxlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL3Jlc2V0IGNoZWNrYm94XHJcbiAgICBmdW5jdGlvbiByZXNldENoZWNrQm94KGVsZW0pe1xyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy/QvtCx0L3QvtCy0LjRgtGMINC/0L7Qu9C30YPQvdC+0LpcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hSYW5nZShjdXJyZW50KXtcclxuICAgICAgICBjdXJyZW50Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IGN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgbGV0IHBlcmNlbnRWYWx1ZSA9IChjdXJyZW50LnZhbHVlL2N1cnJlbnQubWF4KSoxMDA7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgzLDgxLDE0NSwxKSAke3BlcmNlbnRWYWx1ZX0lLCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTc4KSAke3BlcmNlbnRWYWx1ZX0lKWBcclxuICAgICAgICBjdXJyZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIC8v0JLQvtC/0YDQvtGBIDQg0L3Rg9C20LXQvSDQt9Cy0YPQulxyXG4gICAgZnVuY3Rpb24gbmVlZFNvdW5kRXZlbnQoKXtcclxuICAgICAgICBsZXQgcmVjb3JkQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZCcpO1xyXG4gICAgICAgIHJlY29yZENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrTmVlZFNvdW5kKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hlY2tOZWVkU291bmQoKXtcclxuICAgICAgICBsZXQgcmVjb3JkQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZCcpO1xyXG4gICAgICAgIGxldCB0b2dnbGVSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3BwZWxfX3NvdW5kcmVjb3JkJyk7XHJcbiAgICAgICAgbGV0IHNvdW5kTmVlZFJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWRfcmFuZ2UnKTtcclxuICAgICAgICBpZihyZWNvcmRDaGVja2JveC5jaGVja2VkKXtcclxuICAgICAgICAgICAgdG9nZ2xlUmFuZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZG9wcGVsX19zb3VuZHJlY29yZF9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdG9nZ2xlUmFuZ2UuY2xhc3NMaXN0LmFkZCgnZG9wcGVsX19zb3VuZHJlY29yZF9oaWRkZW4nKTtcclxuICAgICAgICAgICAgc291bmROZWVkUmFuZ2UudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICByZWZyZXNoUmFuZ2Uoc291bmROZWVkUmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0JLQvtC/0YDQvtGBNSDRgdCy0L7QuSDQstCw0YDQuNCw0L3RgiDQvtGC0LLQtdGC0LBcclxuICAgICAgICAvL9C/0YDQvtCy0LXRgNC40YLRjCDRh9C10Log0YMg0YDQsNC00LjQviDRgdCy0L7QuSDQstCw0YDQuNCw0L3Rgiwg0LXRgdC70Lgg0LTQsCwg0YLQviDRg9C00LDQu9C40YLRjCDQutC70LDRgdGBINGB0LrRgNGL0YLQuNGPLCDQtdGB0LvQuCDQvdC10YIgLSDQtNC+0LHQsNCy0LjRgtGMXHJcbiAgICBmdW5jdGlvbiBoYXNPd25BbnN3ZXIoKXtcclxuICAgICAgICBsZXQgb3duQW5zd2VyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXN0X19vd25hbnN3ZXInKTtcclxuICAgICAgICBsZXQgaGFzT3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zhc3Rfb3duJyk7XHJcbiAgICAgICAgaWYoaGFzT3duLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICBvd25BbnN3ZXJBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2Zhc3RfX293bmFuc3dlcl9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgb3duQW5zd2VyQXJlYS5jbGFzc0xpc3QuYWRkKCdmYXN0X19vd25hbnN3ZXJfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/QvdCw0LLQtdGB0LjRgtGMINGN0YLRgyDRhNGD0L3QutGG0LjRjiDQvdCwINC40LfQvNC10L3QtdC90LjQtSDQstGB0LXRhSDRhy/QsSDQsiDQs9GA0YPQv9C/0LVcclxuICAgIGZ1bmN0aW9uIGZhc3RMZXZlbENoYW5nZSgpe1xyXG4gICAgICAgIGxldCByYWRpb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZhc3RfX2lucHV0YCk7XHJcbiAgICAgICAgcmFkaW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhc093bkFuc3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL9C+0LHRidC40Lkg0LjQstC10L3RgiDQvdCwINCy0YHQtSDQuNC90L/Rg9GC0Ysg0LLQvtC/0YDQvtGB0L7QsiBjaGVja0J1dHRvbigpIC0g0L/RgNC+0LLQtdGA0LjRgtGMLCBcclxuICAgIC8v0LXRgdGC0Ywg0LvQuCDQstGL0LHRgNCw0L3QvdGL0LUg0Lgg0LLQstC10LTQtdC90L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0Lgg0LXRgdC70Lgg0LXRgdGC0YwsXHJcbiAgICAvL9C4INC10YHQu9C4INC10YHRgtGMIC0g0YDQsNC30LHQu9C+0LrQuNGA0L7QstCw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIC8v0LjRidC10Lwg0YfQtdGA0LXQtyDRgNC+0LTQuNGC0LXQu9GPIC5xdWl6X19xdWVzdGlvbi1ib2R5LCDRh9GC0L7QsSDQvdC1INC30LDRhtC10L/QuNGC0Ywg0YHRgtGA0LDQvdC40YbRgyDRgSDRhNC+0YDQvNC+0LlcclxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50T25BbGxJbnB1dHMoKXtcclxuICAgICAgICBsZXQgcXVpekJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcXVlc3Rpb24tYm9keSAnKTtcclxuICAgICAgICBsZXQgYWxsUmFkaW9zID0gcXVpekJvZHkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbiAgICAgICAgYWxsUmFkaW9zLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjaGVja0J1dHRvbigpKX0pO1xyXG4gICAgICAgIGxldCBhbGxSYW5nZXMgPSBxdWl6Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFuZ2VcIl0nKTtcclxuICAgICAgICBhbGxSYW5nZXMuZm9yRWFjaChpdGVtID0+IHtpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY2hlY2tCdXR0b24oKSl9KTtcclxuICAgICAgICBsZXQgYWxsQ2hlY2tib3hlcyA9IHF1aXpCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgIGFsbENoZWNrYm94ZXMuZm9yRWFjaChpdGVtID0+IHtpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNoZWNrQnV0dG9uKCkpfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9Cy0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvNGLICAgXHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19mb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZm9ybVNlbmQpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZm9ybVNlbmQoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHZhbGlkRXJyb3IgPSBmb3JtVmFsaWRhdGUoZm9ybSk7XHJcbiAgICAgICAgaWYodmFsaWRFcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQndC10LrQvtGA0YDQtdC60YLQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0L/QvtC70LXQuTog0L/QvtC20LDQu9GD0LnRgdGC0LAsINC/0YDQvtCy0LXRgNGM0YLQtSDQutC+0YDRgNC10LrRgtC90L7RgdGC0Ywg0LTQsNC90L3Ri9GFJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZXN1bHQnLCBKU09OLnN0cmluZ2lmeSh7J2lubmVyJzogXCIzXCIsICdvYmplY3QnOiAnaG91c2UnLCAndGVzdCc6ICd0ZXN0J30pKTtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4uL2NvcmUucGhwJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7IC8vINC10YHQu9C4IEhUVFAt0YHRgtCw0YLRg9GBINCyINC00LjQsNC/0LDQt9C+0L3QtSAyMDAtMjk5XHJcbiAgICAgICAgICAgICAgICAvLyDQv9C+0LvRg9GH0LDQtdC8INGC0LXQu9C+INC+0YLQstC10YLQsCAo0YHQvC4g0L/RgNC+INGN0YLQvtGCINC80LXRgtC+0LQg0L3QuNC20LUpXHJcbiAgICAgICAgICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCLQntGI0LjQsdC60LAgSFRUUDogXCIgKyByZXNwb25zZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybVZhbGlkYXRlKGZvcm0pe1xyXG4gICAgICAgIGxldCBlcnJvciA9IDA7XHJcbiAgICAgICAgbGV0IGZvcm1WYWxpZEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5fdmFsaWQnKTtcclxuICAgICAgICBmb3JtVmFsaWRGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1SZW1vdmVFcnJvcihmaWVsZCk7XHJcbiAgICAgICAgICAgIHN3aXRjaChmaWVsZC50eXBlKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZpZWxkLnZhbHVlID09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IrKztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAndGVsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZihwaG9uZVRlc3QoZmllbGQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IrKztcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVtYWlsVGVzdChmaWVsZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQWRkRXJyb3IoZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICAgICAgICAgICAgICBpZighZmllbGQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1BZGRFcnJvcihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtQWRkRXJyb3IoaW5wdXQpe1xyXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnX2VycicpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ19lcnInKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1SZW1vdmVFcnJvcihpbnB1dCl7XHJcbiAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdfZXJyJyk7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnX2VycicpO1xyXG4gICAgfVxyXG4gICAgLy8rNzkyNjEyMzQ1NjdcclxuICAgIGZ1bmN0aW9uIHBob25lVGVzdChpbnB1dCl7XHJcbiAgICAgICAgcmV0dXJuICEvXigoOHxcXCs3KVtcXC0gXT8pPyhcXCg/XFxkezN9XFwpP1tcXC0gXT8pP1tcXGRcXC0gXXs3LDEwfSQvLnRlc3QoaW5wdXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLyovLyDQn9GA0L7QstC10YDQutCwINGC0LXQu9C10YTQvtC90LAg0L3QsCDRgdC+0L7RgtCy0LXRgtGB0YLQstC40LUg0LLQuNC00YM6XHJcbiAgICAvLyA4OTI2MTIzNDU2N1xyXG4gICAgLy8gNzkyNjEyMzQ1NjdcclxuICAgIC8vICs3IDkyNiAxMjMgNDUgNjdcclxuICAgIC8vIDgoOTI2KTEyMy00NS02N1xyXG4gICAgLy8gMTIzLTQ1LTY3XHJcbiAgICAvLyA5MjYxMjM0NTY3XHJcbiAgICAvLyA3OTI2MTIzNDU2N1xyXG4gICAgLy8gKDQ5NSkxMjM0NTY3XHJcbiAgICAvLyAoNDk1KSAxMjMgNDUgNjdcclxuICAgIC8vIDg5MjYxMjM0NTY3XHJcbiAgICAvLyA4LTkyNi0xMjMtNDUtNjdcclxuICAgIC8vIDggOTI3IDEyMzQgMjM0XHJcbiAgICAvLyA4IDkyNyAxMiAxMiA4ODhcclxuICAgIC8vIDggOTI3IDEyIDU1NSAxMlxyXG4gICAgLy8gOCA5MjcgMTIzIDggMTIzKi9cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZW1haWxUZXN0KGlucHV0KXtcclxuICAgICAgICByZXR1cm4gIS9eWy1hLXowLTkhIyQlJicqKy89P15fYHt8fX5dKyg/OlxcLlstYS16MC05ISMkJSYnKisvPT9eX2B7fH1+XSspKkAoPzpbYS16MC05XShbLWEtejAtOV17MCw2MX1bYS16MC05XSk/XFwuKSooPzphZXJvfGFycGF8YXNpYXxiaXp8Y2F0fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8am9ic3xtaWx8bW9iaXxtdXNldW18bmFtZXxuZXR8b3JnfHByb3x0ZWx8dHJhdmVsfFthLXpdW2Etel0pJC8udGVzdChpbnB1dC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gIS9eKCgoWzAtOUEtWmEtel17MX1bLTAtOUEtelxcLl17MSx9WzAtOUEtWmEtel17MX0pfChbMC050JAt0K/QsC3Rj117MX1bLTAtOdCQLdGPXFwuXXsxLH1bMC050JAt0K/QsC3Rj117MX0pKUAoWy0wLTlBLVphLXpdezEsfVxcLil7MSwyfVstQS1aYS16XXsyLH0pJC8udGVzdChpbnB1dC52YWx1ZSk7XHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8g0KHQsdC+0YAg0LTQsNC90L3Ri9GFINCyINC+0LHRitC10LrRgiBzeXN0ZW1Qcm9wcy4g0J7RgdGD0YnQtdGB0YLQstC70Y/QtdGC0YHRjyDQv9GA0Lgg0LrQvtC20LTQvtC8INC90LDQttCw0YLQuNC4INC60L3QvtC/0LrQuCAo0LfQsNGI0LjRgiDQsiDRhNGD0L3QutGG0LjRjiDQvdCw0LLQuNCz0LDRhtC40LgpLlxyXG4gICAgLy8gMS4g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQvtCx0YrQtdC60YLQsCAtINC30LDRiNC40YLQviDQsiDQuNC30LzQtdC90LXQvdC40LUg0YDQsNC00LjQviDRgdGC0YDQsNC90LjRhtGLICNvYmplY3QuINCe0LHQvdGD0LvRj9C10YIgc3lzdGVtUHJvcHMgKyDQt9Cw0L/QuNGB0YvQstCw0LXRgiDQvdC+0LLRi9C5INC+0LHRitC10LrRglxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFByb3BzKG9iamVjdCl7XHJcbiAgICAgICAgc3lzdGVtUHJvcHMgPSB7fTtcclxuICAgICAgICBzeXN0ZW1Qcm9wc1snb2JqZWN0J10gPSBvYmplY3QuZGF0YXNldC5jaG9pc2U7XHJcbiAgICB9XHJcbiAgICAvLyAyLiDQntC/0YDQtdC00LXQu9C10L3QuNC1INC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40Y8uINCX0LDQv9C40YHRi9Cy0LDQtdGC0YHRjyDQsiBzeXN0ZW1Qcm9wc1snbG9jYXRpb24nXS4g0J7QsdC90L7QstC70Y/QtdGC0YHRjyDQv9GA0Lgg0YHQvNC10L3QtSDRgNCw0LTQuNC+INC60L3QvtC/0LrQuCDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAvLyAjbG9jYXRpb24uIFxyXG4gICAgZnVuY3Rpb24gd3JpdGVPYmplY3RQb3NpdGlvbigpe1xyXG4gICAgICAgIGxldCBsb2NhdGlvblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcclxuICAgICAgICBsZXQgbG9jYXRpb25SYWRpb3MgPSBsb2NhdGlvblBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmxvY2F0aW9uX19pbnB1dCcpO1xyXG4gICAgICAgIGxvY2F0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtUHJvcHNbJ2xvY2F0aW9uJ10gPSB0aGlzLmRhdGFzZXQubG9jYXRpb247XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHdyaXRlT2JqZWN0UG9zaXRpb24oKTsgICAgIFxyXG4gICAgLy8gMy4g0JrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgC4g0J3QsNCy0LXRiNC40LLQsNC10Lwg0L3QsCDQstGB0LUgcmFuZ2Ug0LIgI2NhbWVyYWNvdW50INC90LAgb25pbnB1dCDQt9Cw0L/QuNGB0Ywg0LIgc3lzdGVtUHJvcHNbY2Ftc0NvdW50XVt0aGlzLmRhdGFzZXQucHVycG9zZS5cclxuICAgIC8vINCf0L7RgdC70LUg0LrQsNC20LTQvtCz0L4g0LjQt9C80LXQvdC10L3QuNGPINC/0LXRgNC10YHRh9C40YLRi9Cy0LDRjtGC0YHRjyDQstGB0LUg0YHQvtGB0YLQsNCy0LvRj9GO0YnQuNC1INC/0L7QtNC+0LHRitC10LrRgtCwINC4INCyIHN5c3RlbVByb3BzW0NhbXNUb3RhbF0g0LfQsNC/0LjRgdGL0LLQsNC10LwgXHJcbiAgICAvLyDRgdGD0LzQvNCw0YDQvdC+0LUg0YfQuNGB0LvQviDQutCw0LzQtdGAXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHdyaXRlQ3VycmVudENhbSgpe1xyXG4gICAgICAgIGxldCBjb3VudGNhbWVyYVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FtZXJhY291bnQnKTtcclxuICAgICAgICBsZXQgcmFuZ2VzQ2FtZXJhY291bnQgPSBjb3VudGNhbWVyYVBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19zbGlkZXInKTtcclxuICAgICAgICByYW5nZXNDYW1lcmFjb3VudC5mb3JFYWNoKCByYW5nZSA9PiB7XHJcbiAgICAgICAgICAgIHJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmKHN5c3RlbVByb3BzWydjYW1zQ291bnQnXSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW10eU9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzWydjYW1zQ291bnQnXSA9IGVtdHlPYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnZhbHVlICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzWydjYW1zQ291bnQnXVt0aGlzLmRhdGFzZXQucHVycG9zZV0gPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3lzdGVtUHJvcHNbJ2NhbXNDb3VudCddW3RoaXMuZGF0YXNldC5wdXJwb3NlXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvdGFsQ2FtcygpO1xyXG4gICAgICAgICAgICAgICAgd3JpdGVBbGxDYW1zS2luZCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3cml0ZUN1cnJlbnRDYW0oKTtcclxuICAgIGZ1bmN0aW9uIHRvdGFsQ2Ftcygpe1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gc3lzdGVtUHJvcHNbJ2NhbXNDb3VudCddKXtcclxuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIE51bWJlcihzeXN0ZW1Qcm9wc1snY2Ftc0NvdW50J11ba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN5c3RlbVByb3BzWydjYW1zVG90YWwnXSA9IHRvdGFsO1xyXG4gICAgfVxyXG4gICAgLy8g0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L4g0L7Qv9GA0LXQtNC10LvRj9C10YLRgdGPINC60L7Qu9C40YfQtdGB0YLQstC+INCy0L3Rg9GC0YDQtdC90L3QuNGFLCDQstC90LXRiNC90LjRhSDQuCDQv9Cw0L3QvtGA0LDQvNC90YvRhSDQutCw0LzQtdGALiDQlNC70Y8g0Y3RgtC+0LPQviDQtNC10LvQsNC10Lwg0L/QtdGA0LXQsdC+0YDQutGDINC/0L4g0LrQu9Cw0YHRgdCw0LwgXHJcbiAgICAvLyAuY2FtZXJhSW5kb29yLCAuY2FtZXJhT3V0ZG9vciDQuCAuY2FtZXJhUGFub3JhbVxyXG4gICAgLy8g0YTRg9C90LrRhtC40Y8g0L/QviDQutC70LDRgdGB0YMg0L/RgNC+0LLQtdGA0Y/QtdGCINC60LDQttC00YvQuSDQuNC90L/Rg9GCINC4INC30LDQv9C40YHRi9Cy0LDQtdGCINC10LPQviDQt9C90LDRh9C10L3QuNC1INCyIHRvdGFsLCDQstC+0LfQstGA0LDRidCw0LXRgiB0b3RhbFxyXG4gICAgZnVuY3Rpb24gZ2V0VG90YWxDYW1zb2YoY2xhc3NOYW1lKXtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGxldCBjb3VudGNhbWVyYVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FtZXJhY291bnQnKTtcclxuICAgICAgICBsZXQgcmFuZ2VzID0gY291bnRjYW1lcmFQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lKTtcclxuICAgICAgICByYW5nZXMuZm9yRWFjaCggcmFuZ2UgPT4ge3RvdGFsID0gdG90YWwgKyBOdW1iZXIocmFuZ2UudmFsdWUpO30pXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gd3JpdGVDYW1zS2luZChraW5kTmFtZSwgY2xhc3NOYW1lKXtcclxuICAgICAgICBpZihnZXRUb3RhbENhbXNvZihjbGFzc05hbWUpID09IDApe1xyXG4gICAgICAgICAgICBkZWxldGUgc3lzdGVtUHJvcHNba2luZE5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBzeXN0ZW1Qcm9wc1traW5kTmFtZV0gPSBnZXRUb3RhbENhbXNvZihjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0YTRg9C90LrRhtC40Y8g0L/RgNC4INC40LfQvNC10L3QtdC90LjQuCDQu9GO0LHQvtCz0L4g0LjQtyByYW5nZSDQvdCwICNjYW1lcmFjb3VudCDQv9C10YDQtdC30LDQv9C40YHRi9Cy0LDQtdGCINC30L3QsNGH0LXQvdC40Y8g0LIg0LzQsNGB0YHQuNCy0LUuXHJcbiAgICAvL9Cd0LDQstC10YHQuNC8INC10LUg0YLQsNC6INC20LUg0LIgcmVzZXRWYWx1ZXMg0L/QvtGB0LvQtSDQvtCx0L3Rg9C70LXQvdC40Y8g0LLRgdC10YUgcmFuZ2Ug0LIg0YHRh9C10YLRh9C40LrQsNGFINC60LDQvNC10YBcclxuICAgIGZ1bmN0aW9uIHdyaXRlQWxsQ2Ftc0tpbmQoKXtcclxuICAgICAgICB3cml0ZUNhbXNLaW5kKCdjYW1lcmFJbmRvb3InLCAnLmNhbWVyYUluZG9vcicpO1xyXG4gICAgICAgIHdyaXRlQ2Ftc0tpbmQoJ2NhbWVyYU91dGRvb3InLCAnLmNhbWVyYU91dGRvb3InKTtcclxuICAgICAgICB3cml0ZUNhbXNLaW5kKCdjYW1lcmFQYW5vcmFtJywgJy5jYW1lcmFQYW5vcmFtJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIDQuINCT0LvRg9Cx0LjQvdCwINGF0YDQsNC90LXQvdC40Y8g0LDRgNGF0LjQstCwLiDQl9Cw0L/QuNGB0YvQstCw0LXRgtGB0Y8g0LIgc3lzdGVtUHJvcHNbJ2FyY2hpZXZlJ11cclxuICAgIGZ1bmN0aW9uIHdyaXRlQXJjaGlldmUoKXtcclxuICAgICAgICBsZXQgYXJjaGlldmVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FyY2hpZXZlJyk7XHJcbiAgICAgICAgbGV0IGFyY2hpZXZlUmFkaW9zID0gYXJjaGlldmVQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcmNoaWV2ZV9faW5wdXQnKTtcclxuICAgICAgICBhcmNoaWV2ZVJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzWydhcmNoaWV2ZSddID0gTnVtYmVyKHRoaXMuZGF0YXNldC5kYXlzKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgd3JpdGVBcmNoaWV2ZSgpO1xyXG4gICAgLy8gNS4g0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0YsuINCX0LDQv9C40YHRi9Cy0LDQtdGC0YHRjyDQsiBzeXN0ZW1Qcm9wc1sncmVzZXJ2ZV9uZWVkJ10gc3lzdGVtUHJvcHNbJ2ludGVybmV0X25lZWQnXSBzeXN0ZW1Qcm9wc1snc291bmRfbmVlZF9jb3VudCddXHJcbiAgICBmdW5jdGlvbiB3cml0ZURvcHBlbCgpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlcnZlX25lZWQnKS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHN5c3RlbVByb3BzWydyZXNlcnZlX25lZWQnXSA9IHRoaXMuY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludGVybmV0X25lZWQnKS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHN5c3RlbVByb3BzWydpbnRlcm5ldF9uZWVkJ10gPSB0aGlzLmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkJykub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWRfcmFuZ2UnKS5vbmNoYW5nZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtUHJvcHNbJ3NvdW5kX25lZWQnXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzeXN0ZW1Qcm9wc1snc291bmRfbmVlZCddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3JpdGVEb3BwZWwoKTtcclxuICAgIC8vIDYuINCh0YDQvtGH0L3QvtGB0YLRjC4g0JfQsNC/0LjRgdGL0LLQsNC10YLRgdGPINC70LjQsdC+INC30L3QsNGH0LXQvdC40LUg0LjQtyBkYXRhINC00LvRjyDQv9C10YDQstGL0YUgMyDRgNCw0LTQuNC+LCDQu9C40LHQviDRgtC10LrRgdGC0L7QvCDRgdCy0L7QuSDQvtGC0LLQtdGCINCyIHN5c3RlbVByb3BzWydob3dmYXN0J11cclxuICAgIGZ1bmN0aW9uIHdyaXRlaG93RmFzdCgpe1xyXG4gICAgICAgIGxldCBob3dGYXN0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3dmYXN0Jyk7XHJcbiAgICAgICAgbGV0IGhvd0Zhc3RSYWRpb3MgPSBob3dGYXN0UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuZmFzdF9faW5wdXQnKTtcclxuICAgICAgICBob3dGYXN0UmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhc2V0LmZhc3QgIT0gJ293bicpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzWydob3dmYXN0J10gPSB0aGlzLmRhdGFzZXQuZmFzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zhc3RfYXJlYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiB3cml0ZVZhbHVlKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzWydob3dmYXN0J10gPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHdyaXRlaG93RmFzdCgpO1xyXG4gICAgLy8gNy4g0J/Qu9C+0YnQsNC00Ywg0L7QsdGK0LXQutGC0LAuINCX0L3QsNGH0LXQvdC40Y8g0YEg0YDRjdC50L3QtNC2INC30LDQv9C40YHRi9Cy0LDRjtGC0YHRjyDQsiBzeXN0ZW1Qcm9wc1snb2JqZWN0V2lkdGgnXSBzeXN0ZW1Qcm9wc1snb2JqZWN0TGVuZ3RoJ10g0LhcclxuICAgIC8vIHN5c3RlbVByb3BzWydwZXJpbWV0ZXJXaWR0aCddIHN5c3RlbVByb3BzWydwZXJpbWV0ZXJMZW5ndGgnXS4g0J/RgNC4INC+0LHQvdGD0LvQtdC90LjQuCDQt9C90LDRh9C10L3QuNGPINC40Lcg0LzQsNGB0YHQuNCy0LAg0YPQtNCw0LvRj9GO0YLRgdGPLCBcclxuICAgIC8vINGC0LDQuiDQttC1INGD0LTQsNC70Y/RjtGC0YHRjyDQt9C90LDRh9C10L3QuNGPIHN5c3RlbVByb3BzWydwZXJpbWV0ZXJXaWR0aCddIHN5c3RlbVByb3BzWydwZXJpbWV0ZXJMZW5ndGgnXSwg0LXRgdC70Lgg0YPQstC10YHRgtC4INCyIDAg0LrQvtC70LjRh9C10YHRgtCy0L4gXHJcbiAgICAvLyDQv9C+INC/0LXRgNC40LzQtdGC0YDRgyAo0YTRg9C90LrRhtC40Y8g0YPQtNCw0LvQtdC90LjRjyDQvdCw0LLQtdGI0LDQvdCwINCyIHNob3dQZXJpbWV0ZXIoKSlcclxuICAgIGZ1bmN0aW9uIHdyaXRlU3F1YXJlKCl7XHJcbiAgICAgICAgbGV0IHNxdWFyZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3F1YXJlJyk7XHJcbiAgICAgICAgbGV0IHJhbmdlc1NxdWFyZSA9IHNxdWFyZVBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19zbGlkZXInKTtcclxuICAgICAgICByYW5nZXNTcXVhcmUuZm9yRWFjaCggcmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnZhbHVlICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzW3RoaXMuZGF0YXNldC5uYW1lXSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzeXN0ZW1Qcm9wc1t0aGlzLmRhdGFzZXQubmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHdyaXRlU3F1YXJlKCk7XHJcbiAgICAvLyA4LtCa0L7QvNC/0LvQtdC60YLQsNGG0LjRjy4g0JTQstCwINCy0LDRgNC40LDQvdGC0LAgY29tcGxlY3QvbW9udGFnZS4g0KHQvtCx0YvRgtC40Y8g0L3QsNCy0LXRiNCw0L3RiyDQvdCwINGA0LDQtNC40L4g0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgZnVuY3Rpb24gd3JpdGVDb21wbGVjdGF0aW9uKCl7XHJcbiAgICAgICAgbGV0IGNvbXBsZWN0YXRpb25QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbXBsZWN0YXRpb24nKTtcclxuICAgICAgICBsZXQgY29tcGxlY3RhdGlvblJhZGlvcyA9IGNvbXBsZWN0YXRpb25QYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGVjdGF0aW9uX19pbnB1dCcpO1xyXG4gICAgICAgIGNvbXBsZWN0YXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9wc1snY29tcGxlY3RhdGlvbiddID0gdGhpcy5kYXRhc2V0Lm5hbWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHdyaXRlQ29tcGxlY3RhdGlvbigpOyAgIFxyXG5cclxuICAgIC8vINCg0LDRgdGH0LXRgiDRhNC40L3QsNC70YzQvdC+0Lkg0YHRg9C80LzRiyDQtNC70Y8g0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQvdCwINGN0LrRgNCw0L3QtSByZXN1bHRcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSZXN1bHQoKXtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuXHJcbiAgICAgICAgLy/RgNCw0YHRh9C10YIg0YHRgtC+0LjQvNC+0YHRgtC4INC90LDRgNGD0LbQvdGL0YUg0LrQsNC80LXRgFxyXG4gICAgICAgIGlmKHN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3IgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgc3lzdGVtUHJvcHMuY2FtZXJhT3V0ZG9vcipwcmljZXMub3V0ZG9vckNhbWVyYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/RgNCw0YHRh9C10YIg0YHRgtC+0LjQvNC+0YHRgtC4INC/0LDQvdC+0YDQsNC80L3Ri9GFINC60LDQvNC10YBcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFQYW5vcmFtICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHN5c3RlbVByb3BzLmNhbWVyYVBhbm9yYW0qcHJpY2VzLnBhbm9yYW1DYW1lcmE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v0YDQsNGB0YfQtdGCINGB0YLQvtC40LzQvtGB0YLQuCDQstC90YPRgtGA0LXQvdC90LjRhSDQutCw0LzQtdGAXHJcbiAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhSW5kb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKHN5c3RlbVByb3BzLnNvdW5kX25lZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgKChzeXN0ZW1Qcm9wcy5jYW1lcmFJbmRvb3IgLSBzeXN0ZW1Qcm9wcy5zb3VuZF9uZWVkKSpwcmljZXMuaW5kb29yQ2FtZXJhICtcclxuICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzLnNvdW5kX25lZWQqcHJpY2VzLmluZG9vckNhbWVyYVdpdGhTb3VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHN5c3RlbVByb3BzLmNhbWVyYUluZG9vcipwcmljZXMuaW5kb29yQ2FtZXJhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v0YDQsNGB0YfQtdGCINGB0YLQvtC40LzQvtGB0YLQuCDQvNC+0L3RgtCw0LbQsCDQutCw0LzQtdGAOiDQvtGC0LTQtdC70YzQvdC+INCy0L3Rg9GC0YDQuCDQv9C+0LzQtdGJ0LXQvdC40LksINC+0YLQtNC10LvRjNC90L4g0YHQvdCw0YDRg9C20LhcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jb21wbGVjdGF0aW9uID09IFwibW9udGFnZVwiKXtcclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhSW5kb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBzeXN0ZW1Qcm9wcy5jYW1lcmFJbmRvb3IqcHJpY2VzLmluZG9vckNhbWVyYU1vbnRhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhT3V0ZG9vciAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgc3lzdGVtUHJvcHMuY2FtZXJhT3V0ZG9vcipwcmljZXMub3V0ZG9vckNhbWVyYU1vbnRhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhUGFub3JhbSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgc3lzdGVtUHJvcHMuY2FtZXJhUGFub3JhbSpwcmljZXMub3V0ZG9vckNhbWVyYU1vbnRhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g0YDQsNGB0YfQtdGCINC00LvQuNC90Ysg0LrQsNCx0LXQu9GPXHJcbiAgICAgICAgbGV0IG9iamVjdENhYmxlTGVuZ2h0ID0gIE51bWJlcihzeXN0ZW1Qcm9wcy5vYmplY3RXaWR0aCkgKyBOdW1iZXIoc3lzdGVtUHJvcHMub2JqZWN0TGVuZ3RoKTtcclxuICAgICAgICBsZXQgcGVyaW1ldHJhbENhYmxlTGVuZ2h0ID0gTnVtYmVyKHN5c3RlbVByb3BzLnBlcmltZXRlckxlbmd0aCkgKyBOdW1iZXIoc3lzdGVtUHJvcHMucGVyaW1ldGVyV2lkdGgpO1xyXG4gICAgICAgIC8vINGB0YLQvtC40LzQvtGB0YLRjCDQutCw0LHQtdC70Y9cclxuICAgICAgICAvLyDQv9Cw0L3QvtGA0LDQvNC90YvQtSDQutCw0LzQtdGA0YtcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFQYW5vcmFtICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHBlcmltZXRyYWxDYWJsZUxlbmdodCpwcmljZXMuY2FibGUqc3lzdGVtUHJvcHMuY2FtZXJhUGFub3JhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0L/QviDQv9C10YDQuNC80LXRgtGA0YMg0YPRh9Cw0YHRgtC60LBcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1zUGVyaW1ldHJhbENvdW50ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHBlcmltZXRyYWxDYWJsZUxlbmdodCpwcmljZXMuY2FibGUqc3lzdGVtUHJvcHMuY2Ftc1BlcmltZXRyYWxDb3VudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0LLQvdGD0YLRgNC4INC+0LHRitC10LrRgtCwXHJcbiAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhSW5kb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG9iamVjdENhYmxlTGVuZ2h0KnByaWNlcy5jYWJsZSpzeXN0ZW1Qcm9wcy5jYW1lcmFJbmRvb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINC/0L4g0L/QtdGA0LjQvNC10YLRgNGDINC+0LHRitC10LrRgtCwICjQvdCw0L/RgNC40LzQtdGAINC00L7QvNCwLCDQsCDQvdC1INGD0YfQsNGB0YLQutCwKSwg0YDQsNCy0L3QviDQutC+0LvQuNGH0LXRgdGC0LLQviBvdXRkb29yIC0g0LrQvtC70LjRh9C10YHRgtCy0L4gcGVyaW1ldHJhbFxyXG4gICAgICAgIGlmKHN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3IgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2Ftc1BlcmltZXRyYWxDb3VudCAhPSAwKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG9iamVjdENhYmxlTGVuZ2h0KnByaWNlcy5jYWJsZSooc3lzdGVtUHJvcHMuY2FtZXJhT3V0ZG9vci1zeXN0ZW1Qcm9wcy5jYW1zUGVyaW1ldHJhbENvdW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgb2JqZWN0Q2FibGVMZW5naHQqcHJpY2VzLmNhYmxlKnN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3I7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINGB0YLQvtC40LzQvtGB0YLRjCDQvNC+0L3RgtCw0LbQsCDQutCw0LHQtdC70Y9cclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jb21wbGVjdGF0aW9uID09IFwibW9udGFnZVwiKXtcclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhUGFub3JhbSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcGVyaW1ldHJhbENhYmxlTGVuZ2h0KnByaWNlcy5tb250YWdlQ2FibGVPdXRkb29yKnN5c3RlbVByb3BzLmNhbWVyYVBhbm9yYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2Ftc1BlcmltZXRyYWxDb3VudCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcGVyaW1ldHJhbENhYmxlTGVuZ2h0KnByaWNlcy5tb250YWdlQ2FibGVPdXRkb29yKnN5c3RlbVByb3BzLmNhbXNQZXJpbWV0cmFsQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhSW5kb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBvYmplY3RDYWJsZUxlbmdodCpwcmljZXMubW9udGFnZUNhYmxlSW5kb29yKnN5c3RlbVByb3BzLmNhbWVyYUluZG9vcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFPdXRkb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1zUGVyaW1ldHJhbENvdW50ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG9iamVjdENhYmxlTGVuZ2h0KnByaWNlcy5tb250YWdlQ2FibGVPdXRkb29yKihzeXN0ZW1Qcm9wcy5jYW1lcmFPdXRkb29yLXN5c3RlbVByb3BzLmNhbXNQZXJpbWV0cmFsQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBvYmplY3RDYWJsZUxlbmdodCpwcmljZXMubW9udGFnZUNhYmxlT3V0ZG9vcipzeXN0ZW1Qcm9wcy5jYW1lcmFPdXRkb29yO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v0YHRgtC+0LjQvNC+0YHRgtGMINC60L7QvNC/0LvQtdC60YLQsCDQtNC70Y8g0LjQvdGC0LXRgNC90LXRgtCwXHJcbiAgICAgICAgaWYoc3lzdGVtUHJvcHMuaW50ZXJuZXRfbmVlZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5jb21wbGVjdEludGVybmV0O1xyXG4gICAgICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jb21wbGVjdGF0aW9uID09IFwibW9udGFnZVwiKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5pbnRlcm5ldEluc3RhbGxhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL9GB0YLQvtC40LzQvtGB0YLRjCDRgNC10LPQuNGB0YLRgNCw0YLQvtGA0LBcclxuICAgICAgICBsZXQgY2Ftc1RvdGFsID0gc3lzdGVtUHJvcHMuY2Ftc1RvdGFsO1xyXG4gICAgICAgIHN3aXRjaChjYW1zVG90YWwpe1xyXG4gICAgICAgICAgICBjYXNlIGNhbXNUb3RhbCA+PSAxICYmIGNhbXNUb3RhbCA8PTQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMucmVnaXN0cmF0b3IxXzQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPiA0ICYmIGNhbXNUb3RhbCA8PTg6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMucmVnaXN0cmF0b3I1Xzg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPiA4ICYmIGNhbXNUb3RhbCA8PSAxNjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5yZWdpc3RyYXRvcjhfMTY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPiAxNjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5yZWdpc3RyYXRvcjE2bW9yZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL9GA0LDRgdGH0LXRgiDQuNCx0L9cclxuICAgICAgICBzd2l0Y2goY2Ftc1RvdGFsKXtcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPj0gMSAmJiBjYW1zVG90YWwgPD00OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmlicDFfNDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNhbXNUb3RhbCA+IDQgJiYgY2Ftc1RvdGFsIDw9ODpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5pYnA1Xzg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPiA4ICYmIGNhbXNUb3RhbCA8PSAxMjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwMV80O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2Ftc1RvdGFsID4gMTIgJiYgY2Ftc1RvdGFsIDw9IDE2OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1Xzg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPiAxNiAmJiBjYW1zVG90YWwgPD0gMjA6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnAxXzQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPiAyMCAmJiBjYW1zVG90YWwgPD0gMjQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1Xzg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYW1zVG90YWwgPiAyNCAmJiBjYW1zVG90YWwgPD0gMjg6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwMV80O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2Ftc1RvdGFsID4gMjggJiYgY2Ftc1RvdGFsIDw9IDMyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfODtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNhbXNUb3RhbCA+IDMyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1Xzg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/RgNCw0YHRh9C10YIg0LDRgNGF0LjQstCwIEhERFxyXG4gICAgICAgIHN3aXRjaChzeXN0ZW1Qcm9wcy5hcmNoaWV2ZSl7XHJcbiAgICAgICAgICAgIGNhc2UgNzogXHJcbiAgICAgICAgICAgICAgICBpZihjYW1zVG90YWwgPj0gMSAmJiBjYW1zVG90YWwgPD0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrMVRiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiA0ICYmIGNhbXNUb3RhbCA8PSA4KXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaGFyZERpc2sxVGI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNhbXNUb3RhbCA+IDggJiYgY2Ftc1RvdGFsIDw9IDE2KXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaGFyZERpc2syVGI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNhbXNUb3RhbCA+IDE2ICYmIGNhbXNUb3RhbCA8PSAzMil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrNFRiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiAzMil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrOFRiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTQ6XHJcbiAgICAgICAgICAgICAgICBpZihjYW1zVG90YWwgPj0gMSAmJiBjYW1zVG90YWwgPD0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrMVRiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiA0ICYmIGNhbXNUb3RhbCA8PSA4KXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaGFyZERpc2syVGI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNhbXNUb3RhbCA+IDggJiYgY2Ftc1RvdGFsIDw9IDE2KXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaGFyZERpc2s0VGI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNhbXNUb3RhbCA+IDE2ICYmIGNhbXNUb3RhbCA8PSAzMil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrOFRiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiAzMil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrMTJUYjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDMwOlxyXG4gICAgICAgICAgICAgICAgaWYoY2Ftc1RvdGFsID49IDEgJiYgY2Ftc1RvdGFsIDw9IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazJUYjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoY2Ftc1RvdGFsID4gNCAmJiBjYW1zVG90YWwgPD0gOCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrNFRiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiA4ICYmIGNhbXNUb3RhbCA8PSAxNil7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrOFRiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiAxNiAmJiBjYW1zVG90YWwgPD0gMzIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazEyVGI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNhbXNUb3RhbCA+IDMyKXtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaGFyZERpc2s4VGIqMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy/QtNC+0LHQsNCy0LvQtdC90LjQtSDQvNC+0L3RgtCw0LbQvdC+0LPQviDQutC+0LzQv9C70LXQutGC0LBcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuY29tcGxlY3RNb250YWdlO1xyXG4gICAgICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0L3QsNGB0YLRgNC+0LnQutC4INC4INGO0YHRgtC40YDQvtCy0LrQuFxyXG4gICAgICAgIGlmKHN5c3RlbVByb3BzLmNvbXBsZWN0YXRpb24gPT0gXCJtb250YWdlXCIpe1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuc3lzdGVtQ3VzdG1pemF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy8g0LfQsNC/0LjRgdGMINGA0LXQt9GD0LvRjNGC0LDRgtCwINCyIHNwYW5cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZVJlc3VsdCgpe1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdFNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzdWx0X19tYWluLXByaWNlLW51bWJlcicpO1xyXG4gICAgICAgIHJlc3VsdFNwYW4uaW5uZXJIVE1MID0gZ2V0UmVzdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJpY2VzID0ge1xyXG4gICAgICAgIGluZG9vckNhbWVyYSA6IDIxOTAsIC8vRVotSEFDLVQxQTIxUC0wMzYwQlxyXG4gICAgICAgIGluZG9vckNhbWVyYVdpdGhTb3VuZCA6IDI4OTAsIC8vRVotSEFDLVQ1QjIwUC1BLTAzNjBCXHJcbiAgICAgICAgb3V0ZG9vckNhbWVyYSA6IDI4OTAsIC8vRVotSEFDLUI1QjIwUC1BLTAyODBCXHJcbiAgICAgICAgcGFub3JhbUNhbWVyYTogMjg5OTAsIC8vREgtU0Q0OTIyNS1IQy1MQSAtMjg5OTBcclxuICAgICAgICBpbmRvb3JDYW1lcmFNb250YWdlOiAxNjAwLFxyXG4gICAgICAgIG91dGRvb3JDYW1lcmFNb250YWdlOiAyNTAwLFxyXG4gICAgICAgIGNhYmxlOiA4MCxcclxuICAgICAgICBtb250YWdlQ2FibGVJbmRvb3I6IDMwLFxyXG4gICAgICAgIG1vbnRhZ2VDYWJsZU91dGRvb3I6IDQwLFxyXG4gICAgICAgIGhhcmREaXNrMVRiOiAgNDEwMCxcclxuICAgICAgICBoYXJkRGlzazJUYjogIDU1MDAsXHJcbiAgICAgICAgaGFyZERpc2s0VGI6ICA5NDAwLFxyXG4gICAgICAgIGhhcmREaXNrNlRiOiAgMTQ4MDAsXHJcbiAgICAgICAgaGFyZERpc2s4VGI6ICAxOTUwMCxcclxuICAgICAgICBoYXJkRGlzazEwVGI6IDI1OTAwLCBcclxuICAgICAgICBoYXJkRGlzazEyVGI6IDI5ODAwLFxyXG4gICAgICAgIHN5c3RlbUN1c3RtaXphdGlvbjogMjAwMCwgXHJcbiAgICAgICAgaW50ZXJuZXRJbnN0YWxsYXRpb246IDI1MDAsXHJcbiAgICAgICAgY29tcGxlY3RJbnRlcm5ldDogODc1MCxcclxuICAgICAgICBjb21wbGVjdE1vbnRhZ2U6IDYwNTAsXHJcbiAgICAgICAgcmVnaXN0cmF0b3IxXzQ6IDYwMDAsXHJcbiAgICAgICAgcmVnaXN0cmF0b3I1Xzg6IDkwMDAsXHJcbiAgICAgICAgcmVnaXN0cmF0b3I4XzE2OiAxNjAwMCxcclxuICAgICAgICByZWdpc3RyYXRvcjE2bW9yZTogMzI5OTAsXHJcbiAgICAgICAgaWJwMV80OiAxMzAwLFxyXG4gICAgICAgIGlicDVfODogMjIwMCxcclxuICAgIH1cclxufVxyXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
