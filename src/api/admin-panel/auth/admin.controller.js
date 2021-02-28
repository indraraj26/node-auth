const AdminAuthModel = require('./admin.model');

exports.SignUp = async (req, res) => {
    try {
        const {email, confirm_password, password } = req.body;
        console.log(req.body, 'reqbody')
        const adminAuth = new AdminAuthModel({email, password});
        const result = await adminAuth.save();
        res.json(result);
    } catch(e) {
        res.json(e)
    }
}

exports.signIn = async (req,res) => {
    try {
        const {email, password } = req.body;
        const adminAuth = await AdminAuthModel.findOne({email}).lean().exec();
        console.log(adminAuth, 'admin find')
        if(!adminAuth)  throw new Error({error: 'user not found'});
        if(adminAuth.password == password) {
            return res.json({sucess: true, login: true})
        }
        return res.json({sucess: false, login: false})
    } catch(e) {
        res.json(e.message) 
    }
}