import { PrismaClient } from '@prisma/client'
import {query} from "../../lib/db";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    try{
        const {body : data} = req;
        const newUser = await prisma.Users.create({data});
        return res.status(201).send(newUser);
    }catch (error) {
        // res.status(500).json({error: error.message});
    }
  }