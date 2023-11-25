const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");


require("./db/conn");
const Register = require("./models/register");
const { json } = require("express");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");



app.use(express.static(static_path));
app.set("view engine", "hbs");
//app.set("views", template_path);
//hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/register",(req, res) => {
  res.render("register")
})

//create a new user in our database
app.post("/register", async(req, res) => {
    try {
     
      console.log(req.body.firstname);
      res.send(req.body.firstname);
        
    } catch (error) {
      res.status(400).send(error);
    }
    
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
    })