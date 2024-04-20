
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods:['GET','PUT','POST','DELETE'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.get("/api/config/paypal", (req, res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.get("/",(req,res) => {
  res.set('Access-Control-Allow-Credentials', 'true');
  res.send("hello to the backend ")
})

// Initialize Firebase Storage
const firebaseApp = initializeApp({
  apiKey: "AIzaSyCLRiFyQ-src7MaqhsqVD3BZFDcR6YwfYI",
  authDomain: "medical-system-e99b0.firebaseapp.com",
  projectId: "medical-system-e99b0",
  storageBucket: "medical-system-e99b0.appspot.com",
  messagingSenderId: "432345898200",
  appId: "1:432345898200:web:88fa065ede91ff93118bad",
});

const storage = getStorage(firebaseApp);

// app.use("/uploads", async (req, res, next) => {
//   try {
//     const filename = req.url.substring(1); // Remove leading '/'
//     const fileRef = ref(storage, filename);
//     const image = await getDownloadURL(fileRef);
//     res.redirect(image);
//   } catch (error) {
//     console.error("Error serving file:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// app.use("/api", async (req, res, next) => {
//   try {
//     // Forward the request to the Render server
//     const response = await fetch(`https://medical-trial-wt.onrender.com`);
//     const data = await response.json();
//     res.send(data);
//   } catch (error) {
//     console.error("Error forwarding request:", error);
//     res.status(500).send("Internal Server Error");
//   }
// })

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
