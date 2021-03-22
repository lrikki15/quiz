"use strict";

window.onload = () => {
  let screenCounter = 0;
  const pages = ['#quiz__preload', '#object', '#location', '#cameracount', '#archieve', '#doppel', '#howfast', '#square', '#complectation', '#result', '#getOffer'];
  const questions = ['', 'Для какого объекта Вам необходима система видеонаблюдения?', 'Где находится объект?', 'Сколько камер Вы планируете установить?', 'Время хранения архива:', 'Дополнительные пожелания к системе видеонаблюдения:', 'Как срочно Вам нужна система?', 'Примерная площадь объекта', 'Вам нужен готовый комплект или монтаж системы под ключ?'];
  needSoundEvent();
  fastLevelChange();
  radioCheckActive();
  radioOnChange();
  funcSliders();
  showCurrentSphere(document.querySelector('#object__house'));
  addNavigationToButtons();
  addEventOnAllInputs();
  addShowPerimeter(); //функции навигации

  function navigation(direction) {
    if (direction == 'forward') {
      let currentPage = document.querySelector("".concat(pages[screenCounter]));
      screenCounter == 7 ? hide(currentPage.parentElement.parentElement) : hide(currentPage);
      screenCounter++;
      let nextPage = document.querySelector("".concat(pages[screenCounter]));
      screenCounter == 1 ? show(nextPage.parentElement.parentElement, 'grid') : show(nextPage, 'flex');
    } else if ('back') {
      let currentPage = document.querySelector("".concat(pages[screenCounter]));
      screenCounter == 1 ? hide(currentPage.parentElement.parentElement) : hide(currentPage);
      screenCounter--;
      let nextPage = document.querySelector("".concat(pages[screenCounter]));
      screenCounter == 7 ? show(nextPage.parentElement.parentElement, 'grid') : show(nextPage, 'flex');
    }

    if (0 < screenCounter < 9) {
      refreshQuestion();
      checkButton();
    }
  } //добавление навигации на кнопки


  function addNavigationToButtons() {
    document.querySelector('.preload__button').onclick = () => navigation('forward');

    document.querySelector('.quiz__button_forward').onclick = () => navigation('forward');

    document.querySelector('.quiz__button_back').onclick = () => navigation('back');
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
    let currentPage = document.querySelector("".concat(pages[screenCounter]));

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
        if (internetNeed.checked && !reserveNeed.checked && !soundNeed.checked) isTrue++;
        if (!internetNeed.checked && reserveNeed.checked && !soundNeed.checked) isTrue++;
        if (internetNeed.checked && reserveNeed.checked && !soundNeed.checked) isTrue++;
        if (internetNeed.checked && !reserveNeed.checked && soundNeed.checked && soundNeedInput.value != 0) isTrue++;
        if (!internetNeed.checked && reserveNeed.checked && soundNeed.checked && soundNeedInput.value != 0) isTrue++;
        if (internetNeed.checked && reserveNeed.checked && soundNeed.checked && soundNeedInput.value != 0) isTrue++;
        if (!internetNeed.checked && !reserveNeed.checked && soundNeed.checked && soundNeedInput.value != 0) isTrue++;
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

      case 'complectation':
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
    let radioItems = document.querySelectorAll("input[type='radio']");
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
    let currentCounter = document.querySelector(".camera-count__".concat(currentSphere));
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
    let color = "linear-gradient(90deg, rgba(3,81,145,1) ".concat(percentValue, "%, rgba(128, 128, 128, 0.178) ").concat(percentValue, "%)");
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
    let radioItems = document.querySelectorAll(".fast__input");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsInNjcmVlbkNvdW50ZXIiLCJwYWdlcyIsInF1ZXN0aW9ucyIsIm5lZWRTb3VuZEV2ZW50IiwiZmFzdExldmVsQ2hhbmdlIiwicmFkaW9DaGVja0FjdGl2ZSIsInJhZGlvT25DaGFuZ2UiLCJmdW5jU2xpZGVycyIsInNob3dDdXJyZW50U3BoZXJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkTmF2aWdhdGlvblRvQnV0dG9ucyIsImFkZEV2ZW50T25BbGxJbnB1dHMiLCJhZGRTaG93UGVyaW1ldGVyIiwibmF2aWdhdGlvbiIsImRpcmVjdGlvbiIsImN1cnJlbnRQYWdlIiwiaGlkZSIsInBhcmVudEVsZW1lbnQiLCJuZXh0UGFnZSIsInNob3ciLCJyZWZyZXNoUXVlc3Rpb24iLCJjaGVja0J1dHRvbiIsIm9uY2xpY2siLCJlbGVtIiwic3R5bGUiLCJvcGFjaXR5IiwiZGlzcGxheSIsImRpc3BQcm9wZXJ0eSIsInF1ZXN0aW9uIiwidGV4dENvbnRlbnQiLCJidXR0b25Gb3J3YXJkIiwiY2hlY2tJc0Nob3NlbiIsImRpc2FibGVkIiwiaXNUcnVlIiwib2JqZWN0UmFkaW9zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyYWRpbyIsImNoZWNrZWQiLCJsb2NhdGlvblJhZGlvcyIsImNhbWVyYWNvdW50UmFuZ2VzIiwicmFuZ2UiLCJ2YWx1ZSIsImFyY2hpZXZlUmFkaW9zIiwic291bmROZWVkSW5wdXQiLCJyZXNlcnZlTmVlZCIsImludGVybmV0TmVlZCIsInNvdW5kTmVlZCIsImZhc3RIaWdoIiwiZmFzdE1pZCIsImZhc3RMb3ciLCJmYXN0T3duIiwiZmFzdE93bkZpZWxkIiwic3F1YXJlSW5wdXRzIiwic3F1YXJlUGVyaW1ldGVyIiwic3F1YXJlT2JqZWN0TG9uZyIsInNxdWFyZU9iamVjdFdpZHRoIiwic3F1YXJlUGVyaW1ldGVyTG9uZyIsInNxdWFyZVBlcmltZXRlcldpZHRoIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjb21wbGVjdGF0aW9uUmFkaW9zIiwicmFkaW9JdGVtcyIsIml0ZW0iLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiY3VycmVudFJhZGlvIiwicmVzZXRWYWx1ZXMiLCJzaG93UGVyaW1ldGVyIiwiaW5wdXQiLCJjdXJyZW50U3BoZXJlIiwiZGF0YXNldCIsImNob2lzZSIsImNhbUNvdW50ZXJzIiwiY291bnRlciIsImN1cnJlbnRDb3VudGVyIiwiY291bnRQYWdlIiwicGVyaW1ldGVyUmFuZ2VzIiwic3FhcmVQZXJpbWV0ZXIiLCJwZXJpbWV0ZXJIYXMiLCJzcWFyZVBlcmltZXRlclJhbmdlcyIsInJlZnJlc2hSYW5nZSIsImNhbUNvdW50IiwicmFuZ2VzQ2FtQ291bnQiLCJsb2NhdGlvbiIsInJlc2V0UmFkaW8iLCJhcmNoaXZlIiwicmFkaW9zQXJjaGlldmUiLCJkb3BwZWwiLCJjaGVja2JveGVzRG9wcGVsIiwiY2hlY2tib3giLCJyZXNldENoZWNrQm94IiwicmFuZ2VEb3BwZWwiLCJjaGVja05lZWRTb3VuZCIsImZhc3QiLCJyYWRpb3NGYXN0IiwiaGFzT3duQW5zd2VyIiwic3F1YXJlIiwic3F1YXJlUmFuZ2VzIiwic2xpZGVycyIsInNsaWRlciIsImN1cnJlbnQiLCJuZXh0U2libGluZyIsImlubmVySFRNTCIsInBlcmNlbnRWYWx1ZSIsIm1heCIsImNvbG9yIiwiYmFja2dyb3VuZCIsInJlY29yZENoZWNrYm94IiwidG9nZ2xlUmFuZ2UiLCJzb3VuZE5lZWRSYW5nZSIsIm93bkFuc3dlckFyZWEiLCJoYXNPd24iLCJxdWl6Qm9keSIsImFsbFJhZGlvcyIsImFsbFJhbmdlcyIsImFsbENoZWNrYm94ZXMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixNQUFNO0FBQ2xCLE1BQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLFFBQU1DLEtBQUssR0FBRyxDQUNWLGdCQURVLEVBRVYsU0FGVSxF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Q0EsUUFBSTBHLFNBQVMsR0FBR0QsUUFBUSxDQUFDL0UsZ0JBQVQsQ0FBMEIscUJBQTFCLENBQWhCO0FBQ0FnRixJQUFBQSxTQUFTLENBQUMvRSxPQUFWLENBQWtCMkIsSUFBSSxJQUFJO0FBQUNBLE1BQUFBLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0MsTUFBTTdDLFdBQVcsRUFBakQ7QUFBcUQsS0FBaEY7QUFDQSxRQUFJK0YsU0FBUyxHQUFHRixRQUFRLENBQUMvRSxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBaEI7QUFDQWlGLElBQUFBLFNBQVMsQ0FBQ2hGLE9BQVYsQ0FBa0IyQixJQUFJLElBQUk7QUFBQ0EsTUFBQUEsSUFBSSxDQUFDRyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixNQUFNN0MsV0FBVyxFQUFoRDtBQUFvRCxLQUEvRTtBQUNBLFFBQUlnRyxhQUFhLEdBQUdILFFBQVEsQ0FBQy9FLGdCQUFULENBQTBCLHdCQUExQixDQUFwQjtBQUNBa0YsSUFBQUEsYUFBYSxDQUFDakYsT0FBZCxDQUFzQjJCLElBQUksSUFBSTtBQUFDQSxNQUFBQSxJQUFJLENBQUNHLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU03QyxXQUFXLEVBQWpEO0FBQXFELEtBQXBGO0FBRUg7QUFDSixDQXZXRCIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2NyZWVuQ291bnRlciA9IDA7XHJcbiAgICBjb25zdCBwYWdlcyA9IFtcclxuICAgICAgICAnI3F1aXpfX3ByZWxvYWQnLFxyXG4gICAgICAgICcjb2JqZWN0JyxcclxuICAgICAgICAnI2xvY2F0aW9uJyxcclxuICAgICAgICAnI2NhbWVyYWNvdW50JyxcclxuICAgICAgICAnI2FyY2hpZXZlJyxcclxuICAgICAgICAnI2RvcHBlbCcsXHJcbiAgICAgICAgJyNob3dmYXN0JyxcclxuICAgICAgICAnI3NxdWFyZScsXHJcbiAgICAgICAgJyNjb21wbGVjdGF0aW9uJyxcclxuICAgICAgICAnI3Jlc3VsdCcsXHJcbiAgICAgICAgJyNnZXRPZmZlcidcclxuICAgIF07XHJcbiAgICBjb25zdCBxdWVzdGlvbnMgPSBbXHJcbiAgICAgICAgJycsXHJcbiAgICAgICAgJ9CU0LvRjyDQutCw0LrQvtCz0L4g0L7QsdGK0LXQutGC0LAg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNCwINGB0LjRgdGC0LXQvNCwINCy0LjQtNC10L7QvdCw0LHQu9GO0LTQtdC90LjRjz8nLFxyXG4gICAgICAgICfQk9C00LUg0L3QsNGF0L7QtNC40YLRgdGPINC+0LHRitC10LrRgj8nLFxyXG4gICAgICAgICfQodC60L7Qu9GM0LrQviDQutCw0LzQtdGAINCS0Ysg0L/Qu9Cw0L3QuNGA0YPQtdGC0LUg0YPRgdGC0LDQvdC+0LLQuNGC0Yw/JyxcclxuICAgICAgICAn0JLRgNC10LzRjyDRhdGA0LDQvdC10L3QuNGPINCw0YDRhdC40LLQsDonLFxyXG4gICAgICAgICfQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC/0L7QttC10LvQsNC90LjRjyDQuiDRgdC40YHRgtC10LzQtSDQstC40LTQtdC+0L3QsNCx0LvRjtC00LXQvdC40Y86JyxcclxuICAgICAgICAn0JrQsNC6INGB0YDQvtGH0L3QviDQktCw0Lwg0L3Rg9C20L3QsCDRgdC40YHRgtC10LzQsD8nLFxyXG4gICAgICAgICfQn9GA0LjQvNC10YDQvdCw0Y8g0L/Qu9C+0YnQsNC00Ywg0L7QsdGK0LXQutGC0LAnLFxyXG4gICAgICAgICfQktCw0Lwg0L3Rg9C20LXQvSDQs9C+0YLQvtCy0YvQuSDQutC+0LzQv9C70LXQutGCINC40LvQuCDQvNC+0L3RgtCw0LYg0YHQuNGB0YLQtdC80Ysg0L/QvtC0INC60LvRjtGHPydcclxuICAgIF07XHJcbiAgICBuZWVkU291bmRFdmVudCgpO1xyXG4gICAgZmFzdExldmVsQ2hhbmdlKCk7XHJcbiAgICByYWRpb0NoZWNrQWN0aXZlKCk7XHJcbiAgICByYWRpb09uQ2hhbmdlKCk7XHJcbiAgICBmdW5jU2xpZGVycygpO1xyXG4gICAgc2hvd0N1cnJlbnRTcGhlcmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29iamVjdF9faG91c2UnKSk7XHJcbiAgICBhZGROYXZpZ2F0aW9uVG9CdXR0b25zKClcclxuICAgIGFkZEV2ZW50T25BbGxJbnB1dHMoKTtcclxuICAgIGFkZFNob3dQZXJpbWV0ZXIoKTtcclxuICAgIFxyXG4gICAgLy/RhNGD0L3QutGG0LjQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgIGZ1bmN0aW9uIG5hdmlnYXRpb24oZGlyZWN0aW9uKXtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT0gJ2ZvcndhcmQnKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSA3P2hpZGUoY3VycmVudFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTpoaWRlKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlcisrO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzY3JlZW5Db3VudGVyID09IDE/c2hvdyhuZXh0UGFnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICdncmlkJyk6c2hvdyhuZXh0UGFnZSwgJ2ZsZXgnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoJ2JhY2snKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlciA9PSAxP2hpZGUoY3VycmVudFBhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTpoaWRlKGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgc2NyZWVuQ291bnRlci0tO1xyXG4gICAgICAgICAgICBsZXQgbmV4dFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3BhZ2VzW3NjcmVlbkNvdW50ZXJdfWApO1xyXG4gICAgICAgICAgICBzY3JlZW5Db3VudGVyID09IDc/c2hvdyhuZXh0UGFnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICdncmlkJyk6c2hvdyhuZXh0UGFnZSwgJ2ZsZXgnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoMCA8IHNjcmVlbkNvdW50ZXIgPCA5KXtcclxuICAgICAgICAgICAgcmVmcmVzaFF1ZXN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/QtNC+0LHQsNCy0LvQtdC90LjQtSDQvdCw0LLQuNCz0LDRhtC40Lgg0L3QsCDQutC90L7Qv9C60LhcclxuICAgIGZ1bmN0aW9uIGFkZE5hdmlnYXRpb25Ub0J1dHRvbnMoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZF9fYnV0dG9uJykub25jbGljayA9ICgpID0+IG5hdmlnYXRpb24oJ2ZvcndhcmQnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fYnV0dG9uX2ZvcndhcmQnKS5vbmNsaWNrID0gKCkgPT4gbmF2aWdhdGlvbignZm9yd2FyZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWl6X19idXR0b25fYmFjaycpLm9uY2xpY2sgPSAoKSA9PiBuYXZpZ2F0aW9uKCdiYWNrJyk7XHJcbiAgICB9XHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINGN0LvQtdC80LXQvdGCINC/0YDQuCDQvdCw0LLQuNCz0LDRhtC40LhcclxuICAgIGZ1bmN0aW9uIGhpZGUoZWxlbSl7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93KGVsZW0sIGRpc3BQcm9wZXJ0eSl7XHJcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcFByb3BlcnR5O1xyXG4gICAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB9ICAgIFxyXG4gICAgLy/QntCx0L3QvtCy0LjRgtGMINCy0L7Qv9GA0L7RgVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaFF1ZXN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX3F1ZXN0aW9uLXRleHQnKTtcclxuICAgICAgICBxdWVzdGlvbi50ZXh0Q29udGVudCA9IHF1ZXN0aW9uc1tzY3JlZW5Db3VudGVyXTtcclxuICAgIH1cclxuICAgIC8v0LHQu9C+0LrQuNGA0L7QstC60LAv0YDQsNC30LHQu9C+0LrQuNGA0L7QstC60LAg0LrQvdC+0L/QutC4XHJcbiAgICBmdW5jdGlvbiBjaGVja0J1dHRvbigpe1xyXG4gICAgICAgIGxldCBidXR0b25Gb3J3YXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1aXpfX2J1dHRvbl9mb3J3YXJkJyk7XHJcbiAgICAgICAgaWYoIWNoZWNrSXNDaG9zZW4oc2NyZWVuQ291bnRlcikpe1xyXG4gICAgICAgICAgICBidXR0b25Gb3J3YXJkLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgYnV0dG9uRm9yd2FyZC5kaXNhYmxlZCA9IGZhbHNlOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL9C/0YDQvtCy0LXRgNC40YLRjCDQstGL0LHRgNCw0L0g0LvQuCDQstCw0YDQuNCw0L3RgiDQvdCwINGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0LVcclxuICAgIGZ1bmN0aW9uIGNoZWNrSXNDaG9zZW4oc2NyZWVuQ291bnRlcil7XHJcbiAgICAgICAgbGV0IGlzVHJ1ZSA9IDA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtwYWdlc1tzY3JlZW5Db3VudGVyXX1gKTtcclxuICAgICAgICBzd2l0Y2gocGFnZXNbc2NyZWVuQ291bnRlcl0pe1xyXG4gICAgICAgICAgICBjYXNlICcjb2JqZWN0JzpcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RSYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcub2JqZWN0X19pbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0UmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpIGlzVHJ1ZSsrfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgICAgIGNhc2UgJyNsb2NhdGlvbic6XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYXRpb25SYWRpb3MgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcubG9jYXRpb25fX2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvblJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtpZihyYWRpby5jaGVja2VkKSBpc1RydWUrK30pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyNjYW1lcmFjb3VudCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FtZXJhY291bnRSYW5nZXMgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX3NsaWRlcicpO1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhY291bnRSYW5nZXMuZm9yRWFjaChyYW5nZSA9PiB7aWYocmFuZ2UudmFsdWUgIT0gMCkgaXNUcnVlKys7fSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2FyY2hpZXZlJzpcclxuICAgICAgICAgICAgICAgIGxldCBhcmNoaWV2ZVJhZGlvcyA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgICAgIGFyY2hpZXZlUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge2lmKHJhZGlvLmNoZWNrZWQpaXNUcnVlKys7fSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnI2RvcHBlbCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgc291bmROZWVkSW5wdXQgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZF9yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc2VydmVOZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3Jlc2VydmVfbmVlZCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVybmV0TmVlZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNpbnRlcm5ldF9uZWVkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc291bmROZWVkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWQnKTtcclxuICAgICAgICAgICAgICAgIGlmKGludGVybmV0TmVlZC5jaGVja2VkICYmICFyZXNlcnZlTmVlZC5jaGVja2VkICYmICFzb3VuZE5lZWQuY2hlY2tlZCkgaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBpZighaW50ZXJuZXROZWVkLmNoZWNrZWQgJiYgcmVzZXJ2ZU5lZWQuY2hlY2tlZCAmJiAhc291bmROZWVkLmNoZWNrZWQpIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgaWYoaW50ZXJuZXROZWVkLmNoZWNrZWQgJiYgcmVzZXJ2ZU5lZWQuY2hlY2tlZCAmJiAhc291bmROZWVkLmNoZWNrZWQpIGlzVHJ1ZSsrO1xyXG4gICAgICAgICAgICAgICAgaWYoaW50ZXJuZXROZWVkLmNoZWNrZWQgJiYgIXJlc2VydmVOZWVkLmNoZWNrZWQgJiYgc291bmROZWVkLmNoZWNrZWQgJiYgc291bmROZWVkSW5wdXQudmFsdWUgIT0gMClpc1RydWUrKztcclxuICAgICAgICAgICAgICAgIGlmKCFpbnRlcm5ldE5lZWQuY2hlY2tlZCAmJiByZXNlcnZlTmVlZC5jaGVja2VkICYmIHNvdW5kTmVlZC5jaGVja2VkICYmIHNvdW5kTmVlZElucHV0LnZhbHVlICE9IDApaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBpZihpbnRlcm5ldE5lZWQuY2hlY2tlZCAmJiByZXNlcnZlTmVlZC5jaGVja2VkICYmIHNvdW5kTmVlZC5jaGVja2VkICYmIHNvdW5kTmVlZElucHV0LnZhbHVlICE9IDApaXNUcnVlKys7XHJcbiAgICAgICAgICAgICAgICBpZighaW50ZXJuZXROZWVkLmNoZWNrZWQgJiYgIXJlc2VydmVOZWVkLmNoZWNrZWQgJiYgc291bmROZWVkLmNoZWNrZWQgJiYgc291bmROZWVkSW5wdXQudmFsdWUgIT0gMClpc1RydWUrKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjaG93ZmFzdCc6XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdEhpZ2ggPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9oaWdoJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdE1pZCA9IGN1cnJlbnRQYWdlLnF1ZXJ5U2VsZWN0b3IoJyNmYXN0X21pZGRsZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZhc3RMb3cgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjZmFzdF9sb3cnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmYXN0T3duID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3Rfb3duJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmFzdE93bkZpZWxkID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI2Zhc3RfYXJlYScpO1xyXG4gICAgICAgICAgICAgICAgaWYoZmFzdEhpZ2guY2hlY2tlZCB8fCBmYXN0TWlkLmNoZWNrZWQgfHwgZmFzdExvdy5jaGVja2VkIHx8IChmYXN0T3duLmNoZWNrZWQgJiYgZmFzdE93bkZpZWxkLnZhbHVlICE9JycpKSBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcjc3F1YXJlJzogXHJcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlSW5wdXRzID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVQZXJpbWV0ZXIgPSBjdXJyZW50UGFnZS5xdWVyeVNlbGVjdG9yKCcjc3FhcmVfX3BlcmltZXRyYWwnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVPYmplY3RMb25nID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1vYmplY3QtbG9uZycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZU9iamVjdFdpZHRoID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1vYmplY3Qtd2lkdGgnKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVQZXJpbWV0ZXJMb25nID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1wZXJpbWV0ZXItbG9uZycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVBlcmltZXRlcldpZHRoID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvcignI3NxdWFyZS1wZXJpbWV0ZXItd2lkdGgnKTtcclxuICAgICAgICAgICAgICAgIGlmKHNxdWFyZVBlcmltZXRlci5jbGFzc0xpc3QuY29udGFpbnMoJ3NxdWFyZV9fcGVyaW1ldHJhbF9oaWRkZW4nKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3F1YXJlT2JqZWN0TG9uZy52YWx1ZSAhPSAwICYmIHNxdWFyZU9iamVjdFdpZHRoICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighc3F1YXJlUGVyaW1ldGVyLmNsYXNzTGlzdC5jb250YWlucygnc3F1YXJlX19wZXJpbWV0cmFsX2hpZGRlbicpKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihzcXVhcmVPYmplY3RMb25nLnZhbHVlICE9IDAgJiYgc3F1YXJlT2JqZWN0V2lkdGggIT0gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3F1YXJlUGVyaW1ldGVyTG9uZy52YWx1ZSAhPSAwICYmIHNxdWFyZVBlcmltZXRlcldpZHRoLnZhbHVlICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjb21wbGVjdGF0aW9uJzpcclxuICAgICAgICAgICAgICAgIGxldCBjb21wbGVjdGF0aW9uUmFkaW9zID0gY3VycmVudFBhZ2UucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZWN0YXRpb25fX2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb21wbGVjdGF0aW9uUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJhZGlvLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGlzVHJ1ZTtcclxuICAgIH1cclxuICAgIC8v0YDQsNC00LjQvtC60L3QvtC/0LrQuCDQktC+0L/RgNC+0YEgMVxyXG4gICAgLy/Qv9GA0L7QstC10YDQutCwINGA0LDQtNC40L7QutC90L7Qv9C+0Log0L3QsCBjaGVja2VkXHJcbiAgICBmdW5jdGlvbiByYWRpb0NoZWNrQWN0aXZlKCl7XHJcbiAgICAgICAgbGV0IHJhZGlvSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdyYWRpbyddYCk7XHJcbiAgICAgICAgcmFkaW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpZihpdGVtLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ29iamVjdF9faXRlbV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0LjQstC10L3RgtCwINC/0L4g0LjQt9C80LXQvdC10L3QuNGOINGA0LDQtNC40L4g0L3QsCAxINGB0YLRgNCw0L3QuNGG0LVcclxuICAgIGZ1bmN0aW9uIHJhZGlvT25DaGFuZ2UoKXtcclxuICAgICAgICBsZXQgb2JqZWN0UmFkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9iamVjdF9faW5wdXQnKTtcclxuICAgICAgICBvYmplY3RSYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSYWRpbyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICByYWRpb0NoZWNrQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0N1cnJlbnRTcGhlcmUoY3VycmVudFJhZGlvKTtcclxuICAgICAgICAgICAgICAgIHNob3dQZXJpbWV0ZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgLy/Qv9C+0LrQsNC30LDRgtGMINCy0L4gMiDQstC+0L/RgNC+0YHQtSDQvdGD0LbQvdGD0Y4g0YHRhNC10YDRgyDQv9GA0LjQvNC10L3QtdC90LjRjywg0YHQutGA0YvQsiDQvdC10L3Rg9C20L3QvtC1XHJcbiAgICBmdW5jdGlvbiBzaG93Q3VycmVudFNwaGVyZShpbnB1dCl7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTcGhlcmUgPSBpbnB1dC5kYXRhc2V0LmNob2lzZTtcclxuICAgICAgICBsZXQgY2FtQ291bnRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FtZXJhLWNvdW50X19pdGVtJyk7XHJcbiAgICAgICAgY2FtQ291bnRlcnMuZm9yRWFjaChjb3VudGVyID0+IHtcclxuICAgICAgICAgICAgY291bnRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhbWVyYS1jb3VudF9fJHtjdXJyZW50U3BoZXJlfWApO1xyXG4gICAgICAgIGN1cnJlbnRDb3VudGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvL9C/0L7QutCw0LfQsNGC0Ywg0LIgc3F1YXJlINC/0LXRgNC40LzQtdGC0YDQsNC70LrQuCwg0LXRgdC70Lgg0LfQvdCw0YfQtdC90LjQtSDQuNGFINCyINC60L7Qu9C40YfQtdGB0YLQstC1ICE9IDBcclxuICAgIGZ1bmN0aW9uIHNob3dQZXJpbWV0ZXIoKXtcclxuICAgICAgICBsZXQgY291bnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYWNvdW50Jyk7XHJcbiAgICAgICAgbGV0IHBlcmltZXRlclJhbmdlcyA9IGNvdW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucGVyaW1ldGVyJyk7XHJcbiAgICAgICAgbGV0IHNxYXJlUGVyaW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxYXJlX19wZXJpbWV0cmFsJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBlcmltZXRlckhhcyA9IDA7XHJcbiAgICAgICAgcGVyaW1ldGVyUmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyYW5nZS52YWx1ZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgIHBlcmltZXRlckhhcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihwZXJpbWV0ZXJIYXMgIT0gMCl7XHJcblxyXG4gICAgICAgICAgICBzcWFyZVBlcmltZXRlci5jbGFzc0xpc3QucmVtb3ZlKCdzcXVhcmVfX3BlcmltZXRyYWxfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGxldCBzcWFyZVBlcmltZXRlclJhbmdlcyA9IHNxYXJlUGVyaW1ldGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIHNxYXJlUGVyaW1ldGVyUmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmFuZ2UudmFsdWUgPSAwXHJcbiAgICAgICAgICAgICAgICByZWZyZXNoUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzcWFyZVBlcmltZXRlci5jbGFzc0xpc3QuYWRkKCdzcXVhcmVfX3BlcmltZXRyYWxfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g0L/QvtCy0LXRgdC40YLRjCDQvdCwIHJhbmdlINC/0LXRgNC40LzQtdGC0YDQsNC70L7QuiDQsiBjYW1lcmFjb3VudCDRgdC+0LHRi9GC0LjQtSBzaG93UGVyaW1ldGVyINC90LAgaW5wdXRcclxuICAgIGZ1bmN0aW9uIGFkZFNob3dQZXJpbWV0ZXIoKXtcclxuICAgICAgICBsZXQgY291bnRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbWVyYWNvdW50Jyk7XHJcbiAgICAgICAgbGV0IHBlcmltZXRlclJhbmdlcyA9IGNvdW50UGFnZS5xdWVyeVNlbGVjdG9yQWxsKCcucGVyaW1ldGVyJyk7XHJcbiAgICAgICAgbGV0IHNxYXJlUGVyaW1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxYXJlX19wZXJpbWV0cmFsJyk7XHJcbiAgICAgICAgcGVyaW1ldGVyUmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4ge1xyXG4gICAgICAgICAgICByYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNob3dQZXJpbWV0ZXIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvL9GB0LHRgNC+0YHQuNGC0Ywg0YHRh9C10YLRh9C40LrQuFxyXG4gICAgZnVuY3Rpb24gcmVzZXRWYWx1ZXMoKXtcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEg0L4g0LrQvtC70LjRh9C10YHRgtCy0LUg0YHRh9C10YLRh9C40LrQuCDQutCw0LzQtdGAINGD0LLQtdGB0YLQuCDQvdCwIDBcclxuICAgICAgICAgICAgbGV0IGNhbUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbWVyYS1jb3VudCcpO1xyXG4gICAgICAgICAgICBsZXQgcmFuZ2VzQ2FtQ291bnQgPSBjYW1Db3VudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX3NsaWRlcicpO1xyXG4gICAgICAgICAgICByYW5nZXNDYW1Db3VudC5mb3JFYWNoKHJhbmdlID0+IHtcclxuICAgICAgICAgICAgICAgIHJhbmdlLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL9C+0LHRitC10LrRgiAtINGB0LHRgNC+0YEg0YDQsNC00LjQvlxyXG4gICAgICAgICAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24nKTtcclxuICAgICAgICAgICAgbGV0IGxvY2F0aW9uUmFkaW9zID0gbG9jYXRpb24ucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1yYWRpbycpO1xyXG4gICAgICAgICAgICBsb2NhdGlvblJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0UmFkaW8ocmFkaW8pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSDQvtCxINCw0YDRhdC40LLQtSDRgdCx0YDQvtGB0LjRgtGMIHJhZGlvIFxyXG4gICAgICAgICAgICBsZXQgYXJjaGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmNoaWV2ZScpO1xyXG4gICAgICAgICAgICBsZXQgcmFkaW9zQXJjaGlldmUgPSBhcmNoaXZlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8nKTtcclxuICAgICAgICAgICAgcmFkaW9zQXJjaGlldmUuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldFJhZGlvKHJhZGlvKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy/QstC+0L/RgNC+0YEg0LTQvtC/INC+0L/RhtC40Lgg0YHQsdGA0L7RgdC40YLRjCDRh9C10LrQsdC+0LrRgdGLINC4IHJhbmdlINGB0LHRgNC+0YHQuNGC0Ywg0Lgg0YHQutGA0YvRgtGMXHJcbiAgICAgICAgICAgIGxldCBkb3BwZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZG9wcGVsJyk7XHJcbiAgICAgICAgICAgIGxldCBjaGVja2JveGVzRG9wcGVsID0gZG9wcGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tY2hlY2snKTtcclxuICAgICAgICAgICAgY2hlY2tib3hlc0RvcHBlbC5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hlY2tCb3goY2hlY2tib3gpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsZXQgcmFuZ2VEb3BwZWwgPSBkb3BwZWwucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWRfcmFuZ2UnKTtcclxuICAgICAgICAgICAgcmFuZ2VEb3BwZWwudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICByZWZyZXNoUmFuZ2UocmFuZ2VEb3BwZWwpO1xyXG4gICAgICAgICAgICBjaGVja05lZWRTb3VuZCgpO1xyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSBob3dGYXN0INGB0LHRgNC+0YHQuNGC0Ywg0YDQsNC00LjQvlxyXG4gICAgICAgICAgICBsZXQgZmFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXN0Jyk7XHJcbiAgICAgICAgICAgIGxldCByYWRpb3NGYXN0ID0gZmFzdC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvJyk7XHJcbiAgICAgICAgICAgIHJhZGlvc0Zhc3QuZm9yRWFjaChyYWRpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldFJhZGlvKHJhZGlvKTtcclxuICAgICAgICAgICAgICAgIGhhc093bkFuc3dlcigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvL9Cy0L7Qv9GA0L7RgSBzcXVhcmUg0YHQsdGA0L7RgdC40YLRjCByYW5nZVxyXG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NxdWFyZScpO1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlUmFuZ2VzID0gc3F1YXJlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZS1zbGlkZXInKTtcclxuICAgICAgICAgICAgc3F1YXJlUmFuZ2VzLmZvckVhY2gocmFuZ2UgPT4gcmFuZ2UudmFsdWUgPSAwKTtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuICAgIC8v0LTQvtCx0LDQstC70LXQvdC40LUg0L7QsdGA0LDQsdC+0YLRh9C40LrQsCDQvdCwINGB0LvQsNC50LTQtdGAXHJcbiAgICBmdW5jdGlvbiBmdW5jU2xpZGVycygpe1xyXG4gICAgICAgIGxldCBzbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19zbGlkZXInKTtcclxuICAgICAgICBzbGlkZXJzLmZvckVhY2goc2xpZGVyID0+IHtcclxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hSYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrQnV0dG9uKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy/RgdCx0YDQvtGBINGA0LDQtNC40L5cclxuICAgIGZ1bmN0aW9uIHJlc2V0UmFkaW8oZWxlbSl7XHJcbiAgICAgICAgZWxlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvL3Jlc2V0IGNoZWNrYm94XHJcbiAgICBmdW5jdGlvbiByZXNldENoZWNrQm94KGVsZW0pe1xyXG4gICAgICAgIGVsZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy/QvtCx0L3QvtCy0LjRgtGMINC/0L7Qu9C30YPQvdC+0LpcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hSYW5nZShjdXJyZW50KXtcclxuICAgICAgICBjdXJyZW50Lm5leHRTaWJsaW5nLmlubmVySFRNTCA9IGN1cnJlbnQudmFsdWU7XHJcbiAgICAgICAgbGV0IHBlcmNlbnRWYWx1ZSA9IChjdXJyZW50LnZhbHVlL2N1cnJlbnQubWF4KSoxMDA7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgzLDgxLDE0NSwxKSAke3BlcmNlbnRWYWx1ZX0lLCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTc4KSAke3BlcmNlbnRWYWx1ZX0lKWBcclxuICAgICAgICBjdXJyZW50LnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcclxuICAgIH1cclxuICAgIC8v0JLQvtC/0YDQvtGBIDQg0L3Rg9C20LXQvSDQt9Cy0YPQulxyXG4gICAgZnVuY3Rpb24gbmVlZFNvdW5kRXZlbnQoKXtcclxuICAgICAgICBsZXQgcmVjb3JkQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZCcpO1xyXG4gICAgICAgIHJlY29yZENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrTmVlZFNvdW5kKVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hlY2tOZWVkU291bmQoKXtcclxuICAgICAgICBsZXQgcmVjb3JkQ2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc291bmRfbmVlZCcpO1xyXG4gICAgICAgIGxldCB0b2dnbGVSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkb3BwZWxfX3NvdW5kcmVjb3JkJyk7XHJcbiAgICAgICAgbGV0IHNvdW5kTmVlZFJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdW5kX25lZWRfcmFuZ2UnKTtcclxuICAgICAgICBpZihyZWNvcmRDaGVja2JveC5jaGVja2VkKXtcclxuICAgICAgICAgICAgdG9nZ2xlUmFuZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZG9wcGVsX19zb3VuZHJlY29yZF9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdG9nZ2xlUmFuZ2UuY2xhc3NMaXN0LmFkZCgnZG9wcGVsX19zb3VuZHJlY29yZF9oaWRkZW4nKTtcclxuICAgICAgICAgICAgc291bmROZWVkUmFuZ2UudmFsdWUgPSAwO1xyXG4gICAgICAgICAgICByZWZyZXNoUmFuZ2Uoc291bmROZWVkUmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v0JLQvtC/0YDQvtGBNSDRgdCy0L7QuSDQstCw0YDQuNCw0L3RgiDQvtGC0LLQtdGC0LBcclxuICAgICAgICAvL9C/0YDQvtCy0LXRgNC40YLRjCDRh9C10Log0YMg0YDQsNC00LjQviDRgdCy0L7QuSDQstCw0YDQuNCw0L3Rgiwg0LXRgdC70Lgg0LTQsCwg0YLQviDRg9C00LDQu9C40YLRjCDQutC70LDRgdGBINGB0LrRgNGL0YLQuNGPLCDQtdGB0LvQuCDQvdC10YIgLSDQtNC+0LHQsNCy0LjRgtGMXHJcbiAgICBmdW5jdGlvbiBoYXNPd25BbnN3ZXIoKXtcclxuICAgICAgICBsZXQgb3duQW5zd2VyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXN0X19vd25hbnN3ZXInKTtcclxuICAgICAgICBsZXQgaGFzT3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zhc3Rfb3duJyk7XHJcbiAgICAgICAgaWYoaGFzT3duLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICBvd25BbnN3ZXJBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2Zhc3RfX293bmFuc3dlcl9oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgb3duQW5zd2VyQXJlYS5jbGFzc0xpc3QuYWRkKCdmYXN0X19vd25hbnN3ZXJfaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/QvdCw0LLQtdGB0LjRgtGMINGN0YLRgyDRhNGD0L3QutGG0LjRjiDQvdCwINC40LfQvNC10L3QtdC90LjQtSDQstGB0LXRhSDRhy/QsSDQsiDQs9GA0YPQv9C/0LVcclxuICAgIGZ1bmN0aW9uIGZhc3RMZXZlbENoYW5nZSgpe1xyXG4gICAgICAgIGxldCByYWRpb0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZhc3RfX2lucHV0YCk7XHJcbiAgICAgICAgcmFkaW9JdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhc093bkFuc3dlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvL9C+0LHRidC40Lkg0LjQstC10L3RgiDQvdCwINCy0YHQtSDQuNC90L/Rg9GC0Ysg0LLQvtC/0YDQvtGB0L7QsiBjaGVja0J1dHRvbigpIC0g0L/RgNC+0LLQtdGA0LjRgtGMLCBcclxuICAgIC8v0LXRgdGC0Ywg0LvQuCDQstGL0LHRgNCw0L3QvdGL0LUg0Lgg0LLQstC10LTQtdC90L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0Lgg0LXRgdC70Lgg0LXRgdGC0YwsXHJcbiAgICAvL9C4INC10YHQu9C4INC10YHRgtGMIC0g0YDQsNC30LHQu9C+0LrQuNGA0L7QstCw0YLRjCDQutC90L7Qv9C60YNcclxuICAgIC8v0LjRidC10Lwg0YfQtdGA0LXQtyDRgNC+0LTQuNGC0LXQu9GPIC5xdWl6X19xdWVzdGlvbi1ib2R5LCDRh9GC0L7QsSDQvdC1INC30LDRhtC10L/QuNGC0Ywg0YHRgtGA0LDQvdC40YbRgyDRgSDRhNC+0YDQvNC+0LlcclxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50T25BbGxJbnB1dHMoKXtcclxuICAgICAgICBsZXQgcXVpekJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVpel9fcXVlc3Rpb24tYm9keSAnKTtcclxuICAgICAgICBsZXQgYWxsUmFkaW9zID0gcXVpekJvZHkucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XHJcbiAgICAgICAgYWxsUmFkaW9zLmZvckVhY2goaXRlbSA9PiB7aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBjaGVja0J1dHRvbigpKX0pO1xyXG4gICAgICAgIGxldCBhbGxSYW5nZXMgPSBxdWl6Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFuZ2VcIl0nKTtcclxuICAgICAgICBhbGxSYW5nZXMuZm9yRWFjaChpdGVtID0+IHtpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gY2hlY2tCdXR0b24oKSl9KTtcclxuICAgICAgICBsZXQgYWxsQ2hlY2tib3hlcyA9IHF1aXpCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgIGFsbENoZWNrYm94ZXMuZm9yRWFjaChpdGVtID0+IHtpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNoZWNrQnV0dG9uKCkpfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl0sImZpbGUiOiJpbmRleC5qcyJ9
