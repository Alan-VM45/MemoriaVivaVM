const btnIzquierda = document.querySelectorAll('.carousel-btn.izquierda');
  const btnDerecha = document.querySelectorAll('.carousel-btn.derecha');
  const carouseles = document.querySelectorAll('.carousel');

  btnIzquierda.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      carouseles[i].scrollBy({ left: -300, behavior: 'smooth' });
    });
  });

  btnDerecha.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      carouseles[i].scrollBy({ left: 300, behavior: 'smooth' });
    });
  });