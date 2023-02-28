const mongoose = require("mongoose");
const uri = process.env.URI;

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB\n"))
    .catch((err) => console.log("Error connecting to MongoDB\n", err));
}
