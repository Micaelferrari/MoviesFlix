import express, { Request, Response } from "express"
import "dotenv/config"; 



const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("hello, word");
})
app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}/`);
});