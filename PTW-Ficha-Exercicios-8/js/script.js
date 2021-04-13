let botoes = document.getElementsByClassName("tecla");
let entrada = document.getElementById("entrada");
let saida = document.getElementById("saida");
let num = prompt("Insira um valor entre 10 e 50");
let itens = [['apaga','C'],['igual','='],['soma','+'],['menos','-'],['vezes','X'],['divide','/']];

for(i=0;i<num;i++){
    var tecla = document.createElement('div');
    tecla.className = 'tecla';
    tecla.innerHTML = i;
    document.getElementsByClassName('teclado')[0].appendChild(tecla);
}

for(i=0;i<6;i++){
    var tecla = document.createElement('div');
    tecla.className = 'tecla';
    tecla.id = itens[i][0];
    tecla.innerHTML = itens[i][1];
    document.getElementsByClassName('teclado')[0].appendChjuhild(tecla);
}

let TrocaFundo = function(bt,cor,texto){
    bt.style.backgroundColor= cor;
    bt.style.color = texto
}

for(i=0;i<botoes.length;i++){
    botoes[i].onmouseover = function(){
        TrocaFundo(this,"yellow","black");
    }

    botoes[i].onmouseout = function(){
        TrocaFundo(this,"green","white");
    }

    botoes[i].onclick = function(){
        var texto = this.innerText;
        if(this.id == "apaga" ){
            entrada.innerHTML ="";
            saida.innerHTML = "";
        }else if(this.id == "igual"){
            try{
                if(isFinite(eval(entrada.innerText))){
                    saida.innerHTML = eval(entrada.innerText);
                }else{
                    alert("Não é possivel dividir por zero");
                }
                
            }catch(e){
                alert("Expressão errada!");
            }
        }else{
            entrada.innerHTML += texto; 
        }    
        
       
    }
}