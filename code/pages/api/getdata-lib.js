import {query} from "../../lib/db";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const username = req.body.username;
    try{

        const user = await prisma.Users.findUnique({

            where: {
                UserName: username,
            },
        });

        

        return console.log(user);

        // const querySQL = "SELECT * FROM Users WHERE UserName = ?";

        // const valueparams = [username];

        // const data = await query({query: querySQL, values: valueparams});
        // res.status(200).json({ results: data})

    }catch (error) {
        // res.status(500).json({error: error.message});
    }
  }