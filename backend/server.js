const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const uri =
  "mongodb+srv://mtungwampilonhle:mtungwa2000@cluster0.yg941.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

/*
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
*/
// Routes
app.use("/api/blogs", require("../src/routes/blogRoutes")); // Placeholder route
app.use("/api/auth", require("../src/routes/authRoutes")); // Placeholder route

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
