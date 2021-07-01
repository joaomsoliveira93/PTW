var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() ).padStart(2, '0');
var yyyy = today.getFullYear();
let data = document.getElementById('data');
let bt = document.getElementById('addTask');

d2 = new Datepicker(data, {  
  format: (d) => {
    return [
      d.getDate(),
      MONTHS_SHORT[d.getMonth()],
      d.getFullYear(),
    ].join("-");
  },
  first_day_of_week: "Sun",
  initial_date: new Date(yyyy, mm, dd),
});

function ajax(){
  console.log(data.value);
  dt = data.value.split('-');

  xhr = new XMLHttpRequest();    
  xhr.open("GET", 'https://api.nasa.gov/planetary/apod?date='+dt[2]+'-'+dt[1]+'-'+dt[0]+'&api_key=DEMO_KEY', true);
  xhr.send();

  xhr.onload = function() {
    if (xhr.status != 200) { // analyze HTTP status of the response
        window.alert("Error"+xhr.status+":"+xhr.statusText); // e.g. 404: Not Found
    } else { // show the result
        data = JSON.parse(xhr.response);
        console.log(data.url);
        document.getElementById('img').src = data.url;
    }
  };
}

