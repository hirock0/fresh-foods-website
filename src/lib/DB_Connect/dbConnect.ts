import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export const DB_Connect = async (): Promise<void> => {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MOGODB_URI! || "", {});
    connection.isConnected =  db.connections[0].readyState;
    console.log("DB connected successfully");
  } catch (error: any) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};
