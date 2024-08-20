import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const bookingControllers = async (req: Request, res: Response): Promise<void> => {
   const{name,email,gender,flight_name}=req.body

   try{
       // Find the user by username
       const saveBookingInfo = await prisma.booking.create({
           data: {
               
               Name: name,
               Email_Address: email,
               Gender: gender,
               Select_Flight: flight_name
             },
       })
       res.status(200).json({"msg":"data stored successful","data":saveBookingInfo})
   }catch(err){
    res.status(400).json({"msg":"data stored successful","err":err})
   }
    finally {
    await prisma.$disconnect();
  }
};

export default bookingControllers;
