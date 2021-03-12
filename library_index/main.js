console.log("Hello, Index!");

var Airtable = require("airtable");
console.log(Airtable);


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3tVcwkhimDkISL'}).base('appDDM4tkHrC4cB8X');

base('readings').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('reading_name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
OUTPUT
Retrieved Seeing, Pilgrim at Tinker Creek
Retrieved Garden of Forking Paths
Retrieved Design with the Other 90%: Cities
FETCH FIRST PAGE
// If you only want the first page of records, you can
// use `firstPage` instead of `eachPage`.
base('readings').select({
    view: 'Grid view'
}).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
        console.log('Retrieved', record.get('reading_name'));
    });
});
