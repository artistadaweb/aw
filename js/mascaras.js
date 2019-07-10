//MASCARA P/ CPF CNPJ
$(".cpfcnpj").keydown(function(){
    maskCnpj($(this));
});
$(".cpfcnpj").ready(function(){
    maskCnpj($(this));
});
function maskCnpj(el){
    try {
    	$(el).unmask();
    } catch (e) {}

    var tamanho = $(el).val().length;

        $(el).val(maskCnpjStr($(el).val().replace(/[^\w\s]/gi, '')));

    
    // ajustando foco
    var elem = el;
    setTimeout(function(){
    	// mudo a posição do seletor
    	elem.selectionStart = elem.selectionEnd = 10000;
    }, 0);
    // reaplico o valor para mudar o foco
    var currentValue = $(el).val();
    $(el).val('');
    $(el).val(currentValue);
}
function maskCnpjStr(el){

    var $in = $("<input>", {id: "foo", "name": "inptest","type":"hidden","value":el});
    
    try {
        $in.unmask();
    } catch (e) {}
    
    var tamanho = $in.val().length;
	
    if(tamanho <= 11){
        $in.mask("999.999.999-99");
    } else if(tamanho > 11){
        $in.mask("99.999.999/9999-99");
    }
    
    // ajustando foco
    var elem = $in;
    setTimeout(function(){
    	// mudo a posição do seletor
    	elem.selectionStart = elem.selectionEnd = 10000;
    }, 0);
    // reaplico o valor para mudar o foco
    var currentValue = $($in).val();
    $($in).val('');
    $($in).val(currentValue);

    return $($in).val();
}
//MASCARA P/ CPF CNPJ
//MASCARA P/ CEP
$("#cep").keyup(function(){

    maskCep();

});
$("#cep").ready(function(){

    maskCep();

});

function maskCep(){
    var cep = $("#cep").val();
    if(cep.length > 0){
    $("#cep").mask("99999-999");

        $("#cep").parent(2).addClass("has-error");
        $("#cep").parent(2).removeClass("has-success");
        $("#cep").next().html('O formato do CEP é inválido (ex: 00000-000)');

        var tamanho = $("#cep").val().length;
        

            
            if(tamanho == 9){
                $("#cep").parent(2).addClass("has-success");
                $("#cep").parent(2).removeClass("has-error");
                $("#cep").next().html('');
            }
        

    }else{
        $("#cep").parent(2).removeClass("has-success");
        $("#cep").parent(2).removeClass("has-error");
        $("#cep").next().html('');
    }
}


  /* Máscaras ER */
function mascara(o,f,j){
    v_obj=o
    v_fun=f
    setTimeout(execmascara(o,j),1);
    
}
function execmascara(o,j){
    v_obj.value=v_fun(v_obj.value)
    isPhone(o,j);
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
function converteDataBrToUs(data){
    data = data.split('/');

    return (data[2]+'-'+data[1]+'-'+data[0]);
}

$('#data').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
$('#data2').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
$('.data2').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
$('.data').mask("99/99/9999", {placeholder: 'DD/MM/YYYY' });
//$('.data2').keydown(function(){alert('teste');});
