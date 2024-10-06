const userModel = require('../Models/UserModel');

const register = async (req, res) => {
    try {
        // get info from client
        const { username, password, email } = req.body;
        // create data to database
        await userModel.create({
            username: username,
            password: password,
            email: email,
            role: 'regular'
        })
        return res.status(200).send('register user');
    } catch (error) {
        console.log('error: ', error);
    }
}

module.exports = {
    register: register
}