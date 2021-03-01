const AdminAuthModel = require('./admin.model');
const auth = require('../../auth/auth');

exports.params = async (req, res) => {
  next()
}

exports.SignUp = async (req, res) => {
    try {
        const {email, confirm_password, password } = req.body;
        console.log(req.body, 'reqbody')
        const adminAuth = new AdminAuthModel({email, password});
        const result = await adminAuth.save();
        res.json(result);
    } catch(e) {
        console.log(e)
        res.json(e)
    }
}

exports.signIn = async (req,res) => {
    try {
        const { email, password } = req.body;
        const adminAuth = await AdminAuthModel.findOne({email});
        if(!adminAuth)  throw new Error({error: 'user not found'});
        if(!adminAuth.authenticate(password)) {
            return res.json({sucess: false, login: false})
        }
        const token = auth.signToken(adminAuth._id)
        return res.json({sucess: true, user: adminAuth.toJson(), token}) 
    } catch(e) {
        res.json(e.message)  
    }
}

exports.getMe = async (req, res) => {
    return res.json(req.user.toJson())
}
