function showLoadComponent(mod){
    $(mod).append("<img src='images/geral/load_infinity.gif' class='load_infinity' alt='Loader' title='Loader' style='clear:both;display:block;width:50px;margin:auto;' />");
}
function hideLoadComponent(mod){
    setTimeout(function(){
        $(mod).find(".load_infinity").remove();
    },500);
    
}
//
function checkFormErrors(mod){
    erros=[];
    $(mod).find('.help-block').each(function(){
        if($(this).hasClass("has-error")){
            erros.push($(this).attr('data-ref'));
        }
    });
    
    if(erros.length>0){
        
        showAlert("Falha ao enviar", "Alguns campos do formulário estão preenchidos incorretamente ou inválidos. Corrija para reenviar. ["+erros.join(',')+"]", 1,'<button type="button" class="btn btn-danger radius_md" data-dismiss="modal">Fechar</button>');
        return false;
    
    }else{
        return true;
    }
}
/*
$(function(){
    $("#money").maskMoney({symbol:'R$ ', 
   showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
    });
$(function(){
    $(".money").maskMoney({symbol:'R$ ', 
   showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
    });*/
    
    function init() {
        console.log("init");
        var imgDefer = document.getElementsByTagName('img');
        for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        } } }
        function getWebp() { // Nome da fun��o recebendo a vari�vel item
            console.log("towebp");
            var item = $('html').hasClass('webp') ? 'webp' : 'img'; // Atribui o valor a vari�vel item
            $('img').each( function(){ // Busca todas as imagens do site
                $( this ).attr('data-src', $( this ).data( item ) ); // Trocar� o Source da imagem
            });
            init();
        }

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    function showLoader(){
        $('#animload').fadeIn(200);
    }
    function hideLoader(){
        $('#animload').fadeOut(200);
    }
    function showAlert(title, body, type,btns){
     
        $('#customModal').find(".modal-title").empty();
        $('#customModal').find(".modal-body").empty();
        $('#customModal').find(".modal-footer").empty();
        /**
         * 1-Success;
         * 2-Error;
         * 3-Warns
         *
        var src='';
        switch(type){
            case 1:src='images/icons/success.png';break;
            case 2:src='images/icons/error.png';break;
            case 3:src='images/icons/warning.png';break;
            default:src='images/icons/error.png';break;
        }*/
        $('#customModal').find(".modal-title").append(title);
        $('#customModal').find(".modal-body").append(body);


        $('#customModal').modal({backdrop: 'static', keyboard: false}); 
        $('#customModal').find('.modal-footer').append(btns); 
    }
    function showAlertContact(){
     
        $('#customModal').find(".modal-title").empty();
        //$('#customModal').find(".modal-body").empty();
        $('#customModal').find(".modal-footer").empty();
        /**
         * 1-Success;
         * 2-Error;
         * 3-Warns
         *
        var src='';
        switch(type){
            case 1:src='images/icons/success.png';break;
            case 2:src='images/icons/error.png';break;
            case 3:src='images/icons/warning.png';break;
            default:src='images/icons/error.png';break;
        }*/

        $('#modalContact').modal({backdrop: 'static', keyboard: false}); 
       // $('#modalContact').find('.modal-footer').append(btns); 
    }
    function showAlertperm(title, body, type,func='',val=''){
     
        $('.alsl[id=modalTitle]').text('');
        $('.alsl[id=modalBody]').empty('');
        /**
         * 1-Success;
         * 2-Error;
         * 3-Warns
         */
        var src='';
        switch(type){
            case 1:src='images/icons/success.png';break;
            case 2:src='images/icons/error.png';break;
            case 3:src='images/icons/warning.png';break;
            default:src='images/icons/error.png';break;
        }
        $('.alsl[id=modalTitle]').text(title);
        $('.alsl[id=modalBody]').append('<b>'+body+'</b>');
        $('.alsl[id=modalType]').children('img').attr('src',src);


        $('#modalAlertperm').modal({backdrop: 'static', keyboard: false}); 
        $('#modalAlertperm').find('button[data-name=alsl]').click(function(){
            switch(func){
                case 'redirect':redir(val);break;
                default:src='';break;
            }
        }); 
    }

    function redir(loc){
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1]+'/'+loc;
        window.location=baseUrl;
    }

function datenow(){
    var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = yyyy+'-'+mm+'-'+dd;
return today;
}
function getDaysAgo(datetime){
    var dt = new Date();
    var date1 = new Date(datetime);
    var date2 = new Date(dt);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
}

function tituloUrl(title){

    return title.replace(" ","-").toLowerCase();

}
function RemoveAccents(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');
    return strAccentsOut;
}