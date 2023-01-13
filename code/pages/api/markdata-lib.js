import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {


    try{
        const {body : data} = req;
        let sqlinsert = "INSERT INTO " + data.tableName + " (students)  VALUES('" + data.email + "')"
        console.log(data.email)
        let sqlupdate = "UPDATE " + data.tableName + " set `" + data.date + "` = '" + data.stuname + "' where `students` = '" + data.email + "'";
        const updateCol = await excuteQuery({
            query: sqlupdate,
            values: [],
        });
        console.log(updateCol)
        if(updateCol.changedRows == 0){
            excuteQuery({
                query: sqlinsert,
                values: [],
            })
            const update = excuteQuery({
                query: sqlupdate,
                values: [],
            })
            console.log(update)
        }
        res.status(200).json(updateCol);
        
    }catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }
  }