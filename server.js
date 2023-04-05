const mongoose = require("mongoose");
const app = require("./app");


mongoose
  .connect("mongodb+srv://nskonnalath:KoQeUJ2XshSKnrNU@cluster0.mwfs4ng.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("connected to MOngodb"))
  .catch((err) => console.error(err));

const port = process.env.PORT || 5001; 

// app.get("/",console.log("ruuning"))

app.listen(port, () => {
  console.log(`App running on port ${port}`);
}); 