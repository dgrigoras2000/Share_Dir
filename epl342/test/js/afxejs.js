function accomontation_search(event) {


    event.preventDefault();


    console.log("ACCOMODATION INSERT");


    const destination = document.querySelector("#destination").value;

    console.log(destination);

    const checkin = document.querySelector("#checkin").value;
    const checkout = document.querySelector("#checkout").value;
    const guests = document.querySelector("#guests").value;
    const type = document.querySelector("#type").value;



    console.log(destination);
    console.log(checkin);
    console.log(checkout);
    console.log(guests);
    console.log(type);




    accomontation_search_sql(destination, checkin, checkout, guests, type);



}


function accomontation_search_sql(destination, checkin, checkout, guests, type) {


    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            console.log(response[0]);
            showResults(response);
        } else {

            // If false then...
            console.log('error', xhr);
            window.alert("Error");

        }

    };


    xhr.open('GET', "afxe.php");
    xhr.setRequestHeader("Content-Type", "application/json");

    const data = {};

    data.destination = destination;
    data.checkin = checkin;
    data.checkout = checkout;
    data.guests = guests;
    data.type = type;


    // data.time=now;

    xhr.send();

}


const searchbutt = document.querySelector("#searchbutt");

searchbutt.addEventListener("click", accomontation_search);




function showResults(response) {


    console.log("------------------------------" + response[0]["ACCOMMODATION_ID"]);


    const result = document.createElement("p");

    result.textContent = response[0]["ACCOMMODATION_ID"] + response[0]["NAME"];


    const resultdiv = document.querySelector("#displayTable");

    resultdiv.appendChild(result);





}


