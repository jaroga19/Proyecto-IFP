
function modalBienvenida() {
	document.getElementById("modalBienve").style.display="block";
	document.getElementById("tituloencabezado").style.animationPlayState="paused";
	document.getElementById("subtituloencabezado").style.animationPlayState="paused";
	document.documentElement.style.overflow="hidden";
}

function cerrarMB() {
	document.getElementById("modalBienve").style.display="none";
	document.getElementById("tituloencabezado").style.animationPlayState="running";
	document.getElementById("subtituloencabezado").style.animationPlayState="running";
	document.documentElement.style.overflow="auto";
}

// codigo del slideshow

var bgCounter=0;
function heroSlideshow() {

	var listaImgBg = [
		"url('media/hero1.jpg')",
		"url('media/hero01.jpg')",
		"url('media/heroo01.jpg')"		
	];

	bgCounter++;

	if (bgCounter == listaImgBg.length){
		bgCounter = 0;
	}

	document.getElementById("encabezado").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))," + listaImgBg[bgCounter];
}

// slideshow

	var counterNext = 0;
	var counterMain = 0;

	function slideshowAnim() {
		var listaImgAnim = document.getElementsByClassName("fondosHero");
		if(counterNext == listaImgBg.length){
			counterNext = 0;
		}
		
	if (counterMain <0){
		counterMain = listaImgAnim.length-1;
	}

		var listaImgAnim = document.getElementsByClassName("fondosHero");
		counterNext++;
		counterMain = counterNext-1;

		for (var i=0; i < listaImgAnim.length; i++){

			listaImgAnim[i].classList.remove("nextSlide");
			listaImgAnim[i].classList.remove("nextSlide");
			listaImgAnim[i].classList.remove("nextSlide");


			if(i == counterNext){
				listaImgAnim[i].classList.add("nextSlide");
			}

			else if(i == counterMain-1){
				listaImgAnim[i].classList.add("nextSlide");
			}

			else {
				listaImgAnim[i].classList.add("nextSlide");
			}
		}	
	}

function modalReserva() {
	document.getElementById("modalReserva").style.display="block";
	document.documentElement.style.overflow="hidden";

	var nombre = document.getElementById("formNombre").value;
	var email = document.getElementById("formEmail").value;
	var numTelefono = document.getElementById("forNumber").value;
	var texto = document.getElementById("formMensaje").value;

	var mensaje;


	(function formCheck(){
		if(!document.getElementById("formNombre").checkValidity()){
			mensaje ="Introduce un nombre correcto.";
			document.getElementById("mensajeFormu").innerHTML = mensaje;
		}

		else if (!document.getElementById("formEmail").checkValidity()){
			mensaje ="Introduce un e-mail correcto.";
			document.getElementById("mensajeFormu").innerHTML = mensaje;
		}

		else if (!document.getElementById("forNumber").checkValidity()){
			mensaje ="Introduce un número de teléfono correcto.";
			document.getElementById("mensajeFormu").innerHTML = mensaje;
		}

		else if (!document.getElementById("formMensaje").checkValidity()){
			mensaje ="Introduce un mensaje por favor. Gracias.";
			document.getElementById("mensajeFormu").innerHTML = mensaje;
		}

		else{

			mensaje = "Estimado/a" + nombre + " , le confirmamos que hemos recibido su mensaje correctamente, en breves nos pondremos en contacto con usted al teléfono " + numTelefono + " que nos ha proporcionado, y recibirá un correo de confirmación al e-mail: " + email + ". Muchas gracias, el equipo de Peak Crux.";

			document.getElementById("mensajeFormu").innerHTML = mensaje;
		}

	})();

	
}

function cerrarMBR(){
	document.getElementById("modalReserva").style.display="none";
	document.documentElement.style.overflow="auto";

	document.getElementById("formNombre").value = "";
	document.getElementById("formEmail").value = "";
	document.getElementById("forNumber").value = "";
	document.getElementById("formMensaje").value = "";
}

//Menúu

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu (){

	var posActualScroll = document.documentElement.scrollTop;

	if (posPreviaScroll>posActualScroll) {

		document.getElementById("navBar").style.top="0";

		if (posActualScroll>200) {
			document.getElementById("navBar").style.height="50px";
			document.getElementById("navBar").style.fontSize="1.75rem";
			document.getElementById("navBar").style.lineHeight="50px";
			document.getElementById("logo").style.padding="0px";
		}

		else {

			document.getElementById("navBar").style.height="150px";
			document.getElementById("navBar").style.fontSize="2rem";
			document.getElementById("navBar").style.lineHeight="150px";
			document.getElementById("logo").style.padding="23px";
		}
	}
	else {
		

		if (posActualScroll<200) {
			document.getElementById("navBar").style.height="50px";
			document.getElementById("navBar").style.fontSize="1.75rem";
			document.getElementById("navBar").style.lineHeight="50px";
			document.getElementById("logo").style.padding="0px";
		}

		else {
			document.getElementById("navBar").style.top="-150px";
		}
	}

	posPreviaScroll = posActualScroll;

}
//aqui empieza el código del lightbox


//function modalLightboxG (){
//	document.getElementById("modalLightboxG").style.display = "block";
//	document.documentElement.style.overflow = 'hidden';
//
//	var listaImgGal = document.getElementsByClassName("imagenGa");
//	
//	
//
//	for (var i=0; i<listaImgGal.length; i++ ) {
//
//		listaRutaImgGal.push(listaImgGal[i].src);
//	}
//	//console.log(listaRutaImgGal);
//
//	document.getElementById("imageToShow").innerHTML = "<img class='imageLB' src='media/imageToShow.jpg'>";
//}
var listaRutaImgGal = [];
var numeroIMG = 0;

function readyLB() {

	var listaImgGal = document.getElementsByClassName("imagenGa");

	for (var i=0; i<listaImgGal.length; i++ ) {

		listaRutaImgGal.push(listaImgGal[i].src);
	}

	for (var i=0; i<listaImgGal.length; i++){
		listaImgGal[i].addEventListener('click', openLB);
	}

	function openLB(){

		var rutaImgCiclada = event.currentTarget.src;
		numeroIMG = listaRutaImgGal.indexOf(rutaImgCiclada);
		
		document.getElementById("imageToShow").innerHTML = "<img class='imageLB' src=" + listaRutaImgGal[numeroIMG]+">";
		document.getElementById("modalLightboxG").style.display = "block";
		document.documentElement.style.overflow = 'hidden';
		closeLB();
	}

	function closeLB(){
		window.addEventListener("click", function(event) {
			if (!event.target.matches(".imageLB") && !event.target.matches(".imagenGa") && !event.target.matches(".lbButtons") && !event.target.matches(".fas")) {

				document.getElementById("modalLightboxG").style.display = "none";
				document.documentElement.style.overflow = 'auto';
			}

		});
	}
}

function nextImgGal() {

	numeroIMG++;

	if (numeroIMG == listaRutaImgGal.length) {
		numeroIMG = 0;
	}

	document.getElementById("imageToShow").innerHTML = "<img class='imageLB' src=" + listaRutaImgGal[numeroIMG]+">";

}

function prevImgGal() {

	numeroIMG--;
	if (numeroIMG < 0) {
		numeroIMG = listaRutaImgGal.length-1;
	}

	document.getElementById("imageToShow").innerHTML = "<img class='imageLB' src=" + listaRutaImgGal[numeroIMG]+">";

}