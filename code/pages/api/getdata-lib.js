import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    
    try{

        const user = await prisma.Users.findMany();
        res.status(200).json(user);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }