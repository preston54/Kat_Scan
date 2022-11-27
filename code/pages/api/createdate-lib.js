import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    try{
        const {body : data} = req;
        const sqlstate = "ALTER TABLE `" + data.course + "` ADD `" + data.date +"` varchar(255)";  
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