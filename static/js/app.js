// from data.js
var tableData = data;
var t=d3.select("tbody")
var row=t.append("tr")
tableData.forEach(function(d) {
  // console.log(d);
  var row = t.append("tr");

    Object.entries(d).forEach(function([key, value]) {
            // console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
          });
        });

var btn=d3.select("#filter-btn");
var search=d3.select("#datetime")
function filterFunction()
{
  console.log("filter button clicked")
  var newDate = search.property("value");
  console.log(newDate);
  var newtableData=tableData.filter(t=>t.datetime==newDate);
  let table_body = d3.select("tbody");
  table_body.html("");
  newtableData.forEach(function(d1) {
    console.log(d1);
    
    var row = table_body.append("tr");
  
      Object.entries(d1).forEach(function([key, value]) {
              // console.log(key, value);
              var cell = row.append("td");
              cell.text(value);
            });
          });
}

btn.on("click",filterFunction);