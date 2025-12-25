// Quick script to test MongoDB connection
// Run: node test-db-connection.js

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const testConnection = async () => {
  console.log("🔍 Testing MongoDB connection...");
  console.log("📍 Connection String:", process.env.MONGO_URI?.replace(/\/\/.*@/, "//***:***@") || "NOT SET");
  
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected Successfully!");
    console.log("📊 Database:", mongoose.connection.db.databaseName);
    console.log("🌐 Host:", mongoose.connection.host);
    
    // Test a simple operation
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("📁 Collections:", collections.length > 0 ? collections.map(c => c.name).join(", ") : "None (database is empty)");
    
    await mongoose.disconnect();
    console.log("✅ Connection test completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error("Error:", error.message);
    console.log("\n💡 Troubleshooting:");
    console.log("1. Check if MongoDB is running (local) or network access is configured (Atlas)");
    console.log("2. Verify MONGO_URI in backend/.env file");
    console.log("3. Check username/password if using Atlas");
    console.log("4. Ensure IP address is whitelisted in Atlas Network Access");
    process.exit(1);
  }
};

testConnection();

