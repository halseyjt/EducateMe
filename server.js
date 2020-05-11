const mongoClient = require ('mongodb').mongoClient;
const express = require('express');
const app = express();
const port = 3000;
const cors = require ('cors');

mongoClient.connect('mongodb://localhost:3000:lessons', function (err, db){
    if (err) throw err

      db.collection('lessons').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})













// const mysql = require ('mysql');
// const mysqlConfig = require('./db/Config.js')
// const connection = mysql.createConnection(mysqlConfig);

// // connection.connect((err) => {
// //     if (err) {
// //         console.error(err)
// //     } else {
// //         console.log('Connection Success')
// //     }
// // });my


// app.use(cors());
// app.use(express.static('dist'));

// app.get('/lessons/')

// app.listen(port, () => console.log(`listening from port: ${port}`));