import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    try{
        const {body : data} = req;
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const hash = await bcrypt.hash(data.Password, saltRounds)
        const newuser = await excuteQuery({
            query: 'INSERT INTO users (FirstName, LastName, Password, Email, UserName) VALUES(?, ?, ?, ?, ?)',
            values: [data.FirstName, data.LastName, hash, data.Email, data.Username],
        });
        console.log(newuser);
        if(newuser.error){
            res.status(500).json(newuser)
        }
        else{
            res.status(200).json(newuser);
        }

    }catch (error) {
        res.status(500).json({error: error.message});
    }
  }