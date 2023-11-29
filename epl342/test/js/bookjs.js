function bookin(event) {


    event.preventDefault();


    console.log("BOOK IN");


    const location = document.querySelector("#location").value;
    const checkin = document.querySelector("#check-in").value;
    const checkout = document.querySelector("#check-out").value;
    const adults = document.querySelector("#adults").value;
    const children = document.querySelector("#children").value;



    console.log(location);
    console.log(checkin);
    console.log(checkout);
    console.log(adults);
    console.log(children);

    //book_in_sql(location, checkin, checkout, adults, children);


}

function book_in_sql(location, checkin, checkout, adults, children) {


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

///////////////////////////////////////////////////////////////////////////////////
    xhr.open('GET', "afxe.php");
    xhr.setRequestHeader("Content-Type", "application/json");

    const data = {};

    data.location = location;
    data.checkin = checkin;
    data.checkout = checkout;
    data.adults = adults;
    data.children = children;



    xhr.send();

}





const bookbutt = document.querySelector("#bookbutt");

bookbutt.addEventListener("click", bookin);