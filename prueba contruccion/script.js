document.addEventListener('DOMContentLoaded', function () {
    const gruaButton = document.getElementById('gruaButton');
    const gruaMenu = document.getElementById('gruaMenu');
  
    gruaButton.addEventListener('click', function () {
      gruaMenu.classList.toggle('active');
      gruaButton.classList.toggle('clicked');
    });
  
    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
      if (!gruaButton.contains(event.target) && !gruaMenu.contains(event.target)) {
        gruaMenu.classList.remove('active');
        gruaButton.classList.remove('clicked');
      }
    });
  });
  