require("dotenv").config();
const express = require("express");
const app = express();
const botRoutes = require('./routes/bot.routes');
const cors = require('cors');


// Middleware
app.use(express.json());
app.use(cors()); // Optional: you can restrict in production


// // Serve frontend in production
// if (process.env.STATUS === "production") {
//   app.use(express.static(path.join(__dirname, "../Frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
//   });
// }

app.use('/api/bot', botRoutes);

const path = require("path");
console.log(path.join(__dirname,"/dist"))
app.use(express.static(path.join(__dirname,"/dist")))

app.get(/.*/,(req,res)=>{
  res.sendFile(path.join(__dirname,"/dist/index.html"))
})

// Start server
const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log("Chatbot is ready to use!!");
    });
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;
