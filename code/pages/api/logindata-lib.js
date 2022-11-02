import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    const pass = req.body.Password;
    const email = req.body.Email; 
    try{

        const user = await prisma.Users.findFirstOrThrow({
            where:{
                AND:[
                    {Email: email},
                    {Password: pass},
                ],
            },
        })
        console.log(user)
        res.status(200).json(user);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }