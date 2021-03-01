const jwt = require('jsonwebtoken');

exports.decodeToken = (req, res, next) => {
    console.log(req.headers)
    const {authorization} = req.headers;
    if(!authorization) return res.status(401).send('Pass Bearer Token');
    const result = verifyToken(authorization.replace('Bearer', '').trim());
    req._id = result._id;
    next()
}

verifyToken = (token) => {
    const result = jwt.verify(token, 'indra')
    console.log(result)
    return result;
}

exports.signToken = (id) => {
    return jwt.sign({_id: id}, 'indra', {expiresIn: '7d'})
}

const adminAuthModel = require('../admin-panel/auth/admin.model');

exports.verifyAdminUser = async (req, res, next) => {
    try {
        const user = await adminAuthModel.findOne({_id: req._id});
        req.user = user;
        next()
    } catch(e) {

    }
}