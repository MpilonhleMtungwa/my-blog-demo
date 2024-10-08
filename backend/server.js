/*
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
*/
/*
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const uri = process.env.MONGO_URI;
const { MongoClient, ServerApiVersion } = require("mongodb");

// Load environment variables from .env file
dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. Successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
 

// MongoDB connection
*/
/*
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" }); // Adjust path if needed

const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors"); // Import CORS

const authRoutes = require("./routes/authRoutes");

const uri = process.env.MONGO_URI; // Use the env variable

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Enable CORS for all routes
app.use("/api/auth", authRoutes);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. Successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

// Routes

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const CommentsRoutes = require("./routes/CommentsRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "https://my-blog-demo.onrender.com" }));
/*
app.use(
  cors({
    origin: "http://localhost:3000", // or your frontend domain
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
*/
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Use blog routes
app.use("/api/blogs", blogRoutes);

//use comments
app.use("/api/comments", CommentsRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
