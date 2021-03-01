const {model, Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const AdminAuthSchema = new Schema({
    email: {type: String, trim: true,
    unique: true},
    password: {type: String}
}, {
    timestamps: true,
});

AdminAuthSchema.plugin(uniqueValidator)

AdminAuthSchema.pre('save', function(next) {
    if(!this.isModified('password')) return next();
    this.password = this.encryptPassword(this.password);
    next();
})

AdminAuthSchema.methods = {
    authenticate: function(plainTextPwd) {
        return bcrypt.compareSync(plainTextPwd, this.password)
    },
    encryptPassword: function(plainTxtPwd) {
        if(!plainTxtPwd) return ''
        return bcrypt.hashSync(plainTxtPwd, bcrypt.genSaltSync(10));
    },
    toJson: function() {
        const obj = this.toObject();
        delete obj.password;
        return obj;
    }
}

const AdminAuthModel = model('adminAuth', AdminAuthSchema)

module.exports = AdminAuthModel;