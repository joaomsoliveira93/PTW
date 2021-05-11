let xhr = new XMLHttpRequest();
xhr.open("GET", 'http://localhost/ptw/testes/teste.json', true);
xhr.send();

xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        window.alert("Error"+xhr.status+":"+xhr.statusText); // e.g. 404: Not Found
    } else { // show the result
        document.getElementById('json').innerText=xhr.response;
        window.alert(xhr.response); // get the response from xhr.response
    }
};