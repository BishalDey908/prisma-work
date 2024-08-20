import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
import { checkConnection } from './connectDB';
import bookingController from "./controllers/bookingController"
import roomModuleController from "./controllers/roomModuleController"

app.use(express.json());

// Routes

app.use("/booking",bookingController)
app.use("/roomBooking",roomModuleController)

// Start server
checkConnection().then(() => {
    // Start your server after checking the connection
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
