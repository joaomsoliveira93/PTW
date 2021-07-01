document.getElementById('pesquisa').addEventListener('click',function(){
    nome = $('#nome').val();
    $.ajax({
        url: 'pesquisa.php',
        type: 'post',
        data: {"nome": nome},
        dataType: 'json',
        success: function(data) {
            div = document.getElementById('lista');
            $('#lista').empty();   

            if(data.erro != "none"){
                alert(data.erro);
            }else if(data.contactos.length==0){
                alert('Sem Registos');
            }else{
                $.each(data.contactos,function(i,item){
                    p = document.createElement('p');
                    p.innerHTML = (i+1) + " - " + item.nome;
                    div.appendChild(p);
                });
            }          
        },
        error: function(xhr, status, error) {
            alert('Algo correu mal: \n' + error);
        }
    });

   

});