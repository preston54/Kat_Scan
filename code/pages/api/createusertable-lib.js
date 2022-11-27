import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    const userName = req.body.Username; 
    let sqlStatement = "CREATE TABLE `" + userName + "`(courses VARCHAR(255))" 
    try{

        const {body : data} = req;
        const createTable = await excuteQuery({
            query: sqlStatement, 
            values: [], 
        });
        console.log(createTable)
        res.status(200).json(createTable);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }