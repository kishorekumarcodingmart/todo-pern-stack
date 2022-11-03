import express from "express";
import pool from '../db.js'

const router = express.Router()


router.get('/todo', async (req,res)=>{
    try {
        const queryPsql = await pool.query("SELECT * FROM todolist")
        res.json(queryPsql.rows)
    } catch (error) {
        console.log(error)
    }
})

router.get('/todo/:id',async(req,res) =>{
    try {
        const id  = req.params.id
        const queryPsql = await pool.query("SELECT * FROM todolist WHERE todo_id = ($1)",[id])
        res.json(queryPsql.rows)
    }
    catch(error) {
        console.log(error)
    }
})


export default router