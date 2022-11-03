import express from 'express'
import pool from '../db.js'


const router = express.Router()


router.post('/todo',async(req,res)=>{
    const {description} = req.body

    try {
        const queryPsql = await pool.query("INSERT INTO todolist (description) VALUES($1) RETURNING *",[description])
        res.json(queryPsql.rows)
    }
    catch(err){
        console.log(err)
    }


})

export default router

