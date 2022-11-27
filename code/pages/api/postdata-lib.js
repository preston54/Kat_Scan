import prisma from '../../lib/prisma';
import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    try{
        const {body : data} = req;
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const hash = await bcrypt.hash(data.Password, saltRounds)
        const newnewuser = await excuteQuery({
            query: 'INSERT INTO users (FirstName, LastName, Password, Email, UserName) VALUES(?, ?, ?, ?, ?)',
            values: [data.FirstName, data.LastName, hash, data.Email, data.Username],
        });
        // const newUser = await prisma.Users.create({data});
        console.log(newnewuser);
        res.status(200).json(newnewuser);
        
    }catch (error) {
        res.status(500).json({error: error.message});
    }
  }