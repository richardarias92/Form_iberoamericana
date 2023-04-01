const form = document.getElementById('my-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;
  console.log(nombre, correo, mensaje);
  // Aquí se puede agregar el código para enviar los datos a un servidor o hacer otra acción
});
