import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roomModuleController = async (req: Request, res: Response): Promise<void> => {
   const{Room_Name,
    Room_Code, 
    Capacity,
    Gender,
    Status}=req.body

   try{
       // Find the user by username
       const saveRoomModule = await prisma.room_module.create({
           data: {
            Room_Name,
            Room_Code, 
            Capacity,
            Gender,
            Status
            },
       })
       res.status(200).json({"msg":"data stored successful","data":saveRoomModule})
   }catch(err){
    res.status(400).json({"msg":"data stored successful","err":err})
   }
    finally {
    await prisma.$disconnect();
  }
};

export default roomModuleController;
