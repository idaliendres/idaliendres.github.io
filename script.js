
document.getElementById('botonMisterioso').addEventListener('click', function() {
  // Crear 50 piezas de confeti
  for (let i = 0; i < 50; i++) {
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');
    
    // Agregar colores aleatorios a las piezas de confeti
    const colors = ['red', 'blue', 'green'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confeti.classList.add(randomColor);
    
    // Colocar el confeti en una posición aleatoria en la ventana
    confeti.style.left = Math.random() * 100 + 'vw';
    confeti.style.animationDelay = Math.random() * 3 + 's';
    
    document.body.appendChild(confeti);
  }
  
  // Agregar clase activa para activar la animación de confeti
  setTimeout(function() {
    document.querySelectorAll('.confeti').forEach(function(confeti) {
      confeti.classList.add('active');
    });
  }, 100);
  
  // Eliminar confeti después de 8 segundos
  setTimeout(function() {
    document.querySelectorAll('.confeti').forEach(function(confeti) {
      confeti.remove();
    });
  }, 8000);

  // Mensaje de alerta por defecto al hacer clic en el botón
  alert('¡Perdón por la tardanza, espero disfrutes tu día especial, que cumplas muchos más y alcances tus metas!');
  // Puedes agregar aquí cualquier otra acción especial que quieras que suceda al presionar el botón.
});
