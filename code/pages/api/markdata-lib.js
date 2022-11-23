import { Table } from 'jspdf-autotable';
import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {


    try{
        const {body : data} = req;
        const table = await excuteQuery({
            query: 'SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N?',
            values: [data.tableName],
        });
        const alterdata = data.date;
            // let exists = false
            // for(let i = 0; i < table.length; i++){

            //     if(alterdata == table[i].COLUMN_NAME){
            //         exists = true;
            //     }
            // }

        let sqlinsert = "INSERT INTO " + data.tableName + " (students)  VALUES('" + data.email + "')"

        let sqlupdate = "UPDATE " + data.tableName + " set `" + data.date + "` = `" + data.email + "' where `students` = '" + data.email +"'";

        const updateCol = await excuteQuery({
            query: sqlupdate,
            values: [],
        });
        console.log(updateCol)
        if(updateCol.changedRows == 0){
            executeQuery({
                query: sqlinsert,
                values: [],
            })
            const update = excuteQuery({
                query: sqlupdate,
                values: [],
            })
        }

        console.log(update)

        if(exists){
            //update column with student email
            const updateCol = await excuteQuery({
                query: sqlinsert,
                values: [data.tableName, data.date, data.email],
            });
            console.log(updateCol)
            console.log("here")
        }
        else{
            //create column and update with student email 
            let sqlquery = "ALTER TABLE `" + data.tableName + "` ADD COLUMN `" + data.date + "` VARCHAR(255)"
            const createCol = await excuteQuery({
                query: sqlquery,
                values: [],
            });
            const updateCol = await excuteQuery({
                query: sqlinsert,
                values: [data.tableName, data.date, data.email],
            });
            console.log(createCol)
            console.log("here2")
        }
    

        // console.log(exists);
        // const newnewuser = await excuteQuery({
        //     query: 'INSERT INTO Users (FirstName, LastName, Password, Email, UserName) VALUES(?, ?, ?, ?, ?)',
        //     values: [data.FirstName, data.LastName, data.Password, data.Email, data.UserName],
        // });
        // console.log(table);
        res.status(200).json(table);
        
    }catch (error) {
        console.log(error)
        res.status(500).json({error: error.message});
    }
  }