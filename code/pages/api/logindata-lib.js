import prisma from '../../lib/prisma';
import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    const pass = req.body.Password;
    const email = req.body.Email; 
    try{

        const {body : data} = req;
        const selectuser = await excuteQuery({
            query: 'SELECT * FROM Users WHERE Email = ? AND Password = ?',
            values: [data.Email, data.Password],
        });
        // const user = await prisma.Users.findFirstOrThrow({
        //     where:{
        //         AND:[
        //             {Email: email},
        //             {Password: pass},
        //         ],
        //     },
        // })
        console.log(selectuser)
        res.status(200).json(selectuser);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }