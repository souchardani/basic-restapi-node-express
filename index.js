import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import itemsRoutes from "./routes/items.js";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors()); 

app.use("/users", usersRoutes)
app.use("/items", itemsRoutes);

app.get("/" , (req, res) => res.send(
    `Hello from Homepage
    routes for react app: /items
    \n`
    )
);

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));