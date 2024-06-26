const form = document.getElementById('sociusForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const password = document.getElementById('password').value;
  const confirm_password = document.getElementById('confirm_password').value;

  if (password !== confirm_password) {
    alert('Las contraseñas no coinciden');
    return;
  }

  console.log('Datos del formulario:', data);
});
