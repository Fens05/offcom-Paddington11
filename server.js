const fs = require('fs');
const path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "public/index.html"));
})

app.get("/notes", (req, res) =>{
  res.sendFile(path.join(__dirname, "public/notes.html"));
})
//reading file and sending to server...
app.get("/api/notes", (req, res) =>{
  //console.log('this works')

  
    let allNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"));
    allNotes = JSON.parse(allNotes);
    res.json(allNotes);
  
})

//worked on this with tutor...
app.post("/api/notes", (req, res) =>{
  //console.log('this works')

  
    let allNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"));
    allNotes = JSON.parse(allNotes);
    let newNote = req.body;
    allNotes.push(newNote);
    fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(allNotes));
    res.json(allNotes);
  
})


app.delete("/api/notes:id", (req, res) =>{
   let idNotes = fs.readFileSync(path.join(_dirname, "./db/db/json"));
    allNotes = JSON.parse(idNotes);
    // let idNotes = req.body;
    res.json(allNotes)
  //   allNotes.push(idNote);
  // //  console.log('this works')
})
  
//     let allNotes = fs.readFileSync(path.join(__dirname, "./db/db.json"));
//     allNotes = JSON.parse(allNotes);
//     let newNote = req.body;
//     allNotes.push(newNote);
//     fs.writeFileSync(path.join(__dirname, "./db/db.json"), JSON.stringify(allNotes));
//     res.json(allNotes);



app.listen(PORT, function() {
  console.log('Listening on http://localhost:' + PORT);
})