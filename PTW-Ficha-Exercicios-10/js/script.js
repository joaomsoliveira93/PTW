var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
let nome = document.getElementById('nome');
let data = document.getElementById('data');
let btAdd = document.getElementById('addTask')
let lista = document.getElementsByClassName('lista')[0];
let id = 0;
let editID = 0;

const d2 = new Datepicker(document.getElementById("data"), {
  first_date: new Date(yyyy, mm, dd),
  format: (d) => {
    return [
      d.getDate(),
      MONTHS_SHORT[d.getMonth()],
      d.getFullYear(),
    ].join("/");
  },
  first_day_of_week: "Sun",
  initial_date: new Date(yyyy, mm, dd),
});

function remove(obj){
  lista.removeChild(obj);
}

function mudaCor(obj,cor){
  obj.style.backgroundColor = cor;
}

function edit(obj){
  if (btAdd.innerHTML="V"){
    btAdd.innerHTML = "V";
    txt = obj.innerHTML;
    editID=obj.id;
    txt = txt.split(' (')
    txt[1] = txt[1].split(')')[0];
    nome.value=txt[0];
    data.value=txt[1];
  }
  
}

function add(){
  if(nome.value == ''){
      alert("Deve inserir o nome da Tarefa");
  }else if(btAdd.innerHTML == "+"){
    linha = document.createElement('div');
    linha.className = 'linha';
    id++;
    n = document.createElement('span');
    n.className = 'colText';
    n.innerHTML = nome.value + ' (' + data.value + ')';
    n.id = id
    bt = document.createElement('div');
    bt.className = 'button red';
    bt.innerHTML = '-';
    bt.addEventListener('click',function(){remove(this.parentElement)});

    linha.appendChild(n);
    linha.appendChild(bt);
    linha.addEventListener("mouseenter",function() {mudaCor(this,"yellow")});
    linha.addEventListener("mouseleave",function() {mudaCor(this,"white")});
    n.addEventListener("click",function() {edit(this)});
    n.style.cursor = "pointer";
    
    lista.appendChild(linha);
    nome.value="";  
  }else{
      document.getElementById(editID).innerHTML  = nome.value + ' (' + data.value + ')';
      btAdd.innerHTML = "+";
      nome.value="";
      editID=0;
  }
}

btAdd.addEventListener("click",function() {add()});