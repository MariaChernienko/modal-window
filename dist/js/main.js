(function() {
  const open = document.querySelector('[data-target="openModal"]');
  const modalWindow = document.querySelector('.modal-container');
  const close = document.querySelectorAll('[data-target="closeModal"]');

  open.addEventListener('click', (event) => {
    openModalWindow();
  });
  
    close.forEach(element => {
      // closeModalWindow();
      element.addEventListener('click', (event) => {
        modalWindow.classList.remove('active');
      });
      
    });



  const openModalWindow = function() {
    modalWindow.classList.add('active');
  };
  // const closeModalWindow = function() {
  //   element.addEventListener('click', (event) => {
  //     modalWindow.classList.remove('active');
  //   });
  // };


}());