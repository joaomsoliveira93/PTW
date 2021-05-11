let tabuleiro = document.getElementsByClassName('tabuleiro')[0];
let jogador = 'bola';

document.getElementById('tamanho').addEventListener('change',function(){load(this)})

function testa(){
    t=0;
    //testa Linhas
    for(i=0;i<tamanho;i++){   
        if (t==tamanho){
            return true;      
        }else{ 
            t=0;
            for(j=0;j<tamanho;j++){            
                imagem = document.getElementById('img-'+i+','+j);           
                if(imagem.alt==jogador){
                    t++;
                }
            }
        }                
    }
    t=0;
    //testa Colunas
    for(i=0;i<tamanho;i++){   
        if (t==tamanho){
            return true;                   
        }else{ 
            t=0;
            for(j=0;j<tamanho;j++){            
                imagem = document.getElementById('img-'+j+','+i);           
                if(imagem.alt==jogador){
                    t++;
                }
            }
        }                
    }
    t=0;
    //testa Diagonais       
    for(i=0;i<tamanho;i++){                     
        imagem = document.getElementById('img-'+i+','+i);           
        if(imagem.alt==jogador){
            t++;
            if (t==tamanho){
               return true;         
            }
        } 
    }       
    t=0;
    for(i=0;i<tamanho;i++){                     
        imagem = document.getElementById('img-'+i+','+((tamanho-1)-i));         
        if(imagem.alt==jogador){
            t++;
            if (t==tamanho){
                return true;          
            }
        } 
    }           
}

function jogada(obj){
    imagem = document.getElementById('img-'+obj.id);
    if(imagem.src == ""){
        imagem.src='images/'+jogador+'.jpg';
        imagem.alt = jogador;
        if(testa()){
            alert('Jogador: ' + jogador + ' Venceu!');
            location.reload();            
        }else{
            if(jogador=='bola'){
                jogador = 'cruz';
                document.getElementById('jogador').innerHTML='Jogador: X'
            }else{
                jogador= 'bola';
                document.getElementById('jogador').innerHTML='Jogador: O'
            }     
        }
           
    }    
}

function load(obj){
    tamanho=obj.value;
    
    while (tabuleiro.firstChild) {
        tabuleiro.removeChild(tabuleiro.firstChild);
    } 
    
    for(i=0;i<tamanho;i++){
        linha = document.createElement('div');
        linha.className = 'linha';    
        
        for(j=0;j<tamanho;j++){
            quadrado = document.createElement('div');
            quadrado.className = 'quadrado';
            quadrado.addEventListener('click',function(){jogada(this)})
            quadrado.id = i+','+j
            img = document.createElement('img');
            img.id = 'img-'+i+','+j;
            quadrado.appendChild(img);
            linha.appendChild(quadrado);
        }      
        tabuleiro.appendChild(linha);
    }
}

load(document.getElementById('tamanho'));

