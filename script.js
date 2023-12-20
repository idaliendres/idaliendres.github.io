
window.addEventListener('DOMContentLoaded', () => {
  const botonMisterioso = document.getElementById('botonMisterioso');

  botonMisterioso.addEventListener('click', function() {
    crearConfeti();
    mostrarMensaje();
  });


  function crearConfeti() {
    for (let i = 0; i < 50; i++) {
      const confeti = document.createElement('div');
      confeti.classList.add('confeti');

      const colors = ['red', 'blue', 'green'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confeti.classList.add(randomColor);

      confeti.style.left = Math.random() * 100 + 'vw';
      confeti.style.animationDelay = Math.random() * 3 + 's';

      document.body.appendChild(confeti);
    }

    setTimeout(function() {
      document.querySelectorAll('.confeti').forEach(function(confeti) {
        confeti.classList.add('active');
      });
    }, 100);

    setTimeout(function() {
      document.querySelectorAll('.confeti').forEach(function(confeti) {
        confeti.remove();
      });
    }, 8000);
  }

  function mostrarMensaje() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 11, 19); // 19 de diciembre (0-11 para los meses)

    let mensaje = '';

    // Comprobar si ya ha pasado el cumpleaños este año
    if (today.getMonth() === 11 && today.getDate() > 19) {
      birthday.setFullYear(today.getFullYear() + 1); // Avanzar al próximo año si ya pasó el cumpleaños
    }

    const oneDay = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milisegundos
    const diffDays = Math.ceil((birthday - today) / oneDay); // Redondear hacia arriba para asegurar un día completo

    if (diffDays === 0) {
      mensaje = '¡Feliz Cumpleaños, Valery Pinto!';
    } else {
      mensaje = `Faltan ${diffDays} días para tu cumpleaños.`;
    }

    alert(mensaje);
  }
});
