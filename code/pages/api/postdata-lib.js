import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    try{
        const {body : data} = req;
        const newUser = await prisma.Users.create({data});

        return res.status(200).send(newUser);
        
    }catch (error) {
        console.log(error)
    }
  }