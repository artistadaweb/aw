$(".cpfcnpj").keyup(function(){
   
    var tamanho = $(this).val().length;
    //00.063.960/0001-09
    if(tamanho == 18){
        if(isCNPJValid($(this).val())){
            $(this).parent(2).addClass("has-success");
            $(this).parent(2).removeClass("has-error");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('O CNPJ está incorreto.');
        }

    }else if(tamanho == 14){
        if(isCPFValid($(this).val().replace(/[^\w\s]/gi, ''))){
            $(this).parent(2).addClass("has-success");
            $(this).parent(2).removeClass("has-error");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('O CPF está incorreto.');
        }

    }else if(tamanho == 0){
        $(this).parent(2).removeClass("has-success");
        $(this).parent(2).removeClass("has-error");
        $(this).next().html('');
    }else{
        $(this).parent(2).addClass("has-error");
        $(this).parent(2).removeClass("has-success");
        $(this).next().html('O CNPJ está no formato incorreto! (ex: 00.000.000/0000-00)');
    }
});
function isCPFValid(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}
function isCNPJValid(cnpj) {
    //return true;
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj == '') return false;
    if (cnpj.length != 14)
        return false;
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;
}
function validaCnpj(el){
    
    var tamanho = $(el).val().length;
    
    if(tamanho == 18){
        ivalidCnpj=isCNPJValid($(el).val());
        if(ivalidCnpj){
            $(el).parent(2).addClass("has-success");
            $(el).parent(2).removeClass("has-error");
            $(el).next().html('');
        }else{
            $(el).parent(2).addClass("has-error");
            $(el).parent(2).removeClass("has-success");
            $(el).next().html('O CNPJ está incorreto.');
           
        }
    }else if(tamanho == 14){
        //alert($(el).val().replace(/[^\w\s]/gi, ''));
        if(isCPFValid($(el).val().replace(/[^\w\s]/gi, ''))){
            $(el).parent(2).addClass("has-success");
            $(el).parent(2).removeClass("has-error");
            $(el).next().html('');
        }else{
            $(el).parent(2).addClass("has-error");
            $(el).parent(2).removeClass("has-success");
            $(el).next().html('O CPF está incorreto.');
        }

    }else if(tamanho == 0){
        $(el).parent(2).removeClass("has-success");
        $(el).parent(2).removeClass("has-error");
        $(el).next().html('');
    }else{
        $(el).parent(2).addClass("has-error");
        $(el).parent(2).removeClass("has-success");
        $(el).next().html('O CNPJ está no formato incorreto! (ex: 00.000.000/0000-00)');
    }
}
$(".cpfcnpj").ready(function(){
   
    var tamanho = $(this).val().length;
    
    if(tamanho == 18){
        if(isCNPJValid($(this).val())){
            $(this).parent(2).addClass("has-success");
            $(this).parent(2).removeClass("has-error");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('O CNPJ está incorreto.');
        }
    }else if(tamanho == 0){
        $(this).parent(2).removeClass("has-success");
        $(this).parent(2).removeClass("has-error");
        $(this).next().html('');
    }else{
        $(this).parent(2).addClass("has-error");
        $(this).parent(2).removeClass("has-success");
        $(this).next().html('O CNPJ está no formato incorreto! (ex: 00.000.000/0000-00)');
    }
});
function valNomes(el){

    //var reg = /^([a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\-\.\,]+\s?)*\s*$/;
    if($(el).val().length < 1){
        //if(reg.test($(el).val())){
        //    $(el).parent(2).removeClass("has-error");
        //    $(el).parent(2).addClass("has-success");
        //    $(el).next().html('');
        //}else{
            $(el).parent(2).removeClass("has-success");
            $(el).parent(2).addClass("has-error");
            $(el).next().html('Verifique se digitou corretamente');
        //}
    }else{
        $(el).parent(2).removeClass("has-error");
        $(el).parent(2).addClass("has-success");
        $(el).next().html("");
    }

}

function isPhone(phone,aa) {

    phonestr = $(phone).val();

    if($(phone).val().length >0){
        var regex = /^(\([0-9]{2}\) )([0-9]{4,5}-[0-9]{4})$/;
        $(phone).parent(2).removeClass("has-success");
        $(phone).parent(2).removeClass("has-error");
        if(regex.test(phonestr)){
            $(phone).parent(2).removeClass("has-error");
            $(phone).parent(2).addClass("has-success");
            $(phone).next().html('');
        }else if($(phone).val().length <13){
            $(phone).parent(2).addClass("has-error");
            $(phone).parent(2).removeClass("has-success");
            $(phone).next().html('Verifique se digitou corretamente');
        }else{
            $(phone).parent(2).addClass("has-error");
            $(phone).parent(2).removeClass("has-success");
            $(phone).next().html('Verifique se digitou corretamente');
        }
    }else{
        $(phone).parent(2).removeClass("has-success");
        $(phone).parent(2).removeClass("has-error");
        $(phone).next().html('');
    }



  }

  
function isEmail(email) {
    var emailstr = $(email).val();
    var tam = emailstr.length;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(tam>0){
        if(regex.test(emailstr)){
            $(email).parent(2).addClass("has-success");
            $(email).parent(2).removeClass("has-error");
            $(email).next().html('');
        }else{
            $(email).parent(2).addClass("has-error");
            $(email).parent(2).removeClass("has-success");
            $(email).next().html('Não utilize caracteres especiais na senha.');
        }
    }else{
        $(email).parent(2).removeClass("has-error");
        $(email).parent(2).removeClass("has-success");
        $(email).next().html('');
    }
  }
function valSenha(val) {
    var valstr = $(val).val();
    var tam = valstr.length;
    var regex = /^(?=.*[A-Za-z])[A-Za-z\d]{4,30}$/;

    if(tam>0){
        if(regex.test(valstr)){
            $(val).parent(2).addClass("has-success");
            $(val).parent(2).removeClass("has-error");
            $(val).next().html('');
        }else{
            $(val).parent(2).addClass("has-error");
            $(val).parent(2).removeClass("has-success");
            $(val).next().html('Senha inválida');
        }
    }else{
        $(val).parent(2).removeClass("has-error");
        $(val).parent(2).removeClass("has-success");
        $(val).next().html('');
    }
  }
  function isURL(str) {

  }

  function validaData(data){

    var dataVal = $(data).val();
    var tamanho = $(data).val().length;
    
    if(tamanho == 10 ){

        var dataSplit = dataVal.split("/");
        if(dataSplit[0]>31 || dataSplit[1]>12 || dataSplit[2]>2100 || dataSplit[2]<2000){
            $(data).parent(2).addClass("has-error");
            $(data).parent(2).removeClass("has-success");
            $(data).next().html('Verifique se o dia, mes ou ano estão corretos.');
        }else{
            $(data).parent(2).addClass("has-success");
            $(data).parent(2).removeClass("has-error");
            $(data).next().html('');
        }
    } else if(tamanho==0){
        $(data).parent(2).removeClass("has-success");
        $(data).parent(2).removeClass("has-error");
        $(data).next().html('');
    
    }else{
        $(data).parent(2).addClass("has-error");
        $(data).parent(2).removeClass("has-success");
        $(data).next().html('Digite a data no formato correto (dd/mm/aaaa)');
    }

  }
  function validaPeriodo(mod){
    data1 = $(mod).find('.dtinicio');
    data2 = $(mod).find('.dtfinal');
    //converte datas para us
   
    if(data1.val().length==10 && data2.val().length==10){
        data1val = (converteDataBrToUs(data1.val()));
        data2val = (converteDataBrToUs(data2.val()));

        if(data1val<=datenow()){
            if(data2val>=data1val){
                $(data1).parent(2).addClass("has-success");
                $(data1).parent(2).removeClass("has-error");
                $(data1).next('#helpBlock2').html('');
                $(data2).parent(2).addClass("has-success");
                $(data2).parent(2).removeClass("has-error");
                $(data2).next('#helpBlock2').html('');
            }else{
                $(data2).parent(2).addClass("has-error");
                $(data2).parent(2).removeClass("has-success");
                $(data2).next('#helpBlock2').html('A data de vencimento não pode ser menor que a data de emissão.');
                $(data1).parent(2).addClass("has-error");
                $(data1).parent(2).removeClass("has-success");
                $(data1).next('#helpBlock2').html('A data de vencimento não pode ser menor que a data de emissão.');
            }
        }else{
            $(data1).parent(2).addClass("has-error");
            $(data1).parent(2).removeClass("has-success");
            $(data1).next('#helpBlock2').html('Data de inicio não pode ser maior que a data atual');
        }

    }else{
        if(data1.val().length<10){
            $(data1).parent(2).addClass("has-error");
            $(data1).parent(2).removeClass("has-success");
            $(data1).next('#helpBlock2').html('A data está incorreta!');
        }else{
            data1val = (converteDataBrToUs(data1.val()));
            if(data1val>datenow()){
                $(data1).parent(2).addClass("has-error");
                $(data1).parent(2).removeClass("has-success");
                $(data1).next('#helpBlock2').html('Data de inicio não pode ser maior que a data atual');
            }else{
                $(data1).parent(2).addClass("has-success");
                $(data1).parent(2).removeClass("has-error");
                $(data1).next('#helpBlock2').html('');
            }
            
        }
        if(data2.val().length<10){
            $(data2).parent(2).addClass("has-error");
            $(data2).parent(2).removeClass("has-success");
            $(data2).next('#helpBlock2').html('A data está incorreta!');
        }else{
            $(data2).parent(2).addClass("has-success");
            $(data2).parent(2).removeClass("has-error");
            $(data2).next('#helpBlock2').html('');
            
        }
    }

    /* if(data1.length>0){

        var dataSplit = dataVal.split("-");
        if(data1[2]>31 || data1[1]>12 || data1[0]>2100 || data1[0]<2000){
            $(data1).parent(2).addClass("has-error");
            $(data1).parent(2).removeClass("has-success");
            $(data1).next().html('Verifique se o dia, mes ou ano estão corretos.');
        }else{
            $(data1).parent(2).addClass("has-success");
            $(data1).parent(2).removeClass("has-error");
            $(data1).next().html('');
        }
    } else if(data1.length==0){
        $(data1).parent(2).removeClass("has-success");
        $(data1).parent(2).removeClass("has-error");
        $(data1).next().html('');
    
    }else{
        $(data1).parent(2).addClass("has-error");
        $(data1).parent(2).removeClass("has-success");
        $(data1).next().html('Digite a data no formato correto (dd/mm/aaaa)');
    }*/

  }
  $("#contrato").keyup(function(){
    var val = $(this).val();

    if(val.length > 0 && val.length < 4){
        $(this).parent(2).addClass("has-error");
        $(this).parent(2).removeClass("has-success");
        $(this).next().html('O número do contrato está incorreto.');
    }else if(val.length == 0){
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).removeClass("has-success");
        $(this).next().html('');
        
    }else{
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).addClass("has-success");
        $(this).next().html('');
    }

  });
$(".dv").keyup(function(){
    var regex = /^[0-9]{1}$/;

    if(regex.test($(this).val())){
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).addClass("has-success");
        $(this).next().html('');
    }else{
        if($(this).val().length==0){
            $(this).parent(2).removeClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('DV Incorreto');

        }
    }
});
$(".banco").keyup(function(){
    var regex = /^[0-9]{3,4}$/;

    if(regex.test($(this).val())){
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).addClass("has-success");
        $(this).next().html('');
    }else{
        if($(this).val().length==0){
            $(this).parent(2).removeClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('Banco Incorreto (Ex: 300)');

        }
    }
});
$(".conta").keyup(function(){
    var regex = /^[0-9]{5,8}$/;

    if(regex.test($(this).val())){
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).addClass("has-success");
        $(this).next().html('');
    }else{
        if($(this).val().length==0){
            $(this).parent(2).removeClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('Conta inválida');

        }
    }
});
$(".agencia").keyup(function(){
    var regex = /^[0-9]{4}$/;

    if(regex.test($(this).val())){
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).addClass("has-success");
        $(this).next().html('');
    }else{
        if($(this).val().length==0){
            $(this).parent(2).removeClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('Agência inválida');

        }
    }
});
$(".txtLivre").keyup(function(){
    var regex = /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ/.(),*-+=$%&@!:; ]{0,100}$/;

    if(regex.test($(this).val())){
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).addClass("has-success");
        $(this).next().html('');
    }else{
        if($(this).val().length==0){
            $(this).parent(2).removeClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('Agência inválida');

        }
    }
});
$(".nfe").keyup(function(){
    var regex = /^[0-9a-zA-Z]{3,16}$/;

    if(regex.test($(this).val())){
        $(this).parent(2).removeClass("has-error");
        $(this).parent(2).addClass("has-success");
        $(this).next().html('');
    }else{
        if($(this).val().length==0){
            $(this).parent(2).removeClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('');
        }else{
            $(this).parent(2).addClass("has-error");
            $(this).parent(2).removeClass("has-success");
            $(this).next().html('NF inválida');

        }
    }
});
  function isMoney(el){
        var val = $(el).val();
        
        if(val.length > 6){
            var regex=/^(R\$ )((([0-9]{1,3}\,[0-9]{2})|([0-9]{1,3}\.[0-9]{3}\,[0-9]{2})|([0-9]{1,3}\.[0-9]{3}\.[0-9]{3}\,[0-9]{2})))$/;
            if(regex.test(val)){
                console.log('correto');
                $(el).parent(2).removeClass("has-error");
                $(el).parent(2).addClass("has-success");
                $(el).next().html('');
            }else{
                $(el).parent(2).addClass("has-error");
                $(el).parent(2).removeClass("has-success");
                $(el).next().html('O valor é inválido. Formato: R$ 0,00');
            }
        }else{
            $(el).parent(2).addClass("has-error");
            $(el).parent(2).removeClass("has-success");
            $(el).next().html('O valor do contrato é inválido. Formato: R$ 0,00');
        }

  }

  $('.alsl[data-dismiss=modal]').click(function(){

    $('#modalTitle[data-name=alsl]').text('');
    $('#modalBody[data-name=alsl]').html('');
    $('#modalType[data-name=alsl]').children('img').attr('src','');
});
$(document).ready(function(){
    showLoader();
    setTimeout(hideLoader, 500);

});
