import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    const userName = req.body.UserName; // am i doing this right?
    let sqlStatement = "CREATE TABLE " + userName + "(courses VARCHAR(255))" 
    // const pass = req.body.Password; //info passed from page  const tableName = concat version of names
    // const email = req.body.Email;  //info passed from page
    try{

        const {body : data} = req;
        const createTable = await excuteQuery({
            query: sqlStatement, //;'CREATE TABLE ? (students VARCHAR(255))', //inside'' is what is sent to mysql: CREATE TABLE ? (students VARCHAR(255))
            values: [], //data.CourseName, .....going to be the concat value for tablename
        });
        console.log(createTable)
        res.status(200).json(createTable);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }