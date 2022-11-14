import prisma from '../../lib/prisma';
import excuteQuery from '../../lib/mysql';
import { execOnce } from 'next/dist/shared/lib/utils';

export default async function handler(req, res) {
    
    try{

        const user = await excuteQuery({
            query: 'SELECT * FROM users',
            values: [],
        });
        // const user = await prisma.Users.findMany();
        res.status(200).json(user);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }