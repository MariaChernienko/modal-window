(function () {
  const modalFirstWindow = document.querySelector('[data-target="firstWindow"]');
  const modalSecondWindow = document.querySelector('[data-target="secondWindow"]');
  const allBtns = document.querySelectorAll('[data-target]');


  allBtns.forEach((element) => {
    element.addEventListener('click', () => {
      const targetName = element.dataset.target;
      if (targetName == 'openFirstModal') modalFirstWindow.classList.add('active');
      else if (targetName == 'closeFirstModal') modalFirstWindow.classList.remove('active');
      else if (targetName == 'openSecondModal') modalSecondWindow.classList.add('active');
      else if (targetName == 'closeSecondModal') modalSecondWindow.classList.remove('active');
      else if (targetName == 'showAlert') {
        modalFirstWindow.classList.remove('active');
        setTimeout(() => {
          alert('Hello');
        }, 100);
      }
    });
  });
}());
