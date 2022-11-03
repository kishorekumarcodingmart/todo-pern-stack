import express from "express";
import pool from '../db.js';

const router = express.Router()


router.delete('/todo/:id',async(req,res)=>{
    try {
        const {id} = req.params
        const queryPsql = await pool.query("DELETE FROM todolist WHERE todo_id = ($1)",[id])
        res.json("Deleted Succesfully")
    } catch (error) {
        console.log(error)
    }
})


export default router