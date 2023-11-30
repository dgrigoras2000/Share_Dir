function generate_filter(event) {

    event.preventDefault();

    console.log("GENERATE FILTER");

    const timeperiod = document.querySelector("#time-period").value;
    const customdate = document.querySelector("#custom-date-fields").value;

    const accommodationtype = document.querySelector("#accommodation-type").value;
    const roomtype = document.querySelector("#room-type").value;
    const location = document.querySelector("#location").value;


    console.log(timeperiod);
    console.log(customdate);
    console.log(accommodationtype);
    console.log(roomtype);
    console.log(location);


    // generate_filter_sql(timeperiod,    accommodationtype,roomtype,location);


}

function generate_filter_sql(timeperiod,    accommodationtype,roomtype,location) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('POST', "generate_filter.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.timeperiod = timeperiod;
    data.accommodationtype = accommodationtype;
    data.roomtype = roomtype;
    data.location = location;



    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const filterbutt = document.querySelector("#filterbutt");
filterbutt.addEventListener("click", generate_filter);


function showResults(results){


    const table = document.querySelector('#showresults');
   
   

    table.innerHTML = '';

   
   
    for(let i=0; i < results.length; i++) {
        let row = document.createElement('tr');
        
        const object = results[i];
        const column1 = document.createElement('td');
        column1.textContent=object.id;
        row.appendChild(column1);
        
        const column2 = document.createElement('td');
        column2.textContent=object.firstname;
        row.appendChild(column2);
        
        const column3 = document.createElement('td');
        column3.textContent=object.lastname;
        row.appendChild(column3);
        
        const column4 = document.createElement('td');
        column4.textContent=object.department;
        row.appendChild(column4);
        
        const column5 = document.createElement('td');
        column5.textContent=object.dateOfBirth;
        row.appendChild(column5);
        

   
        table.appendChild(row);
   

   
   
    }
   
}