import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";


config(); // Load environment variables from .env file
mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB Connected');
  }).catch((err) => {
    console.error('MongoDB Connection Error:', err);
  });


export default async function handler(req, res) {
  if (req.method === 'POST') {
    
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}