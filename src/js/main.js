(function anon() {
  const modalFirstWindow = document.querySelector(
    '[data-window="modalFirstWindow"]'
  );
  const modalSecondWindow = document.querySelector(
    '[data-window="modalSecondWindow"]'
  );
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
      if (targetName == 'openFirstModal') {
        createOverlay();
        createCloseBtn();
        modalFirstWindow.classList.add('active');
      } else if (targetName == 'openSecondModal') {
        createOverlay();
        createCloseBtn();
        modalSecondWindow.classList.add('active');
      } else if (targetName == 'closeModal') {
        closeModal(element);
      } else if (targetName == 'showAlert') {
        closeModal(element);
        setTimeout(() => {
          alert('Hello');
        }, 100);
      }
    });
  });
}());
