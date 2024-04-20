import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");

      // Set CORS headers to allow credentials
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      // Check if the request came from localhost or the deployed backend
      const base_url = req.headers.origin === 'http://localhost:5000' ? 'localhost' : 'https://medical-trial-wt.onrender.com';

      // Set the domain attribute of the cookie to match the request origin
      res.cookie('jwt', token, {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 7 days
        httpOnly: true,
        secure: true, // Set to true if served over HTTPS
        domain: base_url, // Set to the request origin
        path: '/' // Set to '/' to make the cookie accessible across the entire website
      });

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token.");
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin.");
  }
};

export { authenticate, authorizeAdmin };
