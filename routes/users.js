import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24
    }, 
]

//todas las rutas de aqui empiezan con /users
router.get("/", (req, res) => {
    res.send(users);
})

router.post("/", (req,res) => {
    
})

export default router;