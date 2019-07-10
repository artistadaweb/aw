function callEmpresaSelect(){
    
    showLoader();  

                    //////console.log('sucesso'+response);
                    
                    

                            $.ajax({  
                                type: 'POST',  
                                url: 'controller/AjaxHome.php', 
                                data: { 
                                    'func': "loadDefault"
                                },
                                success: function(response) {
                                    //////console.log('sucesso'+response);
                                    
                                    var res = response.split('[:::]');
                
                                    if(res[0]==1){
                                        
                
                                        $("select[name=empr2]").empty();
                                        $("select[name=empr2]").append("<option></option>");
                                        $("select[name=empr2]").append(res[1]);
                                    
                                        //;
                                    }else{
                                    showAlert("Empresas",res[1],2);
                                    }
                                    
                                }
                            });
                            
                            $('#escolheEmpresa').modal({backdrop: 'static', keyboard: false});
       

    hideLoader();
}
function salvaSession(){

    $.ajax({  
        type: 'POST',  
        url: 'controller/AjaxHome.php', 
        data: { 
            'func': "changeSession",
            'sName': "empresa",
            'sVal': $('select[name=empr2]').find('option:checked').val()
        },
        success: function(response) {
                    //////console.log('sucesso'+response);
                    
                    var res = response.split('[:::]');
                    location.reload();

        }
    });
        

}
$(':checkbox').checkboxpicker();
//

$(function(){
    $("#money").maskMoney({symbol:'R$ ', 
   showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
    });
$(function(){
    $(".money").maskMoney({symbol:'R$ ', 
   showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
    });

    $(document).ready(function() {
        $('.data1').datetimepicker({
          format: 'DD/MM/YYYY',
          ignoreReadonly: true
        });
        $('.data2').datetimepicker({
          format: 'DD/MM/YYYY',
          ignoreReadonly: true
        });
        $('.dtinicio').datetimepicker({
          format: 'DD/MM/YYYY',
          ignoreReadonly: true
        });
        $('.data').datetimepicker({
          format: 'DD/MM/YYYY',
          ignoreReadonly: true
        });
      });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    function showLoader(){
        $('#loaderspin').css("display","block");
    }
    function hideLoader(){
        $('#loaderspin').css("display","none");
    }
    function showAlert(title, body, type,func='',val=''){
     
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


        $('#modalAlert').modal({backdrop: 'static', keyboard: false}); 
        $('#modalAlert').find('button[data-name=alsl]').click(function(){
            switch(func){
                case 'redirect':redir(val);break;
                default:src='';break;
            }
        }); 
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