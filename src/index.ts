import { Request, Response } from "express";
import app from "./app";
import pool from "./config/db.config";


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
   console.log(`server is running on http://localhost:${port}`) 
})

app.get('/users', async (req: Request, res: Response) => {
   try {
     const result = await pool.query('SELECT * FROM users');
     res.json(result.rows);
   } catch (err) {
     console.error(err);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });
 
//  const port = process.env.PORT || 3000;
//  app.listen(port, () => {
//    console.log(`Server running on port ${port}`);
//  });