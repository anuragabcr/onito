import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if(req.method==='POST'){
    await prisma.user.create({
      data: {
        name: req.body.name,
        phone: req.body.phone,
        dob: req.body.dob,
        sex: req.body.sex,
        idType: req.body.idType,
        idNum: req.body.idNum,
        gName: req.body.gName,
        gPhone:req.body.gPhone,
        gEmail: req.body.gEmail,
        address: req.body.address,
        aState: req.body.aState,
        city: req.body.city,
        country: req.body.country,
        pin: req.body.pin,
        occupation: req.body.occupation,
        marital: req.body.marital,
        blood:req.body.blood,
        nationality:req.body.nationality,
        religion:req.body.religion
      }
    })
    
    res.status(200).json({ status: 'Data Saved into Mongodb successfully' })
  }
    else if(req.method==='GET'){
      const users = await prisma.user.findMany()
      res.status(200).json({ users })
    }
}
