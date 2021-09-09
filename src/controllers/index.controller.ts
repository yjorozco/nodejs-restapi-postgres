import {Request, Response} from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res:Response): Promise<Response> =>{
    try{
        const  response:QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server Error');
    }
}

export const getUserById = async (req:Request, res:Response) : Promise<Response> =>{
    const id = parseInt(req.params.id);
    console.log(id);
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.status(200).json(response.rows);
}
export const createUser = async (req:Request, res:Response) : Promise<Response> =>{
    const { name, email } = await req.body;
   try{
    const response: QueryResult = await pool.query('INSERT INTO users(name,email) VALUES ($1,$2)',[name, email]);
    return res.status(200).json({ message: 'User created Successfully', body:{ user: {name, email } }});
   }catch(e){
    console.log(e);
    return res.status(500).json('Internal Server Error')
   }
}

export const updateUser = async (req:Request, res:Response) : Promise<Response> =>{

    try{

        const id =  parseInt(req.params.id);
        const { name, email } = await req.body;
        const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name,email,id]) 
        return res.status(200).json({ message: 'User updated Successfully', body:{ user: { id, name, email } }});
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal Server Error')
    }

}

export const deleteUser = async (req:Request, res:Response) : Promise<Response> =>{

    const id = parseInt(req.params.id);
    console.log(id);
    const response: QueryResult = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    return res.status(200).json('User ${id} deleted Successfully');

}
 