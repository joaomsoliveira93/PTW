const palavras = ['AJAX','CSS','DOM','HTML','JAVASCRIPT','JQUERY','JSON','PHP','PROGRAMACAO','TECNOLOGIAS','WEB'];
const random = Math.floor(Math.random() * palavras.length);
let tentativas = 0;
let certas =0;
let abc = document.getElementsByClassName('letra');
let palavra = palavras[random];
console.log(palavra);

for(i=0;i<palavra.length;i++){
    var l = document.createElement('div');
    l.className = 'tentativa';
    document.getElementsByClassName('tentativas')[0].appendChild(l);
}

for(i=0;i<abc.length;i++){
    abc[i].onclick = function(){
        verifica(this);
    }
}


function verifica(obj) {
    letra=obj.innerText;
    letras = document.getElementsByClassName('tentativa');

   
    if(palavra.includes(letra)){
        for(i=0;i<letras.length;i++){
            if(letra==palavra.charAt(i)){
                letras[i].innerText=letra;
                obj.style.fontWeight = "bolder";
                obj.style.color = 'black';
                certas++;
            }
        }
        
        if(certas == palavra.length){
            alert('Você venceu!');
            location.reload();
        }
    }else{
        if(obj.getElementsByClassName('incorreto').length==0){
            tentativas++;
            console.log(tentativas);
            errado = document.createElement('img');
            errado.className='incorreto';
            errado.src='img/incorrect.gif'
            obj.appendChild(errado); 

            if(tentativas==7){
                document.getElementById("mainImage").style.opacity="100%";
                alert("Você perdeu! Palavra: "+palavra);
                location.reload();
            }else{
                forca = document.createElement('img');
                forca.className = 'progresso';
                forca.src = 'img/wrong-' + tentativas +'.gif'
                document.getElementsByClassName('imagens')[0].appendChild(forca);
                }
        }
        
    }
     

}