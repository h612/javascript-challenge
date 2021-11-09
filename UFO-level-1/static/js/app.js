// from data.js
var tableData = data;
var t=d3.select("#ufo-table")
var row=t.append("tr")
tableData.forEach(function(d) {
  console.log(d);
  var row = t.append("tr");

    Object.entries(d).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
          });
        });
