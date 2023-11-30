function generate_revenue_report(event) {

    event.preventDefault();

    console.log("generate_revenue_report FILTER");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            showRevenueResults(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('GET', "revenue_report.php");
    xhr.send();
}

function showRevenueResults(results) {

    const table = document.querySelector('#showresults');
    table.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
        let row = document.createElement('tr');

        const object = results[i];

        const column1 = document.createElement('td');
        column1.textContent = object.id;
        row.appendChild(column1);

        table.appendChild(row);

    }

}

const revenuebutt = document.querySelector("#revenuebutt");
revenuebutt.addEventListener("click", generate_revenue_report);

/*--------------------------------------------------------------------------------------------------------------------------------*/

function generate_booking_report(event) {

    event.preventDefault();

    console.log("generate_booking_report FILTER");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            showBookingResults(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('GET', "booking_stats_report.php");
    xhr.send();
}

function showBookingResults(results) {

    const table = document.querySelector('#showresults');
    table.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
        let row = document.createElement('tr');

        const object = results[i];

        const column1 = document.createElement('td');
        column1.textContent = object.id;
        row.appendChild(column1);

        table.appendChild(row);

    }

}

const bookingbutt = document.querySelector("#bookingbutt");
bookingbutt.addEventListener("click", generate_booking_report);

/*--------------------------------------------------------------------------------------------------------------------------------*/

function generate_occupancy_report(event) {

    event.preventDefault();

    console.log("generate_booking_report FILTER");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            showOccupancyResults(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('GET', "report_occupancy.php");
    xhr.send();
}

function showOccupancyResults(results) {

    const table = document.querySelector('#showresults');
    table.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
        let row = document.createElement('tr');

        const object = results[i];

        const column1 = document.createElement('td');
        column1.textContent = object.id;
        row.appendChild(column1);

        table.appendChild(row);

    }

}

const occupancybutt = document.querySelector("#occupancybutt");
occupancybutt.addEventListener("click", generate_occupancy_report);

/*--------------------------------------------------------------------------------------------------------------------------------*/

function generate_ratings_report(event) {

    event.preventDefault();

    console.log("generate_booking_report FILTER");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            showRatingsResults(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('GET', "report_ratings_reviews.php");
    xhr.send();
}

function showRatingsResults(results) {

    const table = document.querySelector('#showresults');
    table.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
        let row = document.createElement('tr');

        const object = results[i];

        const column1 = document.createElement('td');
        column1.textContent = object.id;
        row.appendChild(column1);

        table.appendChild(row);

    }

}

const ratingsrevbutt = document.querySelector("#ratingsrevbutt");
ratingsrevbutt.addEventListener("click", generate_ratings_report);

/*--------------------------------------------------------------------------------------------------------------------------------*/

function generate_roomavail_report(event) {

    event.preventDefault();

    console.log("generate_booking_report FILTER");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            showRoomAvailResults(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('GET', "report_room_availability.php");
    xhr.send();
}

function showRoomAvailResults(results) {

    const table = document.querySelector('#showresults');
    table.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
        let row = document.createElement('tr');

        const object = results[i];

        const column1 = document.createElement('td');
        column1.textContent = object.id;
        row.appendChild(column1);

        table.appendChild(row);

    }

}

const roomavailbutt = document.querySelector("#roomavailbutt");
roomavailbutt.addEventListener("click", generate_roomavail_report);

/*--------------------------------------------------------------------------------------------------------------------------------*/

function generate_performance_report(event) {

    event.preventDefault();

    console.log("generate_booking_report FILTER");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            showPerformanceResults(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('GET', "report_performance.php");
    xhr.send();
}

function showPerformanceResults(results) {

    const table = document.querySelector('#showresults');
    table.innerHTML = '';

    for (let i = 0; i < results.length; i++) {
        let row = document.createElement('tr');

        const object = results[i];

        const column1 = document.createElement('td');
        column1.textContent = object.id;
        row.appendChild(column1);

        table.appendChild(row);

    }

}

const performancebutt = document.querySelector("#performancebutt");
performancebutt.addEventListener("click", generate_performance_report);

/*--------------------------------------------------------------------------------------------------------------------------------*/