import Servicios from './servicios.js';

class GestorUsuarios {
    constructor() {
        this.servicios = new Servicios();
        this.token = '';
        this.usuarios = [];
        this.init();
    }

    login() {
        const usuario = $('#user').val();
        const contrasena = $('#pass').val();

        this.servicios.autenticar(usuario, contrasena, (error, response) => {
            if (error) {
                alert('Usuario o contraseña incorrectos');
            } else {
                console.log(response);
                if (response.status === 200) {
                    alert('¡Login exitoso!');
                    this.token = response.token;
                    this.cleanMain();
                    this.mostrarUsuarios(this.token);
                }
            }
        });
    }

    mostrarUsuarios(token) {
        this.servicios.obtenerUsuarios(token, (error, response) => {
            if (error) {
                console.error('Error al obtener usuarios:', error);
            } else {
                console.log(response);
                this.renderizarUsuarios(response);
            }
        });
    }

    cleanMain() {
        $("#mainlogin").html("");
    }

    renderizarUsuarios(usuarios) {
        usuarios.forEach(usuario => {
            const usuarioDiv = $(`
                <div class="usuario" style="color: ${usuario.age < 18 ? 'red' : 'black'}">
                    <img src="${usuario.photo}" alt="${usuario.name}" class="user-photo">
                    <p>Nombre: ${usuario.name}</p>
                    <p>Edad: ${usuario.age}</p>
                    <p>DNI: ${usuario.dni}</p>
                    <p>Estado Civil: ${usuario.civil_status}</p>
                </div>
            `);
            $('#mainlogin').append(usuarioDiv);
        });
    }

    renderLogin() {
        const templatelogin = `
            <div class="inputLogin">
                <div class="input">
                    <label>Usuario</label>
                    <input type="text" id="user" />
                </div>
                <div class="input">
                    <label>Password</label>
                    <input type="password" id="pass" />
                </div>
                <div class="input">
                    <button type="submit" class="btn" id="btLogin">Logear</button>
                </div>
            </div>`;
        $("#mainlogin").append(templatelogin);
    }

    render() {
        this.renderLogin();
    }

    init() {
        this.render();
        $('#btLogin').on('click', () => {
            this.login();
        });
    }
}

export default GestorUsuarios;
