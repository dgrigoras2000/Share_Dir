/////////////////////////////////////////////////////////insert acc////////////////////////////////////////////////////////
function accomontation_insert(event) {

    event.preventDefault();

    console.log("ACCOMODATION INSERT");

    const accommodationId = document.querySelector("#accommodationId").value;
    const accommodationName = document.querySelector("#accommodationName").value;
    const address = document.querySelector("#address").value;
    const geographicCoordinates = document.querySelector("#geographicCoordinates").value;
    const type = document.querySelector("#type").value;
    const discountPolicy = document.querySelector("#discountPolicy").value;
    const animalHospitalityPolicy = document.querySelector("#animalHospitalityPolicy").value;

    console.log(accommodationId);
    console.log(accommodationName);
    console.log(address);
    console.log(geographicCoordinates);
    console.log(type);
    console.log(discountPolicy);
    console.log(animalHospitalityPolicy);

    // insert_acc_sql(accommodationId,accommodationName,address,geographicCoordinates,type,discountPolicy,animalHospitalityPolicy);


}

function insert_acc_sql(accommodationId,accommodationName,address,geographicCoordinates,type,discountPolicy,animalHospitalityPolicy) {

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

    xhr.open('POST', "insert_acc.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.accommodationId = accommodationId;
    data.accommodationName = accommodationName;
    data.address = address;
    data.geographicCoordinates = geographicCoordinates;
    data.type = type;
    data.discountPolicy = discountPolicy;
    data.animalHospitalityPolicy = animalHospitalityPolicy;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const accin = document.querySelector("#accinbutt");
accin.addEventListener("click", accomontation_insert);


/////////////////////////////////////////////////////////update acc////////////////////////////////////////////////////////
function accomontation_update(event) {

    event.preventDefault();

    console.log("ACCOMODATION UPDATE");

    const accommodationId = document.querySelector("#accommodationId").value;
    const accommodationName = document.querySelector("#accommodationName").value;
    const address = document.querySelector("#address").value;
    const geographicCoordinates = document.querySelector("#geographicCoordinates").value;
    const type = document.querySelector("#type").value;
    const discountPolicy = document.querySelector("#discountPolicy").value;
    const animalHospitalityPolicy = document.querySelector("#animalHospitalityPolicy").value;

    console.log(accommodationId);
    console.log(accommodationName);
    console.log(address);
    console.log(geographicCoordinates);
    console.log(type);
    console.log(discountPolicy);
    console.log(animalHospitalityPolicy);

    // update_acc_sql(accommodationId,accommodationName,address,geographicCoordinates,type,discountPolicy,animalHospitalityPolicy)


}

function update_acc_sql(accommodationId,accommodationName,address,geographicCoordinates,type,discountPolicy,animalHospitalityPolicy) {

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

    xhr.open('POST', "update_acc.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.accommodationId = accommodationId;
    data.accommodationName = accommodationName;
    data.address = address;
    data.geographicCoordinates = geographicCoordinates;
    data.type = type;
    data.discountPolicy = discountPolicy;
    data.animalHospitalityPolicy = animalHospitalityPolicy;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const accup = document.querySelector("#accupbutt");
accup.addEventListener("click", accomontation_update);


/////////////////////////////////////////////////////////insert room////////////////////////////////////////////////////////
function room_insert(event) {

    event.preventDefault();

    console.log("ROOM INSERT");

    const code = document.querySelector("#code").value;
    const name = document.querySelector("#name").value;
    const maxVisitors = document.querySelector("#maxVisitors").value;


    console.log(code);
    console.log(name);
    console.log(maxVisitors);


    // insert_room_sql(code,name,maxVisitors);


}

function insert_room_sql(code,name,maxVisitors) {

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

    xhr.open('POST', "insert_room.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.code = code;
    data.name = name;
    data.maxVisitors = maxVisitors;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const roomin = document.querySelector("#roominbutt");
roomin.addEventListener("click", room_insert);

/////////////////////////////////////////////////////////update room////////////////////////////////////////////////////////
function room_update(event) {

    event.preventDefault();

    console.log("ROOM UPDATE");

    const code = document.querySelector("#code").value;
    const name = document.querySelector("#name").value;
    const maxVisitors = document.querySelector("#maxVisitors").value;


    console.log(code);
    console.log(name);
    console.log(maxVisitors);


    // update_room_sql(code,name,maxVisitors);


}

function update_room_sql(code,name,maxVisitors) {

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

    xhr.open('POST', "update_room.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.code = code;
    data.name = name;
    data.maxVisitors = maxVisitors;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const roomup = document.querySelector("#roomupbutt");
roomup.addEventListener("click", room_update);


/////////////////////////////////////////////////////////insert product////////////////////////////////////////////////////////
function product_insert(event) {

    event.preventDefault();

    console.log("PRODUCT INSERT");

    const productCode = document.querySelector("#productCode").value;
    const size = document.querySelector("#size").value;
    const numberOfRooms = document.querySelector("#numberOfRooms").value;
    const price = document.querySelector("#price").value;


    console.log(productCode);
    console.log(size);
    console.log(numberOfRooms);
    console.log(price);


    // insert_product_sql(productCode,size,numberOfRooms,price);


}

function insert_product_sql(productCode,size,numberOfRooms,price){

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status >= 200 && xhr.status < 300) {
            // If true then...
            const response = xhr.responseText;
            console.log(response);

        } else {
            // If false then...
            console.log('error', xhr);
            window.alert("Error");
        }
    };

    xhr.open('POST', "insert_product.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.productCode = productCode;
    data.size = size;
    data.numberOfRooms = numberOfRooms;
    data.price = price;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const productin = document.querySelector("#productinbutt");
productin.addEventListener("click", product_insert);


/////////////////////////////////////////////////////////update product////////////////////////////////////////////////////////
function product_update(event) {

    event.preventDefault();

    console.log("PRODUCT UPDATE");

    const productCode = document.querySelector("#productCode").value;
    const size = document.querySelector("#size").value;
    const numberOfRooms = document.querySelector("#numberOfRooms").value;
    const price = document.querySelector("#price").value;


    console.log(productCode);
    console.log(size);
    console.log(numberOfRooms);
    console.log(price);


    // update_product_sql(productCode,size,numberOfRooms,price);


}

function update_product_sql(productCode,size,numberOfRooms,price){

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

    xhr.open('POST', "update_product.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.productCode = productCode;
    data.size = size;
    data.numberOfRooms = numberOfRooms;
    data.price = price;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const productup = document.querySelector("#productupbutt");
productup.addEventListener("click", product_update);


/////////////////////////////////////////////////////////insert stock////////////////////////////////////////////////////////
function stock_insert(event) {

    event.preventDefault();

    console.log("STOCK INSERT");

    const stockID = document.querySelector("#stockID").value;
    const checkInDate = document.querySelector("#checkInDate").value;
    const checkOutDate = document.querySelector("#checkOutDate").value;
    const numberOfRoomsStock = document.querySelector("#numberOfRoomsStock").value;


    console.log(stockID);
    console.log(checkInDate);
    console.log(checkOutDate);
    console.log(numberOfRoomsStock);


    // insert_stock_sql(stockID,checkInDate,checkOutDate,numberOfRoomsStock);


}

function insert_stock_sql(stockID,checkInDate,checkOutDate,numberOfRoomsStock){

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

    xhr.open('POST', "insert_stock.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.stockID = stockID;
    data.checkInDate = checkInDate;
    data.checkOutDate = checkOutDate;
    data.numberOfRoomsStock = numberOfRoomsStock;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const stockin = document.querySelector("#stockinbutt");
stockin.addEventListener("click", stock_insert);


/////////////////////////////////////////////////////////update stock////////////////////////////////////////////////////////
function stock_update(event) {

    event.preventDefault();

    console.log("STOCK UPDATE");

    const stockID = document.querySelector("#stockID").value;
    const checkInDate = document.querySelector("#checkInDate").value;
    const checkOutDate = document.querySelector("#checkOutDate").value;
    const numberOfRoomsStock = document.querySelector("#numberOfRoomsStock").value;


    console.log(stockID);
    console.log(checkInDate);
    console.log(checkOutDate);
    console.log(numberOfRoomsStock);


    // update_stock_sql(stockID,checkInDate,checkOutDate,numberOfRoomsStock);


}

function update_stock_sql(stockID,checkInDate,checkOutDate,numberOfRoomsStock){

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

    xhr.open('POST', "update_stock.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const data = {};

    data.stockID = stockID;
    data.checkInDate = checkInDate;
    data.checkOutDate = checkOutDate;
    data.numberOfRoomsStock = numberOfRoomsStock;


    // data.time=now;
    xhr.send(JSON.stringify(data));
}

const stockup = document.querySelector("#stockupbutt");
stockup.addEventListener("click", stock_update);