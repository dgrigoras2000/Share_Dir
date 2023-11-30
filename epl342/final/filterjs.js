function generate_filter(event) {

    event.preventDefault();

    console.log("GENERATE FILTER");

    const timeperiod = document.querySelector("#time-period").value;
    const startdate = document.querySelector("#start-date").value;
    const enddate = document.querySelector("#end-date").value;
    const accommodationtype = document.querySelector("#accommodation-type").value;
    const roomtype = document.querySelector("#room-type").value;
    const location = document.querySelector("#location").value;


    console.log(timeperiod);
    console.log(startdate);
    console.log(enddate);
    console.log(accommodationtype);
    console.log(roomtype);
    console.log(location);


    // generate_filter_sql(timeperiod,startdate,enddate,accommodationtype,roomtype,location);


}

function generate_filter_sql(timeperiod,startdate,enddate,accommodationtype,roomtype,location) {

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
////////////////////////////////////////////////////////////////////////////////////
    xhr.open('POST', "generate_filter.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    if(timeperiod==="custom"){
        data.startdate = startdate;
        data.enddate = enddate;
        console.log("custom");
    }

    data.timeperiod = timeperiod;
    data.accommodationtype = accommodationtype;
    data.roomtype = roomtype;
    data.location = location;



    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const filterbutt = document.querySelector("#filterbutt");
filterbutt.addEventListener("click", generate_filter);