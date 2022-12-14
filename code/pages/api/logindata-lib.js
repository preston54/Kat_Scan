import prisma from '../../lib/prisma';
import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    const pass = req.body.Password;
    const email = req.body.Email; 
    const bcrypt = require('bcrypt');
    try{

        const {body : data} = req;
        const selectuser = await excuteQuery({
            query: 'SELECT * FROM users WHERE Email = ?',
            values: [data.Email],
        });
        if(bcrypt.compare(pass, selectuser.Password)){
            res.status(200).json(selectuser);
        }
        else{
            res.status(500).json(selecteduser);
        }

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }