class Servicios {
    autenticar(usuario, contrasena, callback) {
        //const apiurl = 'https://frontenduch.free.beeceptor.com/login';
        const apiurl = 'json/login.json';
        // Aquí iría la llamada a la API para la autenticación
        // Supondré una llamada AJAX simulada
        $.ajax({
            url: apiurl,
            method: 'POST',
            data: { usuario, contrasena },
            success: (response) => {
                callback(null, response);
            },
            error: (error) => {
                callback(error);
            }
        });
    }
    obtenerUsuarios(token, callback) {
        const apiurl = 'json/usuarios.json';
        // Aquí iría la llamada a la API para obtener los usuarios
        // Supondré una llamada AJAX simulada
        $.ajax({
            url: apiurl,
            method: 'GET',
            data: { token },
            success: (response) => {
                callback(null, response);
            },
            error: (error) => {
                callback(error);
            }
        });
    }

}

// Exportar la clase para poder importarla en otro archivo
export default Servicios;