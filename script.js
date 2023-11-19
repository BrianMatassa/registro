document.addEventListener('DOMContentLoaded', function () {
    // Oculta el mensaje de éxito al cargar la página
    document.getElementById('successMessage').style.display = 'none';

    // Agrega un evento al formulario para escuchar el evento 'submit'
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe por defecto
        registerUser();
    });

    // Agrega eventos a los campos del formulario para escuchar la tecla 'Enter'
    document.getElementById('username').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            registerUser();
        }
    });

    document.getElementById('email').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            registerUser();
        }
    });

    document.getElementById('password').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            registerUser();
        }
    });
});

function registerUser() {
    // Oculta el mensaje de éxito
    document.getElementById('successMessage').style.display = 'none';

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Puedes agregar aquí la lógica para guardar la información en una base de datos o localStorage.

    // En este ejemplo, simplemente mostraremos un mensaje de éxito después de hacer clic en Registrar.
    document.getElementById('registrationForm').reset();
    document.getElementById('successMessage').style.display = 'block';
}
