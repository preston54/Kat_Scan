import excuteQuery from '../../lib/mysql';

export default async function handler(req, res) {
    try{

        const {body : data} = req;
        const selectuser = await excuteQuery({
            query: 'SELECT * FROM ?',
            values: [data.Table],
        });
        console.log(selectuser)
        res.status(200).json(selectuser);

    }catch (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
  }