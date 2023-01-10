import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    try{
         
        const {body : data} = req;
        const sqlstate = "SELECT * FROM " + data.Table + " WHERE courses = '" + data.Course + "'";
        const selectuser = await excuteQuery({
            query: sqlstate,
            values: [],
        });
        console.log(selectuser)
        res.status(200).json(selectuser);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }