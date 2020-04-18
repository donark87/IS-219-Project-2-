

(function() {



  axios({
       method: 'get',
       url: 'data.json'
   })
       .then(res => renderList(res))
       .catch(err => console.error(err));

   function renderList(results) {

       var tableBody = document.querySelector('#results-table tbody');

       tableBody.innerHTML = '';

       var tableRows = results.data.map(function (result, index) {
           return '<td> <p>' + result.fldAbbreviation + '</p></td><td><p>' +
               result.fldCountry + '</p></td><td><p>' + result.fldName +
               '</p></td><td><p>' + result.fldPopulation + '</p></td>' +
               '<td><p>' + result.fldLat + '</p></td>' +
               '<td><p>' + result.fldLong + '</p></td></tr>';
       });

       tableRows.forEach(function (row) {
           tableBody.innerHTML += row;
       });
   }


}

)();

