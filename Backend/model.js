const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://hmovies957:abin@cluster0.g7tgkvq.mongodb.net/gptc_mern?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connected")
   
})
.catch(err=>console.log(err))


let mongoschema = mongoose.Schema


const log = new mongoschema({
  username: String,
  email: String,
  phonenumber: String,
  password: String,
  location: String,
  address: String,
})


var login = mongoose.model("login",log)
module.exports = login
