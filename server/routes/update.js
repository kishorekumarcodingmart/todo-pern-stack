import express  from "express";
import pool from '../db.js'


const router = express.Router()


router.put('/todo/:id',async (req,res)=>{
    try {
        const { id } = req.params
        const { description } = req.body
        console.log(id,description)
        const queryPsql = await pool.query("UPDATE todolist SET description = $1 WHERE todo_id = $2",[description,id])
    
        res.json("To Do Was Updated")
    } catch (error) {
        console.log(error)
    }
})


export default router