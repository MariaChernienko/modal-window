(function () {
  const modalFirstWindow = document.querySelector('[data-window="modalFirstWindow"]');
  const modalSecondWindow = document.querySelector('[data-window="modalSecondWindow"]');
  const allBtns = document.querySelectorAll('[data-target]');

  const createOverlay = function () {
    const newDiv = document.createElement('div');
    newDiv.classList.add('overlay');
    newDiv.setAttribute('data-target', 'close');
    my_div = document.querySelector('.modal');
    document.body.insertBefore(newDiv, my_div);
  };

  const createCloseBtn = function () {
    my_div = document.querySelectorAll('.modal');
    my_div.forEach(element => {
      const newDiv = document.createElement('div');
      newDiv.classList.add('modal__close');
      newDiv.setAttribute('data-target', 'close');
      element.insertBefore(newDiv, element.firstChild);
    });
  };
  const closeModal = function(element) {
    document.querySelector('.overlay').remove();
    element.parentElement.classList.remove('active');
    let closeCounter = document.querySelectorAll('.modal__close');
    closeCounter.forEach(element => {
      element.remove();
    });
  };

  allBtns.forEach((element) => {
    element.addEventListener('click', (event) => {
      const targetName = element.dataset.target;
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
