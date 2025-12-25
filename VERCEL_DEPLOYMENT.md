# Vercel Deployment Guide

## Understanding the NOT_FOUND Error

The `NOT_FOUND` error on Vercel occurs when Vercel cannot locate the requested resource. In your case, this happened because:

1. **Monorepo Structure**: Vercel didn't know how to handle your separate `frontend/` and `backend/` directories
2. **Missing Configuration**: No `vercel.json` file to tell Vercel how to build and route requests
3. **Backend Not Configured**: Your Express backend wasn't set up as serverless functions

## Solution Overview

We've implemented a solution that allows your Express backend to run as Vercel serverless functions while keeping your frontend as a static site.

## Deployment Steps

### 1. Environment Variables

In your Vercel project settings, add these environment variables:

```
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=https://your-vercel-app.vercel.app
NODE_ENV=production
JWT_SECRET=your_jwt_secret
```

### 2. Install Dependencies

Make sure all dependencies are installed. Vercel will automatically run `npm install` in the root directory.

### 3. Deploy

Push your code to GitHub and connect it to Vercel, or use the Vercel CLI:

```bash
vercel
```

## Alternative: Separate Backend Deployment (Recommended for Production)

For better performance and easier debugging, consider deploying your backend separately:

### Option A: Deploy Backend to Railway/Render

1. Deploy `backend/` to Railway or Render
2. Get your backend URL (e.g., `https://your-backend.railway.app`)
3. Update `frontend/src/config/api.js` to use the backend URL
4. Set `VITE_API_URL` environment variable in Vercel to your backend URL

### Option B: Use Vercel Serverless Functions (Current Implementation)

The current setup converts your Express app to serverless functions. This works but has limitations:
- Cold starts can cause delays
- MongoDB connections need careful handling
- More complex debugging

## Troubleshooting

### If you still get NOT_FOUND errors:

1. **Check Build Logs**: Look at Vercel deployment logs for build errors
2. **Verify Routes**: Ensure `vercel.json` routes match your API structure
3. **Check Environment Variables**: All required env vars must be set in Vercel dashboard
4. **Verify File Structure**: Ensure `api/index.js` exists and correctly imports your server

### Common Issues:

- **MongoDB Connection Errors**: Ensure `MONGO_URI` is set correctly
- **CORS Errors**: Update `FRONTEND_URL` in backend to match your Vercel domain
- **Module Import Errors**: Ensure all imports use `.js` extension (ES modules)

