const element = document.querySelector('.js-choice');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      position: 'bottom',
      placeholder: true,
      shouldSort: false
    });
