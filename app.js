$(window).resize(function() {
    // var heightBrowser =$(window).height();
    var widthBrowser =$(window).width();
    // console.log("Tamaño de la pantalla del navegador: width="+widthBrowser +" height="+heightBrowser );
    
    /*condiciono asi aparece*/
    if(widthBrowser>1024){
        $('.menu-login__container').css("display","flex");
    }else{
        $('.menu-login__container').css("display","none");
    }
 });


$(document).ready(function(){

	console.log("aaaaa");
    let count = 0;
    /*para los botones del header*/
	$("#btn-menu").click(function(){
		if(count===0 ){
			$('.menu-login__container').show("slow");
			count=1;
		}else{
			$('.menu-login__container').hide("slow");
			count=0;
		}
	  })

      setTimeout(()=>{


        $('main').append(`
        <div class="alerta__fondo">
        <div class="alerta__container">
            <button type="button" id="btn-close">X</button>
            <div class="alerta__titulo">
                <h3>¡Hola <span>Rocio</span>!</h3>
            </div>
            <div class="alerta__mensaje">
                <p>Recordá que hoy tenes la sesión con la
                <span>Dra. Acevedo </span>
                a las 15:00 hs</p>
            </div>
            <button type="btn-sesion" id="btn-ir">IR A LA SESIÓN</button>
        </div>
    </div>`);

    $('#btn-close').click(function(){
        $('.alerta__fondo').hide();
    });
    }, 2000);

});