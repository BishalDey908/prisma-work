import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkConnection() {
  try {
    // Test the connection by querying the database
    await prisma.$connect();
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Failed to connect to the database", error);
  } finally {
    await prisma.$disconnect();
  }
}