function ajax() {
    console.log(data.value);
    dt = data.value.split('-');

    xhr = new XMLHttpRequest();
    xhr.open("GET", ".. / data, json ", true);
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
            window.alert("Error" + xhr.status + ":" + xhr.statusText); // e.g. 404: Not Found
        } else { // show the result
            data = JSON.parse(xhr.response);
            console.log(data.url);
            document.getElementById('img').src = data.url;
        }
    };
}