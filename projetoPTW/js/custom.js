xhr = new XMLHttpRequest();
xhr.open("GET", 'assets/data.json', true);
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        window.alert("Error" + xhr.status + ":" + xhr.statusText); // e.g. 404: Not Found
    } else { // show the result
        json = JSON.parse(xhr.response);
        intro(json);
        sobre(json);
        competencias(json);
        resumo(json);
        formacao(json);
        experiencia(json);
        document.getElementById('email').innerHTML = json.contactos.email;
        document.getElementById('email').href = "mailto:" + json.contactos.email;
        document.getElementById('telef').innerHTML = json.contactos.telemovel;
    }
};

function idade(date) {
    var d = new Date,
        ano = d.getFullYear(),
        mes = d.getMonth(),
        dia = d.getDate();

    var idade = ano - date[2];
    if (mes < date[1] || mes == date[1] && dia < date[0]) {
        idade--;
    }
    return idade;
}

function intro(data) {
    document.getElementById("intro").innerHTML = "Sou o " +
        data.dadosPessoais.Nome + ", <br/>um " +
        data.dadosPessoais.Funções + ", de " +
        data.dadosPessoais.País + "."
}

function sobre(data) {
    div = document.getElementById("sobre");
    var h2 = document.createElement("h2");
    h2.classList.add("section-title");
    h2.classList.add("uppercase");
    h2.innerHTML = "O meu nome é " +
        data.dadosPessoais.Nome;
    div.appendChild(h2);

    for (var d in data.dadosPessoais) {
        if (d != "Nome" && d != "Funções") {
            var p = document.createElement("p");
            p.innerHTML = d + ": " + data.dadosPessoais[d];
            if (d == "Data de Nascimento") {
                p.innerHTML += " (" +
                    idade(data.dadosPessoais[d].split("-")) + " anos)"
            }
            div.appendChild(p);
        }
    }
}

function competencias(data) {
    div = document.getElementById("competencias");
    var anim = 2;
    for (var c in data.competencias) {
        var cont = document.createElement("div");
        cont.classList.add("skill-box");
        cont.classList.add("wow");
        cont.classList.add("fadeInRight");
        cont.setAttribute("data-wow-delay", "." + anim + "s");
        anim++;
        div.appendChild(cont);

        label = document.createElement("label");
        label.innerHTML = data.competencias[c].nome;
        cont.appendChild(label);

        var progress = document.createElement("div");
        progress.classList.add("progress");
        cont.appendChild(progress);

        var progBar = document.createElement("div");
        progBar.classList.add("progress-bar");
        progBar.setAttribute("role", "progress-bar");
        progBar.setAttribute("aria-valuemin", "0");
        progBar.setAttribute("aria-valuenow", '"' + data.competencias[c].percentagem + '"');
        progBar.setAttribute("aria-valuemax", "100");
        progBar.setAttribute("style", 'width:' + data.competencias[c].percentagem + '%;');
        progBar.innerHTML = data.competencias[c].percentagem + "%";
        progress.appendChild(progBar);

    }
}

function resumo(data) {
    var res = document.getElementById("resumo");
    var p = document.createElement("p");
    p.innerHTML = data.resumo;
    res.appendChild(p);
}

function formacao(data) {
    var form = document.getElementById("formacao");
    for (var f in data.formacaoAcademica) {
        var topico = document.createElement("article");
        topico.classList.add("timeline-entry");
        form.appendChild(topico);

        var div1 = document.createElement("div");
        div1.classList.add("timeline-entry-inner");
        topico.appendChild(div1);

        var div2 = document.createElement("div");
        div2.classList.add("timeline-icon");
        div2.classList.add("bg-success");
        div1.appendChild(div2);

        var i = document.createElement("i");
        i.classList.add("entypo-feather");
        div2.appendChild(i);

        var div3 = document.createElement("div");
        div3.classList.add("timeline-label");
        div1.appendChild(div3);

        var h3 = document.createElement('h3');
        h3.classList.add('resume-title');
        h3.innerHTML = data.formacaoAcademica[f].nome;
        div3.appendChild(h3);

        var p = document.createElement('p');
        p.innerHTML = "Instituição: " + data.formacaoAcademica[f].instituicao;
        div3.appendChild(p);

        var p = document.createElement('p');
        p.innerHTML = "Nível: " + data.formacaoAcademica[f].nivel;
        div3.appendChild(p);

        var p = document.createElement('p');
        p.innerHTML = "Data Início: " + data.formacaoAcademica[f].dataInicio;
        div3.appendChild(p);

        var p = document.createElement('p');
        p.innerHTML = "Data Fim: " + data.formacaoAcademica[f].dataFim;
        div3.appendChild(p);

    }
}

function experiencia(data) {
    var form = document.getElementById("experiencia");
    for (var f in data.experienciaProfissional) {
        var topico = document.createElement("article");
        topico.classList.add("timeline-entry");
        form.appendChild(topico);

        var div1 = document.createElement("div");
        div1.classList.add("timeline-entry-inner");
        topico.appendChild(div1);

        var div2 = document.createElement("div");
        div2.classList.add("timeline-icon");
        div2.classList.add("bg-success");
        div1.appendChild(div2);

        var i = document.createElement("i");
        i.classList.add("entypo-feather");
        div2.appendChild(i);

        var div3 = document.createElement("div");
        div3.classList.add("timeline-label");
        div1.appendChild(div3);

        var h3 = document.createElement('h3');
        h3.classList.add('resume-title');
        h3.innerHTML = data.experienciaProfissional[f].empresa;
        div3.appendChild(h3);

        var p = document.createElement('p');
        p.innerHTML = "Função: " + data.experienciaProfissional[f].funcao;
        div3.appendChild(p);

        var p = document.createElement('p');
        p.innerHTML = "Data Início: " + data.experienciaProfissional[f].dataInicio;
        div3.appendChild(p);

        var p = document.createElement('p');
        p.innerHTML = "Data Fim: " + data.experienciaProfissional[f].dataFim;
        div3.appendChild(p);

    }
}