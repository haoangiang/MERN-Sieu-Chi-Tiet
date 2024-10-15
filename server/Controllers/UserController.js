const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');

const getListUser = async (req, res) => {
    // 1. Get token from Client
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];

    try {
        // 2. Verify Token
        const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
        if (decodeJwt) {
            const users = await userModel.find();
            res.status(200).send(users);
        }
    } catch (error) {
        // Gửi mã lỗi Client để Client biết Refresh Token
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).send('Token Expired');
        }
    }
}

const userDetail = (req, res) => {
    res.send('detail users');
}

module.exports = {
    getListUser: getListUser,
    userDetail: userDetail
}