import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    try{
        const {body : data} = req;
        const newUser = await prisma.users.create({data});

        res.status(200).json(newUser);
        
    }catch (error) {
        res.status(500).json({error: error.message});
    }
  }