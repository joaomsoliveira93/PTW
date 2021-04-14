const palavras = ['AJAX','CSS','DOM','HTML','JAVASCRIPT','JQUERY','JSON','PHP','PROGRAMACAO','TECNOLOGIAS','WEB'];
const random = Math.floor(Math.random() * palavras.length);
let tentativas =0;
let abc = document.getElementsByClassName('letra');
let palavra = palavras[random];
console.log(palavra);

for(i=0;i<palavra.length;i++){
    var l = document.createElement('div');
    l.className = 'tentativa';
    document.getElementsByClassName('tentativas')[0].appendChild(l);
}

while(tentativas <=7){
    for(i=0;i<abc.length;i++){
        abc[i].onclick = function(){
            verifica(this);
        }
    }
}

function verifica(obj) {
    letra=obj.innerText;
    letras = document.getElementsByClassName('tentativa');

    if(palavra.includes(letra)){
        for(i=0;i<letras.length;i++){
            if(letra==palavra.charAt(i)){
                letras[i].innerText=letra;
            }
        }
    }else{
        tentativas++;
        var errado = document.createElement('img');
        errado.className('incorreto');
        errado.src='img/incorrect.gif'
        this.appendChild(errado);

    }

}