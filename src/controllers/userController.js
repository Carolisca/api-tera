import UserSchema from "../models/userSchema.js";

import bcrypt from "bcrypt";


const getAll = async (req, res) => {
    UserSchema.find(function (err, users) {
        if (err) {
            res.status(500).send({ message: err.message });
        } res.status(200).send(users);
    });
};

const createUser = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashedPassword;


    try {
        const newUser = new UserSchema(req.body);
        console.log("NOVO USUÁRIO CRIADO", newUser);
        const savedUser = await newUser.save(); console.log("USUÁRIO SALVO", savedUser);
        res.status(201).send({
            message: "Usuário cadastrado com sucesso", statusCode: 201,
            data: savedUser,
        });
    }

    catch (error) { console.error(error); }
};
const updateUser = async (req, res) => {
    try {
        const updatedUser = await UserSchema.
            findByIdAndUpdate(
                req.params.id, req.body);
        // enviar a resposta
        res.status(200).send({
            message: "Usuário atualizado com sucesso", statusCode: 200,
            data: updatedUser,
        });
    }
    catch (error) {
        res.status(500).send({
            message: error.message
        });
        console.error(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        await UserSchema.findByIdAndDelete(
            req.params.id); res.status(200).send(
                { message: "Usuário deletado com sucesso", statusCode: 200, }
            );
    }
    catch (error) {
        console.error(error);
    }
};

export default { getAll, createUser, updateUser, deleteUser, };