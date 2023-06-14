const express = require("express");
import axios from "axios";


const app = express();

app.get("/", async (req, res) => {
  async function fetchDataAwait() {
    try {
      const response = await axios.get(
        "https://www.boredapi.com/api/activity?participants=5"
      );
      console.log(response.data);
    } catch (error) {
      
      console.log("Es gab einen Fehler!", error);
   
    } finally {
      
      console.log("Anfrage abgeschlossen!");
      
    }
  }

  fetchDataAwait();

  res.send("<h1>Was tun heute?</h1>");
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});


//lehrer lösung
// import express from "express";
// import axios from "axios";

// const PARTICIPANTS = 5;
// const PORT = 3001;

// const app = express();


// // ohne BONUS 
// app.get("/", async (req, res) =>{

//     try {
//         console.log("-----TRY-----")
//         const axiosResponse = await axios.get(
//             `https://www.boredapi.com/api/activity?participants=${PARTICIPANTS}`
//         );
        
//         console.log("axiosResponse.data:", axiosResponse.data);
//         const activity = axiosResponse.data.activity;

//         const htmlString = `<h1>Was tun heute?</h1>
//         <p> Wie wäre es mit folgendem: ${activity} </p>`

//         res.send(htmlString)
        
        
//     } catch (error) {
//         console.log("-----CATCH-----");
//         console.log("Fehler aufgetreten:", error.message)

//         // ganz einfaches Error HAndling
//         console.error("Da ist was schiefgelaufen (error.message):", error.message);
//         res.send("Da ist was schiefgelaufen (error.message):", error.message);
//         return;
        
//     }
// })
