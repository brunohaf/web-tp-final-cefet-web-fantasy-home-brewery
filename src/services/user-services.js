const { User } = require('../models/sequelize')
const password_service = require('./password-services');
const password_cipher = password_service.cipher('A Subversão da Magia')

const SaveUser = (req, res) => {
    let pass = password_cipher(req.password);
    User.create({
        name: req.name,
        id_user: req.login_email,
        password: pass
    }).then(response => {
        return res.status(200).json("Success!");
    }).catch(error => {
        return res.status(400).send("Saving has failed from the origin:\t" + error.errors[0].origin +
            "\nError Message:\t" + error.errors[0].message)
    });
};

const ValidatePassword = (user, passwordCandidate) => {
    try {
        if (!!user) {
            let pass = password_cipher(passwordCandidate);
            return user.password == pass;
        }
        return false
    } catch (e) {
        return false
    }
}

const UpdateUser = (req, res) => {
    let pass = password_cipher(req.password);
    User.update({
        name: req.name,
        id_user: req.id_user,
        password: pass
    },
        {
            where: { id_user: req.id_user }
        }).then(response => {
            return res.status(200).json("Success!");
        }).catch(error => {
            return res.status(400).send("Update has an error from the origin:\t" + error.errors[0].origin +
                "\nError Message:\t" + error.errors[0].message)
        });;
};

const GetUserById = async (req, res) => {
    await User.findByPk(req).then(User => {
        return res.status(200).json(User.dataValues);
    }).catch(error => {
        return res.status(400).send("Fetching has failed from the origin:\t" + error.errors[0].origin +
            "\nError Message:\t" + error.errors[0].message)
    });
}

const GetAllUsers = async (res) => {
    await User.findAll()
        .then(Users => {
            return res.status(200).json(Users)
        })
        .catch(error => {
            return res.status(400).send("Fetching has failed from the origin:\t" + error.errors[0].origin +
                "\nError Message:\t" + error.errors[0].message)
        });
}

const DeleteUser = async (req, res) => {
    await User.destroy({ where: { id_user: req } }).then(User => {
        return res.status(200).json("Success!");
    }).catch(error => {
        return res.status(400).send("Delete has failed from the origin:\t" + error.errors[0].origin +
            "\nError Message:\t" + error.errors[0].message)
    });
}

const Login = async (req, res) => {
    await User.findByPk(req.login).then(User => {
        let isValidPass = ValidatePassword(User, req.password);
        if (isValidPass) {
            return res.status(200).json("User successfully authenticated!");
        }

        return res.status(401).send("User login or password do not match!")

    }).catch(error => {
        return res.status(400).send("Fetching has failed from the origin:\t" + error.errors[0].origin +
            "\nError Message:\t" + error.errors[0].message)
    });
};

module.exports = {
    SaveUser,
    UpdateUser,
    GetUserById,
    GetAllUsers,
    DeleteUser,
    Login
};