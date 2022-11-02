import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    const pass = req.body.Password;
    const email = req.body.Email;
    try{

        const user = await prisma.Users.findUnique({

            where: {
                Email: email,
                Password: pass,
            },
        });

        res.status(200).send(user);

    }catch (error) {
        res.status(500).json({error: error.message});
    }
  }