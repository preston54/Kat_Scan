import prisma from '../../lib/prisma';
import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    try{
        const {body : data} = req;
        console.log(data.UserName.uname)
        const sqlstate = "INSERT INTO " + data.UserName + " (courses) VALUES('" + data.TableName +"')";  
        const newnewuser = await excuteQuery({
            query: sqlstate,
            values: [],
        });
        console.log(newnewuser);
        res.status(200).json(newnewuser);
        
    }catch (error) {
        res.status(500).json({error: error.message});
    }
  }