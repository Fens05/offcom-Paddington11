// const { Router } = require("express")
// const router = require('express')
// const path =require
// const fs = require('fs');
// // const { formatWithOptions } = reqq1aZuire("util");



// // const ediNote =(updateNotesArray) => {
// //     fs.writeFile('.db/db.jsson', JSON.stringify(undatedNotesArray), (err))
// // }



// app.delete("/api/notes/:id", (req, res) => {
//     const deleteId = req.params.id;
//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//       if (err) throw err;
//       let notesArr = JSON.parse(data);
//       // removes the note with the given id property
//       for (let i = 0; i < notesArr.length; i++) {
//         if (notesArr[i].id === deleteId) {
//           notesArr.splice(i, 1);
//         }
//       }
//       editNote(notesArr);
//       console.log(`Note Deleted! Note ID: ${deleteId}`);
//       res.send(notesArr);
//     });
//   });