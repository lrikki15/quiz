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
      result = result + Number(systemProps.cameraOutdoor * prices.outdoorCamera);
    } //расчет стоимости панорамных камер


    if (systemProps.cameraPanoram != undefined) {
      result = result + Number(systemProps.cameraPanoram * prices.panoramCamera);
    } //расчет стоимости внутренних камер


    if (systemProps.cameraIndoor != undefined) {
      if (systemProps.sound_need) {
        result = result + Number((systemProps.cameraIndoor - systemProps.sound_need) * prices.indoorCamera + systemProps.sound_need * prices.indoorCameraWithSound);
      } else {
        result = result + Number(systemProps.cameraIndoor * prices.indoorCamera);
      }
    } //расчет стоимости монтажа камер: отдельно внутри помещений, отдельно снаружи


    if (systemProps.complectation == "montage") {
      if (systemProps.cameraIndoor != undefined) {
        result = result + Number(systemProps.cameraIndoor * prices.indoorCameraMontage);
      }

      if (systemProps.cameraOutdoor != undefined) {
        result = result + Number(systemProps.cameraOutdoor * prices.outdoorCameraMontage);
      }

      if (systemProps.cameraPanoram != undefined) {
        result = result + Number(systemProps.cameraPanoram * prices.outdoorCameraMontage);
      }
    } // расчет длины кабеля


    let objectCableLenght = Number(systemProps.objectWidth) + Number(systemProps.objectLength);
    let perimetralCableLenght = Number(systemProps.perimeterLength) + Number(systemProps.perimeterWidth); // стоимость кабеля
    // панорамные камеры

    if (systemProps.cameraPanoram != undefined) {
      result = result + Number(perimetralCableLenght * prices.cable * systemProps.cameraPanoram);
    } // по периметру участка


    if (systemProps.camsPerimetralCount != undefined) {
      result = result + Number(perimetralCableLenght * prices.cable * systemProps.camsPerimetralCount);
    } // внутри объекта


    if (systemProps.cameraIndoor != undefined) {
      result = result + Number(objectCableLenght * prices.cable * systemProps.cameraIndoor);
    } // по периметру объекта (например дома, а не участка), равно количество outdoor - количество perimetral


    if (systemProps.cameraOutdoor != undefined) {
      if (systemProps.camsPerimetralCount != undefined) {
        result = result + Number(objectCableLenght * prices.cable * (systemProps.cameraOutdoor - systemProps.camsPerimetralCount));
      } else {
        result = result + Number(objectCableLenght * prices.cable * systemProps.cameraOutdoor);
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
        if (systemProps.camsPerimetralCount != undefined) {
          result = result + objectCableLenght * prices.montageCableOutdoor * (systemProps.cameraOutdoor - systemProps.camsPerimetralCount);
        } else {
          result = result + objectCableLenght * prices.montageCableOutdoor * systemProps.cameraOutdoor;
        }
      }
    } // стоимость комплекта для интернета
    // if(systemProps.internet_need){
    //     result = result + prices.complectInternet;
    //     if(systemProps.complectation == "montage"){
    //         result = result + prices.internetInstallation;
    //     }
    // }
    // //стоимость регистратора
    // let camsTotal = systemProps.camsTotal;
    // switch(camsTotal){
    //     case camsTotal >= 1 && camsTotal <=4:
    //         result = result + prices.registrator1_4;
    //         break;
    //     case camsTotal > 4 && camsTotal <=8:
    //         result = result + prices.registrator5_8;
    //         break;
    //     case camsTotal > 8 && camsTotal <= 16:
    //         result = result + prices.registrator8_16;
    //         break;
    //     case camsTotal > 16:
    //         result = result + prices.registrator16more;
    //         break;
    // }
    //расчет ибп
    // switch(camsTotal){
    //     case camsTotal >= 1 && camsTotal <=4:
    //         result = result + prices.ibp1_4;
    //         break;
    //     case camsTotal > 4 && camsTotal <=8:
    //         result = result + prices.ibp5_8;
    //         break;
    //     case camsTotal > 8 && camsTotal <= 12:
    //         result = result + prices.ibp5_8 + prices.ibp1_4;
    //         break;
    //     case camsTotal > 12 && camsTotal <= 16:
    //         result = result + prices.ibp5_8 + prices.ibp5_8;
    //         break;
    //     case camsTotal > 16 && camsTotal <= 20:
    //         result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp1_4;
    //         break;
    //     case camsTotal > 20 && camsTotal <= 24:
    //         result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8;
    //         break;
    //     case camsTotal > 24 && camsTotal <= 28:
    //         result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp1_4;
    //         break;
    //     case camsTotal > 28 && camsTotal <= 32:
    //         result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8;
    //         break;
    //     case camsTotal > 32:
    //         result = result + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8 + prices.ibp5_8;
    //         break;
    // }
    // console.log(camsTotal);
    //расчет архива HDD
    // switch(systemProps.archieve){
    //     case 7: 
    //         if(camsTotal >= 1 && camsTotal <= 4){
    //             result = result + prices.hardDisk1Tb;
    //         }
    //         else if(camsTotal > 4 && camsTotal <= 8){
    //             result = result + prices.hardDisk1Tb;
    //         }
    //         else if(camsTotal > 8 && camsTotal <= 16){
    //             result = result + prices.hardDisk2Tb;
    //         }
    //         else if(camsTotal > 16 && camsTotal <= 32){
    //             result = result + prices.hardDisk4Tb;
    //         }
    //         else if(camsTotal > 32){
    //             result = result + prices.hardDisk8Tb;
    //         }
    //         break;
    //     case 14:
    //         if(camsTotal >= 1 && camsTotal <= 4){
    //             result = result + prices.hardDisk1Tb;
    //         }
    //         else if(camsTotal > 4 && camsTotal <= 8){
    //             result = result + prices.hardDisk2Tb;
    //         }
    //         else if(camsTotal > 8 && camsTotal <= 16){
    //             result = result + prices.hardDisk4Tb;
    //         }
    //         else if(camsTotal > 16 && camsTotal <= 32){
    //             result = result + prices.hardDisk8Tb;
    //         }
    //         else if(camsTotal > 32){
    //             result = result + prices.hardDisk12Tb;
    //         }
    //         break;
    //     case 30:
    //         if(camsTotal >= 1 && camsTotal <= 4){
    //             result = result + prices.hardDisk2Tb;
    //         }
    //         else if(camsTotal > 4 && camsTotal <= 8){
    //             result = result + prices.hardDisk4Tb;
    //         }
    //         else if(camsTotal > 8 && camsTotal <= 16){
    //             result = result + prices.hardDisk8Tb;
    //         }
    //         else if(camsTotal > 16 && camsTotal <= 32){
    //             result = result + prices.hardDisk12Tb;
    //         }
    //         else if(camsTotal > 32){
    //             result = result + prices.hardDisk8Tb*2;
    //         }
    //         break;
    // };
    //добавление монтажного комплекта


    result = result + prices.complectMontage; //добавление настройки и юстировки

    if (systemProps.complectation == "montage") {
      result = result + prices.systemCustmization;
    }

    return result;
  } // запись результата в span


  function writeResult() {
    const resultSpan = document.querySelector('.result__main-price-number');
    resultSpan.innerHTML = getResult();
    console.log(getResult());
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNjcmVlbkNvdW50ZXIiLCJwYWdlcyIsInF1ZXN0aW9ucyIsImNvbW1lbnRzIiwic3lzdGVtUHJvcHMiLCJuZWVkU291bmRFdmVudCIsImZhc3RMZXZlbENoYW5nZSIsInJhZGlvQ2hlY2tBY3RpdmUiLCJyYWRpb09uQ2hhbmdlIiwiZnVuY1NsaWRlcnMiLCJzaG93Q3VycmVudFNwaGVyZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZE5hdmlnYXRpb25Ub0J1dHRvbnMiLCJhZGRFdmVudE9uQWxsSW5wdXRzIiwiYWRkU2hvd1BlcmltZXRlciIsImFkZEdldENhbXNQZXJpbWV0cmFsIiwiYWRkU2hvd0hpZGVDb21tZW50RXZlbnQiLCJyZWZyZXNoQ29tbWVudCIsInNob3dIaWRlQ29tbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInNob3dDb21tZW50QnV0dG9uIiwiY2xvc2VDb21tZW50QnV0dG9uIiwib25jbGljayIsImNvbW1lbnQiLCJjb21tZW50RGVza3RvcCIsIm9iamVjdFBhZ2UiLCJjdXJyZW50T2JqZWN0IiwidG9nZ2xlSGlkZUNsYXNzIiwiaW5uZXJIVE1MIiwiaWQiLCJzZXRUaW1lb3V0IiwiZWxlbSIsIm5hdmlnYXRpb24iLCJkaXJlY3Rpb24iLCJjdXJyZW50UGFnZSIsImhpZGUiLCJwYXJlbnRFbGVtZW50IiwibmV4dFBhZ2UiLCJzaG93Iiwid3JpdGVSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVmcmVzaFF1ZXN0aW9uIiwiY2hlY2tCdXR0b24iLCJzdHlsZSIsIm9wYWNpdHkiLCJkaXNwbGF5IiwiZGlzcFByb3BlcnR5IiwicXVlc3Rpb24iLCJ0ZXh0Q29udGVudCIsImJ1dHRvbkZvcndhcmQiLCJjaGVja0lzQ2hvc2VuIiwiZGlzYWJsZWQiLCJpc1RydWUiLCJvYmplY3RSYWRpb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJhZGlvIiwiY2hlY2tlZCIsImxvY2F0aW9uUmFkaW9zIiwiY2FtZXJhY291bnRSYW5nZXMiLCJyYW5nZSIsInZhbHVlIiwiYXJjaGlldmVSYWRpb3MiLCJzb3VuZE5lZWRJbnB1dCIsInJlc2VydmVOZWVkIiwiaW50ZXJuZXROZWVkIiwic291bmROZWVkIiwiZmFzdEhpZ2giLCJmYXN0TWlkIiwiZmFzdExvdyIsImZhc3RPd24iLCJmYXN0T3duRmllbGQiLCJzcXVhcmVJbnB1dHMiLCJzcXVhcmVQZXJpbWV0ZXIiLCJzcXVhcmVPYmplY3RMb25nIiwic3F1YXJlT2JqZWN0V2lkdGgiLCJzcXVhcmVQZXJpbWV0ZXJMb25nIiwic3F1YXJlUGVyaW1ldGVyV2lkdGgiLCJjb250YWlucyIsImNvbXBsZWN0YXRpb25SYWRpb3MiLCJyYWRpb0l0ZW1zIiwiaXRlbSIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50UmFkaW8iLCJyZWZyZXNoUHJvcHMiLCJyZXNldFZhbHVlcyIsInNob3dQZXJpbWV0ZXIiLCJpbnB1dCIsImN1cnJlbnRTcGhlcmUiLCJkYXRhc2V0IiwiY2hvaXNlIiwiY2FtQ291bnRlcnMiLCJjb3VudGVyIiwiY3VycmVudENvdW50ZXIiLCJjb3VudFBhZ2UiLCJwZXJpbWV0ZXJSYW5nZXMiLCJzcWFyZVBlcmltZXRlciIsInBlcmltZXRlckhhcyIsInNxYXJlUGVyaW1ldGVyUmFuZ2VzIiwicmVmcmVzaFJhbmdlIiwiZ2V0Q2Ftc1BlcmltZXRyYWwiLCJjb3VudCIsIk51bWJlciIsImNhbUNvdW50IiwicmFuZ2VzQ2FtQ291bnQiLCJ3cml0ZUFsbENhbXNLaW5kIiwibG9jYXRpb24iLCJyZXNldFJhZGlvIiwiYXJjaGl2ZSIsInJhZGlvc0FyY2hpZXZlIiwiZG9wcGVsIiwiY2hlY2tib3hlc0RvcHBlbCIsImNoZWNrYm94IiwicmVzZXRDaGVja0JveCIsInJhbmdlRG9wcGVsIiwiY2hlY2tOZWVkU291bmQiLCJmYXN0IiwicmFkaW9zRmFzdCIsImhhc093bkFuc3dlciIsInNxdWFyZSIsInNxdWFyZVJhbmdlcyIsInNsaWRlcnMiLCJzbGlkZXIiLCJjdXJyZW50IiwibmV4dFNpYmxpbmciLCJwZXJjZW50VmFsdWUiLCJtYXgiLCJjb2xvciIsImJhY2tncm91bmQiLCJyZWNvcmRDaGVja2JveCIsInRvZ2dsZVJhbmdlIiwic291bmROZWVkUmFuZ2UiLCJvd25BbnN3ZXJBcmVhIiwiaGFzT3duIiwicXVpekJvZHkiLCJhbGxSYWRpb3MiLCJhbGxSYW5nZXMiLCJhbGxDaGVja2JveGVzIiwiZm9ybSIsImZvcm1TZW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkRXJyb3IiLCJmb3JtVmFsaWRhdGUiLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJvayIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImZvcm1WYWxpZEZpZWxkcyIsImZpZWxkIiwiZm9ybVJlbW92ZUVycm9yIiwidHlwZSIsImZvcm1BZGRFcnJvciIsInBob25lVGVzdCIsImVtYWlsVGVzdCIsInRlc3QiLCJvYmplY3QiLCJ3cml0ZU9iamVjdFBvc2l0aW9uIiwibG9jYXRpb25QYWdlIiwid3JpdGVDdXJyZW50Q2FtIiwiY291bnRjYW1lcmFQYWdlIiwicmFuZ2VzQ2FtZXJhY291bnQiLCJ1bmRlZmluZWQiLCJlbXR5T2JqIiwicHVycG9zZSIsInRvdGFsQ2FtcyIsInRvdGFsIiwia2V5IiwiZ2V0VG90YWxDYW1zb2YiLCJjbGFzc05hbWUiLCJyYW5nZXMiLCJ3cml0ZUNhbXNLaW5kIiwia2luZE5hbWUiLCJ3cml0ZUFyY2hpZXZlIiwiYXJjaGlldmVQYWdlIiwiZGF5cyIsIndyaXRlRG9wcGVsIiwib25jaGFuZ2UiLCJ3cml0ZWhvd0Zhc3QiLCJob3dGYXN0UGFnZSIsImhvd0Zhc3RSYWRpb3MiLCJ3cml0ZVZhbHVlIiwid3JpdGVTcXVhcmUiLCJzcXVhcmVQYWdlIiwicmFuZ2VzU3F1YXJlIiwibmFtZSIsIndyaXRlQ29tcGxlY3RhdGlvbiIsImNvbXBsZWN0YXRpb25QYWdlIiwiZ2V0UmVzdWx0IiwicmVzdWx0IiwiY2FtZXJhT3V0ZG9vciIsInByaWNlcyIsIm91dGRvb3JDYW1lcmEiLCJjYW1lcmFQYW5vcmFtIiwicGFub3JhbUNhbWVyYSIsImNhbWVyYUluZG9vciIsInNvdW5kX25lZWQiLCJpbmRvb3JDYW1lcmEiLCJpbmRvb3JDYW1lcmFXaXRoU291bmQiLCJjb21wbGVjdGF0aW9uIiwiaW5kb29yQ2FtZXJhTW9udGFnZSIsIm91dGRvb3JDYW1lcmFNb250YWdlIiwib2JqZWN0Q2FibGVMZW5naHQiLCJvYmplY3RXaWR0aCIsIm9iamVjdExlbmd0aCIsInBlcmltZXRyYWxDYWJsZUxlbmdodCIsInBlcmltZXRlckxlbmd0aCIsInBlcmltZXRlcldpZHRoIiwiY2FibGUiLCJjYW1zUGVyaW1ldHJhbENvdW50IiwibW9udGFnZUNhYmxlT3V0ZG9vciIsIm1vbnRhZ2VDYWJsZUluZG9vciIsImNvbXBsZWN0TW9udGFnZSIsInN5c3RlbUN1c3RtaXphdGlvbiIsInJlc3VsdFNwYW4iLCJoYXJkRGlzazFUYiIsImhhcmREaXNrMlRiIiwiaGFyZERpc2s0VGIiLCJoYXJkRGlzazZUYiIsImhhcmREaXNrOFRiIiwiaGFyZERpc2sxMFRiIiwiaGFyZERpc2sxMlRiIiwiaW50ZXJuZXRJbnN0YWxsYXRpb24iLCJjb21wbGVjdEludGVybmV0IiwicmVnaXN0cmF0b3IxXzQiLCJyZWdpc3RyYXRvcjVfOCIsInJlZ2lzdHJhdG9yOF8xNiIsInJlZ2lzdHJhdG9yMTZtb3JlIiwiaWJwMV80IiwiaWJwNV84Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVTtBQUN0QixNQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxRQUFNQyxLQUFLLEdBQUcsQ0FDVixnQkFEVSxFQUVWLFNBRlUsRUFHVixXQUhVLEVBSVYsY0FKVSxFQUtWLFdBTFUsRUFNVixT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Wkg7QUFhWEMsSUFBQUEsV0FBVyxFQUFHLEtBYkg7QUFjWEMsSUFBQUEsV0FBVyxFQUFHLEtBZEg7QUFlWEMsSUFBQUEsWUFBWSxFQUFFLEtBZkg7QUFnQlhDLElBQUFBLFlBQVksRUFBRSxLQWhCSDtBQWlCWFIsSUFBQUEsa0JBQWtCLEVBQUUsSUFqQlQ7QUFrQlhTLElBQUFBLG9CQUFvQixFQUFFLElBbEJYO0FBbUJYQyxJQUFBQSxnQkFBZ0IsRUFBRSxJQW5CUDtBQW9CWFgsSUFBQUEsZUFBZSxFQUFFLElBcEJOO0FBcUJYWSxJQUFBQSxjQUFjLEVBQUUsSUFyQkw7QUFzQlhDLElBQUFBLGNBQWMsRUFBRSxJQXRCTDtBQXVCWEMsSUFBQUEsZUFBZSxFQUFFLEtBdkJOO0FBd0JYQyxJQUFBQSxpQkFBaUIsRUFBRSxLQXhCUjtBQXlCWEMsSUFBQUEsTUFBTSxFQUFFLElBekJHO0FBMEJYQyxJQUFBQSxNQUFNLEVBQUU7QUExQkcsR0FBZjtBQTRCSCxDQTkrQkQiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBzY3JlZW5Db3VudGVyID0gMDtcclxuICAgIGNvbnN0IHBhZ2VzID0gW1xyXG4gICAgICAgICcjcXVpel9fcHJlbG9hZCcsXHJcbiAgICAgICAgJyNvYmplY3QnLFxyXG4gICAgICAgICcjbG9jYXRpb24nLFxyXG4gICAgICAgICcjY2FtZXJhY291bnQnLFxyXG4gICAgICAgICcjYXJjaGlldmUnLFxyXG4gICAgICAgICcjZG9wcGVsJyxcclxuICAgICAgICAnI2hvd2Zhc3QnLFxyXG4gICAgICAgICcjc3F1YXJlJyxcclxuICAgICAgICAnI2NvbXBsZWN0YXRpb24nLFxyXG4gICAgICAgICcjcXVpel9fcmVzdWx0JyxcclxuICAgICAgICAnI3F1aXpfX2Zvcm0nXHJcbiAgICBdO1xyXG4gICAgY29uc3QgcXVlc3Rpb25zID0gW1xyXG4gICAgICAgICcnLFxyXG4gICAgICAgICfQlNC70Y8g0LrQsNC60L7Qs9C+INC+0LHRitC10LrRgtCwINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQsCDRgdC40YHRgtC10LzQsCDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8/JyxcclxuICAgICAgICAn0JPQtNC1INC90LDRhdC+0LTQuNGC0YHRjyDQvtCx0YrQtdC60YI/JyxcclxuICAgICAgICAn0KHQutC+0LvRjNC60L4g0LrQsNC80LXRgCDQktGLINC/0LvQsNC90LjRgNGD0LXRgtC1INGD0YHRgtCw0L3QvtCy0LjRgtGMPycsXHJcbiAgICAgICAgJ9CS0YDQtdC80Y8g0YXRgNCw0L3QtdC90LjRjyDQsNGA0YXQuNCy0LA6JyxcclxuICAgICAgICAn0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQtSDQv9C+0LbQtdC70LDQvdC40Y8g0Log0YHQuNGB0YLQtdC80LUg0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPOicsXHJcbiAgICAgICAgJ9Ca0LDQuiDRgdGA0L7Rh9C90L4g0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LA/JyxcclxuICAgICAgICAn0J/RgNC40LzQtdGA0L3QsNGPINC/0LvQvtGJ0LDQtNGMINC+0LHRitC10LrRgtCwJyxcclxuICAgICAgICAn0JLQsNC8INC90YPQttC10L0g0LPQvtGC0L7QstGL0Lkg0LrQvtC80L/Qu9C10LrRgiDQuNC70Lgg0LzQvtC90YLQsNC2INGB0LjRgdGC0LXQvNGLINC/0L7QtCDQutC70Y7Rhz8nXHJcbiAgICBdO1xyXG4gICAgY29uc3QgY29tbWVudHMgPSB7XHJcbiAgICAgICAgJyNjYW1lcmFjb3VudCc6IHtcclxuICAgICAgICAgICAgJ25vY2hvc2VuJzogJ9CS0YvQsdC10YDQuNGC0LUg0L7QsdGK0LXQutGCJyxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX2hvdXNlJzogYDxwPtCS0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjQtSDQtNC70Y8g0LfQsNCz0L7RgNC+0LTQvdC+0LPQviDQtNC+0LzQsCwg0LTQsNGH0Lgg0L/RgNC10LTRgdGC0LDQstC70LXQvdC+INC/0YDQvtCy0L7QtNC90YvQvNC4INC4IFxyXG4gICAgICAgICAgICDQsdC10YHQv9GA0L7QstC+0LTQvdGL0LzQuCDQutCw0LzQtdGA0LDQvNC4INGBINGD0LPQu9C+0Lwg0L7QsdC30L7RgNCwINC00L4gMTAywrAg0LAsINGC0LDQuiDQttC1INC90L7Rh9C90L7QuSDRgdGK0LXQvNC60L7QuSAgXHJcbiAgICAgICAgICAgINGBINC40Log0L/QvtC00YHQstC10YLQutC+0Lkg0L7RgiAxMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QotCw0LosINC00LvRjyDQutC+0L3RgtGA0L7Qu9GPINC90LXQsdC+0LvRjNGI0L7Qs9C+INC00LLQvtGA0LAg0L/QvtC00L7QudC00LXRgiBcclxuICAgICAgICAgICAg0L/RgNC+0LLQvtC00L3QsNGPINC60LDQvNC10YDQsCDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y8g0YEg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQuCAyMCDQvNC10YLRgNC+0LIuPC9wPlxyXG4gICAgICAgICAgICA8cD7QndC10YHQutC+0LvRjNC60L4g0LrRg9C/0L7Qu9GM0L3Ri9GFIFdpLUZpLdCy0LjQtNC10L7QutCw0LzQtdGAIFxyXG4gICAgICAgICAgICDRgSDRgNCw0LfRgNC10YjQtdC90LjQtdC8IDEwODBwINC4INC90L7Rh9C90YvQvCDQstC40LTQtdC90LjQtdC8INC00L4gMzAg0LzQtdGC0YDQvtCyINGB0LzQvtCz0YPRgiDRgdC70LXQtNC40YLRjCDQt9CwINCx0L7Qu9GM0YjQvtC5INGC0LXRgNGA0LjRgtC+0YDQuNC10LkuPC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19mb2xkZXInOmA8cD7QlNC70Y8g0YHQutC70LDQtNGB0LrQvtCz0L4g0L/QvtC80LXRidC10L3QuNGPINC/0L7QtNC+0LnQtNGD0YIg0LLQuNC00LXQvtC60LDQvNC10YDRiyDRgSDRg9Cz0LvQvtC8INC+0LHQt9C+0YDQsCDQvtGCIDg1INC00L4gMTEywrAgXHJcbiAgICAgICAgICAgINC4INC90L7Rh9C90YvQvCDQstC40LTQtdC90LjQtdC8IDIw4oCUMzAg0LzQtdGC0YDQvtCyLjwvcD5cclxuICAgICAgICAgICAgPHA+0JTQu9GPINGB0LvQtdC20LXQvdC40Y8g0LfQsCDQvdC10YHQutC+0LvRjNC60LjQvNC4INGB0LrQu9Cw0LTQsNC80Lgg0LjQu9C4INC+0LTQvdC+0Lkg0LHQvtC70YzRiNC+0Lkg0L/Qu9C+0YnQsNC00LrQvtC5INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIDQg0L/RgNC+0LLQvtC00L3Ri9C1INC60LDQvNC10YDRiywgXHJcbiAgICAgICAgICAgINC+0LHQtdGB0L/QtdGH0LjQstCw0Y7RidC40LUg0YDQsNC30YDQtdGI0LXQvdC40LUgMTA4MHAg0Lgg0L3QvtGH0L3Rg9GOINGB0YrQtdC80LrRgyDQtNC+IDIwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCS0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjQtSDQt9CwINC90LXQsdC+0LvRjNGI0LjQvCDRgdC60LvQsNC00L7QvCDQvNC+0LbQtdGCINC+0YHRg9GJ0LXRgdGC0LLQu9GP0YLRjCDQvtC00L3QsCBcclxuICAgICAgICAgICAg0YbQuNC70LjQvdC00YDQuNGH0LXRgdC60LDRjyDQsdC10YHQv9GA0L7QstC+0LTQvdCw0Y8g0LrQsNC80LXRgNCwINGBINC90L7Rh9C90L7QuSDRgdGK0LXQvNC60L7QuSDQtNC+IDMwINC80LXRgtGA0L7Qsi48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX3Nob3AnOmA8cD7QlNC70Y8g0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINCyINC80LDQs9Cw0LfQuNC90LUg0LjRgdC/0L7Qu9GM0LfRg9GO0YLRgdGPINC60LDQvNC10YDRiyBcclxuICAgICAgICAgICAg0YEg0LTQsNC70YzQvdC+0YHRgtGM0Y4g0L3QvtGH0L3QvtCz0L4g0LLQuNC00LXQvdC40Y8gMTDigJQzMCDQvNC10YLRgNC+0LIg0Lgg0YPQs9C70L7QvCDQvtCx0LfQvtGA0LAgOTLigJQxMTLCsC48L3A+XHJcbiAgICAgICAgICAgIDxwPtCU0LvRjyDRgdC70LXQttC10L3QuNGPINC30LAg0YLQvtGA0LPQvtCy0YvQvCDQt9Cw0LvQvtC8INC80L7QttC90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIDIg0LjQu9C4IDMg0L/QvtCy0L7RgNC+0YLQvdGL0LUgV2ktRmkt0LLQuNC00LXQvtC60LDQvNC10YDRiy48L3A+XHJcbiAgICAgICAgICAgIDxwPtCSINC60LDRgdGB0L7QstC+0Lkg0LfQvtC90LUg0YbQtdC70LXRgdC+0L7QsdGA0LDQt9C90L4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0L/RgNC+0LLQvtC00L3QvtC1INCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjQtSDRgSDQuNC30L7QsdGA0LDQttC10L3QuNC10Lwg0LIgRnVsbEhELdC60LDRh9C10YHRgtCy0LUuPC9wPmAsXHJcblxyXG4gICAgICAgICAgICAnb2JqZWN0X19zY2hvb2wnOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQu9C40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICdvYmplY3RfX29mZmljZSc6YDxwPtCf0YDQvtCy0L7QtNC90YvQtSDRg9GB0YLRgNC+0LnRgdGC0LLQsCDQtNC70Y8g0LLQuNC00LXQvtC90LDQsdC70Y7QtNC10L3QuNGPINC30LAg0L7RhNC40YHQvtC8IFxyXG4gICAgICAgICAgICDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90Ysg0LrQsNC80LXRgNCw0LzQuCDRgSDRg9Cz0LvQvtC8INC+0LHQt9C+0YDQsCDQvtGCIDkyINC00L4gMTAzwrAg0Lgg0L3QvtGH0L3QvtC5INGB0YrQtdC80LrQvtC5IDIwINC80LXRgtGA0L7Qsi48L3A+XHJcbiAgICAgICAgICAgIDxwPtCR0LXRgdC/0YDQvtCy0L7QtNC90LDRjyDQstC40LTQtdC+0YHQuNGB0YLQtdC80LAg0LLQutC70Y7Rh9Cw0LXRgiDQvNC+0LTQtdC70Lgg0YEg0L7QsdC30L7RgNC+0Lwg0L3QsCAxMDbigJQxMTLCsCDQuCDQtNCw0LvRjNC90L7RgdGC0YzRjiDQvdC+0YfQvdC+0LPQviDQstC40LTQtdC90LjRjyAxMOKAlDMwINC80LXRgtGA0L7Qsi48L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX2NvbnN0cnVjdCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Quy3QstC+INC60LDQvNC10YAg0L/QviDQtNCw0L3QvdGL0Lwg0LrRgNC40YLQtdGA0LjRj9C8INC4INC/0L7QtNCx0LXRgNC10Lwg0LTQu9GPINCy0LDRgSDQvtC/0YLQuNC80LDQu9GM0L3QvtC1INGA0LXRiNC10L3QuNC1LiBcclxuICAgICAgICAgICAg0J3QsCDRgdGC0YDQvtC40YLQtdC70YzQvdC+0Lwg0L7QsdGK0LXQutGC0LUg0LrQsNC6INC/0YDQsNCy0LjQu9C+INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQutCw0LzQtdGA0LAg0LTQu9GPINC80L7QvdC40YLQvtGA0LjQvdCz0LAg0L/RgNC+0YbQtdGB0YHQsCDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQsCDRgSAg0L7QvdC70LDQudC9INGC0YDQsNC90YHQu9GP0YbQuNC10Lkg0LIg0L7RhNC40YEg0LfQsNGB0YLRgNC+0LnRidC40LrQsCDQuNC70Lgg0L3QsCDRgdCw0LnRgiDQutC+0LzQv9Cw0L3QuNC4LiBcclxuICAgICAgICAgICAg0JrQsNC80LXRgNCwINC90LAg0LLRitC10LfQtCDQuCDQstGL0LXQt9C0INGC0LXRhdC90LjQutC4INC90LAg0L7QsdGK0LXQutGCINC00LvRjyDQvNC+0L3QuNGC0L7RgNC40L3Qs9CwINCy0LLQvtC30LjQvNGL0YUg0LjQu9C4INCy0YvQstC+0LfQuNC80YvRhSDQs9GA0YPQt9C+0LIuPC9wPmAsXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICdvYmplY3RfX290aGVyJzpgPHA+0KPQutCw0LbQuNGC0LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQsNC80LXRgCwg0Lgg0LzRiyDQv9C+0LnQvNC10LwsINC00LvRjyDQutCw0LrQuNGFINC30LDQtNCw0Ycg0JLQsNC8INC90YPQttC90LAg0YHQuNGB0YLQtdC80LAsINCx0YPQtNGMINGC0L4g0YLRgNC10LHQvtCy0LDQvdC40Y8g0L/QviDQv9Cw0YHQv9C+0YDRgtGDIFxyXG4gICAgICAgICAgICDQsdC10LfQvtC/0LDRgdC90L7RgdGC0Lgg0LjQu9C4INGA0LXRiNC10L3QuNC1INGB0L/QvtGA0L3Ri9GFINC4INC60L7QvdGE0L7QuNC60YLQvdGL0YUg0YHQuNGC0YPQsNGG0LjQuTwvcD5gLFxyXG5cclxuICAgICAgICAgICAgJ29iamVjdF9fZmxhdCc6YDxwPtCj0LrQsNC20LjRgtC1INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsINC4INC80Ysg0L/QvtC50LzQtdC8LCDQtNC70Y8g0LrQsNC60LjRhSDQt9Cw0LTQsNGHINCS0LDQvCDQvdGD0LbQvdCwINGB0LjRgdGC0LXQvNCwLCDQsdGD0LTRjCDRgtC+INGC0YDQtdCx0L7QstCw0L3QuNGPINC/0L4g0L/QsNGB0L/QvtGA0YLRgyBcclxuICAgICAgICAgICAg0LHQtdC30L7Qv9Cw0YHQvdC+0YHRgtC4INC40LvQuCDRgNC10YjQtdC90LjQtSDRgdC/0L7RgNC90YvRhSDQuCDQutC+0L3RhNC+0LjQutGC0L3Ri9GFINGB0LjRgtGD0LDRhtC40Lk8L3A+YCxcclxuXHJcbiAgICAgICAgICAgICdvYmplY3RfX3RzemgnOmA8cD7Qo9C60LDQttC40YLQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGALCDQuCDQvNGLINC/0L7QudC80LXQvCwg0LTQu9GPINC60LDQutC40YUg0LfQsNC00LDRhyDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsCwg0LHRg9C00Ywg0YLQviDRgtGA0LXQsdC+0LLQsNC90LjRjyDQv9C+INC/0LDRgdC/0L7RgNGC0YMgXHJcbiAgICAgICAgICAgINCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuCDQuNC70Lgg0YDQtdGI0LXQvdC40LUg0YHQv9C+0YDQvdGL0YUg0Lgg0LrQvtC90YTQvtC40LrRgtC90YvRhSDRgdC40YLRg9Cw0YbQuNC5PC9wPmAsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyNsb2NhdGlvbic6IGA8cD7Qn9C+0L3QuNC80LDQvdC40LUg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjRjyDQvtCx0YrQtdC60YLQsCDQv9C+0LfQstC+0LvQuNGCINGB0YDQsNC30YMg0YPRh9C10YHRgtGMINGC0YDQsNC90YHQv9C+0YDRgtC90YvQtSBcclxuICAgICAgICDRgNCw0YHRhdC+0LTRiyDQsiDQutC+0LzQvNC10YDRh9C10YHQutC+0Lwg0L/RgNC10LTQu9C+0LbQtdC90LjQuCwg0YLQtdC8INGB0LDQvNGL0Lwg0L/QvtCy0YvRgdC40LIg0LXQs9C+INGC0L7Rh9C90L7RgdGC0YwuPC9wPmAsXHJcbiAgICAgICAgJyNvYmplY3QnOiBgPHA+0KHRgtC+0LjQvNC+0YHRgtGMINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQt9Cw0LLQuNGB0LjRgiDQtNCw0LvQtdC60L4g0L3QtSDRgtC+0LvRjNC60L4g0L7RgiDQutC+0LvQuNGH0LXRgdGC0LLQsCDQutCw0LzQtdGALiDQlNC70Y8g0LrQsNC20LTQvtCz0L4g0YLQuNC/0LAg0L7QsdGK0LXQutGC0LAg0LXRgdGC0Ywg0YHRgtCw0L3QtNCw0YDRgtC90YvQuSDQvdCw0LHQvtGAINC30LDQtNCw0YcuINCc0Ysg0YHQvNC+0LbQtdC8INCx0L7Qu9C10LUg0YLQvtGH0L3QviDQvtC/0YDQtdC00LXQu9C40YLRjCDRhdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQutC4INC4INC60L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAsXHJcbiAgICAgICAgINC30L3QsNGPINGC0LjQvyDQstCw0YjQtdCz0L4g0L7QsdGK0LXQutGC0LAuINCSINGA0LXQt9GD0LvRjNGC0LDRgtC1INGA0LDRgdGH0ZHRgiDRgdGC0L7QuNC80L7RgdGC0Lgg0LHRg9C00LXRgiDQvdCw0LjQsdC+0LvQtdC1INGC0L7Rh9C90YvQvC48L3A+YCxcclxuICAgICAgICAnI2FyY2hpZXZlJzpgPHA+0J7RgiDQtNCw0L3QvdC+0LPQviDQv9C+0LrQsNC30LDRgtC10LvRjyDQt9Cw0LLQuNGB0LjRgiDQtdC80LrQvtGB0YLRjCAg0LbQtdGB0YLQutC+0LPQviDQtNC40YHQutCwLCDQvNC+0LTQtdC70Ywg0YDQtdCz0LjRgdGC0YDQsNGC0L7RgNCwLCDRh9GC0L4g0LIg0YHQstC+0Y4g0L7Rh9C10YDQtdC00Ywg0YHQutCw0LbQtdGC0YzRgdGPINC90LAg0YHRgtC+0LjQvNC+0YHRgtC4INGB0LjRgdGC0LXQvNGLLiBcclxuICAgICAgICDQl9C00YDQsNCy0L4g0L7RhtC10L3QuNGC0LUg0LrQvtC90YDQutGC0L3Rg9GOINC/0L7RgtGA0LXQsdC90L7RgdGC0Ywg0LIg0LrQvtC70LjRh9C10YHRgtCy0LUg0LTQvdC10Lk8L3A+YCxcclxuICAgICAgICAnI2RvcHBlbCc6YFxyXG4gICAgICAgIDxwIGNsYXNzPSdjb21tZW50X19jb250ZW50LXRpdGxlJz7Qo9GB0YLRgNC+0LnRgdGC0LLQviDRgNC10LfQtdGA0LLQvdC+0LPQviDRjdC70LXQutGC0YDQvtC/0LjRgtCw0L3QuNGPPC9wPlxyXG4gICAgICAgIDxwPtCt0YLQviDRg9GB0YLRgNC+0LnRgdGC0LLQviDQv9C+0LfQstC+0LvQuNGCIFxyXG4gICAgICAgINGB0L7RhdGA0LDQvdGP0YLRjCDRgNCw0LHQvtGC0L7RgdC/0L7RgdC+0LHQvdC+0YHRgtGMINGB0LjRgdGC0LXQvNGLINC/0YDQuCDQvtGC0LrQu9GO0YfQtdC90LjQtSDRjdC70LXQutGC0YDQvtC/0LjRgtCw0L3QuNGPPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPSdjb21tZW50X19jb250ZW50LXRpdGxlJz7QmNC90YLQtdGA0L3QtdGCINC90LAg0L7QsdGK0LXQutGC0LU8L3A+XHJcbiAgICAgICAgPHA+0JIg0L3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8gINGB0LjRgdGC0LXQvNGLINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQv9C+0LfQstC+0LvRj9GO0YIg0L7RgdGD0YnQtdGB0YLQstC70Y/RgtGMINC60L7QvdGC0YDQvtC70Ywg0LfQsCDQv9GA0L7QuNGB0YXQvtC00Y/RidC40LwgXHJcbiAgICAgICAg0LIg0YDQtdC20LjQvNC1INGA0LXQsNC70YzQvdC+0LPQviDQstGA0LXQvNC10L3QuC4g0KHQu9C10LTQuNGC0Ywg0LfQsCDQvtCx0YHRgtCw0L3QvtCy0LrQvtC5INCyINC30L7QvdC1INCy0LjQtNC40LzQvtGB0YLQuCDQsdC10YHQv9GA0L7QstC+0LTQvdC+0Lkg0LrQsNC80LXRgNGLINC80L7QttC90L4gXHJcbiAgICAgICAg0YEg0L/QvtC80L7RidGM0Y4g0YHQv9C10YbQuNCw0LvRjNC90L7Qs9C+INC/0YDQuNC70L7QttC10L3QuNGPLiDQlNC+0YHRgtGD0L8g0Log0LjQt9C+0LHRgNCw0LbQtdC90LjRjiDQv9GA0L7QstC+0LTQvdGL0YUg0LrQsNC80LXRgCDQsiDQvtC90LvQsNC50L0t0YDQtdC20LjQvNC1INCy0L7Qt9C80L7QttC10L0gXHJcbiAgICAgICAg0YfQtdGA0LXQtyDQuNC90YLQtdGA0L3QtdGCINC/0L7RgdGA0LXQtNGB0YLQstC+0Lwg0LLQuNC00LXQvtGA0LXQs9C40YHRgtGA0LDRgtC+0YDQsC4g0JXRgdC70Lgg0YMg0LLQsNGBINC90LXRgiDQtNC+0YHRgtGD0L/QsCBcclxuICAgICAgICDQsiDQuNC90YLQtdGA0L3QtdGCINC90LAg0L7QsdGK0LXQutGC0LUsINC90L4g0L3Rg9C20LXQvSDRg9C00LDQu9C10L3QvdGL0Lkg0L/RgNC+0YHQvNC+0YLRgCwg0YPQutCw0LbQuNGC0LUg0LTQsNC90L3Ri9C5INC/0YPQvdC60YIuPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPSdjb21tZW50X19jb250ZW50LXRpdGxlJz7Ql9Cw0L/QuNGB0Ywg0LfQstGD0LrQsDwvcD5cclxuICAgICAgICA8cD7QktGB0LUg0LHQtdGB0L/RgNC+0LLQvtC00L3Ri9C1INGB0LjRgdGC0LXQvNGLINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjyDQvtGB0L3QsNGJ0LXQvdGLINCy0YHRgtGA0L7QtdC90L3Ri9C8INC80LjQutGA0L7RhNC+0L3QvtC8INC00LvRjyDQt9Cw0L/QuNGB0Lgg0LfQstGD0LrQsC4gXHJcbiAgICAgICAg0J/RgNC+0LLQvtC00L3Ri9C1INC60LDQvNC10YDRiyDRgtCw0LrQuNC8INGD0YHRgtGA0L7QudGB0YLQstC+0Lwg0L3QtSDRgNCw0YHQv9C+0LvQsNCz0LDRjtGCLCDQvdC+INC4INC00LvRjyDQvdC40YUg0LzQvtC20L3QviDQvtGC0LTQtdC70YzQvdC+INC/0YDQuNC+0LHRgNC10YHRgtC4INC4INGD0YHRgtCw0L3QvtCy0LjRgtGMINC80LjQutGA0L7RhNC+0L0uPC9wPmAsXHJcbiAgICAgICAgJyNob3dmYXN0JzpgPHA+0KHRgNC+0LrQuCDQvdC1INCy0LvQuNGP0Y7RgiDQvdCwINGB0YLQvtC40LzQvtGB0YLRjCDRgdC40YHRgtC10LzRiywg0L3QviDRjdGC0L4g0L/QvtC30LLQsNC70Y/QtdGCINC/0L7QtNC+0LHRgNCw0YLRjCDQvtC/0YLQuNC80LDQu9GM0L3QvtC1INC+0LHQvtGA0YPQtNC+0LLQsNC90LjQtSDQuCDRgdC/0LvQsNC90LjRgNC+0LLQsNGC0Ywg0YDQsNCx0L7RgtGDINC80L7QvdGC0LDQttC90LjQutC+0LIuPC9wPmAsXHJcbiAgICAgICAgJyNzcXVhcmUnOmA8cD7Qo9C60LDQttC40YLQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0LLQsNGI0LXQs9C+INC+0LHRitC10LrRgtCwINC00LvQuNC90L3RgyDQuCDRiNC40YDQuNC90YMsINGN0YLQviDQv9C+0LfQstC+0LvQuNGCINC/0YDQtdC00LLQsNGA0LjRgtC10LvRjNC90L4g0YDQsNGB0YfQuNGC0LDRgtGMINC00LvQuNC90YMgXHJcbiAgICAgICAg0LrQsNCx0LXQu9GM0L3Ri9GFINGC0YDQsNGBYyDQuNC70Lgg0YPQutCw0LbQuNGC0LUg0L/RgNC40LzQtdGA0L3Rg9GOINC00LvQuNC90YMgXHJcbiAgICAgICAg0LrQsNCx0LXQu9GPINC+0YIg0LrQsNC80LXRgNGLINC00L4g0L/RgNC10LTQv9C+0LvQsNCz0LDQtdC80L7Qs9C+INC80LXRgdGC0LAg0YPRgdGC0LDQvdC+0LLQutC4INC30LDQv9C40YHRi9Cy0LDRjtGJ0LXQs9C+INGD0YHRgtGA0L7QudGB0YLQstCwLjwvcD5gLFxyXG4gICAgICAgICcjY29tcGxlY3RhdGlvbic6IGA8cD7QrdGC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L4g0LTQu9GPINGC0L7Rh9C90L7Qs9C+INGA0LDRgdGH0LXRgtCwINC/0L7Qu9C90L7Qs9C+INC/0LXRgNC10YfQvdGPINC+0LHQvtGA0YPQtNC+0LLQsNC90LjRjzog0LTQu9GPINGA0LDRgdGH0LXRgtCwINGB0LjRgdGC0LXQvNGLIMKr0L/QvtC0INC60LvRjtGHwrsuPC9wPmBcclxuICAgIH1cclxuICAgIGxldCBzeXN0ZW1Qcm9wcyA9IHt9O1xyXG4gICAgbmVlZFNvdW5kRXZlbnQoKTtcclxuICAgIGZhc3RMZXZlbENoYW5nZSgpO1xyXG4gICAgcmFkaW9DaGVja0FjdGl2ZSgpO1xyXG4gICAgcmFkaW9PbkNoYW5nZSgpO1xyXG4gICAgZnVuY1NsaWRlcnMoKTtcclxuICAgIHNob3dDdXJyZW50U3BoZXJlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvYmplY3RfX2hvdXNlJykpO1xyXG4gICAgYWRkTmF2aWdhdGlvblRvQnV0dG9ucygpXHJcbiAgICBhZGRFdmVudE9uQWxsSW5wdXRzKCk7XHJcbiAgICBhZGRTaG93UGVyaW1ldGVyKCk7XHJcbiAgICBhZGRHZXRDYW1zUGVyaW1ldHJhbCgpO1xyXG4gICAgYWRkU2hvd0hpZGVDb21tZW50RXZlbnQoKTtcclxuICAgIHJlZnJlc2hDb21tZW50KCk7XHJcblxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDQutC+0LzQvNC10L3RgtGLINCyINC80L7QsdC40LvRjNC90L7QuSDQstC10YDRgdC40LhcclxuICAgIGZ1bmN0aW9uIHNob3dIaWRlQ29tbWVudCgpe1xyXG4gICAgICAgIGxldCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xyXG4gICAgICAgIGNvbW1lbnRzLmNsYXNzTGlzdC50b2dnbGUoJ2NvbW1lbnRzX2FjdGl2ZScpXHJcbiAgICB9XHJcbiAgICAvLyDQvdCw0LLQtdGB0LjRgtGMINC90LAg0LrQvdC+0L/QutGDINC60L7QvNC80LXQvdGC0LAg0Lgg0LrRgNC10YHRgtC40LpcclxuICAgIGZ1bmN0aW9uIGFkZFNob3dIaWRlQ29tbWVudEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHNob3dDb21tZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9jaXJjbGUnKTtcclxuICAgICAgICBsZXQgY2xvc2VDb21tZW50QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzX19jbG9zZScpO1xyXG4gICAgICAgIHNob3dDb21tZW50QnV0dG9uLm9uY2xpY2sgPSBzaG93SGlkZUNvbW1lbnQ7XHJcbiAgICAgICAgY2xvc2VDb21tZW50QnV0dG9uLm9uY2xpY2sgPSBzaG93SGlkZUNvbW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywg0YLQtdC60YPRidC40Lkg0LrQvtC80LzQtdC90YLQsNGA0LjQuVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaENvbW1lbnQoKXtcclxuICAgICAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy1jb250ZW50Jyk7XHJcbiAgICAgICAgbGV0IGNvbW1lbnREZXNrdG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2NvbW1lbnQtYm9keScpXHJcbiAgICAgICAgbGV0IG9iamVjdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb2JqZWN0Jyk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRPYmplY3QgPSBvYmplY3RQYWdlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmNoZWNrZWQnKTtcclxuICAgICAgICB0b2dnbGVIaWRlQ2xhc3MoY29tbWVudERlc2t0b3ApO1xyXG4gICAgICAgIGlmKDAgPCBzY3JlZW5Db3VudGVyIDwgOSl7XHJcbiAgICAgICAgICAgIGlmKHBhZ2VzW3NjcmVlbkNvdW50ZXJdID09ICcjY2FtZXJhY291bnQnKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudE9iamVjdCAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50LmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXVtjdXJyZW50T2JqZWN0LmlkXTtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50RGVza3RvcC5pbm5lckhUTUwgPSBjb21tZW50c1twYWdlc1tzY3JlZW5Db3VudGVyXV1bY3VycmVudE9iamVjdC5pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQuaW5uZXJIVE1MID0gY29tbWVudHNbcGFnZXNbc2NyZWVuQ291bnRlcl1dWydub2Nob3NlbiddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnREZXNrdG9wLmlubmVySFRNTCA9IGNvbW1lbnRzW3BhZ2VzW3NjcmVlbkNvdW50ZXJdXVsnbm9jaG9zZW4nXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29tbWVudC5pbm5lckhUTUwgPSBjb21tZW50c1twYWdlc1tzY3JlZW5Db3VudGVyXV07XHJcbiAgICAgICAgICAgICAgICBjb21tZW50RGVza3RvcC5pbm5lckhUTUwgPSBjb21tZW50c1twYWdlc1tzY3JlZW5Db3VudGVyXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCh0b2dnbGVIaWRlQ2xhc3MoY29tbWVudERlc2t0b3ApLCAzMDAwKTtcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy/RgdC60YDRi9GC0Ywg0Lgg0L/QvtC60LDQt9Cw0YLRjCDRjdC70LXQvNC10L3RglxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlSGlkZUNsYXNzKGVsZW0pe1xyXG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0YTRg9C90LrRhtC40Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICBmdW5jdGlvbiBuYXZpZ2F0aW9uKGRpcmVjdGlvbil7XHJcbiAgICAgICAgaWYoZGlyZWN0aW9uID09ICdmb3J3YXJkJyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGFnZXNbc2NyZWVuQ291bnRlcl19YCk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXIgPT0gOD9oaWRlKGN1cnJlbnRQYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk6aGlkZShjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXIrKztcclxuICAgICAgICAgICAgbGV0IG5leHRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc3dpdGNoIChzY3JlZW5Db3VudGVyKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogLy/Qv9C10YDQtdGF0L7QtCDQvdCwINGB0YLRgNCw0L3QuNGG0YMg0YEg0LLQvtC/0YDQvtGB0LDQvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyhuZXh0UGFnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICdncmlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDk6IC8v0L/QtdGA0LXRhdC+0LQg0L3QsCDRgdGC0YDQsNC90LjRhtGDINGA0LXQt9GD0LvRjNGC0LDRgtCwXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdyhuZXh0UGFnZSwgJ2dyaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZVJlc3VsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN5c3RlbVByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxyXG4gICAgICAgICAgICAgICAgICAgIHNob3cobmV4dFBhZ2UsICdmbGV4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZignYmFjaycpe1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzY3JlZW5Db3VudGVyID09IDE/aGlkZShjdXJyZW50UGFnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpOmhpZGUoY3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICBzY3JlZW5Db3VudGVyLS07XHJcbiAgICAgICAgICAgIGxldCBuZXh0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGFnZXNbc2NyZWVuQ291bnRlcl19YCk7XHJcbiAgICAgICAgICAgIHNjcmVlbkNvdW50ZXIgPT0gOD9zaG93KG5leHRQYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCwgJ2dyaWQnKTpzaG93KG5leHRQYWdlLCAnZmxleCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZigwIDwgc2NyZWVuQ291bnRlciA8IDkpe1xyXG4gICAgICAgICAgICByZWZyZXNoUXVlc3Rpb24oKTtcclxuICAgICAgICAgICAgY2hlY2tCdXR0b24oKTtcclxuICAgICAgICAgICAgcmVmcmVzaENvbW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9C00L7QsdCw0LLQu9C10L3QuNC1INC90LDQstC40LPQsNGG0LjQuCDQvdCwINC60L3QvtC/0LrQuFxyXG4gICAgZnVuY3Rpb24gYWRkTmF2aWdhdGlvblRvQnV0dG9ucygpe1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVsb2FkX19idXR0b24nKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignZm9yd2FyZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19idXR0b25fZm9yd2FyZCcpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdmb3J3YXJkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdF9fYnV0dG9uX2dldE9mZmVyJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2ZvcndhcmQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2JhY2snKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignYmFjaycpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX2J1dHRvbl9iYWNrJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2JhY2snKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uX2JhY2snKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignYmFjaycpO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b25fc2VuZE9mZmVyJykub25jbGljayA9ICgpID0+IGFsZXJ0KCdGb3JtIHdhcyBzZW50IScpO1xyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDRjdC70LXQvNC10L3RgiDQv9GA0Lgg0L3QsNCy0LjQs9Cw0YbQuNC4XHJcbiAgICBmdW5jdGlvbiBoaWRlKGVsZW0pe1xyXG4gICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2hvdyhlbGVtLCBkaXNwUHJvcGVydHkpe1xyXG4gICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IGRpc3BQcm9wZXJ0eTtcclxuICAgICAgICBlbGVtLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfSAgICBcclxuICAgIC8v0J7QsdC90L7QstC40YLRjCDQstC+0L/RgNC+0YFcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hRdWVzdGlvbigpe1xyXG4gICAgICAgIGxldCBxdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19xdWVzdGlvbi10ZXh0Jyk7XHJcbiAgICAgICAgcXVlc3Rpb24udGV4dENvbnRlbnQgPSBxdWVzdGlvbnNbc2NyZWVuQ291bnRlcl07XHJcbiAgICB9XHJcbiAgICAvL9Cx0LvQvtC60LjRgNC+0LLQutCwL9GA0LDQt9Cx0LvQvtC60LjRgNC+0LLQutCwINC60L3QvtC/0LrQuFxyXG4gICAgZnVuY3Rpb24gY2hlY2tCdXR0b24oKXtcclxuICAgICAgICBsZXQgYnV0dG9uRm9yd2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19idXR0b25fZm9yd2FyZCcpO1xyXG4gICAgICAgIGlmKCFjaGVja0lzQ2hvc2VuKHNjcmVlbkNvdW50ZXIpKXtcclxuICAgICAgICAgICAgYnV0dG9uRm9yd2FyZC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGJ1dHRvbkZvcndhcmQuZGlzYWJsZWQgPSBmYWxzZTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/Qv9GA0L7QstC10YDQuNGC0Ywg0LLRi9Cx0YDQsNC9INC70Lgg0LLQsNGA0LjQsNC90YIg0L3QsCDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtC1XHJcbiAgICBmdW5jdGlvbiBjaGVja0lzQ2hvc2VuKHNjcmVlbkNvdW50ZXIpe1xyXG4gICAgICAgIGxldCBpc1RydWUgPSAwO1xyXG4gICAgICAgIGxldCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7cGFnZXNbc2NyZWVuQ291bnRlcl19YCk7XHJcbiAgICAgICAgc3dpdGNoKHBhZ2VzW3NjcmVlbkNvdW50ZXJdKXtcclxuICAgICAgICAgICAgY2FzZSAnI29iamVjdCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0UmFkaW9zID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLm9iamVjdF9faW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIG9iamVjdFJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtpZihyYWRpby5jaGVja2VkKSBpc1RydWUrK30pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgICAgICBjYXNlICcjbG9jYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgbGV0IGxvY2F0aW9uUmFkaW9zID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmxvY2F0aW9uX19pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7aWYocmFkaW8uY2hlY2tlZCkgaXNUcnVlKyt9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjY2FtZXJhY291bnQnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNhbWVyYWNvdW50UmFuZ2VzID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19zbGlkZXInKTtcclxuICAgICAgICAgICAgICAgIGNhbWVyYWNvdW50UmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4ge2lmKHJhbmdlLnZhbHVlICE9IDApIGlzVHJ1ZSsrO30pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNhcmNoaWV2ZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJjaGlldmVSYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvJyk7XHJcbiAgICAgICAgICAgICAgICBhcmNoaWV2ZVJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtpZihyYWRpby5jaGVja2VkKWlzVHJ1ZSsrO30pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNkb3BwZWwnOlxyXG4gICAgICAgICAgICAgICAgbGV0IHNvdW5kTmVlZElucHV0ID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWRfcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXNlcnZlTmVlZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNyZXNlcnZlX25lZWQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcm5ldE5lZWQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjaW50ZXJuZXRfbmVlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNvdW5kTmVlZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkJyk7XHJcbiAgICAgICAgICAgICAgICBpZigoc291bmROZWVkLmNoZWNrZWQgfHwgIXNvdW5kTmVlZC5jaGVja2VkKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNlcnZlTmVlZC5jaGVja2VkIHx8ICFyZXNlcnZlTmVlZC5jaGVja2VkKSAmJiAoIXNvdW5kTmVlZC5jaGVja2VkIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgIChzb3VuZE5lZWQuY2hlY2tlZCAmJiBzb3VuZE5lZWRJbnB1dC52YWx1ZSAhPSAwKSkpIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNob3dmYXN0JzpcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0SGlnaCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X2hpZ2gnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0TWlkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfbWlkZGxlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdExvdyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X2xvdycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RPd24gPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9vd24nKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0T3duRmllbGQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9hcmVhJyk7XHJcbiAgICAgICAgICAgICAgICBpZihmYXN0SGlnaC5jaGVja2VkIHx8IGZhc3RNaWQuY2hlY2tlZCB8fCBmYXN0TG93LmNoZWNrZWQgfHwgKGZhc3RPd24uY2hlY2tlZCAmJiBmYXN0T3duRmllbGQudmFsdWUgIT0nJykpIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNzcXVhcmUnOiBcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVJbnB1dHMgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVBlcmltZXRlciA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNzcWFyZV9fcGVyaW1ldHJhbCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZU9iamVjdExvbmcgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc3F1YXJlLW9iamVjdC1sb25nJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlT2JqZWN0V2lkdGggPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc3F1YXJlLW9iamVjdC13aWR0aCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVBlcmltZXRlckxvbmcgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc3F1YXJlLXBlcmltZXRlci1sb25nJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlUGVyaW1ldGVyV2lkdGggPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc3F1YXJlLXBlcmltZXRlci13aWR0aCcpO1xyXG4gICAgICAgICAgICAgICAgaWYoc3F1YXJlUGVyaW1ldGVyLmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmVPYmplY3RMb25nLnZhbHVlICE9IDAgJiYgc3F1YXJlT2JqZWN0V2lkdGggIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKCFzcXVhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzcXVhcmVfX3BlcmltZXRyYWxfaGlkZGVuJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNxdWFyZU9iamVjdExvbmcudmFsdWUgIT0gMCAmJiBzcXVhcmVPYmplY3RXaWR0aCAhPSAwICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXVhcmVQZXJpbWV0ZXJMb25nLnZhbHVlICE9IDAgJiYgc3F1YXJlUGVyaW1ldGVyV2lkdGgudmFsdWUgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNjb21wbGVjdGF0aW9uJzpcclxuICAgICAgICAgICAgICAgIGxldCBjb21wbGVjdGF0aW9uUmFkaW9zID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZWN0YXRpb25fX2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb21wbGVjdGF0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJhZGlvLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc1RydWU7XHJcbiAgICB9XHJcbiAgICAvL9GA0LDQtNC40L7QutC90L7Qv9C60Lgg0JLQvtC/0YDQvtGBIDFcclxuICAgIC8v0L/RgNC+0LLQtdGA0LrQsCDRgNCw0LTQuNC+0LrQvdC+0L/QvtC6INC90LAgY2hlY2tlZFxyXG4gICAgZnVuY3Rpb24gcmFkaW9DaGVja0FjdGl2ZSgpe1xyXG4gICAgICAgIGxldCByYWRpb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0ncmFkaW8nXWApO1xyXG4gICAgICAgIHJhZGlvSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5jaGVja2VkKXtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvYmplY3RfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvYmplY3RfX2l0ZW1fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgICAvL9C00L7QsdCw0LLQu9C10L3QuNC1INC40LLQtdC90YLQsCDQv9C+INC40LfQvNC10L3QtdC90LjRjiDRgNCw0LTQuNC+INC90LAgMSDRgdGC0YDQsNC90LjRhtC1XHJcbiAgICBmdW5jdGlvbiByYWRpb09uQ2hhbmdlKCl7XHJcbiAgICAgICAgbGV0IG9iamVjdFJhZGlvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vYmplY3RfX2lucHV0Jyk7XHJcbiAgICAgICAgb2JqZWN0UmFkaW9zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmFkaW8gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9DaGVja0FjdGl2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFByb3BzKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIHNob3dDdXJyZW50U3BoZXJlKGN1cnJlbnRSYWRpbyk7XHJcbiAgICAgICAgICAgICAgICBzaG93UGVyaW1ldGVyKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGMINCyINCy0L7Qv9GA0L7RgdC1INC/0YDQviDQutC+0LvQuNGH0LXRgdGC0LLQviDQutCw0LzQtdGAINC90YPQttC90YPRjiDRgdGE0LXRgNGDINC/0YDQuNC80LXQvdC10L3QuNGPLCDRgdC60YDRi9CyINC90LXQvdGD0LbQvdC+0LVcclxuICAgIGZ1bmN0aW9uIHNob3dDdXJyZW50U3BoZXJlKGlucHV0KXtcclxuICAgICAgICBsZXQgY3VycmVudFNwaGVyZSA9IGlucHV0LmRhdGFzZXQuY2hvaXNlO1xyXG4gICAgICAgIGxldCBjYW1Db3VudGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYW1lcmEtY291bnRfX2l0ZW0nKTtcclxuICAgICAgICBjYW1Db3VudGVycy5mb3JFYWNoKGNvdW50ZXIgPT4ge1xyXG4gICAgICAgICAgICBjb3VudGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgY3VycmVudENvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FtZXJhLWNvdW50X18ke2N1cnJlbnRTcGhlcmV9YCk7XHJcbiAgICAgICAgY3VycmVudENvdW50ZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0L/QvtC60LDQt9Cw0YLRjCDQsiBzcXVhcmUg0L/QtdGA0LjQvNC10YLRgNCw0LvQutC4LCDQtdGB0LvQuCDQt9C90LDRh9C10L3QuNC1INC40YUg0LIg0LrQvtC70LjRh9C10YHRgtCy0LUgIT0gMFxyXG4gICAgZnVuY3Rpb24gc2hvd1BlcmltZXRlcigpe1xyXG4gICAgICAgIGxldCBjb3VudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FtZXJhY291bnQnKTtcclxuICAgICAgICBsZXQgcGVyaW1ldGVyUmFuZ2VzID0gY291bnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZXJpbWV0ZXInKTtcclxuICAgICAgICBsZXQgc3FhcmVQZXJpbWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3FhcmVfX3BlcmltZXRyYWwnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGVyaW1ldGVySGFzID0gMDtcclxuICAgICAgICBwZXJpbWV0ZXJSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJhbmdlLnZhbHVlICE9IDApe1xyXG4gICAgICAgICAgICAgICAgcGVyaW1ldGVySGFzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKHBlcmltZXRlckhhcyAhPSAwKXtcclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpO1xyXG4gICAgICAgICAgICBzeXN0ZW1Qcm9wc1snc2hvd1BlcmltZXRlciddID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZGVsZXRlIHN5c3RlbVByb3BzWydzaG93UGVyaW1ldGVyJ107XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzeXN0ZW1Qcm9wc1sncGVyaW1ldGVyTGVuZ3RoJ107XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzeXN0ZW1Qcm9wc1sncGVyaW1ldGVyV2lkdGgnXTtcclxuICAgICAgICAgICAgbGV0IHNxYXJlUGVyaW1ldGVyUmFuZ2VzID0gc3FhcmVQZXJpbWV0ZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgc3FhcmVQZXJpbWV0ZXJSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByYW5nZS52YWx1ZSA9IDBcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNxYXJlUGVyaW1ldGVyLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9C/0L7RgdGH0LjRgtCw0YLRjCDQutC+0LvQuNGH0LXRgdGC0LLQviDQv9C10YDQuNC80LXRgtGA0LDQu9GM0L3Ri9GFINC60LDQvNC10YAg0Lgg0LfQsNC/0LjRgdCw0YLRjCDQsiBzeXN0ZW1Qcm9wc1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2Ftc1BlcmltZXRyYWwoKXtcclxuICAgICAgICBsZXQgY291bnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYWNvdW50Jyk7XHJcbiAgICAgICAgbGV0IHBlcmltZXRlclJhbmdlcyA9IGNvdW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucGVyaW1ldGVyJyk7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBwZXJpbWV0ZXJSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyBOdW1iZXIocmFuZ2UudmFsdWUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihjb3VudCAhPSAwKXtcclxuICAgICAgICAgICAgc3lzdGVtUHJvcHNbJ2NhbXNQZXJpbWV0cmFsQ291bnQnXSA9IGNvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGNvdW50ID09IDApe1xyXG4gICAgICAgICAgICBkZWxldGUgc3lzdGVtUHJvcHNbJ2NhbXNQZXJpbWV0cmFsQ291bnQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3lzdGVtUHJvcHMpO1xyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LLQtdGB0LjRgtGMINC90LAg0YDRjdC50L3QtNC20LhcclxuICAgIGZ1bmN0aW9uIGFkZEdldENhbXNQZXJpbWV0cmFsKCl7XHJcbiAgICAgICAgbGV0IGNvdW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW1lcmFjb3VudCcpO1xyXG4gICAgICAgIGxldCBwZXJpbWV0ZXJSYW5nZXMgPSBjb3VudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLnBlcmltZXRlcicpO1xyXG4gICAgICAgIHBlcmltZXRlclJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBnZXRDYW1zUGVyaW1ldHJhbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8g0L/QvtCy0LXRgdC40YLRjCDQvdCwIHJhbmdlINC/0LXRgNC40LzQtdGC0YDQsNC70L7QuiDQsiBjYW1lcmFjb3VudCDRhNGD0L3QutGG0LjQuCBzaG93UGVyaW1ldGVyINC90LAgaW5wdXRcclxuICAgIGZ1bmN0aW9uIGFkZFNob3dQZXJpbWV0ZXIoKXtcclxuICAgICAgICBsZXQgY291bnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYWNvdW50Jyk7XHJcbiAgICAgICAgbGV0IHBlcmltZXRlclJhbmdlcyA9IGNvdW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucGVyaW1ldGVyJyk7XHJcbiAgICAgICAgcGVyaW1ldGVyUmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNob3dQZXJpbWV0ZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL9GB0LHRgNC+0YHQuNGC0Ywg0YHRh9C10YLRh9C40LrQuFxyXG4gICAgZnVuY3Rpb24gcmVzZXRWYWx1ZXMoKXtcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEg0L4g0LrQvtC70LjRh9C10YHRgtCy0LUg0YHRh9C10YLRh9C40LrQuCDQutCw0LzQtdGAINGD0LLQtdGB0YLQuCDQvdCwIDBcclxuICAgICAgICAgICAgbGV0IGNhbUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1jb3VudCcpO1xyXG4gICAgICAgICAgICBsZXQgcmFuZ2VzQ2FtQ291bnQgPSBjYW1Db3VudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX3NsaWRlcicpO1xyXG4gICAgICAgICAgICByYW5nZXNDYW1Db3VudC5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHdyaXRlQWxsQ2Ftc0tpbmQoKTtcclxuICAgICAgICAgICAgLy/QvtCx0YrQtdC60YIgLSDRgdCx0YDQvtGBINGA0LDQtNC40L5cclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvblJhZGlvcyA9IGxvY2F0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgbG9jYXRpb25SYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldFJhZGlvKHJhZGlvKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEg0L7QsSDQsNGA0YXQuNCy0LUg0YHQsdGA0L7RgdC40YLRjCByYWRpbyBcclxuICAgICAgICAgICAgbGV0IGFyY2hpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJjaGlldmUnKTtcclxuICAgICAgICAgICAgbGV0IHJhZGlvc0FyY2hpZXZlID0gYXJjaGl2ZS5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvJyk7XHJcbiAgICAgICAgICAgIHJhZGlvc0FyY2hpZXZlLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRSYWRpbyhyYWRpbyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v0LLQvtC/0YDQvtGBINC00L7QvyDQvtC/0YbQuNC4INGB0LHRgNC+0YHQuNGC0Ywg0YfQtdC60LHQvtC60YHRiyDQuCByYW5nZSDRgdCx0YDQvtGB0LjRgtGMINC4INGB0LrRgNGL0YLRjFxyXG4gICAgICAgICAgICBsZXQgZG9wcGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvcHBlbCcpO1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tib3hlc0RvcHBlbCA9IGRvcHBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWNoZWNrJyk7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXNEb3BwZWwuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldENoZWNrQm94KGNoZWNrYm94KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IHJhbmdlRG9wcGVsID0gZG9wcGVsLnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgICAgIHJhbmdlRG9wcGVsLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHJhbmdlRG9wcGVsKTtcclxuICAgICAgICAgICAgY2hlY2tOZWVkU291bmQoKTtcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEgaG93RmFzdCDRgdCx0YDQvtGB0LjRgtGMINGA0LDQtNC40L5cclxuICAgICAgICAgICAgbGV0IGZhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzdCcpO1xyXG4gICAgICAgICAgICBsZXQgcmFkaW9zRmFzdCA9IGZhc3QucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICByYWRpb3NGYXN0LmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRSYWRpbyhyYWRpbyk7XHJcbiAgICAgICAgICAgICAgICBoYXNPd25BbnN3ZXIoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEgc3F1YXJlINGB0LHRgNC+0YHQuNGC0YwgcmFuZ2VcclxuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcXVhcmUnKTtcclxuICAgICAgICAgICAgbGV0IHNxdWFyZVJhbmdlcyA9IHNxdWFyZS5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2Utc2xpZGVyJyk7XHJcbiAgICAgICAgICAgIHNxdWFyZVJhbmdlcy5mb3JFYWNoKHJhbmdlID0+IHJhbmdlLnZhbHVlID0gMCk7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9C00L7QsdCw0LLQu9C10L3QuNC1INC+0LHRgNCw0LHQvtGC0YfQuNC60LAg0L3QsCDRgdC70LDQudC00LXRgFxyXG4gICAgZnVuY3Rpb24gZnVuY1NsaWRlcnMoKXtcclxuICAgICAgICBsZXQgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgc2xpZGVycy5mb3JFYWNoKHNsaWRlciA9PiB7XHJcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUmFuZ2UodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBjaGVja0J1dHRvbigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8v0YHQsdGA0L7RgSDRgNCw0LTQuNC+XHJcbiAgICBmdW5jdGlvbiByZXNldFJhZGlvKGVsZW0pe1xyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy9yZXNldCBjaGVja2JveFxyXG4gICAgZnVuY3Rpb24gcmVzZXRDaGVja0JveChlbGVtKXtcclxuICAgICAgICBlbGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8v0L7QsdC90L7QstC40YLRjCDQv9C+0LvQt9GD0L3QvtC6XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoUmFuZ2UoY3VycmVudCl7XHJcbiAgICAgICAgY3VycmVudC5uZXh0U2libGluZy5pbm5lckhUTUwgPSBjdXJyZW50LnZhbHVlO1xyXG4gICAgICAgIGxldCBwZXJjZW50VmFsdWUgPSAoY3VycmVudC52YWx1ZS9jdXJyZW50Lm1heCkqMTAwO1xyXG4gICAgICAgIGxldCBjb2xvciA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMyw4MSwxNDUsMSkgJHtwZXJjZW50VmFsdWV9JSwgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjE3OCkgJHtwZXJjZW50VmFsdWV9JSlgXHJcbiAgICAgICAgY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XHJcbiAgICB9XHJcbiAgICAvL9CS0L7Qv9GA0L7RgSA0INC90YPQttC10L0g0LfQstGD0LpcclxuICAgIGZ1bmN0aW9uIG5lZWRTb3VuZEV2ZW50KCl7XHJcbiAgICAgICAgbGV0IHJlY29yZENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICByZWNvcmRDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja05lZWRTb3VuZClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoZWNrTmVlZFNvdW5kKCl7XHJcbiAgICAgICAgbGV0IHJlY29yZENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICBsZXQgdG9nZ2xlUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9wcGVsX19zb3VuZHJlY29yZCcpO1xyXG4gICAgICAgIGxldCBzb3VuZE5lZWRSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJyk7XHJcbiAgICAgICAgaWYocmVjb3JkQ2hlY2tib3guY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHRvZ2dsZVJhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2RvcHBlbF9fc291bmRyZWNvcmRfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRvZ2dsZVJhbmdlLmNsYXNzTGlzdC5hZGQoJ2RvcHBlbF9fc291bmRyZWNvcmRfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHNvdW5kTmVlZFJhbmdlLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgcmVmcmVzaFJhbmdlKHNvdW5kTmVlZFJhbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9CS0L7Qv9GA0L7RgTUg0YHQstC+0Lkg0LLQsNGA0LjQsNC90YIg0L7RgtCy0LXRgtCwXHJcbiAgICAgICAgLy/Qv9GA0L7QstC10YDQuNGC0Ywg0YfQtdC6INGDINGA0LDQtNC40L4g0YHQstC+0Lkg0LLQsNGA0LjQsNC90YIsINC10YHQu9C4INC00LAsINGC0L4g0YPQtNCw0LvQuNGC0Ywg0LrQu9Cw0YHRgSDRgdC60YDRi9GC0LjRjywg0LXRgdC70Lgg0L3QtdGCIC0g0LTQvtCx0LDQstC40YLRjFxyXG4gICAgZnVuY3Rpb24gaGFzT3duQW5zd2VyKCl7XHJcbiAgICAgICAgbGV0IG93bkFuc3dlckFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzdF9fb3duYW5zd2VyJyk7XHJcbiAgICAgICAgbGV0IGhhc093biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X293bicpO1xyXG4gICAgICAgIGlmKGhhc093bi5jaGVja2VkKXtcclxuICAgICAgICAgICAgb3duQW5zd2VyQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdmYXN0X19vd25hbnN3ZXJfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIG93bkFuc3dlckFyZWEuY2xhc3NMaXN0LmFkZCgnZmFzdF9fb3duYW5zd2VyX2hpZGRlbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0L3QsNCy0LXRgdC40YLRjCDRjdGC0YMg0YTRg9C90LrRhtC40Y4g0L3QsCDQuNC30LzQtdC90LXQvdC40LUg0LLRgdC10YUg0Ycv0LEg0LIg0LPRgNGD0L/Qv9C1XHJcbiAgICBmdW5jdGlvbiBmYXN0TGV2ZWxDaGFuZ2UoKXtcclxuICAgICAgICBsZXQgcmFkaW9JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5mYXN0X19pbnB1dGApO1xyXG4gICAgICAgIHJhZGlvSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYXNPd25BbnN3ZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy/QvtCx0YnQuNC5INC40LLQtdC90YIg0L3QsCDQstGB0LUg0LjQvdC/0YPRgtGLINCy0L7Qv9GA0L7RgdC+0LIgY2hlY2tCdXR0b24oKSAtINC/0YDQvtCy0LXRgNC40YLRjCwgXHJcbiAgICAvL9C10YHRgtGMINC70Lgg0LLRi9Cx0YDQsNC90L3Ri9C1INC4INCy0LLQtdC00LXQvdC90YvQtSDQt9C90LDRh9C10L3QuNGPINC4INC10YHQu9C4INC10YHRgtGMLFxyXG4gICAgLy/QuCDQtdGB0LvQuCDQtdGB0YLRjCAtINGA0LDQt9Cx0LvQvtC60LjRgNC+0LLQsNGC0Ywg0LrQvdC+0L/QutGDXHJcbiAgICAvL9C40YnQtdC8INGH0LXRgNC10Lcg0YDQvtC00LjRgtC10LvRjyAucXVpel9fcXVlc3Rpb24tYm9keSwg0YfRgtC+0LEg0L3QtSDQt9Cw0YbQtdC/0LjRgtGMINGB0YLRgNCw0L3QuNGG0YMg0YEg0YTQvtGA0LzQvtC5XHJcbiAgICBmdW5jdGlvbiBhZGRFdmVudE9uQWxsSW5wdXRzKCl7XHJcbiAgICAgICAgbGV0IHF1aXpCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX3F1ZXN0aW9uLWJvZHkgJyk7XHJcbiAgICAgICAgbGV0IGFsbFJhZGlvcyA9IHF1aXpCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xyXG4gICAgICAgIGFsbFJhZGlvcy5mb3JFYWNoKGl0ZW0gPT4ge2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tCdXR0b24oKSl9KTtcclxuICAgICAgICBsZXQgYWxsUmFuZ2VzID0gcXVpekJvZHkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdJyk7XHJcbiAgICAgICAgYWxsUmFuZ2VzLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGNoZWNrQnV0dG9uKCkpfSk7XHJcbiAgICAgICAgbGV0IGFsbENoZWNrYm94ZXMgPSBxdWl6Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuICAgICAgICBhbGxDaGVja2JveGVzLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjaGVja0J1dHRvbigpKX0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy/QstCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LzRiyAgIFxyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fZm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZvcm1TZW5kKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZvcm1TZW5kKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB2YWxpZEVycm9yID0gZm9ybVZhbGlkYXRlKGZvcm0pO1xyXG4gICAgICAgIGlmKHZhbGlkRXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydCgn0J3QtdC60L7RgNGA0LXQutGC0L3QvtC1INC30LDQv9C+0LvQvdC10L3QuNC1INC/0L7Qu9C10Lk6INC/0L7QttCw0LvRg9C50YHRgtCwLCDQv9GA0L7QstC10YDRjNGC0LUg0LrQvtGA0YDQtdC60YLQvdC+0YHRgtGMINC00LDQvdC90YvRhScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncmVzdWx0JywgSlNPTi5zdHJpbmdpZnkoeydpbm5lcic6IFwiM1wiLCAnb2JqZWN0JzogJ2hvdXNlJywgJ3Rlc3QnOiAndGVzdCd9KSk7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcuLi9jb3JlLnBocCcsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykgeyAvLyDQtdGB0LvQuCBIVFRQLdGB0YLQsNGC0YPRgSDQsiDQtNC40LDQv9Cw0LfQvtC90LUgMjAwLTI5OVxyXG4gICAgICAgICAgICAgICAgLy8g0L/QvtC70YPRh9Cw0LXQvCDRgtC10LvQviDQvtGC0LLQtdGC0LAgKNGB0LwuINC/0YDQviDRjdGC0L7RgiDQvNC10YLQvtC0INC90LjQttC1KVxyXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwi0J7RiNC40LHQutCwIEhUVFA6IFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1WYWxpZGF0ZShmb3JtKXtcclxuICAgICAgICBsZXQgZXJyb3IgPSAwO1xyXG4gICAgICAgIGxldCBmb3JtVmFsaWRGaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuX3ZhbGlkJyk7XHJcbiAgICAgICAgZm9ybVZhbGlkRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgICBmb3JtUmVtb3ZlRXJyb3IoZmllbGQpO1xyXG4gICAgICAgICAgICBzd2l0Y2goZmllbGQudHlwZSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgICAgICBpZihmaWVsZC52YWx1ZSA9PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1BZGRFcnJvcihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGhvbmVUZXN0KGZpZWxkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1BZGRFcnJvcihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgICAgICAgICBpZihlbWFpbFRlc3QoZmllbGQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUFkZEVycm9yKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpZWxkLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQWRkRXJyb3IoZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9ybUFkZEVycm9yKGlucHV0KXtcclxuICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ19lcnInKTtcclxuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdfZXJyJyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtUmVtb3ZlRXJyb3IoaW5wdXQpe1xyXG4gICAgICAgIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnX2VycicpO1xyXG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ19lcnInKTtcclxuICAgIH1cclxuICAgIC8vKzc5MjYxMjM0NTY3XHJcbiAgICBmdW5jdGlvbiBwaG9uZVRlc3QoaW5wdXQpe1xyXG4gICAgICAgIHJldHVybiAhL14oKDh8XFwrNylbXFwtIF0/KT8oXFwoP1xcZHszfVxcKT9bXFwtIF0/KT9bXFxkXFwtIF17NywxMH0kLy50ZXN0KGlucHV0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIC8qLy8g0J/RgNC+0LLQtdGA0LrQsCDRgtC10LvQtdGE0L7QvdCwINC90LAg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC1INCy0LjQtNGDOlxyXG4gICAgLy8gODkyNjEyMzQ1NjdcclxuICAgIC8vIDc5MjYxMjM0NTY3XHJcbiAgICAvLyArNyA5MjYgMTIzIDQ1IDY3XHJcbiAgICAvLyA4KDkyNikxMjMtNDUtNjdcclxuICAgIC8vIDEyMy00NS02N1xyXG4gICAgLy8gOTI2MTIzNDU2N1xyXG4gICAgLy8gNzkyNjEyMzQ1NjdcclxuICAgIC8vICg0OTUpMTIzNDU2N1xyXG4gICAgLy8gKDQ5NSkgMTIzIDQ1IDY3XHJcbiAgICAvLyA4OTI2MTIzNDU2N1xyXG4gICAgLy8gOC05MjYtMTIzLTQ1LTY3XHJcbiAgICAvLyA4IDkyNyAxMjM0IDIzNFxyXG4gICAgLy8gOCA5MjcgMTIgMTIgODg4XHJcbiAgICAvLyA4IDkyNyAxMiA1NTUgMTJcclxuICAgIC8vIDggOTI3IDEyMyA4IDEyMyovXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGVtYWlsVGVzdChpbnB1dCl7XHJcbiAgICAgICAgcmV0dXJuICEvXlstYS16MC05ISMkJSYnKisvPT9eX2B7fH1+XSsoPzpcXC5bLWEtejAtOSEjJCUmJyorLz0/Xl9ge3x9fl0rKSpAKD86W2EtejAtOV0oWy1hLXowLTldezAsNjF9W2EtejAtOV0pP1xcLikqKD86YWVyb3xhcnBhfGFzaWF8Yml6fGNhdHxjb218Y29vcHxlZHV8Z292fGluZm98aW50fGpvYnN8bWlsfG1vYml8bXVzZXVtfG5hbWV8bmV0fG9yZ3xwcm98dGVsfHRyYXZlbHxbYS16XVthLXpdKSQvLnRlc3QoaW5wdXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuICEvXigoKFswLTlBLVphLXpdezF9Wy0wLTlBLXpcXC5dezEsfVswLTlBLVphLXpdezF9KXwoWzAtOdCQLdCv0LAt0Y9dezF9Wy0wLTnQkC3Rj1xcLl17MSx9WzAtOdCQLdCv0LAt0Y9dezF9KSlAKFstMC05QS1aYS16XXsxLH1cXC4pezEsMn1bLUEtWmEtel17Mix9KSQvLnRlc3QoaW5wdXQudmFsdWUpO1xyXG4gICAgXHJcblxyXG5cclxuICAgIC8vINCh0LHQvtGAINC00LDQvdC90YvRhSDQsiDQvtCx0YrQtdC60YIgc3lzdGVtUHJvcHMuINCe0YHRg9GJ0LXRgdGC0LLQu9GP0LXRgtGB0Y8g0L/RgNC4INC60L7QttC00L7QvCDQvdCw0LbQsNGC0LjQuCDQutC90L7Qv9C60LggKNC30LDRiNC40YIg0LIg0YTRg9C90LrRhtC40Y4g0L3QsNCy0LjQs9Cw0YbQuNC4KS5cclxuICAgIC8vIDEuINCe0L/RgNC10LTQtdC70LXQvdC40LUg0L7QsdGK0LXQutGC0LAgLSDQt9Cw0YjQuNGC0L4g0LIg0LjQt9C80LXQvdC10L3QuNC1INGA0LDQtNC40L4g0YHRgtGA0LDQvdC40YbRiyAjb2JqZWN0LiDQntCx0L3Rg9C70Y/QtdGCIHN5c3RlbVByb3BzICsg0LfQsNC/0LjRgdGL0LLQsNC10YIg0L3QvtCy0YvQuSDQvtCx0YrQtdC60YJcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hQcm9wcyhvYmplY3Qpe1xyXG4gICAgICAgIHN5c3RlbVByb3BzID0ge307XHJcbiAgICAgICAgc3lzdGVtUHJvcHNbJ29iamVjdCddID0gb2JqZWN0LmRhdGFzZXQuY2hvaXNlO1xyXG4gICAgfVxyXG4gICAgLy8gMi4g0J7Qv9GA0LXQtNC10LvQtdC90LjQtSDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNGPLiDQl9Cw0L/QuNGB0YvQstCw0LXRgtGB0Y8g0LIgc3lzdGVtUHJvcHNbJ2xvY2F0aW9uJ10uINCe0LHQvdC+0LLQu9GP0LXRgtGB0Y8g0L/RgNC4INGB0LzQtdC90LUg0YDQsNC00LjQviDQutC90L7Qv9C60Lgg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgLy8gI2xvY2F0aW9uLiBcclxuICAgIGZ1bmN0aW9uIHdyaXRlT2JqZWN0UG9zaXRpb24oKXtcclxuICAgICAgICBsZXQgbG9jYXRpb25QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uJyk7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uUmFkaW9zID0gbG9jYXRpb25QYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2NhdGlvbl9faW5wdXQnKTtcclxuICAgICAgICBsb2NhdGlvblJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzWydsb2NhdGlvbiddID0gdGhpcy5kYXRhc2V0LmxvY2F0aW9uO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3cml0ZU9iamVjdFBvc2l0aW9uKCk7ICAgICBcclxuICAgIC8vIDMuINCa0L7Qu9C40YfQtdGB0YLQstC+INC60LDQvNC10YAuINCd0LDQstC10YjQuNCy0LDQtdC8INC90LAg0LLRgdC1IHJhbmdlINCyICNjYW1lcmFjb3VudCDQvdCwIG9uaW5wdXQg0LfQsNC/0LjRgdGMINCyIHN5c3RlbVByb3BzW2NhbXNDb3VudF1bdGhpcy5kYXRhc2V0LnB1cnBvc2UuXHJcbiAgICAvLyDQn9C+0YHQu9C1INC60LDQttC00L7Qs9C+INC40LfQvNC10L3QtdC90LjRjyDQv9C10YDQtdGB0YfQuNGC0YvQstCw0Y7RgtGB0Y8g0LLRgdC1INGB0L7RgdGC0LDQstC70Y/RjtGJ0LjQtSDQv9C+0LTQvtCx0YrQtdC60YLQsCDQuCDQsiBzeXN0ZW1Qcm9wc1tDYW1zVG90YWxdINC30LDQv9C40YHRi9Cy0LDQtdC8IFxyXG4gICAgLy8g0YHRg9C80LzQsNGA0L3QvtC1INGH0LjRgdC70L4g0LrQsNC80LXRgFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiB3cml0ZUN1cnJlbnRDYW0oKXtcclxuICAgICAgICBsZXQgY291bnRjYW1lcmFQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYWNvdW50Jyk7XHJcbiAgICAgICAgbGV0IHJhbmdlc0NhbWVyYWNvdW50ID0gY291bnRjYW1lcmFQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgcmFuZ2VzQ2FtZXJhY291bnQuZm9yRWFjaCggcmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBpZihzeXN0ZW1Qcm9wc1snY2Ftc0NvdW50J10gPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVtdHlPYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9wc1snY2Ftc0NvdW50J10gPSBlbXR5T2JqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52YWx1ZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9wc1snY2Ftc0NvdW50J11bdGhpcy5kYXRhc2V0LnB1cnBvc2VdID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN5c3RlbVByb3BzWydjYW1zQ291bnQnXVt0aGlzLmRhdGFzZXQucHVycG9zZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b3RhbENhbXMoKTtcclxuICAgICAgICAgICAgICAgIHdyaXRlQWxsQ2Ftc0tpbmQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgd3JpdGVDdXJyZW50Q2FtKCk7XHJcbiAgICBmdW5jdGlvbiB0b3RhbENhbXMoKXtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIHN5c3RlbVByb3BzWydjYW1zQ291bnQnXSl7XHJcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBOdW1iZXIoc3lzdGVtUHJvcHNbJ2NhbXNDb3VudCddW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzeXN0ZW1Qcm9wc1snY2Ftc1RvdGFsJ10gPSB0b3RhbDtcclxuICAgIH1cclxuICAgIC8vINCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+INC+0L/RgNC10LTQtdC70Y/QtdGC0YHRjyDQutC+0LvQuNGH0LXRgdGC0LLQviDQstC90YPRgtGA0LXQvdC90LjRhSwg0LLQvdC10YjQvdC40YUg0Lgg0L/QsNC90L7RgNCw0LzQvdGL0YUg0LrQsNC80LXRgC4g0JTQu9GPINGN0YLQvtCz0L4g0LTQtdC70LDQtdC8INC/0LXRgNC10LHQvtGA0LrRgyDQv9C+INC60LvQsNGB0YHQsNC8IFxyXG4gICAgLy8gLmNhbWVyYUluZG9vciwgLmNhbWVyYU91dGRvb3Ig0LggLmNhbWVyYVBhbm9yYW1cclxuICAgIC8vINGE0YPQvdC60YbQuNGPINC/0L4g0LrQu9Cw0YHRgdGDINC/0YDQvtCy0LXRgNGP0LXRgiDQutCw0LbQtNGL0Lkg0LjQvdC/0YPRgiDQuCDQt9Cw0L/QuNGB0YvQstCw0LXRgiDQtdCz0L4g0LfQvdCw0YfQtdC90LjQtSDQsiB0b3RhbCwg0LLQvtC30LLRgNCw0YnQsNC10YIgdG90YWxcclxuICAgIGZ1bmN0aW9uIGdldFRvdGFsQ2Ftc29mKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBsZXQgY291bnRjYW1lcmFQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYWNvdW50Jyk7XHJcbiAgICAgICAgbGV0IHJhbmdlcyA9IGNvdW50Y2FtZXJhUGFnZS5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmFuZ2VzLmZvckVhY2goIHJhbmdlID0+IHt0b3RhbCA9IHRvdGFsICsgTnVtYmVyKHJhbmdlLnZhbHVlKTt9KVxyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdyaXRlQ2Ftc0tpbmQoa2luZE5hbWUsIGNsYXNzTmFtZSl7XHJcbiAgICAgICAgaWYoZ2V0VG90YWxDYW1zb2YoY2xhc3NOYW1lKSA9PSAwKXtcclxuICAgICAgICAgICAgZGVsZXRlIHN5c3RlbVByb3BzW2tpbmROYW1lXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgc3lzdGVtUHJvcHNba2luZE5hbWVdID0gZ2V0VG90YWxDYW1zb2YoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9GE0YPQvdC60YbQuNGPINC/0YDQuCDQuNC30LzQtdC90LXQvdC40Lgg0LvRjtCx0L7Qs9C+INC40LcgcmFuZ2Ug0L3QsCAjY2FtZXJhY291bnQg0L/QtdGA0LXQt9Cw0L/QuNGB0YvQstCw0LXRgiDQt9C90LDRh9C10L3QuNGPINCyINC80LDRgdGB0LjQstC1LlxyXG4gICAgLy/QndCw0LLQtdGB0LjQvCDQtdC1INGC0LDQuiDQttC1INCyIHJlc2V0VmFsdWVzINC/0L7RgdC70LUg0L7QsdC90YPQu9C10L3QuNGPINCy0YHQtdGFIHJhbmdlINCyINGB0YfQtdGC0YfQuNC60LDRhSDQutCw0LzQtdGAXHJcbiAgICBmdW5jdGlvbiB3cml0ZUFsbENhbXNLaW5kKCl7XHJcbiAgICAgICAgd3JpdGVDYW1zS2luZCgnY2FtZXJhSW5kb29yJywgJy5jYW1lcmFJbmRvb3InKTtcclxuICAgICAgICB3cml0ZUNhbXNLaW5kKCdjYW1lcmFPdXRkb29yJywgJy5jYW1lcmFPdXRkb29yJyk7XHJcbiAgICAgICAgd3JpdGVDYW1zS2luZCgnY2FtZXJhUGFub3JhbScsICcuY2FtZXJhUGFub3JhbScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyA0LiDQk9C70YPQsdC40L3QsCDRhdGA0LDQvdC10L3QuNGPINCw0YDRhdC40LLQsC4g0JfQsNC/0LjRgdGL0LLQsNC10YLRgdGPINCyIHN5c3RlbVByb3BzWydhcmNoaWV2ZSddXHJcbiAgICBmdW5jdGlvbiB3cml0ZUFyY2hpZXZlKCl7XHJcbiAgICAgICAgbGV0IGFyY2hpZXZlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcmNoaWV2ZScpO1xyXG4gICAgICAgIGxldCBhcmNoaWV2ZVJhZGlvcyA9IGFyY2hpZXZlUGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuYXJjaGlldmVfX2lucHV0Jyk7XHJcbiAgICAgICAgYXJjaGlldmVSYWRpb3MuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9wc1snYXJjaGlldmUnXSA9IE51bWJlcih0aGlzLmRhdGFzZXQuZGF5cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHdyaXRlQXJjaGlldmUoKTtcclxuICAgIC8vIDUuINCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LUg0L/QsNGA0LDQvNC10YLRgNGLLiDQl9Cw0L/QuNGB0YvQstCw0LXRgtGB0Y8g0LIgc3lzdGVtUHJvcHNbJ3Jlc2VydmVfbmVlZCddIHN5c3RlbVByb3BzWydpbnRlcm5ldF9uZWVkJ10gc3lzdGVtUHJvcHNbJ3NvdW5kX25lZWRfY291bnQnXVxyXG4gICAgZnVuY3Rpb24gd3JpdGVEb3BwZWwoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZV9uZWVkJykub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzeXN0ZW1Qcm9wc1sncmVzZXJ2ZV9uZWVkJ10gPSB0aGlzLmNoZWNrZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRlcm5ldF9uZWVkJykub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzeXN0ZW1Qcm9wc1snaW50ZXJuZXRfbmVlZCddID0gdGhpcy5jaGVja2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZCcpLm9uY2hhbmdlID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYodGhpcy5jaGVja2VkKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3VuZF9uZWVkX3JhbmdlJykub25jaGFuZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c3RlbVByb3BzWydzb3VuZF9uZWVkJ10gPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgc3lzdGVtUHJvcHNbJ3NvdW5kX25lZWQnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdyaXRlRG9wcGVsKCk7XHJcbiAgICAvLyA2LiDQodGA0L7Rh9C90L7RgdGC0YwuINCX0LDQv9C40YHRi9Cy0LDQtdGC0YHRjyDQu9C40LHQviDQt9C90LDRh9C10L3QuNC1INC40LcgZGF0YSDQtNC70Y8g0L/QtdGA0LLRi9GFIDMg0YDQsNC00LjQviwg0LvQuNCx0L4g0YLQtdC60YHRgtC+0Lwg0YHQstC+0Lkg0L7RgtCy0LXRgiDQsiBzeXN0ZW1Qcm9wc1snaG93ZmFzdCddXHJcbiAgICBmdW5jdGlvbiB3cml0ZWhvd0Zhc3QoKXtcclxuICAgICAgICBsZXQgaG93RmFzdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG93ZmFzdCcpO1xyXG4gICAgICAgIGxldCBob3dGYXN0UmFkaW9zID0gaG93RmFzdFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmZhc3RfX2lucHV0Jyk7XHJcbiAgICAgICAgaG93RmFzdFJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YXNldC5mYXN0ICE9ICdvd24nKXtcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9wc1snaG93ZmFzdCddID0gdGhpcy5kYXRhc2V0LmZhc3Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X2FyZWEnKS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gd3JpdGVWYWx1ZSgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9wc1snaG93ZmFzdCddID0gdGhpcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3cml0ZWhvd0Zhc3QoKTtcclxuICAgIC8vIDcuINCf0LvQvtGJ0LDQtNGMINC+0LHRitC10LrRgtCwLiDQl9C90LDRh9C10L3QuNGPINGBINGA0Y3QudC90LTQtiDQt9Cw0L/QuNGB0YvQstCw0Y7RgtGB0Y8g0LIgc3lzdGVtUHJvcHNbJ29iamVjdFdpZHRoJ10gc3lzdGVtUHJvcHNbJ29iamVjdExlbmd0aCddINC4XHJcbiAgICAvLyBzeXN0ZW1Qcm9wc1sncGVyaW1ldGVyV2lkdGgnXSBzeXN0ZW1Qcm9wc1sncGVyaW1ldGVyTGVuZ3RoJ10uINCf0YDQuCDQvtCx0L3Rg9C70LXQvdC40Lgg0LfQvdCw0YfQtdC90LjRjyDQuNC3INC80LDRgdGB0LjQstCwINGD0LTQsNC70Y/RjtGC0YHRjywgXHJcbiAgICAvLyDRgtCw0Log0LbQtSDRg9C00LDQu9GP0Y7RgtGB0Y8g0LfQvdCw0YfQtdC90LjRjyBzeXN0ZW1Qcm9wc1sncGVyaW1ldGVyV2lkdGgnXSBzeXN0ZW1Qcm9wc1sncGVyaW1ldGVyTGVuZ3RoJ10sINC10YHQu9C4INGD0LLQtdGB0YLQuCDQsiAwINC60L7Qu9C40YfQtdGB0YLQstC+IFxyXG4gICAgLy8g0L/QviDQv9C10YDQuNC80LXRgtGA0YMgKNGE0YPQvdC60YbQuNGPINGD0LTQsNC70LXQvdC40Y8g0L3QsNCy0LXRiNCw0L3QsCDQsiBzaG93UGVyaW1ldGVyKCkpXHJcbiAgICBmdW5jdGlvbiB3cml0ZVNxdWFyZSgpe1xyXG4gICAgICAgIGxldCBzcXVhcmVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxdWFyZScpO1xyXG4gICAgICAgIGxldCByYW5nZXNTcXVhcmUgPSBzcXVhcmVQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9fc2xpZGVyJyk7XHJcbiAgICAgICAgcmFuZ2VzU3F1YXJlLmZvckVhY2goIHJhbmdlID0+IHtcclxuICAgICAgICAgICAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52YWx1ZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBzeXN0ZW1Qcm9wc1t0aGlzLmRhdGFzZXQubmFtZV0gPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3lzdGVtUHJvcHNbdGhpcy5kYXRhc2V0Lm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3cml0ZVNxdWFyZSgpO1xyXG4gICAgLy8gOC7QmtC+0LzQv9C70LXQutGC0LDRhtC40Y8uINCU0LLQsCDQstCw0YDQuNCw0L3RgtCwIGNvbXBsZWN0L21vbnRhZ2UuINCh0L7QsdGL0YLQuNGPINC90LDQstC10YjQsNC90Ysg0L3QsCDRgNCw0LTQuNC+INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcclxuICAgIGZ1bmN0aW9uIHdyaXRlQ29tcGxlY3RhdGlvbigpe1xyXG4gICAgICAgIGxldCBjb21wbGVjdGF0aW9uUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21wbGVjdGF0aW9uJyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZWN0YXRpb25SYWRpb3MgPSBjb21wbGVjdGF0aW9uUGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxlY3RhdGlvbl9faW5wdXQnKTtcclxuICAgICAgICBjb21wbGVjdGF0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtUHJvcHNbJ2NvbXBsZWN0YXRpb24nXSA9IHRoaXMuZGF0YXNldC5uYW1lO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3cml0ZUNvbXBsZWN0YXRpb24oKTsgICBcclxuXHJcbiAgICAvLyDQoNCw0YHRh9C10YIg0YTQuNC90LDQu9GM0L3QvtC5INGB0YPQvNC80Ysg0LTQu9GPINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0L3QsCDRjdC60YDQsNC90LUgcmVzdWx0XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVzdWx0KCl7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcblxyXG4gICAgICAgIC8v0YDQsNGB0YfQtdGCINGB0YLQvtC40LzQvtGB0YLQuCDQvdCw0YDRg9C20L3Ri9GFINC60LDQvNC10YBcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFPdXRkb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE51bWJlcihzeXN0ZW1Qcm9wcy5jYW1lcmFPdXRkb29yKnByaWNlcy5vdXRkb29yQ2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/RgNCw0YHRh9C10YIg0YHRgtC+0LjQvNC+0YHRgtC4INC/0LDQvdC+0YDQsNC80L3Ri9GFINC60LDQvNC10YBcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFQYW5vcmFtICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE51bWJlcihzeXN0ZW1Qcm9wcy5jYW1lcmFQYW5vcmFtKnByaWNlcy5wYW5vcmFtQ2FtZXJhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/RgNCw0YHRh9C10YIg0YHRgtC+0LjQvNC+0YHRgtC4INCy0L3Rg9GC0YDQtdC90L3QuNGFINC60LDQvNC10YBcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFJbmRvb3IgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuc291bmRfbmVlZCl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBOdW1iZXIoKHN5c3RlbVByb3BzLmNhbWVyYUluZG9vciAtIHN5c3RlbVByb3BzLnNvdW5kX25lZWQpKnByaWNlcy5pbmRvb3JDYW1lcmEgK1xyXG4gICAgICAgICAgICAgICAgc3lzdGVtUHJvcHMuc291bmRfbmVlZCpwcmljZXMuaW5kb29yQ2FtZXJhV2l0aFNvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTnVtYmVyKHN5c3RlbVByb3BzLmNhbWVyYUluZG9vcipwcmljZXMuaW5kb29yQ2FtZXJhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL9GA0LDRgdGH0LXRgiDRgdGC0L7QuNC80L7RgdGC0Lgg0LzQvtC90YLQsNC20LAg0LrQsNC80LXRgDog0L7RgtC00LXQu9GM0L3QviDQstC90YPRgtGA0Lgg0L/QvtC80LXRidC10L3QuNC5LCDQvtGC0LTQtdC70YzQvdC+INGB0L3QsNGA0YPQttC4XHJcbiAgICAgICAgaWYoc3lzdGVtUHJvcHMuY29tcGxlY3RhdGlvbiA9PSBcIm1vbnRhZ2VcIil7XHJcbiAgICAgICAgICAgIGlmKHN5c3RlbVByb3BzLmNhbWVyYUluZG9vciAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTnVtYmVyKHN5c3RlbVByb3BzLmNhbWVyYUluZG9vcipwcmljZXMuaW5kb29yQ2FtZXJhTW9udGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhT3V0ZG9vciAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTnVtYmVyKHN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3IqcHJpY2VzLm91dGRvb3JDYW1lcmFNb250YWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFQYW5vcmFtICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBOdW1iZXIoc3lzdGVtUHJvcHMuY2FtZXJhUGFub3JhbSpwcmljZXMub3V0ZG9vckNhbWVyYU1vbnRhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vINGA0LDRgdGH0LXRgiDQtNC70LjQvdGLINC60LDQsdC10LvRj1xyXG4gICAgICAgIGxldCBvYmplY3RDYWJsZUxlbmdodCA9ICBOdW1iZXIoc3lzdGVtUHJvcHMub2JqZWN0V2lkdGgpICsgTnVtYmVyKHN5c3RlbVByb3BzLm9iamVjdExlbmd0aCk7XHJcbiAgICAgICAgbGV0IHBlcmltZXRyYWxDYWJsZUxlbmdodCA9IE51bWJlcihzeXN0ZW1Qcm9wcy5wZXJpbWV0ZXJMZW5ndGgpICsgTnVtYmVyKHN5c3RlbVByb3BzLnBlcmltZXRlcldpZHRoKTtcclxuICAgICAgICAvLyDRgdGC0L7QuNC80L7RgdGC0Ywg0LrQsNCx0LXQu9GPXHJcbiAgICAgICAgLy8g0L/QsNC90L7RgNCw0LzQvdGL0LUg0LrQsNC80LXRgNGLXHJcbiAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhUGFub3JhbSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBOdW1iZXIocGVyaW1ldHJhbENhYmxlTGVuZ2h0KnByaWNlcy5jYWJsZSpzeXN0ZW1Qcm9wcy5jYW1lcmFQYW5vcmFtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g0L/QviDQv9C10YDQuNC80LXRgtGA0YMg0YPRh9Cw0YHRgtC60LBcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1zUGVyaW1ldHJhbENvdW50ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE51bWJlcihwZXJpbWV0cmFsQ2FibGVMZW5naHQqcHJpY2VzLmNhYmxlKnN5c3RlbVByb3BzLmNhbXNQZXJpbWV0cmFsQ291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQstC90YPRgtGA0Lgg0L7QsdGK0LXQutGC0LBcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFJbmRvb3IgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgTnVtYmVyKG9iamVjdENhYmxlTGVuZ2h0KnByaWNlcy5jYWJsZSpzeXN0ZW1Qcm9wcy5jYW1lcmFJbmRvb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDQv9C+INC/0LXRgNC40LzQtdGC0YDRgyDQvtCx0YrQtdC60YLQsCAo0L3QsNC/0YDQuNC80LXRgCDQtNC+0LzQsCwg0LAg0L3QtSDRg9GH0LDRgdGC0LrQsCksINGA0LDQstC90L4g0LrQvtC70LjRh9C10YHRgtCy0L4gb3V0ZG9vciAtINC60L7Qu9C40YfQtdGB0YLQstC+IHBlcmltZXRyYWxcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFPdXRkb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKHN5c3RlbVByb3BzLmNhbXNQZXJpbWV0cmFsQ291bnQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIE51bWJlcihvYmplY3RDYWJsZUxlbmdodCpwcmljZXMuY2FibGUqKHN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3Itc3lzdGVtUHJvcHMuY2Ftc1BlcmltZXRyYWxDb3VudCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBOdW1iZXIob2JqZWN0Q2FibGVMZW5naHQqcHJpY2VzLmNhYmxlKnN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vINGB0YLQvtC40LzQvtGB0YLRjCDQvNC+0L3RgtCw0LbQsCDQutCw0LHQtdC70Y9cclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jb21wbGVjdGF0aW9uID09IFwibW9udGFnZVwiKXtcclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhUGFub3JhbSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcGVyaW1ldHJhbENhYmxlTGVuZ2h0KnByaWNlcy5tb250YWdlQ2FibGVPdXRkb29yKnN5c3RlbVByb3BzLmNhbWVyYVBhbm9yYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2Ftc1BlcmltZXRyYWxDb3VudCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcGVyaW1ldHJhbENhYmxlTGVuZ2h0KnByaWNlcy5tb250YWdlQ2FibGVPdXRkb29yKnN5c3RlbVByb3BzLmNhbXNQZXJpbWV0cmFsQ291bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoc3lzdGVtUHJvcHMuY2FtZXJhSW5kb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBvYmplY3RDYWJsZUxlbmdodCpwcmljZXMubW9udGFnZUNhYmxlSW5kb29yKnN5c3RlbVByb3BzLmNhbWVyYUluZG9vcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1lcmFPdXRkb29yICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jYW1zUGVyaW1ldHJhbENvdW50ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgb2JqZWN0Q2FibGVMZW5naHQqcHJpY2VzLm1vbnRhZ2VDYWJsZU91dGRvb3IqKHN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3Itc3lzdGVtUHJvcHMuY2Ftc1BlcmltZXRyYWxDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIG9iamVjdENhYmxlTGVuZ2h0KnByaWNlcy5tb250YWdlQ2FibGVPdXRkb29yKnN5c3RlbVByb3BzLmNhbWVyYU91dGRvb3I7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDRgdGC0L7QuNC80L7RgdGC0Ywg0LrQvtC80L/Qu9C10LrRgtCwINC00LvRjyDQuNC90YLQtdGA0L3QtdGC0LBcclxuICAgICAgICAvLyBpZihzeXN0ZW1Qcm9wcy5pbnRlcm5ldF9uZWVkKXtcclxuICAgICAgICAvLyAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmNvbXBsZWN0SW50ZXJuZXQ7XHJcbiAgICAgICAgLy8gICAgIGlmKHN5c3RlbVByb3BzLmNvbXBsZWN0YXRpb24gPT0gXCJtb250YWdlXCIpe1xyXG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmludGVybmV0SW5zdGFsbGF0aW9uO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8v0YHRgtC+0LjQvNC+0YHRgtGMINGA0LXQs9C40YHRgtGA0LDRgtC+0YDQsFxyXG4gICAgICAgIC8vIGxldCBjYW1zVG90YWwgPSBzeXN0ZW1Qcm9wcy5jYW1zVG90YWw7XHJcbiAgICAgICAgLy8gc3dpdGNoKGNhbXNUb3RhbCl7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgY2Ftc1RvdGFsID49IDEgJiYgY2Ftc1RvdGFsIDw9NDpcclxuICAgICAgICAvLyAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5yZWdpc3RyYXRvcjFfNDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+IDQgJiYgY2Ftc1RvdGFsIDw9ODpcclxuICAgICAgICAvLyAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5yZWdpc3RyYXRvcjVfODtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+IDggJiYgY2Ftc1RvdGFsIDw9IDE2OlxyXG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLnJlZ2lzdHJhdG9yOF8xNjtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+IDE2OlxyXG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLnJlZ2lzdHJhdG9yMTZtb3JlO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8v0YDQsNGB0YfQtdGCINC40LHQv1xyXG4gICAgICAgIC8vIHN3aXRjaChjYW1zVG90YWwpe1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+PSAxICYmIGNhbXNUb3RhbCA8PTQ6XHJcbiAgICAgICAgLy8gICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaWJwMV80O1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgY2Ftc1RvdGFsID4gNCAmJiBjYW1zVG90YWwgPD04OlxyXG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmlicDVfODtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+IDggJiYgY2Ftc1RvdGFsIDw9IDEyOlxyXG4gICAgICAgIC8vICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnAxXzQ7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgY2FzZSBjYW1zVG90YWwgPiAxMiAmJiBjYW1zVG90YWwgPD0gMTY6XHJcbiAgICAgICAgLy8gICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfODtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+IDE2ICYmIGNhbXNUb3RhbCA8PSAyMDpcclxuICAgICAgICAvLyAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDFfNDtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+IDIwICYmIGNhbXNUb3RhbCA8PSAyNDpcclxuICAgICAgICAvLyAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfODtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIGNhbXNUb3RhbCA+IDI0ICYmIGNhbXNUb3RhbCA8PSAyODpcclxuICAgICAgICAvLyAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnAxXzQ7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgY2FzZSBjYW1zVG90YWwgPiAyOCAmJiBjYW1zVG90YWwgPD0gMzI6XHJcbiAgICAgICAgLy8gICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwNV84O1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgY2Ftc1RvdGFsID4gMzI6XHJcbiAgICAgICAgLy8gICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfOCArIHByaWNlcy5pYnA1XzggKyBwcmljZXMuaWJwNV84ICsgcHJpY2VzLmlicDVfODtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW1zVG90YWwpO1xyXG4gICAgICAgIC8v0YDQsNGB0YfQtdGCINCw0YDRhdC40LLQsCBIRERcclxuICAgICAgICAvLyBzd2l0Y2goc3lzdGVtUHJvcHMuYXJjaGlldmUpe1xyXG4gICAgICAgIC8vICAgICBjYXNlIDc6IFxyXG4gICAgICAgIC8vICAgICAgICAgaWYoY2Ftc1RvdGFsID49IDEgJiYgY2Ftc1RvdGFsIDw9IDQpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazFUYjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgaWYoY2Ftc1RvdGFsID4gNCAmJiBjYW1zVG90YWwgPD0gOCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrMVRiO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiA4ICYmIGNhbXNUb3RhbCA8PSAxNil7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrMlRiO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiAxNiAmJiBjYW1zVG90YWwgPD0gMzIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazRUYjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgaWYoY2Ftc1RvdGFsID4gMzIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazhUYjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBjYXNlIDE0OlxyXG4gICAgICAgIC8vICAgICAgICAgaWYoY2Ftc1RvdGFsID49IDEgJiYgY2Ftc1RvdGFsIDw9IDQpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazFUYjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgaWYoY2Ftc1RvdGFsID4gNCAmJiBjYW1zVG90YWwgPD0gOCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrMlRiO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiA4ICYmIGNhbXNUb3RhbCA8PSAxNil7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrNFRiO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiAxNiAmJiBjYW1zVG90YWwgPD0gMzIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazhUYjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgaWYoY2Ftc1RvdGFsID4gMzIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazEyVGI7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgY2FzZSAzMDpcclxuICAgICAgICAvLyAgICAgICAgIGlmKGNhbXNUb3RhbCA+PSAxICYmIGNhbXNUb3RhbCA8PSA0KXtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaGFyZERpc2syVGI7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBlbHNlIGlmKGNhbXNUb3RhbCA+IDQgJiYgY2Ftc1RvdGFsIDw9IDgpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazRUYjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgaWYoY2Ftc1RvdGFsID4gOCAmJiBjYW1zVG90YWwgPD0gMTYpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIHByaWNlcy5oYXJkRGlzazhUYjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2UgaWYoY2Ftc1RvdGFsID4gMTYgJiYgY2Ftc1RvdGFsIDw9IDMyKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgKyBwcmljZXMuaGFyZERpc2sxMlRiO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSBpZihjYW1zVG90YWwgPiAzMil7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmhhcmREaXNrOFRiKjI7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0LzQvtC90YLQsNC20L3QvtCz0L4g0LrQvtC80L/Qu9C10LrRgtCwXHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLmNvbXBsZWN0TW9udGFnZTtcclxuICAgICAgICAvL9C00L7QsdCw0LLQu9C10L3QuNC1INC90LDRgdGC0YDQvtC50LrQuCDQuCDRjtGB0YLQuNGA0L7QstC60LhcclxuICAgICAgICBpZihzeXN0ZW1Qcm9wcy5jb21wbGVjdGF0aW9uID09IFwibW9udGFnZVwiKXtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgcHJpY2VzLnN5c3RlbUN1c3RtaXphdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQt9Cw0L/QuNGB0Ywg0YDQtdC30YPQu9GM0YLQsNGC0LAg0LIgc3BhblxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlUmVzdWx0KCl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0U3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRfX21haW4tcHJpY2UtbnVtYmVyJyk7XHJcbiAgICAgICAgcmVzdWx0U3Bhbi5pbm5lckhUTUwgPSBnZXRSZXN1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRSZXN1bHQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJpY2VzID0ge1xyXG4gICAgICAgIGluZG9vckNhbWVyYSA6IDIxOTAsIC8vRVotSEFDLVQxQTIxUC0wMzYwQlxyXG4gICAgICAgIGluZG9vckNhbWVyYVdpdGhTb3VuZCA6IDI4OTAsIC8vRVotSEFDLVQ1QjIwUC1BLTAzNjBCXHJcbiAgICAgICAgb3V0ZG9vckNhbWVyYSA6IDI4OTAsIC8vRVotSEFDLUI1QjIwUC1BLTAyODBCXHJcbiAgICAgICAgcGFub3JhbUNhbWVyYTogMjg5OTAsIC8vREgtU0Q0OTIyNS1IQy1MQSAtMjg5OTBcclxuICAgICAgICBpbmRvb3JDYW1lcmFNb250YWdlOiAxNjAwLFxyXG4gICAgICAgIG91dGRvb3JDYW1lcmFNb250YWdlOiAyNTAwLFxyXG4gICAgICAgIGNhYmxlOiA4MCxcclxuICAgICAgICBtb250YWdlQ2FibGVJbmRvb3I6IDMwLFxyXG4gICAgICAgIG1vbnRhZ2VDYWJsZU91dGRvb3I6IDQwLFxyXG4gICAgICAgIGhhcmREaXNrMVRiOiAgNDEwMCxcclxuICAgICAgICBoYXJkRGlzazJUYjogIDU1MDAsXHJcbiAgICAgICAgaGFyZERpc2s0VGI6ICA5NDAwLFxyXG4gICAgICAgIGhhcmREaXNrNlRiOiAgMTQ4MDAsXHJcbiAgICAgICAgaGFyZERpc2s4VGI6ICAxOTUwMCxcclxuICAgICAgICBoYXJkRGlzazEwVGI6IDI1OTAwLCBcclxuICAgICAgICBoYXJkRGlzazEyVGI6IDI5ODAwLFxyXG4gICAgICAgIHN5c3RlbUN1c3RtaXphdGlvbjogMjAwMCwgXHJcbiAgICAgICAgaW50ZXJuZXRJbnN0YWxsYXRpb246IDI1MDAsXHJcbiAgICAgICAgY29tcGxlY3RJbnRlcm5ldDogODc1MCxcclxuICAgICAgICBjb21wbGVjdE1vbnRhZ2U6IDYwNTAsXHJcbiAgICAgICAgcmVnaXN0cmF0b3IxXzQ6IDYwMDAsXHJcbiAgICAgICAgcmVnaXN0cmF0b3I1Xzg6IDkwMDAsXHJcbiAgICAgICAgcmVnaXN0cmF0b3I4XzE2OiAxNjAwMCxcclxuICAgICAgICByZWdpc3RyYXRvcjE2bW9yZTogMzI5OTAsXHJcbiAgICAgICAgaWJwMV80OiAxMzAwLFxyXG4gICAgICAgIGlicDVfODogMjIwMCxcclxuICAgIH1cclxufVxyXG4iXSwiZmlsZSI6ImluZGV4LmpzIn0=
