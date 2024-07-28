var selector = document.querySelector('input[type="tel"]');
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);



new JustValidate('.location__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30

    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()

        return Number(phone) && phone.length === 10

      }
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Минимальное количество символов - 2',
      maxLength: 'Максимальное количество символов - 30'
    },
    tel: {
      required: 'Укажите ваш телефон',
      function: 'Некоректно введен номер телефона'
    }
  }
});
