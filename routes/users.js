import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = []

//todas las rutas de aqui empiezan con /users
router.get("/", (req, res) => {
    res.send(users);
})

router.post("/", (req,res) => {
    const user = req.body;
    const userWithId = {...user, id: uuidv4()};
    users.push(userWithId);
    res.send(`User with the name ${userWithId.firstName} added to the database`)
})

router.get("/:id", (req, res) => {
    const {id} = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
})

router.delete("/:id", (req,res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database`);
})

router.patch("/:id", (req, res) => {
    const {id} = req.params;
    const {firstName, LastName, age} = req.body;
    const user = users.find((user) => user.id === id);
    if(firstName) user.firstName = firstName;
    if(LastName) user.LastName = LastName;
    if(age) user.age = age;

    res.send(`User with the id ${user.id} has been updated!`);
})

export default router;