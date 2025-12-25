// Vercel Serverless Function wrapper for Express backend
// This file allows your Express app to run as a serverless function on Vercel

import app from '../backend/server.js';

// Vercel serverless functions expect a default export that handles (req, res)
// Since Express app already handles this, we can export it directly
export default app;

