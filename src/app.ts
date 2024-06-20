import express from "express";
import router from "./routes/userRouter";


const app = express();

app.use(express.json());

app.use('/api/user', router )

export default app;