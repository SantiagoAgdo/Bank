function muestra_oculta(id) {
		if (document.getElementById) {
			var el = document.getElementById(id); 
			el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
		}
}


window.onload = function() {
	muestra_oculta('contenido');
}

function validarUsuario() {

    if (document.form.password.value == '123456' && document.form.login.value == 'santiago') {
        console.log("bien")
        location.href = "listar";
    }
    else {
    	Swal.fire('Usuario y/o Contraseña Incorrecta')
    }
}
function getDia(){
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth());
    var yyyy = today.getFullYear();
    var fecha = new Date(yyyy, parseInt(mm), parseInt(dd));
    
    var day = this.getDia();
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.day);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(this.day);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.day);

    var fechaHoy = `${da}-${mo}-${ye}`;
    var dateTody = document.getElementById('dia');
    dateTody.getElementById("dia").innerHTML = fechaHoy;
  }