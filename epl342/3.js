function showResults(results){


//  // What to do when the request is successful
 const table = document.querySelector('#showResultsTable');


 // clear table
 table.innerHTML = '';

//  clearEmployees();


 console.log(results);

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
     
    //  const column6 = document.createElement('td');
    //  const buttonedit = document.createElement('button');
    //  buttonedit.classList.add('btn', 'btn-warning', 'btn-sm');
    //  buttonedit.textContent = 'Edit';
    //  buttonedit.setAttribute('onclick','loadEmployee('+ object.id +', true)');
    //  column6.appendChild(buttonedit);
    //  column6.appendChild(document.createTextNode(' '));
    //  const buttonremove = document.createElement('button');
    //  buttonremove.classList.add('btn', 'btn-danger', 'btn-sm');
    //  buttonremove.textContent = 'Remove';
    //  buttonremove.setAttribute('onclick','removeEmployee('+ object.id +')');
    //  column6.appendChild(buttonremove);
    //  row.appendChild(column6);

     table.appendChild(row);

     // add employee list to leaves section
    //  let option = document.createElement('option');
    //  option.textContent = object.firstname + ' ' + object.lastname + ' [' + object.dateOfBirth + ']';
    //  option.value = object.id;
     
    //  selector.appendChild(option);
 }




}