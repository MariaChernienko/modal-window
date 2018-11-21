$.fn.modal = function modal(options) {
  console.log(options);
  const allBtns = document.querySelectorAll('[data-action]');

  const closeModal = function closeModal(element) {
    document.querySelector('.overlay').remove();
    element.parentElement.classList.remove('active');
    const closeCounter = document.querySelectorAll('.modal__close');
    closeCounter.forEach((element) => {
      element.remove();
    });
  };
  const createOverlay = function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const modal = document.querySelector('.modal');
    document.body.insertBefore(overlay, modal);
    overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal');
      modals.forEach((element) => {
        element.classList.remove('active');
      });
      document.querySelector('.overlay').remove();
    });
    const closeCounter = document.querySelectorAll('.modal__close');
    closeCounter.forEach((element) => {
      element.remove();
    });
  };
  const createCloseBtn = function createCloseBtn() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((element) => {
      const close = document.createElement('div');
      close.classList.add('modal__close');
      element.insertBefore(close, element.firstChild);
      close.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((element) => {
          element.classList.remove('active');
        });
        document.querySelector('.overlay').remove();
      });
    });
  };

  allBtns.forEach((element) => {
    element.addEventListener('click', (event) => {
      const targetName = element.dataset.action;
      const targetModal = document.querySelector(`[data-window=${targetName}]`);
      createOverlay();
      createCloseBtn();
      targetModal.classList.add('active');
    });
  });
  const close = document.querySelectorAll('.close');
  close.forEach(element => {
    element.addEventListener('click', () => {
      closeModal(element);
    });
  });

};
