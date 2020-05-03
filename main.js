/* ---------------------------
   ----- Module Imports ------
   --------------------------- */
var express = require('express');
var sqlite3 = require('sqlite3').verbose();

/* ---------------------------
   ------ File Imports -------
   --------------------------- */
var config = require('./config').config;
var queries = require('./queryManager').queries;

/* ---------------------------
   -------- Constants --------
   --------------------------- */
const port = config.port;
const DB_LOCATION = config.db_location;

let app = express();
app.listen(port, () => {
    console.log('Express listening on port 1234');
});

/* DB  Object */
const db = new sqlite3.Database(DB_LOCATION, (err) => {
    if (err) {
        console.log(`(Opened): ${err}`);
    }
    console.log('Connection Established');
});

// Login Module
db.all(queries.USER_LIST, (err, rows) => {
    if (err) {
        console.log(`(USER_LIST): ${err}`);
    }
    console.log(rows);
});
// db.all(queries.DB_TABLES_LIST, [], (err, row) => {
//     if (err) {
//         console.log(`(TABLES_LIST): ${err}`);
//     }
//     console.log(row);
// });
db.close((err) => {
    if (err) {
        console.log(`(Closed): ${err}`);
    }
    console.log('Connection Closed');
});
// Data Request
// websocket


// Load testing script
// END